# Module 6 : Gestion des incidents et conformité orienté SLAM

## Exercice 6.1 : Analyse d'une vulnérabilité de sécurité applicative (20 min)

### Rappel théorique
Dans le développement logiciel, la gestion des vulnérabilités de sécurité suit généralement ces étapes :
1. **Identification** : découverte de la vulnérabilité (tests, signalement, scanners de code)
2. **Évaluation** : qualification de la gravité et des impacts potentiels
3. **Correction** : développement et déploiement d'un correctif
4. **Communication** : information des parties prenantes
5. **Post-mortem** : analyse des causes profondes et amélioration des processus

Le framework CVSS (Common Vulnerability Scoring System) permet d'évaluer la gravité des vulnérabilités sur une échelle de 0 à 10.

### Énoncé

Une vulnérabilité d'injection SQL a été découverte dans l'application de gestion commerciale de votre entreprise. La vulnérabilité permet à un utilisateur authentifié avec des privilèges standards d'exécuter des requêtes SQL arbitraires sur la base de données.

1. Évaluez la gravité de cette vulnérabilité
2. Proposez une méthode de correction immédiate et pérenne
3. Rédigez une procédure d'analyse post-incident pour éviter que ce type de vulnérabilité ne se reproduise

### Correction

1. **Évaluation de la gravité** :
   - **Gravité élevée (CVSS ~8.0)** : La vulnérabilité permet d'exécuter des requêtes SQL arbitraires
   - **Vecteur d'attaque** : Nécessite une authentification (impact limité)
   - **Impacts potentiels** : 
     * Accès non autorisé à des données sensibles
     * Modification ou suppression de données
     * Élévation de privilèges potentielle
     * Non-conformité au RGPD si des données personnelles sont exposées

2. **Méthode de correction** :
   - **Correction immédiate** :
     * Déploiement d'un correctif d'urgence remplaçant les requêtes dynamiques par des requêtes paramétrées
     * Mise en place d'un WAF (Web Application Firewall) pour bloquer les tentatives d'injection
   
   - **Solution pérenne** :
     * Revue complète du code pour identifier d'autres instances similaires
     * Utilisation systématique d'un ORM ou de requêtes préparées
     * Implémentation de validation stricte des entrées utilisateur
     * Principe du moindre privilège pour les connexions à la base de données

3. **Procédure d'analyse post-incident** :
   - **Documentation de l'incident** :
     * Chronologie détaillée
     * Code vulnérable identifié
     * Méthode d'exploitation utilisée
   
   - **Analyse des causes profondes** :
     * Comment la vulnérabilité a-t-elle été introduite ?
     * Pourquoi n'a-t-elle pas été détectée plus tôt ?
     * Quelles pratiques de développement ont contribué au problème ?
   
   - **Améliorations des processus** :
     * Intégration d'outils d'analyse statique dans le pipeline CI/CD
     * Formation des développeurs aux pratiques de codage sécurisé
     * Mise à jour des standards de développement et des revues de code
     * Tests de pénétration réguliers sur l'application

## Exercice 6.2 : Intégration du RGPD dans le développement d'applications (20 min)

### Rappel théorique
Le concept de "Privacy by Design" (protection des données dès la conception) est un principe fondamental du RGPD qui impose :
- L'intégration de la protection des données dès la conception des applications
- La mise en œuvre de mesures techniques et organisationnelles appropriées
- La minimisation des données traitées
- La mise en place de mécanismes permettant aux utilisateurs d'exercer leurs droits

### Énoncé

Vous développez une application web de gestion de réservations d'hôtel qui collecte et traite des données personnelles des clients.

1. Identifiez les exigences du RGPD qui impactent directement le développement
2. Proposez des fonctionnalités techniques pour répondre au droit à l'effacement (droit à l'oubli)
3. Concevez un mécanisme de journalisation des accès aux données personnelles conforme au RGPD

### Correction

1. **Exigences RGPD impactant le développement** :
   - **Minimisation des données** : Ne collecter que les données strictement nécessaires
   - **Limitation de la conservation** : Définir des durées de conservation appropriées
   - **Sécurité** : Chiffrement des données sensibles, protection contre les attaques
   - **Droits des personnes** : Mécanismes permettant l'accès, la rectification, l'effacement, etc.
   - **Consentement** : Recueil explicite et granulaire du consentement
   - **Journalisation** : Traçabilité des accès et modifications de données personnelles

