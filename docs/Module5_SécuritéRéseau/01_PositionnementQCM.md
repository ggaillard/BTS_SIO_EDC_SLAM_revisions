# QCM de positionnement - Sécurité des applications et services web

Ce QCM vous permet d'évaluer vos connaissances avant d'aborder le module. Répondez aux questions puis vérifiez vos réponses pour savoir quels points nécessitent votre attention.

!!! quizdown id="q1"
    
    ### Quelle est la principale protection offerte par l'en-tête HTTP Content-Security-Policy ?
    
    - [ ] Empêcher les attaques par injection SQL
    - [x] Réduire les risques d'attaques XSS en contrôlant les sources de contenu autorisées
    - [ ] Chiffrer les communications entre le client et le serveur
    - [ ] Limiter le nombre de requêtes par seconde pour éviter les attaques DDoS
    
    > **Explication :** Content-Security-Policy (CSP) est un en-tête de sécurité qui permet de définir quelles sources de contenu (scripts, styles, images, etc.) sont autorisées à être chargées par le navigateur. Il constitue une défense efficace contre les attaques XSS (Cross-Site Scripting) en empêchant l'exécution de scripts provenant de sources non autorisées.

!!! quizdown id="q2"

    ### Quelle méthode d'authentification pour une API REST utilise un jeton signé contenant des informations sur l'utilisateur ?
    
    - [ ] Basic Authentication
    - [ ] API Key
    - [x] JSON Web Token (JWT)
    - [ ] OAuth 1.0
    
    > **Explication :** JSON Web Token (JWT) est un standard ouvert (RFC 7519) qui définit un format compact et autonome pour transmettre de manière sécurisée des informations entre différentes parties sous forme d'objet JSON. Ces jetons sont signés numériquement et peuvent contenir des revendications (claims) sur l'identité de l'utilisateur, ses rôles, etc. Ils sont particulièrement adaptés aux API REST car ils sont sans état (stateless).

!!! quizdown id="q3"

    ### Quelle pratique correspond au principe de "défense en profondeur" dans la sécurité des applications web ?
    
    - [ ] Utiliser un seul mécanisme de sécurité très robuste
    - [ ] Confier toute la sécurité à un pare-feu applicatif web (WAF)
    - [ ] Éduquer uniquement les développeurs aux bonnes pratiques de sécurité
    - [x] Mettre en place plusieurs couches de sécurité complémentaires
    
    > **Explication :** Le principe de défense en profondeur consiste à mettre en place plusieurs couches de sécurité complémentaires, de sorte que si une couche est compromise, les autres continuent à protéger le système. Par exemple, pour une application web, cela peut inclure : validation des entrées côté client et serveur, paramétrage sécurisé du framework, requêtes préparées pour la base de données, en-têtes de sécurité HTTP, et surveillance des activités suspectes.

!!! quizdown id="q4"

    ### Parmi ces fonctionnalités, laquelle n'est PAS un avantage de HTTPS par rapport à HTTP ?
    
    - [ ] Confidentialité des données transmises
    - [ ] Intégrité des données transmises
    - [ ] Authentification du serveur
    - [x] Amélioration des performances de l'application
    
    > **Explication :** HTTPS (HTTP Secure) offre trois avantages principaux par rapport à HTTP : la confidentialité (les données sont chiffrées), l'intégrité (les données ne peuvent pas être modifiées sans détection) et l'authentification (le serveur prouve son identité). Cependant, HTTPS n'améliore pas les performances de l'application, et peut même légèrement les réduire en raison de la surcharge liée au chiffrement et au déchiffrement. Cette légère baisse de performance est largement compensée par les avantages de sécurité.

!!! quizdown id="q5"

    ### Quelle technique permet de protéger une application web contre les attaques CSRF (Cross-Site Request Forgery) ?
    
    - [ ] Utiliser uniquement des cookies HttpOnly
    - [x] Inclure un jeton anti-CSRF dans les formulaires
    - [ ] Mettre en place une politique de mots de passe forts
    - [ ] Limiter le débit des requêtes API
    
    > **Explication :** Les attaques CSRF exploitent la confiance qu'un site accorde au navigateur d'un utilisateur authentifié. La protection principale consiste à inclure un jeton unique (token) dans chaque formulaire ou requête modifiant des données. Ce jeton, vérifié par le serveur, garantit que la requête provient bien d'un formulaire légitime de l'application et non d'un site tiers. Les cookies HttpOnly protègent contre le vol de cookies par XSS mais pas contre le CSRF. Les politiques de mots de passe et la limitation de débit ciblent d'autres types d'attaques.

## Interprétation de votre score

- **5/5** : Excellent ! Vous avez déjà une bonne connaissance des principes de sécurité des applications web. Ce module vous permettra d'approfondir vos connaissances pratiques.
  
- **3-4/5** : Bon travail ! Vous connaissez les bases de la sécurité des applications web mais certains concepts méritent d'être approfondis. Ce module vous aidera à consolider votre compréhension.
  
- **0-2/5** : Ce module sera particulièrement bénéfique pour vous, car il vous permettra d'acquérir les connaissances essentielles sur la sécurité des applications web, un domaine fondamental pour tout développeur SLAM.

## Points clés à retenir avant de commencer

- La sécurité des applications web doit être intégrée dès la conception
- Différentes couches de sécurité sont nécessaires (défense en profondeur)
- Les attaques web évoluent constamment et nécessitent une veille régulière
- Les bonnes pratiques et standards de sécurité (OWASP) sont des ressources précieuses
- La sécurité est un compromis avec l'utilisabilité et les performances
```

