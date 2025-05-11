# QCM d'auto-évaluation - RGPD et protection des données personnelles

Ce QCM vous permet de vérifier votre compréhension des notions abordées dans ce module. Répondez aux questions pour évaluer votre progression.

<py-multiple-choice id="qa1">
  <py-title>Qui est le "responsable de traitement" au sens du RGPD ?</py-title>
  <py-choice>Le délégué à la protection des données (DPO)</py-choice>
  <py-choice correct>La personne physique ou morale qui détermine les finalités et les moyens du traitement</py-choice>
  <py-choice>L'administrateur système qui gère la base de données</py-choice>
  <py-choice>L'autorité de contrôle (CNIL en France)</py-choice>
  <py-feedback>
    Le responsable de traitement est la personne physique ou morale, l'autorité publique, le service ou un autre organisme qui, seul ou conjointement avec d'autres, détermine les finalités et les moyens du traitement. C'est généralement l'entreprise ou l'organisme qui collecte les données. Le DPO conseille le responsable de traitement, l'administrateur système exécute techniquement, et la CNIL contrôle le respect du RGPD.
  </py-feedback>
</py-multiple-choice>

<py-multiple-choice id="qa2">
  <py-title>Quelle mesure n'est PAS conforme au principe de minimisation des données ?</py-title>
  <py-choice>Limiter la collecte aux données strictement nécessaires à la finalité du traitement</py-choice>
  <py-choice>Anonymiser les données dès que possible</py-choice>
  <py-choice correct>Collecter le maximum de données possibles "au cas où" elles seraient utiles plus tard</py-choice>
  <py-choice>Mettre en place des durées de conservation différenciées selon le type de données</py-choice>
  <py-feedback>
    Le principe de minimisation des données exige que les données à caractère personnel soient adéquates, pertinentes et limitées à ce qui est nécessaire au regard des finalités pour lesquelles elles sont traitées. Collecter des données "au cas où" elles seraient utiles plus tard contrevient directement à ce principe, car les données doivent être collectées pour des finalités déterminées et explicites.
  </py-feedback>
</py-multiple-choice>

<py-multiple-choice id="qa3">
  <py-title>Pour qu'un consentement soit valide selon le RGPD, il doit être :</py-title>
  <py-choice>Implicite et présumé sauf objection</py-choice>
  <py-choice>Donné une fois pour toutes les finalités de traitement</py-choice>
  <py-choice correct>Libre, spécifique, éclairé et univoque</py-choice>
  <py-choice>Obligatoirement écrit et signé</py-choice>
  <py-feedback>
    Selon le RGPD, pour être valable, le consentement doit être :
    - **Libre** : donné sans pression ni préjudice en cas de refus
    - **Spécifique** : pour chaque finalité distincte
    - **Éclairé** : après avoir reçu une information claire et complète
    - **Univoque** : manifesté par un acte positif clair (pas de cases pré-cochées)
    
    Il n'a pas besoin d'être écrit, mais le responsable de traitement doit pouvoir prouver qu'il a été obtenu.
  </py-feedback>
</py-multiple-choice>

<py-multiple-choice id="qa4">
  <py-title>Comment doit être gérée une violation de données à caractère personnel selon le RGPD ?</py-title>
  <py-choice>Elle doit être notifiée à la CNIL uniquement si elle concerne plus de 1000 personnes</py-choice>
  <py-choice>Elle doit être notifiée aux personnes concernées mais pas nécessairement à la CNIL</py-choice>
  <py-choice correct>Elle doit être notifiée à la CNIL dans les 72 heures si elle présente un risque pour les droits et libertés des personnes</py-choice>
  <py-choice>Elle doit être résolue en interne sans notification obligatoire</py-choice>
  <py-feedback>
    En cas de violation de données personnelles, le responsable de traitement doit :
    1. La documenter en interne dans tous les cas
    2. La notifier à l'autorité de contrôle (CNIL en France) dans les 72 heures si elle est susceptible d'engendrer un risque pour les droits et libertés des personnes
    3. La communiquer aux personnes concernées si elle est susceptible d'engendrer un risque élevé pour leurs droits et libertés
    
    Le nombre de personnes concernées n'est pas un critère déterminant, mais plutôt le niveau de risque.
  </py-feedback>
</py-multiple-choice>

<py-multiple-choice id="qa5">
  <py-title>Dans quel cas une Analyse d'Impact relative à la Protection des Données (AIPD) est-elle obligatoire ?</py-title>
  <py-choice>Pour tous les traitements de données personnelles sans exception</py-choice>
  <py-choice>Uniquement pour les traitements concernant plus de 1000 personnes</py-choice>
  <py-choice correct>Pour les traitements susceptibles d'engendrer un risque élevé pour les droits et libertés des personnes</py-choice>
  <py-choice>Uniquement en cas de transfert de données hors de l'Union européenne</py-choice>
  <py-feedback>
    Une AIPD est obligatoire lorsqu'un traitement est susceptible d'engendrer un risque élevé pour les droits et libertés des personnes concernées, notamment dans les cas suivants :
    - Évaluation systématique et approfondie d'aspects personnels (profilage)
    - Traitement à grande échelle de données sensibles
    - Surveillance systématique à grande échelle d'une zone accessible au public
    
    La CNIL a également publié une liste de types de traitements nécessitant une AIPD.
  </py-feedback>
