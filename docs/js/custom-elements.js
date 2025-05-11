// Définition des composants web personnalisés pour le Module 1

// Classe pour py-multiple-choice
class PyMultipleChoice extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: 'open'});
    }
    
    connectedCallback() {
      // Récupérer les informations
      const title = this.querySelector('py-title')?.textContent || 'Question';
      const choices = Array.from(this.querySelectorAll('py-choice'));
      const feedback = this.querySelector('py-feedback')?.innerHTML || '';
      const id = this.getAttribute('id') || `question-${Math.random().toString(36).substring(2, 9)}`;
      
      // Créer le HTML pour le composant
      const correctIndex = choices.findIndex(choice => choice.hasAttribute('correct'));
      
      let choicesHtml = '';
      choices.forEach((choice, index) => {
        choicesHtml += `
          <div class="choice">
            <input type="radio" name="q-${id}" id="q-${id}-opt${index}" value="${index}">
            <label for="q-${id}-opt${index}">${choice.textContent}</label>
          </div>
        `;
      });
      
      this.shadowRoot.innerHTML = `
        <style>
          .question-container {
            border: 1px solid #e0e0e0;
            border-radius: 4px;
            padding: 16px;
            margin-bottom: 24px;
            background-color: #f8f9fa;
          }
          h3 {
            margin-top: 0;
            color: #333;
          }
          .choices {
            margin-bottom: 16px;
          }
          .choice {
            margin-bottom: 8px;
          }
          .feedback {
            display: none;
            padding: 12px;
            border-radius: 4px;
            margin-top: 16px;
            background-color: #e1f5fe;
          }
          .feedback.show {
            display: block;
          }
          button {
            background-color: #2196f3;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 4px;
            cursor: pointer;
          }
          button:hover {
            background-color: #0d8bf2;
          }
          .correct {
            background-color: #e8f5e9;
            border-left: 4px solid #4caf50;
          }
          .incorrect {
            background-color: #ffebee;
            border-left: 4px solid #f44336;
          }
        </style>
        <div class="question-container">
          <h3>${title}</h3>
          <div class="choices">
            ${choicesHtml}
          </div>
          <button id="check-btn">Vérifier</button>
          <div class="feedback">${feedback}</div>
        </div>
      `;
      
      // Ajouter les gestionnaires d'événements
      this.shadowRoot.getElementById('check-btn').addEventListener('click', () => {
        const selectedOption = this.shadowRoot.querySelector('input[name="q-'+id+'"]:checked');
        if (!selectedOption) return;
        
        const selectedIndex = parseInt(selectedOption.value);
        const isCorrect = selectedIndex === correctIndex;
        
        const choices = this.shadowRoot.querySelectorAll('.choice');
        choices.forEach((choice, index) => {
          if (index === correctIndex) {
            choice.classList.add('correct');
          } else if (index === selectedIndex && !isCorrect) {
            choice.classList.add('incorrect');
          }
        });
        
        const feedback = this.shadowRoot.querySelector('.feedback');
        feedback.classList.add('show');
        
        // Marquer comme répondu
        this.setAttribute('answered', isCorrect ? 'correctly' : 'incorrectly');
        
        // Désactiver les choix après la vérification
        this.shadowRoot.querySelectorAll('input').forEach(input => {
          input.disabled = true;
        });
        
        // Désactiver le bouton après la vérification
        this.shadowRoot.getElementById('check-btn').disabled = true;
      });
    }
  }
  
  // Classe pour py-script
  class PyScript extends HTMLElement {
    constructor() {
      super();
    }
    
    async connectedCallback() {
      try {
        // Attendre que Pyodide soit prêt
        const pyodide = await initPyodide();
        
        // Exécuter le code Python
        const code = this.textContent.trim();
        const result = await pyodide.runPythonAsync(code);
        
        // Si le code contient une référence à matplotlib, chercher la figure générée
        if (code.includes('import matplotlib.pyplot as plt') && code.includes('plt.show()')) {
          // Créer un conteneur pour la figure
          const figureContainer = document.createElement('div');
          figureContainer.className = 'figure-container';
          this.parentNode.insertBefore(figureContainer, this.nextSibling);
          
          // Obtenir la dernière figure de matplotlib et l'afficher
          await pyodide.runPythonAsync(`
            import matplotlib.pyplot as plt
            from js import document
            import io
            import base64
            
            # Sauvegarder la figure dans un buffer mémoire
            buf = io.BytesIO()
            plt.savefig(buf, format='png')
            buf.seek(0)
            
            # Convertir en data URL
            img_str = "data:image/png;base64," + base64.b64encode(buf.read()).decode('utf-8')
            
            # Créer un élément img
            img = document.createElement('img')
            img.src = img_str
            img.style.maxWidth = '100%'
            
            # Ajouter au conteneur
            figures = document.querySelectorAll('.figure-container')
            figures[figures.length - 1].appendChild(img)
          `);
        }
      } catch (error) {
        console.error("Erreur lors de l'exécution du code Python:", error);
        // Afficher l'erreur
        const errorElement = document.createElement('div');
        errorElement.style.color = 'red';
        errorElement.textContent = `Erreur: ${error.message}`;
        this.parentNode.insertBefore(errorElement, this.nextSibling);
      }
    }
  }
  
  // Classe pour py-terminal
  class PyTerminal extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: 'open'});
    }
    
    async connectedCallback() {
      const id = this.getAttribute('id') || `terminal-${Math.random().toString(36).substring(2, 9)}`;
      const code = this.textContent.trim();
      
      this.shadowRoot.innerHTML = `
        <style>
          .terminal {
            background-color: #1e1e1e;
            color: #f0f0f0;
            padding: 12px;
            border-radius: 4px;
            font-family: monospace;
            overflow: auto;
            max-height: 400px;
            margin: 16px 0;
          }
          .terminal-output {
            white-space: pre-wrap;
            word-break: break-word;
          }
        </style>
        <div class="terminal">
          <div class="terminal-output" id="output-${id}">Chargement...</div>
        </div>
      `;
      
      try {
        // Attendre que Pyodide soit prêt
        const pyodide = await initPyodide();
        
        // Rediriger stdout vers notre terminal
        pyodide.setStdout({
          write: (text) => {
            const output = this.shadowRoot.getElementById(`output-${id}`);
            output.innerHTML += text;
          }
        });
        
        // Exécuter le code Python
        const output = this.shadowRoot.getElementById(`output-${id}`);
        output.textContent = '';
        await pyodide.runPythonAsync(code);
      } catch (error) {
        console.error("Erreur lors de l'exécution du terminal Python:", error);
        const output = this.shadowRoot.getElementById(`output-${id}`);
        output.innerHTML += `\n<span style="color: red;">Erreur: ${error.message}</span>`;
      }
    }
  }
  
  // Classe pour py-accordion
  class PyAccordion extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: 'open'});
    }
    
    connectedCallback() {
      // Créer l'élément accordion
      const items = Array.from(this.querySelectorAll('py-accordion-item'));
      
      let itemsHtml = '';
      items.forEach((item, index) => {
        const heading = item.getAttribute('heading') || `Section ${index + 1}`;
        const content = item.innerHTML;
        
        itemsHtml += `
          <div class="accordion-item">
            <div class="accordion-header" id="header-${index}">
              <button class="accordion-button" type="button" aria-expanded="false" aria-controls="content-${index}">
                ${heading}
              </button>
            </div>
            <div class="accordion-content" id="content-${index}" aria-labelledby="header-${index}" hidden>
              <div class="accordion-body">
                ${content}
              </div>
            </div>
          </div>
        `;
      });
      
      this.shadowRoot.innerHTML = `
        <style>
          .accordion {
            border: 1px solid #e0e0e0;
            border-radius: 4px;
            overflow: hidden;
          }
          .accordion-item {
            border-bottom: 1px solid #e0e0e0;
          }
          .accordion-item:last-child {
            border-bottom: none;
          }
          .accordion-header {
            background-color: #f5f5f5;
          }
          .accordion-button {
            width: 100%;
            padding: 12px 16px;
            text-align: left;
            background: none;
            border: none;
            cursor: pointer;
            font-weight: 500;
          }
          .accordion-button:hover {
            background-color: #eeeeee;
          }
          .accordion-content {
            padding: 0;
          }
          .accordion-body {
            padding: 16px;
          }
        </style>
        <div class="accordion">
          ${itemsHtml}
        </div>
      `;
      
      // Ajouter les gestionnaires d'événements
      const buttons = this.shadowRoot.querySelectorAll('.accordion-button');
      buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
          const content = this.shadowRoot.getElementById(`content-${index}`);
          const isHidden = content.hasAttribute('hidden');
          
          if (isHidden) {
            content.removeAttribute('hidden');
            button.setAttribute('aria-expanded', 'true');
          } else {
            content.setAttribute('hidden', '');
            button.setAttribute('aria-expanded', 'false');
          }
        });
      });
    }
  }
  
  // Classe pour py-editor
  class PyEditor extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: 'open'});
    }
    
    connectedCallback() {
      const id = this.getAttribute('id') || `editor-${Math.random().toString(36).substring(2, 9)}`;
      const autoRun = this.hasAttribute('auto-run');
      const initialCode = this.textContent.trim();
      
      this.shadowRoot.innerHTML = `
        <style>
          .editor-container {
            border: 1px solid #e0e0e0;
            border-radius: 4px;
            overflow: hidden;
            margin: 16px 0;
          }
          .editor {
            width: 100%;
            height: 200px;
            font-family: monospace;
            padding: 8px;
            border: none;
            resize: vertical;
          }
          .controls {
            padding: 8px;
            background-color: #f5f5f5;
            border-top: 1px solid #e0e0e0;
          }
          .run-button {
            background-color: #4caf50;
            color: white;
            border: none;
            padding: 6px 12px;
            border-radius: 4px;
            cursor: pointer;
          }
          .output {
            padding: 12px;
            background-color: #f8f9fa;
            border-top: 1px solid #e0e0e0;
            white-space: pre-wrap;
            font-family: monospace;
            max-height: 200px;
            overflow: auto;
          }
        </style>
        <div class="editor-container">
          <textarea class="editor" id="editor-${id}">${initialCode}</textarea>
          <div class="controls">
            <button class="run-button" id="run-${id}">Exécuter</button>
          </div>
          <div class="output" id="output-${id}"></div>
        </div>
      `;
      
      // Récupérer les éléments
      const editor = this.shadowRoot.getElementById(`editor-${id}`);
      const runButton = this.shadowRoot.getElementById(`run-${id}`);
      const output = this.shadowRoot.getElementById(`output-${id}`);
      
      // Fonction pour exécuter le code
      const runCode = async () => {
        try {
          output.textContent = 'Exécution en cours...';
          
          // Attendre que Pyodide soit prêt
          const pyodide = await initPyodide();
          
          // Rediriger stdout
          pyodide.setStdout({
            write: (text) => {
              output.textContent += text;
            }
          });
          
          // Exécuter le code Python
          output.textContent = '';
          const result = await pyodide.runPythonAsync(editor.value);
          
          // Afficher le résultat si ce n'est pas undefined
          if (result !== undefined) {
            output.textContent += `\nRésultat: ${result}`;
          }
        } catch (error) {
          console.error("Erreur lors de l'exécution du code Python:", error);
          output.textContent += `\nErreur: ${error.message}`;
        }
      };
      
      // Ajouter les gestionnaires d'événements
      runButton.addEventListener('click', runCode);
      
      // Exécuter automatiquement si requis
      if (autoRun) {
        setTimeout(runCode, 1000);
      }
    }
  }
  
  // Support pour quizdown
  function setupQuizdown() {
    // Rechercher tous les éléments quizdown
    document.querySelectorAll('.quizdown').forEach(quizElement => {
      const title = quizElement.querySelector('h3')?.textContent || 'Question';
      const choices = Array.from(quizElement.querySelectorAll('li'));
      const feedback = quizElement.querySelector('blockquote')?.innerHTML || '';
      const id = quizElement.id || `quizdown-${Math.random().toString(36).substring(2, 9)}`;
      
      // Créer un élément PyMultipleChoice équivalent
      const pyMultipleChoice = document.createElement('py-multiple-choice');
      pyMultipleChoice.id = id;
      
      // Ajouter le titre
      const pyTitle = document.createElement('py-title');
      pyTitle.textContent = title;
      pyMultipleChoice.appendChild(pyTitle);
      
      // Ajouter les choix
      choices.forEach(choice => {
        const pyChoice = document.createElement('py-choice');
        if (choice.textContent.trim().startsWith('[x]')) {
          pyChoice.setAttribute('correct', '');
          pyChoice.textContent = choice.textContent.replace('[x]', '').trim();
        } else {
          pyChoice.textContent = choice.textContent.replace('[ ]', '').trim();
        }
        pyMultipleChoice.appendChild(pyChoice);
      });
      
      // Ajouter le feedback
      const pyFeedback = document.createElement('py-feedback');
      pyFeedback.innerHTML = feedback;
      pyMultipleChoice.appendChild(pyFeedback);
      
      // Remplacer l'élément quizdown par PyMultipleChoice
      quizElement.parentNode.replaceChild(pyMultipleChoice, quizElement);
    });
  }
  
  // Support pour le calcul des scores
  window.checkScore = function() {
    // Récupérer tous les éléments py-multiple-choice
    const questions = document.querySelectorAll('py-multiple-choice');
    let score = 0;
    let total = questions.length;
    
    // Calculer le score
    questions.forEach(question => {
      if (question.getAttribute('answered') === 'correctly') {
        score++;
      }
    });
    
    // Afficher le résultat
    const scoreElement = document.getElementById('score-display');
    if (scoreElement) {
      let result = `Votre score : ${score}/${total}<br><br>`;
      
      if (score >= Math.ceil(total * 0.8)) {
        result += "**Excellent !** Vous avez une très bonne compréhension des concepts.";
      } else if (score >= Math.ceil(total * 0.6)) {
        result += "**Bon travail !** Vous maîtrisez les concepts essentiels mais quelques points méritent d'être revus.";
      } else if (score >= Math.ceil(total * 0.4)) {
        result += "**Des bases solides**, mais plusieurs notions importantes nécessitent une révision.";
      } else {
        result += "**Il est recommandé de revoir l'ensemble du module** pour consolider vos connaissances.";
      }
      
      scoreElement.innerHTML = result;
    }
  };
  
  // Initialisation lors du chargement de la page
  document.addEventListener('DOMContentLoaded', () => {
    // Enregistrer les composants personnalisés
    customElements.define('py-multiple-choice', PyMultipleChoice);
    customElements.define('py-script', PyScript);
    customElements.define('py-terminal', PyTerminal);
    customElements.define('py-accordion', PyAccordion);
    customElements.define('py-editor', PyEditor);
    
    // Configurer quizdown
    setupQuizdown();
    
    // Ajouter un bouton pour vérifier le score si nécessaire
    const scoreButtonContainer = document.getElementById('score-button-container');
    if (scoreButtonContainer && !scoreButtonContainer.querySelector('button')) {
      const button = document.createElement('button');
      button.textContent = 'Vérifier mon score';
      button.className = 'md-button';
      button.addEventListener('click', window.checkScore);
      scoreButtonContainer.appendChild(button);
    }
  });