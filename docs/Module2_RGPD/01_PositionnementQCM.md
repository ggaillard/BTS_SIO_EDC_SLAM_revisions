# QCM de positionnement - RGPD et protection des données personnelles

Ce QCM vous permet d'évaluer vos connaissances avant d'aborder le module. Répondez aux questions puis vérifiez vos réponses pour savoir quels points nécessitent votre attention.

<py-multiple-choice id="q1">
  <py-title>Que signifie l'acronyme RGPD ?</py-title>
  <py-choice>Référentiel Général de Protection des Données</py-choice>
  <py-choice correct>Règlement Général sur la Protection des Données</py-choice>
  <py-choice>Recueil Généralisé des Procédures de Données</py-choice>
  <py-choice>Registre de Gestion de la Protection des Données</py-choice>
  <py-feedback>
    Le RGPD est le Règlement Général sur la Protection des Données. C'est un règlement européen entré en application le 25 mai 2018 qui encadre le traitement des données personnelles sur le territoire de l'Union européenne.
  </py-feedback>
</py-multiple-choice>

<py-multiple-choice id="q2">
  <py-title>Parmi ces données, laquelle n'est PAS considérée comme une donnée à caractère personnel selon le RGPD ?</py-title>
  <py-choice>Adresse IP</py-choice>
  <py-choice>Numéro de téléphone professionnel</py-choice>
  <py-choice correct>Données anonymisées de manière irréversible</py-choice>
  <py-choice>Identifiant de cookie</py-choice>
  <py-feedback>
    Les données anonymisées de manière irréversible ne sont plus considérées comme des données à caractère personnel car elles ne permettent plus d'identifier une personne. En revanche, l'adresse IP, le numéro de téléphone professionnel et l'identifiant de cookie sont considérés comme des données à caractère personnel car ils permettent d'identifier directement ou indirectement une personne.
  </py-feedback>
</py-multiple-choice>

<!-- Autres questions transformées de la même façon -->

---

## Interprétation de votre score

<div id="score-button-container"></div>
<div id="score-display"></div>

<script>
document.addEventListener('DOMContentLoaded', () => {
  function checkScore() {
    const questions = document.querySelectorAll('py-multiple-choice');
    let score = 0;
    const total = questions.length;
    
    questions.forEach(question => {
      if (question.getAttribute('answered') === 'correctly') {
        score++;
      }
    });
    
    let result = `Votre score : ${score}/${total}<br><br>`;
    
    if (score === total) {
      result += "<strong>Excellent !</strong> Vous maîtrisez déjà les concepts de base du RGPD. Ce module vous permettra d'approfondir vos connaissances.";
    } else if (score >= 3) {
      result += "<strong>Bon travail !</strong> Vous avez de bonnes connaissances de base, mais certains concepts méritent d'être approfondis. Ce module vous aidera à consolider votre compréhension.";
    } else {
      result += "<strong>Ce module sera particulièrement bénéfique pour vous</strong>, car il vous permettra d'acquérir les bases essentielles du RGPD, une réglementation fondamentale pour tout professionnel de l'informatique.";
    }
    
    document.getElementById('score-display').innerHTML = result;
  }
  
  const container = document.getElementById('score-button-container');
  if (container && !container.querySelector('button')) {
    const button = document.createElement('button');
    button.textContent = 'Vérifier mon score';
    button.className = 'md-button';
    button.addEventListener('click', checkScore);
    container.appendChild(button);
  }
});
</script>

---

## Points clés à retenir avant de commencer

- Le RGPD concerne toutes les organisations qui traitent des données personnelles de résidents européens
- Une donnée à caractère personnel est toute information se rapportant à une personne identifiée ou identifiable
- Le consentement doit être libre, spécifique, éclairé et univoque
- Les données sensibles bénéficient d'une protection renforcée
- Les personnes concernées disposent de droits (accès, rectification, effacement, etc.)