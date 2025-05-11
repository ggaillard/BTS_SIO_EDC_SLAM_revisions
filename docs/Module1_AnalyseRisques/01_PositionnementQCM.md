# QCM de positionnement - Analyse des risques

Ce QCM vous permet d'évaluer vos connaissances avant d'aborder le module. Répondez aux questions puis vérifiez vos réponses pour savoir quels points nécessitent votre attention.

<py-multiple-choice id="q1">
  <py-title>Que signifie l'acronyme DICP en sécurité informatique ?</py-title>
  <py-choice>Disponibilité, Intégrité, Confidentialité, Performance</py-choice>
  <py-choice correct>Disponibilité, Intégrité, Confidentialité, Preuve</py-choice>
  <py-choice>Données, Information, Connaissance, Protection</py-choice>
  <py-choice>Défense, Intégrité, Contrôle, Protection</py-choice>
  <py-feedback>
    La réponse correcte est "Disponibilité, Intégrité, Confidentialité, Preuve". Ces quatre critères sont fondamentaux en sécurité informatique :

        - **Disponibilité** : Les données et services doivent être accessibles quand nécessaire
        - **Intégrité** : Les données ne doivent pas être altérées
        - **Confidentialité** : Les données ne doivent être accessibles qu'aux personnes autorisées
        - **Preuve** (ou traçabilité) : Les actions doivent pouvoir être attribuées à leur auteur
  </py-feedback>
</py-multiple-choice>

<py-multiple-choice id="q2">
  <py-title>Parmi ces éléments, lequel n'est PAS une catégorie du modèle STRIDE ?</py-title>
  <py-choice>Spoofing (usurpation d'identité)</py-choice>
  <py-choice>Tampering (altération de données)</py-choice>
  <py-choice correct>Tracking (suivi des utilisateurs)</py-choice>
  <py-choice>Elevation of privilege (élévation de privilèges)</py-choice>
  <py-feedback>
    Le modèle STRIDE est un modèle de classification des menaces développé par Microsoft qui comprend :

        - **S**poofing (usurpation d'identité)
        - **T**ampering (altération de données)
        - **R**epudiation (rejet d'une action effectuée)
        - **I**nformation disclosure (divulgation d'informations)
        - **D**enial of service (déni de service)
        - **E**levation of privilege (élévation de privilèges)
    
    "Tracking" n'en fait pas partie - c'est un distracteur.
  </py-feedback>
</py-multiple-choice>

<py-multiple-choice id="q3">
  <py-title>Qu'est-ce qu'une mesure préventive en sécurité ?</py-title>
  <py-choice>Une mesure qui détecte qu'une attaque a eu lieu</py-choice>
  <py-choice correct>Une mesure qui empêche une attaque de réussir</py-choice>
  <py-choice>Une mesure qui restaure le système après une attaque</py-choice>
  <py-choice>Une mesure qui analyse l'impact d'une attaque</py-choice>
  <py-feedback>
    Les mesures de sécurité peuvent être classées en trois catégories :
        
        - **Préventives** : empêchent une attaque de réussir (ex: pare-feu, chiffrement)
        - **Détectives** : détectent qu'une attaque a eu lieu (ex: IDS, journalisation)
        - **Correctives** : restaurent le système après une attaque (ex: sauvegarde, plan de reprise)
    
    L'analyse d'impact est généralement réalisée avant la mise en place des mesures, lors de l'évaluation des risques.
  </py-feedback>
</py-multiple-choice>

<py-multiple-choice id="q4">
  <py-title>Pour un dossier médical électronique, quel critère DICP est généralement considéré comme le plus important ?</py-title>
  <py-choice>Disponibilité</py-choice>
  <py-choice correct>Intégrité</py-choice>
  <py-choice>Confidentialité</py-choice>
  <py-choice>Preuve</py-choice>
  <py-feedback>
    Bien que tous les critères soient importants pour un dossier médical :

        - L'**intégrité** est cruciale car des données médicales erronées peuvent avoir des conséquences fatales (mauvais diagnostic, traitement inapproprié)
        - La **confidentialité** est aussi très importante en raison du caractère sensible des données médicales
        - La **disponibilité** est nécessaire pour les soins d'urgence
        - La **preuve** permet de savoir qui a accédé au dossier
    
    Mais l'intégrité est généralement considérée comme prioritaire car des données erronées peuvent directement mettre en danger la vie du patient.
  </py-feedback>
</py-multiple-choice>

<py-multiple-choice id="q5">
  <py-title>Qu'est-ce qu'une analyse de risques ?</py-title>
  <py-choice>L'identification des vulnérabilités d'un système</py-choice>
  <py-choice correct>L'évaluation des menaces potentielles et de leurs impacts</py-choice>
  <py-choice>La mise en place de contrôles de sécurité</py-choice>
  <py-choice>La détection d'intrusions dans un réseau</py-choice>
  <py-feedback>
    Une analyse de risques est un processus méthodique qui consiste à :
    1. Identifier les actifs informationnels
    2. Identifier les menaces potentielles
    3. Évaluer la probabilité de réalisation des menaces
    4. Évaluer l'impact potentiel
    5. Déterminer le niveau de risque (généralement probabilité × impact)
    
    L'identification des vulnérabilités fait partie de ce processus, mais ne représente pas l'ensemble de l'analyse. La mise en place de contrôles et la détection d'intrusions sont des actions qui suivent l'analyse de risques.
  </py-feedback>
</py-multiple-choice>

---
## Interprétation de votre score

<py-script>
def check_score():
    score = 0
    score_element = document.getElementById("score-display")
    
    # Vérifier l'état des questions (le sélecteur exact dépend de l'implémentation de Pyodide)
    questions = document.querySelectorAll("py-multiple-choice")
    total = questions.length
    
    for q in questions:
        if q.getAttribute("answered") == "correctly":
            score += 1
    
    # Afficher le résultat
    result = f"Votre score : {score}/{total}<br><br>"
    
    if score == total:
        result += "**Excellent !** Vous maîtrisez déjà les concepts de base de l'analyse des risques. Ce module vous permettra d'approfondir vos connaissances."
    elif score >= 3:
        result += "**Bon travail !** Vous avez de bonnes connaissances de base, mais certains concepts méritent d'être approfondis. Ce module vous aidera à consolider votre compréhension."
    else:
        result += "**Ce module sera particulièrement bénéfique pour vous**, car il vous permettra d'acquérir les bases essentielles de l'analyse des risques, un domaine fondamental en cybersécurité."
    
    score_element.innerHTML = result

# Ajouter un bouton pour vérifier le score

from js import document
button = document.createElement("button")
button.innerHTML = "Vérifier mon score"
button.classList.add("md-button")
button.onclick = check_score
document.getElementById("score-button-container").appendChild(button)
</py-script>

<div id="score-button-container"></div>
<div id="score-display"></div>

---

## Points clés à retenir avant de commencer

- L'analyse des risques est un processus méthodique et structuré
- Les critères DICP permettent d'évaluer les besoins de sécurité
- Les mesures de sécurité peuvent être préventives, détectives ou correctives
- Le modèle STRIDE permet de classifier les menaces par catégories
- Le niveau de risque dépend généralement de la probabilité et de l'impact d'une menace