2. **Fonctionnalités pour le droit à l'effacement** :
   - **Interface administrateur** dédiée pour traiter les demandes d'effacement
   - **Processus technique d'anonymisation** plutôt que suppression physique pour préserver l'intégrité référentielle
   - **Cascade d'effacement** dans toutes les tables liées (réservations, préférences, commentaires)
   - **Mécanisme de sauvegarde intermédiaire** des données avant effacement pour répondre aux obligations légales
   - **Notification automatique** de confirmation d'effacement à l'utilisateur
   - **Journal d'audit** des demandes d'effacement et de leur traitement

3. **Mécanisme de journalisation conforme** :
   - **Structure de la journalisation** :
     * Qui : identifiant de l'utilisateur ou du système accédant aux données
     * Quoi : nature de l'opération (lecture, modification, suppression)
     * Quand : horodatage précis
     * Sur quoi : type de données et identifiant de l'enregistrement
     * Pourquoi : finalité de l'accès ou référence à la fonctionnalité
   
   - **Implémentation technique** :
     * Journalisation dans une base de données séparée avec accès restreint
     * Chiffrement des journaux
     * Conservation limitée à 6 mois avec purge automatique
     * Impossibilité de désactivation par les administrateurs
     * Alertes automatiques sur les schémas d'accès anormaux

## Exercice 6.3 : Gestion d'une fuite de données dans une application (20 min)

### Rappel théorique
En cas de violation de données à caractère personnel, le RGPD impose :
- Une notification à l'autorité de contrôle (CNIL en France) dans les 72 heures
- Une communication aux personnes concernées si le risque pour leurs droits et libertés est élevé
- Une documentation interne de toutes les violations

En parallèle, une approche technique structurée est nécessaire pour traiter l'incident.

### Énoncé

Votre équipe découvre qu'une vulnérabilité dans l'API de votre application mobile a permis l'exfiltration de données utilisateurs (noms, emails, téléphones, adresses) pendant les deux dernières semaines.

1. Détaillez les actions techniques immédiates à mettre en œuvre
2. Rédigez un plan de communication conforme aux exigences du RGPD
3. Proposez des mesures correctives à long terme pour l'API et l'application

### Correction

1. **Actions techniques immédiates** :
   - **Isolation de la vulnérabilité** : Désactivation temporaire de l'endpoint vulnérable ou mise en place d'un correctif d'urgence
   - **Analyse de l'étendue** : Examination des logs d'API pour déterminer quelles données ont été compromises et quels utilisateurs sont affectés
   - **Collecte de preuves** : Sauvegarde sécurisée des logs et des artifacts techniques pour l'investigation
   - **Correction de la vulnérabilité** : Développement et déploiement d'un correctif pour l'API
   - **Vérification** : Tests de pénétration pour confirmer que la vulnérabilité est résolue
   - **Surveillance renforcée** : Mise en place d'alertes spécifiques pour détecter des comportements similaires

2. **Plan de communication RGPD** :
   - **Notification à la CNIL** (sous 72h) contenant :
     * Nature de la violation
     * Catégories et nombre approximatif de personnes concernées
     * Catégories et volume de données compromises
     * Conséquences probables
     * Mesures prises pour y remédier et atténuer les impacts
   
   - **Communication aux personnes concernées** :
     * Description claire de la nature de la violation
     * Coordonnées du DPO ou d'un point de contact
     * Conséquences possibles pour les personnes
     * Mesures prises pour remédier à la situation
     * Recommandations de mesures préventives (changement de mot de passe, etc.)
   
   - **Documentation interne** :
     * Rapport technique détaillé
     * Chronologie de l'incident
     * Impact sur les données et les personnes
     * Mesures prises et leur efficacité

3. **Mesures correctives à long terme** :
   - **Révision de l'architecture API** :
     * Implémentation d'une authentification forte (OAuth 2.0, JWT avec durée limitée)
     * Limitation de débit (throttling) pour prévenir les extractions massives
     * Chiffrement des données sensibles de bout en bout
   
   - **Améliorations du cycle de développement** :
     * Intégration de tests de sécurité automatisés dans le CI/CD
     * Revues de code axées sur la sécurité
     * Formation des développeurs aux vulnérabilités API (OWASP API Security Top 10)
   
   - **Surveillance et détection** :
     * Mise en place d'un système de détection d'anomalies sur les appels API
     * Audit régulier des accès aux données sensibles
     * Tests d'intrusion périodiques ciblant spécifiquement l'API