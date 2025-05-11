# Module 2 : RGPD et protection des données personnelles

## Exercice 2.1 : Identification des données à caractère personnel (20 min)

### Rappel théorique
Selon le RGPD, une **donnée à caractère personnel** est toute information se rapportant à une personne physique identifiée ou identifiable. 

Les **données sensibles** forment une catégorie particulière de données personnelles dont le traitement présente des risques importants pour les libertés fondamentales. Il s'agit notamment des données concernant :
- L'origine raciale ou ethnique
- Les opinions politiques
- Les convictions religieuses ou philosophiques
- L'appartenance syndicale
- Les données génétiques ou biométriques
- Les données concernant la santé
- La vie sexuelle ou l'orientation sexuelle

Pour protéger ces données, il est nécessaire d'utiliser des techniques comme le chiffrement (réversible) ou le hachage (irréversible).

### Énoncé

Dans le schéma de base de données suivant, identifiez :
1. Les données à caractère personnel
2. Les données sensibles au sens du RGPD
3. Les données qui devraient être soit chiffrées, soit hachées

```
Utilisateur(id, nom, prenom, email, dateNaissance, numSecu, adresseIP, religion, motDePasse)
Commande(id, dateCommande, montant, idUtilisateur)
Paiement(id, numeroCarte, dateExpiration, cryptogramme, idCommande)
```

??? info "Afficher la correction"
    #### 1. Données à caractère personnel
    - Table Utilisateur : nom, prenom, email, dateNaissance, numSecu, adresseIP, religion
    - Table Paiement : numeroCarte, dateExpiration, cryptogramme

    #### 2. Données sensibles au sens du RGPD
    - Table Utilisateur : religion
    - Table Utilisateur : numSecu (considérée comme sensible car c'est un identifiant unique pouvant révéler des informations sur la santé et l'origine)

    #### 3. Données à chiffrer ou à hacher
    - **À hacher (irréversible)** : 
      - motDePasse (hachage avec sel)

    - **À chiffrer (réversible)** :
      - numSecu
      - numeroCarte
      - dateExpiration
      - cryptogramme
      - religion

## Exercice 2.2 : Mise en conformité RGPD (20 min)

### Rappel théorique
Le RGPD repose sur plusieurs principes fondamentaux :
- **Licéité, loyauté et transparence** : traitement légal, équitable et transparent
- **Limitation des finalités** : collecte pour des finalités déterminées, explicites et légitimes
- **Minimisation des données** : adéquates, pertinentes et limitées à ce qui est nécessaire
- **Exactitude** : exactes et tenues à jour
- **Limitation de conservation** : conservation limitée dans le temps
- **Intégrité et confidentialité** : sécurité appropriée des données
- **Responsabilité** : le responsable de traitement doit démontrer sa conformité

### Énoncé

Pour une application de gestion de rendez-vous médicaux, proposez :
1. Trois mesures techniques pour assurer le respect du principe de minimisation des données
2. Deux mesures pour garantir le droit à l'effacement (droit à l'oubli)
3. Un mécanisme de recueil du consentement conforme au RGPD

