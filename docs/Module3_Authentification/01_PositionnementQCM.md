# QCM de positionnement - Authentification et contrôle d'accès

Ce QCM vous permet d'évaluer vos connaissances avant d'aborder le module. Répondez aux questions puis vérifiez vos réponses pour savoir quels points nécessitent votre attention.

!!! quizdown id="q1"
    
    ### Qu'est-ce que l'authentification multi-facteurs (MFA) ?
    
    - [ ] L'utilisation de plusieurs mots de passe différents
    - [x] L'utilisation d'au moins deux facteurs d'authentification de catégories différentes
    - [ ] L'authentification via plusieurs applications différentes
    - [ ] La vérification de l'identité par plusieurs administrateurs
    
    > **Explication :** L'authentification multi-facteurs (MFA) consiste à utiliser au moins deux facteurs d'authentification appartenant à des catégories différentes pour vérifier l'identité d'un utilisateur. Ces catégories sont généralement :
    > - Ce que l'utilisateur sait (ex: mot de passe, code PIN)
    > - Ce que l'utilisateur possède (ex: téléphone, carte à puce)
    > - Ce que l'utilisateur est (ex: empreinte digitale, reconnaissance faciale)
    >
    > Cette méthode renforce significativement la sécurité car un attaquant devrait compromettre plusieurs facteurs de nature différente pour réussir son attaque.

!!! quizdown id="q2"

    ### Quelle fonction cryptographique est recommandée pour stocker les mots de passe ?
    
    - [ ] Le chiffrement symétrique (AES)
    - [ ] Le chiffrement asymétrique (RSA)
    - [x] Une fonction de hachage avec sel (bcrypt, Argon2)
    - [ ] La base64
    
    > **Explication :** Le stockage sécurisé des mots de passe doit utiliser une fonction de hachage avec sel (et non un algorithme de chiffrement) pour plusieurs raisons :
    > - Le hachage est unidirectionnel (impossible de retrouver le mot de passe original)
    > - L'ajout d'un sel rend inefficaces les attaques par table arc-en-ciel (rainbow tables)
    > - Des fonctions comme bcrypt, Argon2 ou PBKDF2 sont spécialement conçues pour le hachage de mots de passe et intègrent un "étirement de clé" (key stretching) qui les rend résistantes aux attaques par force brute
    >
    > Le chiffrement (symétrique ou asymétrique) est réversible, ce qui est inapproprié pour les mots de passe. La base64 est un simple encodage, pas une méthode de protection.

!!! quizdown id="q3"

    ### Quelle méthode de contrôle d'accès attribue des permissions à des rôles plutôt qu'à des utilisateurs individuels ?
    
    - [x] RBAC (Role-Based Access Control)
    - [ ] DAC (Discretionary Access Control)
    - [ ] MAC (Mandatory Access Control)
    - [ ] ABAC (Attribute-Based Access Control)
    
    > **Explication :** Le contrôle d'accès basé sur les rôles (RBAC - Role-Based Access Control) attribue des permissions à des rôles, puis assigne ces rôles aux utilisateurs. Cette approche :
    > - Simplifie la gestion des droits d'accès en centralisant les permissions par rôle
    > - Facilite l'audit des droits d'accès
    > - Permet de mettre en œuvre le principe du moindre privilège
    >
    > Les autres modèles fonctionnent différemment :
    > - DAC : l'utilisateur propriétaire d'une ressource définit qui peut y accéder
    > - MAC : l'accès est contrôlé par une politique centralisée basée sur des niveaux de sécurité
    > - ABAC : l'accès est déterminé par des attributs des utilisateurs, des ressources, des actions et du contexte

!!! quizdown id="q4"

    ### Qu'est-ce qu'une attaque par force brute ?
    
    - [ ] L'exploitation d'une faille de sécurité dans une application
    - [ ] Le vol de cookies de session pour usurper l'identité d'un utilisateur
    - [x] L'essai systématique de toutes les combinaisons possibles pour trouver un mot de passe
    - [ ] L'utilisation de techniques d'ingénierie sociale pour obtenir des informations d'authentification
    
    > **Explication :** Une attaque par force brute consiste à essayer systématiquement toutes les combinaisons possibles pour découvrir un secret, comme un mot de passe. C'est une méthode qui fonctionne toujours en théorie, mais qui peut être rendue impraticable en pratique par :
    > - L'utilisation de mots de passe longs et complexes (qui augmentent le nombre de combinaisons)
    > - Des mécanismes de limitation du nombre de tentatives de connexion
    > - Des fonctions de hachage conçues pour être lentes
    >
    > Les autres options décrivent respectivement une exploitation de vulnérabilité, une attaque par session hijacking, et une attaque d'ingénierie sociale.

!!! quizdown id="q5"

    ### Qu'est-ce qu'un token JWT (JSON Web Token) ?
    
    - [ ] Un gestionnaire de mots de passe
    - [x] Un format standardisé pour représenter des revendications (claims) de manière sécurisée entre deux parties
    - [ ] Un algorithme de chiffrement pour les bases de données
    - [ ] Un protocole d'authentification biométrique
    
    > **Explication :** Un JSON Web Token (JWT) est un standard ouvert (RFC 7519) qui définit un format compact et autonome pour transmettre de manière sécurisée des informations entre différentes parties sous forme d'objet JSON. Ces informations peuvent être vérifiées et approuvées car elles sont signées numériquement.
    >
    > Les JWT sont souvent utilisés pour :
    > - L'authentification : une fois l'utilisateur connecté, chaque requête inclura le JWT
    > - L'échange d'informations sécurisées entre des parties
    > - Les architectures sans état (stateless) comme les API REST
    >
    > Un JWT se compose généralement de trois parties : un en-tête (header), une charge utile (payload) contenant les revendications, et une signature.

## Interprétation de votre score

- **5/5** : Excellent ! Vous avez déjà une bonne connaissance des principes d'authentification et de contrôle d'accès. Ce module vous permettra d'approfondir vos connaissances techniques.
  
- **3-4/5** : Bon travail ! Vous connaissez les bases de l'authentification et du contrôle d'accès mais certains concepts méritent d'être approfondis.
  
- **0-2/5** : Ce module sera particulièrement bénéfique pour vous, car il vous permettra d'acquérir les connaissances essentielles sur l'authentification et le contrôle d'accès, des éléments fondamentaux de la sécurité informatique.

## Points clés à retenir avant de commencer

- L'authentification vérifie l'identité d'un utilisateur
- L'autorisation détermine ce qu'un utilisateur authentifié peut faire
- Le stockage sécurisé des mots de passe nécessite des fonctions de hachage spécifiques
- L'authentification multi-facteurs renforce significativement la sécurité
- Le principe du moindre privilège est fondamental dans la gestion des accès