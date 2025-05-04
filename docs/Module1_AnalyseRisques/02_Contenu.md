# Module 1 : Analyse des risques et besoins de sécurité

## Exercice 1.1 : Évaluation des critères DICP (20 min)

### Rappel théorique
Les quatre critères fondamentaux de la sécurité sont :
- **Disponibilité** : le service doit être utilisable quand nécessaire
- **Intégrité** : les données doivent être exactes et complètes
- **Confidentialité** : les données ne doivent pas être divulguées aux personnes non autorisées
- **Preuve/Traçabilité** : il doit être possible d'attribuer les actions à leur auteur

L'évaluation de ces critères dépend du contexte métier et des enjeux liés à l'information ou au service.

### Énoncé

Pour chacun des cas d'utilisation suivants, évaluez les besoins en termes de DICP selon l'échelle : 0 (pas important), + (important), ++ (très important). Justifiez brièvement votre évaluation.

1. Un médecin consulte le dossier médical d'un patient
2. Un client effectue un virement bancaire en ligne
3. Un étudiant consulte ses notes sur le portail de l'université
4. Un employé enregistre ses heures de travail dans le système de pointage

### Correction

#### 1. Un médecin consulte le dossier médical d'un patient
- **Disponibilité** : ++ (Le dossier doit être accessible en permanence, surtout en cas d'urgence)
- **Intégrité** : ++ (Des données médicales erronées peuvent avoir des conséquences graves)
- **Confidentialité** : ++ (Les données médicales sont sensibles et protégées par le secret médical)
- **Preuve** : ++ (Il est essentiel de tracer qui a accédé aux dossiers médicaux pour des raisons légales et éthiques)

#### 2. Un client effectue un virement bancaire en ligne
- **Disponibilité** : + (Le service doit être disponible, mais une indisponibilité temporaire est acceptable)
- **Intégrité** : ++ (Le montant et les coordonnées bancaires doivent être exacts)
- **Confidentialité** : ++ (Les informations bancaires sont confidentielles)
- **Preuve** : ++ (Les transactions bancaires doivent être traçables pour des raisons légales)

#### 3. Un étudiant consulte ses notes sur le portail de l'université
- **Disponibilité** : + (Une indisponibilité temporaire est acceptable)
- **Intégrité** : ++ (Les notes doivent être exactes)
- **Confidentialité** : + (Les notes sont personnelles mais pas hautement sensibles)
- **Preuve** : + (Il est important de savoir qui a consulté ou modifié les notes)

#### 4. Un employé enregistre ses heures de travail dans le système de pointage
- **Disponibilité** : + (Le système doit être disponible pendant les heures de travail)
- **Intégrité** : ++ (Les heures doivent être exactes pour la paie et les statistiques)
- **Confidentialité** : + (Ces informations sont relativement confidentielles)
- **Preuve** : ++ (Il est important de savoir qui a enregistré quelles heures pour éviter la fraude)

## Exercice 1.2 : Identification des menaces (20 min)

### Rappel théorique
Une menace est un scénario qui peut porter atteinte à la sécurité du système. Le modèle STRIDE permet de catégoriser les menaces :
- **Spoofing** (usurpation d'identité) : se faire passer pour quelqu'un d'autre
- **Tampering** (altération de données) : modification non autorisée des données
- **Repudiation** (rejet d'une action effectuée) : nier avoir effectué une action
- **Information disclosure** (divulgation d'informations) : accès non autorisé à des informations
- **Denial of service** (déni de service) : rendre un service indisponible
- **Elevation of privilege** (élévation de privilèges) : obtenir des droits supérieurs

### Énoncé

Pour un site e-commerce comprenant une zone client avec historique des commandes, paiement en ligne et profil utilisateur, identifiez :
1. Deux menaces pour chaque catégorie du modèle STRIDE
2. Pour chaque menace, indiquez un impact potentiel sur l'entreprise

### Correction

#### Spoofing (usurpation d'identité)
1. **Menace** : Un attaquant utilise les identifiants volés d'un client pour se connecter à son compte.  
   **Impact** : Perte de confiance des clients, atteinte à la réputation, possibles poursuites judiciaires.

2. **Menace** : Un attaquant se fait passer pour le site e-commerce par phishing.  
   **Impact** : Atteinte à l'image de marque, perte de confiance des clients, responsabilité légale potentielle.

#### Tampering (altération de données)
1. **Menace** : Modification des prix des produits dans la base de données.  
   **Impact** : Pertes financières, incohérences dans la comptabilité.

2. **Menace** : Altération de l'historique des commandes pour masquer des fraudes.  
   **Impact** : Difficultés de suivi des commandes, litiges avec les clients, pertes financières.

#### Repudiation (rejet d'une action effectuée)
1. **Menace** : Un client nie avoir passé une commande livrée.  
   **Impact** : Pertes financières, coûts de gestion des litiges.

2. **Menace** : Un employé nie avoir modifié des informations sensibles.  
   **Impact** : Difficultés à identifier l'origine d'une fuite de données, obstacles aux investigations.

#### Information disclosure (divulgation d'informations)
1. **Menace** : Fuite de la base de données clients (noms, adresses, historiques d'achat).  
   **Impact** : Violation du RGPD avec amendes potentielles, atteinte à la réputation, perte de confiance.

2. **Menace** : Accès non autorisé aux données de carte bancaire.  
   **Impact** : Non-conformité PCI DSS, amendes, perte de l'autorisation de traiter des paiements.

#### Denial of service (déni de service)
1. **Menace** : Attaque DDoS rendant le site inaccessible.  
   **Impact** : Perte de chiffre d'affaires pendant la durée de l'indisponibilité, atteinte à la réputation.

2. **Menace** : Saturation de la base de données par des requêtes malveillantes.  
   **Impact** : Ralentissements du site, expérience utilisateur dégradée, pertes de ventes.

#### Elevation of privilege (élévation de privilèges)
1. **Menace** : Un attaquant exploite une vulnérabilité pour obtenir un accès administrateur.  
   **Impact** : Compromission complète du système, accès à toutes les données sensibles.

2. **Menace** : Un client modifie ses paramètres pour accéder à des fonctionnalités réservées aux employés.  
   **Impact** : Accès à des informations confidentielles, possibilité de modifier des paramètres critiques.

## Exercice 1.3 : Mesures de sécurité (20 min)

### Rappel théorique
Pour contrer les menaces, on peut mettre en place des mesures :
- **Préventives** : empêchent la réalisation de la menace
- **Détectives** : détectent qu'une menace s'est réalisée
- **Correctives** : corrigent les effets d'une menace réalisée

Ces mesures peuvent être techniques, organisationnelles ou juridiques.

### Énoncé

Pour le scénario suivant : "Un attaquant utilise une injection SQL pour accéder à la base de données clients d'une application web".
1. Proposez trois mesures préventives
2. Proposez deux mesures détectives
3. Proposez une mesure corrective

### Correction

#### Mesures préventives
1. **Utiliser des requêtes préparées ou des ORM** : Les requêtes préparées séparent les données des instructions SQL, empêchant ainsi les injections.

2. **Valider et filtrer toutes les entrées utilisateur** : Mettre en place des mécanismes de validation des entrées pour rejeter les caractères spéciaux ou les motifs suspects.

3. **Appliquer le principe du moindre privilège** : Utiliser un compte de base de données avec des privilèges limités pour l'application, afin de minimiser l'impact en cas d'injection réussie.

#### Mesures détectives
1. **Mettre en place un système de détection d'intrusion (IDS)** : Configurer un IDS pour détecter les tentatives d'injection SQL et alerter les administrateurs.

2. **Analyser les logs de la base de données** : Activer la journalisation détaillée des requêtes SQL et mettre en place une analyse régulière pour détecter les requêtes suspectes.

#### Mesure corrective
1. **Plan de restauration de la base de données** : Maintenir des sauvegardes régulières et un plan de restauration pour rétablir la base de données à un état antérieur à l'attaque, après avoir corrigé la vulnérabilité.