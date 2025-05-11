# QCM d'auto-évaluation - Analyse des risques

Ce QCM vous permet de vérifier votre compréhension des notions abordées dans ce module. Répondez aux questions pour évaluer votre progression.

<py-multiple-choice id="qa1">
  <py-title>Un système de paiement en ligne a besoin d'un niveau élevé de :</py-title>
  <py-choice>Disponibilité uniquement</py-choice>
  <py-choice>Intégrité uniquement</py-choice>
  <py-choice>Disponibilité et intégrité uniquement</py-choice>
  <py-choice correct>Disponibilité, intégrité et confidentialité</py-choice>
  <py-feedback>
    Un système de paiement en ligne nécessite :
    - Une **disponibilité** élevée car les transactions doivent pouvoir être effectuées à tout moment
    - Une **intégrité** élevée car les montants des transactions ne doivent pas être altérés
    - Une **confidentialité** élevée car les données bancaires sont des informations sensibles
    
    La preuve est également importante (pour éviter la répudiation des transactions), mais les trois autres critères sont particulièrement critiques pour ce type de système.
  </py-feedback>
</py-multiple-choice>

<py-multiple-choice id="qa2">
  <py-title>Quelle vulnérabilité correspond à la catégorie "Information Disclosure" du modèle STRIDE ?</py-title>
  <py-choice>Un attaquant modifie le prix d'un produit dans la base de données</py-choice>
  <py-choice>Un attaquant se connecte avec les identifiants d'un autre utilisateur</py-choice>
  <py-choice correct>Un attaquant accède à la liste des clients et leurs coordonnées</py-choice>
  <py-choice>Un attaquant rend le site web indisponible par une attaque DDoS</py-choice>
  <py-feedback>
    Dans le modèle STRIDE :
    - La modification des prix correspond à du **Tampering** (altération de données)
    - L'utilisation d'identifiants volés correspond à du **Spoofing** (usurpation d'identité)
    - L'accès non autorisé à des informations correspond à de l'**Information Disclosure** (divulgation d'informations)
    - Rendre un site indisponible correspond à du **Denial of Service** (déni de service)
  </py-feedback>
</py-multiple-choice>

<py-multiple-choice id="qa3">
  <py-title>Parmi ces mesures, laquelle est considérée comme corrective ?</py-title>
  <py-choice>Mise en place d'un pare-feu</py-choice>
  <py-choice>Formation des utilisateurs à la sécurité</py-choice>
  <py-choice correct>Restauration des données à partir d'une sauvegarde</py-choice>
  <py-choice>Journalisation des accès au système</py-choice>
  <py-feedback>
    **Explication :**
    - Un **pare-feu** est une mesure préventive qui bloque les accès non autorisés
    - La **formation des utilisateurs** est une mesure préventive qui réduit les risques d'erreurs humaines
    - La **restauration des données** est une mesure corrective qui permet de revenir à un état fonctionnel après un incident
    - La **journalisation** est une mesure détective qui permet de détecter et analyser les incidents
  </py-feedback>
</py-multiple-choice>

<py-multiple-choice id="qa4">
  <py-title>Quelle méthode serait la plus appropriée pour évaluer les besoins de sécurité d'une application ?</py-title>
  <py-choice>Analyse des logs système</py-choice>
  <py-choice>Test de pénétration</py-choice>
  <py-choice correct>Analyse d'impact et évaluation des risques</py-choice>
  <py-choice>Audit de conformité RGPD</py-choice>
  <py-feedback>
    **Explication :**
    - L'**analyse des logs** permet de détecter des incidents de sécurité mais pas d'évaluer les besoins
    - Le **test de pénétration** permet d'identifier des vulnérabilités techniques mais pas de déterminer les besoins de sécurité
    - L'**analyse d'impact et évaluation des risques** permet d'identifier les actifs à protéger, les menaces potentielles et leurs impacts, ce qui est fondamental pour déterminer les besoins de sécurité
    - L'**audit de conformité RGPD** vérifie le respect de la réglementation sur les données personnelles, mais ne couvre pas tous les aspects de la sécurité
  </py-feedback>
</py-multiple-choice>

<py-multiple-choice id="qa5">
  <py-title>Dans le contexte d'une attaque par injection SQL, quelle mesure préventive est la plus efficace ?</py-title>
  <py-choice>Surveillance des logs de la base de données</py-choice>
  <py-choice correct>Utilisation de requêtes préparées</py-choice>
  <py-choice>Sauvegarde régulière de la base de données</py-choice>
  <py-choice>Limitation du nombre de requêtes par utilisateur</py-choice>
  <py-feedback>
    **Explication :**
    - La **surveillance des logs** est une mesure détective, pas préventive
    - Les **requêtes préparées** séparent le code SQL des données, empêchant les injections SQL à la source
    - La **sauvegarde** est une mesure corrective qui permet de restaurer les données après une attaque
    - La **limitation des requêtes** peut réduire l'impact d'attaques par force brute mais n'empêche pas les injections SQL
  </py-feedback>
</py-multiple-choice>

<py-multiple-choice id="qa6">
  <py-title>Pour un système de vote électronique, quel critère DICP est particulièrement important pour garantir qu'un vote ne peut pas être modifié ?</py-title>
  <py-choice>Disponibilité</py-choice>
  <py-choice correct>Intégrité</py-choice>
  <py-choice>Confidentialité</py-choice>
  <py-choice>Preuve</py-choice>
  <py-feedback>
    Pour un système de vote électronique :
    - L'**intégrité** garantit que les votes ne peuvent pas être modifiés une fois enregistrés
    - La **confidentialité** assure le secret du vote
    - La **disponibilité** permet aux électeurs de voter quand ils le souhaitent
    - La **preuve** permet de vérifier qu'un vote a bien été pris en compte
    
    L'intégrité est particulièrement critique car elle garantit que la volonté des électeurs est respectée.
  </py-feedback>
</py-multiple-choice>

<py-multiple-choice id="qa7">
  <py-title>Quelle affirmation concernant les événements redoutés est correcte ?</py-title>
  <py-choice>Un événement redouté est toujours causé par une attaque externe</py-choice>
  <py-choice correct>Un événement redouté peut avoir plusieurs causes différentes</py-choice>
  <py-choice>Un événement redouté a toujours un impact faible sur l'organisation</py-choice>
  <py-choice>Un événement redouté ne concerne que la confidentialité des données</py-choice>
  <py-feedback>
    **Explication :**
    - Un événement redouté peut être causé par des attaques externes, mais aussi par des erreurs humaines, des pannes matérielles, des catastrophes naturelles, etc.
    - Un même événement redouté (par exemple : "les données client sont divulguées") peut avoir diverses causes (hacking, erreur d'un employé, perte d'un appareil...)
    - L'impact peut être faible, moyen ou élevé selon le contexte
    - Les événements redoutés peuvent concerner tous les critères DICP, pas uniquement la confidentialité
  </py-feedback>
</py-multiple-choice>

<py-multiple-choice id="qa8">
  <py-title>Qu'est-ce qu'une "menace" dans le contexte de l'analyse des risques ?</py-title>
  <py-choice>Une vulnérabilité dans un système informatique</py-choice>
  <py-choice correct>Un événement susceptible d'avoir un impact négatif sur un actif</py-choice>
  <py-choice>Une mesure de protection contre les attaques</py-choice>
  <py-choice>Un indicateur de performance de sécurité</py-choice>
  <py-feedback>
    Dans le contexte de l'analyse des risques :
    - Une **menace** est un événement potentiel qui peut porter atteinte à la sécurité (ex: piratage, incendie)
    - Une **vulnérabilité** est une faiblesse qui peut être exploitée par une menace
    - Une **mesure de protection** (ou contrôle) est mise en place pour réduire les risques
    - Un **risque** est la combinaison d'une menace, d'une vulnérabilité et d'un impact potentiel
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
      result += "<strong>Excellent !</strong> Vous avez une très bonne compréhension des concepts d'analyse des risques.";
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

<div class="dicp-visualization">
  <img src="https://mermaid.ink/img/pako:eNp1kk1PwzAMhv-KlXMp0iY621AHQky7wGkIIYTiNlYWmjRynE2o6n8njdautDCfnMSP4zevs2O1QaTYiGtTk0NXOuN3nqYXd7Nyt7DFGstKOxKUqRZNhRb1TRVYVYEDORjdeBYQr8C65aJ6tLakJw06jU4_kdLgluUGlC5FxzOWZPL2brLO3oUNOoLHUHYFllQzzpJfQQrPvtTuOCeSK1VmXuOSGJ7cObxNyBMd8TzvhPSxFDU4ZMkJ4RQuDYHdUSXr1hJLWHxBeJLJR3EsEq9ZMV6f1jhA_Z_ZOvUcaMxOVzU6FsR3pPvpZJYDV5YiPb9-2PddbZc31C0uXmVFVsw6aDiGDC1RXTnxlM-dUuzjKGVJ7GXTldZhOIplD5y-r4Xp2sY77mOFSpsyigjXCOkw5vIllrMk2pEzG5p2qNhk9i2m-TTP4wP_Oi1hQFB_QOYh9gYr16BVrDdkx7CRplEs_QI1ObaP" alt="Visualisation DICP">
</div>

1. **Analysez toujours les besoins DICP** selon le contexte et les enjeux métier

2. **Catégorisez les menaces** à l'aide de modèles comme STRIDE pour être exhaustif

3. **Mettez en place des mesures de sécurité** préventives, détectives et correctives

4. **Évaluez les risques** en fonction de la probabilité et de l'impact des menaces

5. **Priorisez les actions** en fonction du niveau de risque et des contraintes (coût, temps, ressources)

## Pour aller plus loin

### Méthodologies
- [EBIOS Risk Manager (ANSSI)](https://www.ssi.gouv.fr/entreprise/management-du-risque/la-methode-ebios-risk-manager/)
- [MEHARI (CLUSIF)](https://clusif.fr/publications/mehari-methode-harmonisee-danalyse-des-risques/)
- [ISO 27005](https://www.iso.org/fr/standard/75281.html)
- [NIST SP 800-30](https://csrc.nist.gov/publications/detail/sp/800-30/rev-1/final)

### Outils
- [PILAR (EAR/PILAR)](https://www.pilar-tools.com/en/tools/pilar/)
- [OCTAVE](https://resources.sei.cmu.edu/library/asset-view.cfm?assetid=8419)
- [MONARC (CASES)](https://monarc.lu/)
- [CORAS](https://coras.sourceforge.net/)

### Formations
- [MOOC SecNumacadémie (ANSSI)](https://secnumacademie.gouv.fr/)
- [Certifications ISO 27001](https://www.iso.org/fr/isoiec-27001-information-security.html)
- [Formations CLUSIF](https://clusif.fr/formations/)

### Autres ressources
- [Lignes directrices du Comité européen de la protection des données (CEPD)](https://edpb.europa.eu/edpb_fr)
- [Site de la CNIL](https://www.cnil.fr/)
- [Guide RGPD pour les développeurs](https://www.cnil.fr/fr/guide-rgpd-du-developpeur)