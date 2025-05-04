# QCM de positionnement - Analyse des risques et besoins de sécurité

Ce QCM vous permet d'évaluer vos connaissances avant d'aborder le module. Cochez vos réponses et cliquez sur "Calculer le score" pour voir votre résultat.

<form id="qcmForm">
  <div class="question">
    <p><strong>1. Que signifie l'acronyme DICP en sécurité informatique ?</strong></p>
    <input type="radio" id="q1a" name="q1" value="a">
    <label for="q1a">a) Disponibilité, Intégrité, Confidentialité, Performance</label><br>
    
    <input type="radio" id="q1b" name="q1" value="b">
    <label for="q1b">b) Disponibilité, Intégrité, Confidentialité, Preuve</label><br>
    
    <input type="radio" id="q1c" name="q1" value="c">
    <label for="q1c">c) Données, Information, Connaissance, Protection</label><br>
    
    <input type="radio" id="q1d" name="q1" value="d">
    <label for="q1d">d) Défense, Intégrité, Contrôle, Protection</label>
  </div>

  <div class="question">
    <p><strong>2. Parmi ces éléments, lequel n'est PAS une catégorie du modèle STRIDE ?</strong></p>
    <input type="radio" id="q2a" name="q2" value="a">
    <label for="q2a">a) Spoofing (usurpation d'identité)</label><br>
    
    <input type="radio" id="q2b" name="q2" value="b">
    <label for="q2b">b) Tampering (altération de données)</label><br>
    
    <input type="radio" id="q2c" name="q2" value="c">
    <label for="q2c">c) Tracking (suivi des utilisateurs)</label><br>
    
    <input type="radio" id="q2d" name="q2" value="d">
    <label for="q2d">d) Elevation of privilege (élévation de privilèges)</label>
  </div>

  <!-- Ajoutez d'autres questions de la même manière -->

  <button type="button" onclick="calculateScore()">Calculer le score</button>
</form>

<div id="results" style="display: none;">
  <h2>Résultats</h2>
  <p>Votre score : <span id="score">0</span>/5</p>
  <div id="feedback"></div>
  <div id="corrections" style="display: none;">
    <h3>Réponses correctes :</h3>
    <p>1. b) Disponibilité, Intégrité, Confidentialité, Preuve</p>
    <p>2. c) Tracking (suivi des utilisateurs)</p>
    <!-- Ajoutez les autres réponses correctes -->
  </div>
  <button type="button" onclick="showCorrections()">Voir les réponses correctes</button>
</div>

<script>
function calculateScore() {
  const answers = {
    q1: "b",
    q2: "c",
    q3: "b",
    q4: "b",
    q5: "b"
  };
  
  let score = 0;
  let feedback = "";
  
  // Vérifier chaque réponse
  for (const [question, correctAnswer] of Object.entries(answers)) {
    const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
    
    if (selectedOption) {
      if (selectedOption.value === correctAnswer) {
        score++;
      }
    }
  }
  
  // Afficher le score et le feedback
  document.getElementById("score").textContent = score;
  
  if (score === 5) {
    feedback = "Excellent ! Vous maîtrisez déjà les concepts de base de l'analyse des risques.";
  } else if (score >= 3) {
    feedback = "Bon travail ! Vous avez de bonnes connaissances, mais certains concepts méritent d'être approfondis.";
  } else {
    feedback = "Ce module va vous permettre d'acquérir les bases essentielles de l'analyse des risques.";
  }
  
  document.getElementById("feedback").textContent = feedback;
  document.getElementById("results").style.display = "block";
}

function showCorrections() {
  document.getElementById("corrections").style.display = "block";
}
</script>