</py-multiple-choice>

<py-multiple-choice id="qa6">
  <py-title>Quelle technologie serait la plus appropriée pour protéger des données personnelles stockées dans une base de données ?</py-title>
  <py-choice>Compression des données</py-choice>
  <py-choice correct>Chiffrement des données</py-choice>
  <py-choice>Réplication des données sur plusieurs serveurs</py-choice>
  <py-choice>Conversion des données en format JSON</py-choice>
  <py-feedback>
    Le chiffrement des données est une mesure de sécurité recommandée par le RGPD pour protéger les données personnelles. Il permet de rendre les données illisibles pour toute personne ne possédant pas la clé de déchiffrement, même en cas d'accès non autorisé à la base de données.
    
    La compression réduit la taille des données mais ne les protège pas, la réplication améliore la disponibilité mais pas la confidentialité, et le format JSON est simplement un format de représentation des données.
  </py-feedback>
</py-multiple-choice>

<py-multiple-choice id="qa7">
  <py-title>Qu'est-ce que le droit à la portabilité des données ?</py-title>
  <py-choice>Le droit de transférer physiquement des données d'un pays à un autre</py-choice>
  <py-choice>Le droit d'accéder à ses données depuis n'importe quel appareil</py-choice>
  <py-choice correct>Le droit de récupérer ses données dans un format structuré et de les transmettre à un autre responsable de traitement</py-choice>
  <py-choice>Le droit de demander la suppression de ses données</py-choice>
  <py-feedback>
    Le droit à la portabilité des données permet à une personne de :
    1. Récupérer les données la concernant qu'elle a fournies à un responsable de traitement, dans un format structuré, couramment utilisé et lisible par machine
    2. Transmettre ces données à un autre responsable de traitement sans que le responsable initial y fasse obstacle
    
    Ce droit vise à faciliter le changement de prestataire de service et à réduire l'effet "captif" des plateformes.
  </py-feedback>
</py-multiple-choice>

<py-multiple-choice id="qa8">
  <py-title>Quelles informations doivent obligatoirement figurer dans le registre des activités de traitement ?</py-title>
  <py-choice>Les noms et adresses de toutes les personnes concernées</py-choice>
  <py-choice>Le chiffre d'affaires généré par chaque traitement</py-choice>
  <py-choice correct>Les finalités du traitement et les catégories de données traitées</py-choice>
  <py-choice>Les coordonnées de toutes les autorités de contrôle européennes</py-choice>
  <py-feedback>
    Le registre des activités de traitement doit contenir :
    - Le nom et les coordonnées du responsable de traitement (et du DPO le cas échéant)
    - Les finalités du traitement
    - Les catégories de personnes concernées et de données traitées
    - Les catégories de destinataires
    - Les transferts éventuels vers des pays tiers
    - Les délais prévus pour l'effacement des données
    - Une description générale des mesures de sécurité techniques et organisationnelles
  </py-feedback>
</py-multiple-choice>

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
    
    if (score >= 7) {
      result += "<strong>Excellent !</strong> Vous avez une très bonne compréhension des concepts du RGPD et de la protection des données personnelles.";
    } else if (score >= 5) {
      result += "<strong>Bon travail !</strong> Vous maîtrisez les concepts essentiels mais quelques points méritent d'être revus.";
    } else if (score >= 3) {
      result += "<strong>Des bases solides</strong>, mais plusieurs notions importantes nécessitent une révision.";
    } else {
      result += "<strong>Il est recommandé de revoir l'ensemble du module</strong> pour consolider vos connaissances.";
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

## Points clés à retenir

1. **Identifiez clairement les données personnelles** dans vos traitements et distinguez les données sensibles

2. **Appliquez les principes fondamentaux** du RGPD : licéité, loyauté, transparence, minimisation, exactitude, limitation de conservation, intégrité et confidentialité

3. **Documentez la conformité** : registre des traitements, analyses d'impact, procédures internes

4. **Sécurisez les données** par des mesures techniques et organisationnelles appropriées

5. **Respectez les droits des personnes** concernées et facilitez leur exercice

## Pour aller plus loin

- Consultez les lignes directrices du Comité européen de la protection des données (CEPD)
- Suivez les actualités et les décisions de la CNIL
- Formez-vous aux techniques de protection des données dès la conception (privacy by design)