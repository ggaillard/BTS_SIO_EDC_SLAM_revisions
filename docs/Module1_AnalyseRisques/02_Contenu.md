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

Exemple de format pour votre réponse:
```
1. Un médecin consulte le dossier médical d'un patient
   - Disponibilité: ++ (justification...)
   - Intégrité: ++ (justification...)
   - Confidentialité: ++ (justification...)
   - Preuve: + (justification...)
```

### Solution

??? info "Afficher la correction"
    **1. Un médecin consulte le dossier médical d'un patient**
    
    - **Disponibilité** : ++ (Le dossier doit être accessible en permanence, surtout en cas d'urgence)
    - **Intégrité** : ++ (Des données médicales erronées peuvent avoir des conséquences graves)
    - **Confidentialité** : ++ (Les données médicales sont sensibles et protégées par le secret médical)
    - **Preuve** : ++ (Il est essentiel de tracer qui a accédé aux dossiers médicaux pour des raisons légales et éthiques)
    
    **2. Un client effectue un virement bancaire en ligne**
    
    - **Disponibilité** : + (Le service doit être disponible, mais une indisponibilité temporaire est acceptable)
    - **Intégrité** : ++ (Le montant et les coordonnées bancaires doivent être exacts)
    - **Confidentialité** : ++ (Les informations bancaires sont confidentielles)
    - **Preuve** : ++ (Les transactions bancaires doivent être traçables pour des raisons légales)
    
    **3. Un étudiant consulte ses notes sur le portail de l'université**
    
    - **Disponibilité** : + (Une indisponibilité temporaire est acceptable)
    - **Intégrité** : ++ (Les notes doivent être exactes)
    - **Confidentialité** : + (Les notes sont personnelles mais pas hautement sensibles)
    - **Preuve** : + (Il est important de savoir qui a consulté ou modifié les notes)
    
    **4. Un employé enregistre ses heures de travail dans le système de pointage**
    
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

Exemple de présentation :
```
Spoofing:
- Menace 1: Un attaquant utilise les identifiants volés d'un client
  Impact: Perte de confiance des clients, atteinte à la réputation
- Menace 2: ...
  Impact: ...
```

### Solution

??? info "Afficher la correction"
    **Spoofing (usurpation d'identité)**
    
    - **Menace 1**: Un attaquant utilise les identifiants volés d'un client pour se connecter à son compte.  
      **Impact**: Perte de confiance des clients, atteinte à la réputation, possibles poursuites judiciaires.
    
    - **Menace 2**: Un attaquant se fait passer pour le site e-commerce par phishing.  
      **Impact**: Atteinte à l'image de marque, perte de confiance des clients, responsabilité légale potentielle.
    
    **Tampering (altération de données)**
    
    - **Menace 1**: Modification des prix des produits dans la base de données.  
      **Impact**: Pertes financières, incohérences dans la comptabilité.
    
    - **Menace 2**: Altération de l'historique des commandes pour masquer des fraudes.  
      **Impact**: Difficultés de suivi des commandes, litiges avec les clients, pertes financières.
    
    **Repudiation (rejet d'une action effectuée)**
    
    - **Menace 1**: Un client nie avoir passé une commande livrée.  
      **Impact**: Pertes financières, coûts de gestion des litiges.
    
    - **Menace 2**: Un employé nie avoir modifié des informations sensibles.  
      **Impact**: Difficultés à identifier l'origine d'une fuite de données, obstacles aux investigations.
    
    **Information disclosure (divulgation d'informations)**
    
    - **Menace 1**: Fuite de la base de données clients (noms, adresses, historiques d'achat).  
      **Impact**: Violation du RGPD avec amendes potentielles, atteinte à la réputation, perte de confiance.
    
    - **Menace 2**: Accès non autorisé aux données de carte bancaire.  
      **Impact**: Non-conformité PCI DSS, amendes, perte de l'autorisation de traiter des paiements.
    
    **Denial of service (déni de service)**
    
    - **Menace 1**: Attaque DDoS rendant le site inaccessible.  
      **Impact**: Perte de chiffre d'affaires pendant la durée de l'indisponibilité, atteinte à la réputation.
    
    - **Menace 2**: Saturation de la base de données par des requêtes malveillantes.  
      **Impact**: Ralentissements du site, expérience utilisateur dégradée, pertes de ventes.
    
    **Elevation of privilege (élévation de privilèges)**
    
    - **Menace 1**: Un attaquant exploite une vulnérabilité pour obtenir un accès administrateur.  
      **Impact**: Compromission complète du système, accès à toutes les données sensibles.
    
    - **Menace 2**: Un client modifie ses paramètres pour accéder à des fonctionnalités réservées aux employés.  
      **Impact**: Accès à des informations confidentielles, possibilité de modifier des paramètres critiques.

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

### Solution

??? info "Afficher la correction"
    **Mesures préventives:**
    
    1. **Utiliser des requêtes préparées/paramétrées** : Séparer les données des instructions SQL pour empêcher l'interprétation des entrées utilisateur comme du code.
    
    2. **Valider et filtrer les entrées utilisateur** : Vérifier que les données correspondent au format attendu (type, longueur, caractères autorisés).
    
    3. **Appliquer le principe du moindre privilège** : L'utilisateur de base de données utilisé par l'application ne doit avoir que les droits strictement nécessaires.
    
    4. **Utiliser un ORM (Object-Relational Mapping)** : Ces outils gèrent automatiquement l'échappement des données et les requêtes préparées.
    
    5. **Mettre à jour régulièrement** : Appliquer les correctifs de sécurité sur les frameworks, bibliothèques et SGBD utilisés.
    
    **Mesures détectives:**
    
    1. **Mettre en place un système de détection d'intrusion (IDS)** : Pour identifier les tentatives d'injections SQL.
    
    2. **Journaliser les requêtes SQL** : Enregistrer les requêtes avec leur source pour analyse ultérieure.
    
    3. **Surveiller les activités anormales** : Mettre en place une surveillance des requêtes inhabituelles ou excessives.
    
    4. **Auditer régulièrement** : Examiner les logs de la base de données pour détecter des activités suspectes.
    
    **Mesures correctives:**
    
    1. **Maintenir des sauvegardes régulières** : Permettre la restauration de la base de données en cas de corruption.
    
    2. **Mettre en place un plan de reprise d'activité** : Procédures documentées pour restaurer les systèmes compromis.
    
    3. **Isoler les systèmes compromis** : Limiter la propagation de l'attaque dans l'infrastructure.

## Points clés à retenir

1. **Analysez toujours les besoins DICP** selon le contexte et les enjeux métier
2. **Catégorisez les menaces** à l'aide de modèles comme STRIDE pour être exhaustif
3. **Mettez en place des mesures de sécurité** préventives, détectives et correctives
4. **Évaluez les risques** en fonction de la probabilité et de l'impact des menaces
5. **Priorisez les actions** en fonction du niveau de risque et des contraintes (coût, temps, ressources)

## Pour aller plus loin

### Méthodologies
- EBIOS Risk Manager (ANSSI)
- MEHARI (CLUSIF)
- ISO 27005
- NIST SP 800-30

### Outils
- PILAR (EAR/PILAR)
- OCTAVE
- MONARC (CASES)
- CORAS

### Formations
- MOOC SecNumacadémie (ANSSI)
- Certifications ISO 27001
- Formations CLUSIF
```