??? info "Afficher la correction"
    #### 1. Mesures techniques pour le principe de minimisation des données
    1. **Définition précise des champs nécessaires** : Analyser chaque champ de la base de données et justifier sa nécessité pour la finalité du traitement. Supprimer les champs non essentiels (par exemple, collecter uniquement le numéro de téléphone et non l'adresse complète si seul un contact rapide est nécessaire).

    2. **Pseudonymisation des données** : Remplacer les identifiants directs (nom, prénom) par des identifiants indirects dans les tables de traitement, en conservant la table de correspondance dans un système sécurisé et distinct.

    3. **Mise en place de durées de conservation différenciées** : Définir des durées de conservation distinctes selon le type de données, avec suppression automatique ou anonymisation des données qui ne sont plus nécessaires (par exemple, conserver l'historique médical pendant la durée légale, mais anonymiser les coordonnées après la fin de la relation avec le patient).

    #### 2. Mesures pour garantir le droit à l'effacement
    1. **Interface d'auto-gestion** : Développer une interface permettant aux patients de demander directement la suppression de leurs données via leur espace personnel, avec un processus de validation (par exemple, confirmation par email).

    2. **Procédure technique d'effacement en cascade** : Mettre en place une procédure technique qui, lors de la demande d'effacement, supprime ou anonymise les données dans toutes les tables concernées, y compris les tables de logs et de sauvegarde, tout en respectant les obligations légales de conservation (par exemple, conserver certaines données médicales pendant la durée légale même après demande d'effacement).

    #### 3. Mécanisme de recueil du consentement conforme
    **Formulaire de consentement explicite et granulaire** :
    - Présentation claire des finalités du traitement lors de la création du compte
    - Cases à cocher distinctes et non pré-cochées pour chaque finalité (ex: "J'accepte que mes données soient utilisées pour la gestion de mes rendez-vous", "J'accepte de recevoir des rappels par SMS", etc.)
    - Information claire sur le droit de retirer son consentement à tout moment
    - Conservation d'une preuve horodatée du consentement (date, heure, version des conditions, choix effectués)
    - Processus de renouvellement du consentement en cas de modification des finalités

## Exercice 2.3 : Analyse d'impact relative à la protection des données (AIPD) (20 min)

### Rappel théorique
Une Analyse d'Impact relative à la Protection des Données (AIPD) est obligatoire lorsqu'un traitement est susceptible d'engendrer un risque élevé pour les droits et libertés des personnes concernées. L'article 35 du RGPD précise les cas où une AIPD est nécessaire, notamment :
- Évaluation systématique et approfondie d'aspects personnels, y compris le profilage
- Traitement à grande échelle de données sensibles
- Surveillance systématique à grande échelle d'une zone accessible au public

L'AIPD doit contenir :
- Une description du traitement et de ses finalités
- Une évaluation de la nécessité et de la proportionnalité du traitement
- Une évaluation des risques pour les droits et libertés
- Les mesures prévues pour faire face à ces risques

### Énoncé

Pour un système de vidéosurveillance avec reconnaissance faciale installé dans un lycée :
1. Justifiez pourquoi une AIPD est nécessaire
2. Identifiez trois risques majeurs pour les droits et libertés des personnes concernées
3. Proposez des mesures pour atténuer chacun de ces risques

??? info "Afficher la correction"
    #### 1. Justification de la nécessité d'une AIPD
    Une AIPD est nécessaire pour ce système pour plusieurs raisons :
    - Il s'agit d'une surveillance systématique à grande échelle d'une zone accessible au public (le lycée)
    - Le système utilise la reconnaissance faciale, qui traite des données biométriques considérées comme sensibles par le RGPD
    - Le traitement concerne des personnes vulnérables (mineurs)
    - Le traitement est automatisé et peut conduire à des décisions produisant des effets juridiques (par exemple, identification d'intrusions ou de comportements interdits)

    #### 2. Risques majeurs pour les droits et libertés
    1. **Atteinte à la vie privée et surveillance excessive** : Les élèves et le personnel pourraient se sentir constamment surveillés, ce qui pourrait affecter leur comportement, leur liberté d'expression et créer un sentiment d'oppression.

    2. **Discrimination et biais algorithmiques** : Les systèmes de reconnaissance faciale peuvent présenter des biais, notamment en fonction de l'origine ethnique ou du genre, pouvant conduire à des identifications erronées et des discriminations.

    3. **Détournement de finalité** : Les données collectées pour la sécurité pourraient être utilisées à d'autres fins non prévues initialement (contrôle des retards, surveillance du comportement des élèves, etc.).

    #### 3. Mesures d'atténuation des risques
    1. **Pour l'atteinte à la vie privée** :
       - Limiter les zones couvertes par la vidéosurveillance (exclure les toilettes, vestiaires, salles de classe)
       - Définir des horaires précis de fonctionnement (uniquement en dehors des heures de cours)
       - Informer clairement tous les usagers (panneaux d'information, règlement intérieur)
       - Mettre en place un comité d'éthique incluant des représentants des élèves et des parents

    2. **Pour les risques de discrimination** :
       - Tester rigoureusement les algorithmes pour détecter et corriger les biais
       - Mettre en place une validation humaine systématique avant toute décision basée sur la reconnaissance faciale
       - Former le personnel à la diversité et aux biais algorithmiques
       - Auditer régulièrement le système pour vérifier l'absence de discrimination

    3. **Pour le détournement de finalité** :
       - Définir strictement les finalités du traitement dans une politique écrite
       - Limiter techniquement les possibilités d'extraction et d'utilisation des données
       - Mettre en place une journalisation des accès au système
       - Prévoir des sanctions en cas d'utilisation non conforme aux finalités déclarées
       - Définir une durée de conservation limitée avec suppression automatique

## Points clés à retenir

<div class="rgpd-visualization">
  <img src="https://mermaid.ink/img/pako:eNptkstqwzAQRX9l0CqFpA_bjYlJoV20q0JpoQu5jMdjW8SWjDSOU9P_XtlJ7TSQnbhzz72akXMUWiOKmJcujQbqoNbKagtaGrB5wQwovQIjbQOWrKw5GKy5hUbJysi04AY-tTKUOkjwNWEeMMUKJ3_hEMsHSLFlFl6tNj6-Ew5u03pCDBWzuLDKRs-BtQFBTcmZ0aBxNNtGDwPZvKTdQEZrlvFX3irhD0pHPwFLe8gMGRK6G4xHwrTpxcZnJz-_uRcnVF4tQrxqHf5NtICFgJd3iI9rXwbCzn6iN8a9Tc0DpOSk3Hp56e_vJVptxWJ51vf9V_8w-HL3jLyGPCrYqK3EqIgVK4iCuqYgvDNVpZMPEciZbU0HEcds9kVMp5M03kef_psBQbdHzoP3DlqZQCVWpUV_hYW2FYn4BVSXxGY" alt="Visualisation RGPD">
</div>

1. **Identifiez clairement les données personnelles** dans vos traitements et distinguez les données sensibles

2. **Appliquez les principes fondamentaux** du RGPD : licéité, loyauté, transparence, minimisation, exactitude, limitation de conservation, intégrité et confidentialité

3. **Documentez la conformité** : registre des traitements, analyses d'impact, procédures internes

4. **Sécurisez les données** par des mesures techniques et organisationnelles appropriées

5. **Respectez les droits des personnes** concernées et facilitez leur exercice

## Pour aller plus loin

- Consultez les lignes directrices du Comité européen de la protection des données (CEPD)
- Suivez les actualités et les décisions de la CNIL
- Formez-vous aux techniques de protection des données dès la conception (privacy by design)