## Module 3 : Authentification et contrôle d'accès

### Exercice 3.1 : Configuration d'une politique de mots de passe robuste

**Rappel théorique**
Une politique de mots de passe efficace équilibre sécurité et utilisabilité. Les bonnes pratiques actuelles recommandent :
- Longueur minimale plutôt que complexité excessive
- Phrases de passe plutôt que mots de passe complexes
- Vérification contre des dictionnaires de mots de passe compromis
- Renouvellement uniquement en cas de compromission suspectée

**Énoncé**
Pour une entreprise de 200 employés :
1. Proposez une politique de mots de passe conforme aux recommandations ANSSI
2. Définissez la stratégie technique pour implémenter cette politique
3. Décrivez une procédure de sensibilisation des utilisateurs

**Correction**

1. **Politique de mots de passe conforme aux recommandations ANSSI** :
   - Longueur minimale : 12 caractères
   - Pas d'exigence de caractères spéciaux mais encouragement des phrases de passe
   - Vérification contre les listes de mots de passe compromis
   - Renouvellement tous les 12 mois ou immédiatement en cas de suspicion de compromission
   - Verrouillage temporaire après 5 tentatives échouées (15 minutes)

2. **Stratégie technique d'implémentation** :
   - Configuration de la politique sur l'Active Directory ou le gestionnaire d'identités
   - Mise en place d'un gestionnaire de mots de passe d'entreprise
   - Implémentation d'une solution SSO (Single Sign-On) pour limiter le nombre de mots de passe
   - Déploiement de l'authentification à deux facteurs pour les accès critiques

3. **Procédure de sensibilisation** :
   - Formation initiale pour tous les employés
   - Guide illustré des bonnes pratiques (avec exemples concrets)
   - Session de questions-réponses sur les préoccupations d'utilisabilité
   - Rappels périodiques par email avec astuces pour créer des phrases de passe mémorables

### Exercice 3.2 : Implémentation d'une authentification à facteurs multiples

**Rappel théorique**
L'authentification à facteurs multiples (MFA) combine plusieurs méthodes d'authentification parmi :
- Quelque chose que l'utilisateur sait (mot de passe, PIN)
- Quelque chose que l'utilisateur possède (téléphone, token physique)
- Quelque chose que l'utilisateur est (biométrie)

La MFA réduit considérablement le risque de compromission de compte, même si l'un des facteurs est compromis.

**Énoncé**
Pour une application web de gestion bancaire :
1. Proposez une stratégie d'authentification à facteurs multiples
2. Comparez trois solutions techniques et recommandez la plus adaptée
3. Identifiez les risques potentiels et proposez des mesures d'atténuation

**Correction**

1. **Stratégie d'authentification à facteurs multiples** :
   - Premier facteur : mot de passe (minimum 12 caractères)
   - Deuxième facteur : code temporaire (TOTP) via application mobile
   - Facteur additionnel pour opérations sensibles : confirmation par SMS ou validation biométrique

2. **Comparaison de solutions techniques** :
   - **Solution 1** : Application TOTP (Google Authenticator, Microsoft Authenticator)
     * Avantages : fonctionne hors ligne, simple à déployer
     * Inconvénients : risque de perte de l'appareil

   - **Solution 2** : Token physique (YubiKey, etc.)
     * Avantages : très sécurisé, résistant au phishing
     * Inconvénients : coût élevé, distribution physique

   - **Solution 3** : Notification push sur application dédiée
     * Avantages : meilleure expérience utilisateur, contexte de la demande visible
     * Inconvénients : nécessite une connexion internet

   **Recommandation** : Solution 3 (notifications push) avec solution 1 (TOTP) comme alternative de secours

3. **Risques et mesures d'atténuation** :
   - **Risque** : Perte du dispositif d'authentification
     * **Atténuation** : Procédure de récupération sécurisée avec vérification d'identité

   - **Risque** : Résistance des utilisateurs
     * **Atténuation** : Formation, interface intuitive et explication des bénéfices

   - **Risque** : Attaques de phishing avancées ciblant la MFA
     * **Atténuation** : Utilisation de WebAuthn/FIDO2 résistant au phishing

### Exercice 3.3 : Gestion des habilitations et contrôle d'accès

**Rappel théorique**
Les principaux modèles de contrôle d'accès sont :
- **DAC** (Discretionary Access Control) : contrôle basé sur l'identité des utilisateurs
- **MAC** (Mandatory Access Control) : contrôle basé sur des niveaux de sécurité prédéfinis
- **RBAC** (Role-Based Access Control) : contrôle basé sur les rôles des utilisateurs
- **ABAC** (Attribute-Based Access Control) : contrôle basé sur des attributs dynamiques

Le principe du moindre privilège est fondamental : accorder uniquement les accès nécessaires.

**Énoncé**
Pour un hôpital de 500 lits avec un système d'information médical :
1. Choisissez le modèle de contrôle d'accès le plus adapté et justifiez
2. Concevez une matrice d'habilitations pour 5 profils d'utilisateurs
3. Proposez une procédure de revue périodique des droits d'accès

**Correction**

1. **Modèle de contrôle d'accès recommandé : RBAC avec éléments d'ABAC**
   - **Justification** : RBAC offre une gestion simplifiée par rôles adaptée à la structure hiérarchique hospitalière. L'ajout d'éléments ABAC permet de gérer des contraintes contextuelles (horaires de service, localisation, urgences).

2. **Matrice d'habilitations** :

   | Fonction             | Dossiers patients | Prescriptions | Données administratives | Résultats d'examens | Facturation |
   |----------------------|-------------------|---------------|-------------------------|---------------------|-------------|
   | Médecin              | Lecture/Écriture  | Création      | Lecture                 | Lecture/Écriture    | Non         |
   | Infirmier/ère        | Lecture partielle | Lecture       | Non                     | Lecture             | Non         |
   | Administratif        | Données de base   | Non           | Lecture/Écriture        | Non                 | Lecture/Écriture |
   | Technicien labo      | Données de base   | Non           | Non                     | Création            | Non         |
   | Direction            | Statistiques      | Statistiques  | Lecture                 | Statistiques        | Lecture     |

3. **Procédure de revue périodique** :
   - Revue trimestrielle des comptes à privilèges élevés
   - Revue semestrielle de tous les comptes utilisateurs
   - Revue automatique lors de changements de fonction
   - Rapport d'audit mensuel des accès aux données sensibles
   - Analyse d'écart entre les droits théoriques et les accès effectifs

