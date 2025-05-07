# QCM d'auto-évaluation - Sécurité des applications et services web

Ce QCM vous permet de vérifier votre compréhension des notions abordées dans ce module. Répondez aux questions pour évaluer votre progression.

!!! quizdown id="qa1"

    ### Quelle configuration d'en-tête HTTP est correcte pour empêcher le site d'être chargé dans un iframe (protection contre le clickjacking) ?
    
    - [x] `X-Frame-Options: DENY`
    - [ ] `X-XSS-Protection: 1`
    - [ ] `Content-Security-Policy: no-iframe`
    - [ ] `X-Content-Type-Options: nosniff`
    
    > **Explication :** L'en-tête `X-Frame-Options: DENY` empêche complètement la page d'être chargée dans un iframe, un frame ou un object, ce qui protège contre les attaques de clickjacking où un attaquant pourrait superposer un site légitime dans un iframe transparent pour inciter l'utilisateur à cliquer sur des éléments sans le savoir. L'option `DENY` est plus restrictive que `SAMEORIGIN`, qui permet l'intégration dans des pages du même domaine.

!!! quizdown id="qa2"

    ### Dans le contexte des API REST, quelle méthode d'authentification est la plus adaptée pour une application mobile grand public ?
    
    - [ ] Basic Authentication (identifiant et mot de passe)
    - [ ] Clés API statiques
    - [x] OAuth 2.0 avec refresh tokens
    - [ ] Certificats clients mutuels SSL/TLS
    
    > **Explication :** OAuth 2.0 avec refresh tokens est particulièrement adapté aux applications mobiles grand public car :
    > - Il évite de stocker les identifiants de l'utilisateur dans l'application
    > - Il permet une authentification via des fournisseurs d'identité tiers (social login)
    > - Les refresh tokens permettent de renouveler l'accès sans nouvelle authentification
    > - Il offre un contrôle granulaire des autorisations (scopes)
    > 
    > Basic Authentication exposerait les identifiants à chaque requête, les clés API statiques sont difficiles à révoquer individuellement, et les certificats clients sont complexes à déployer pour le grand public.

!!! quizdown id="qa3"

    ### Quelle pratique est recommandée pour la gestion des secrets (clés API, identifiants de base de données) dans une application déployée ?
    
    - [ ] Stocker les secrets dans le code source avec un chiffrement personnalisé
    - [ ] Utiliser des fichiers de configuration en texte clair avec des permissions restrictives
    - [ ] Hardcoder les secrets dans les binaires compilés

- [x] Utiliser des variables d'environnement ou un gestionnaire de secrets spécialisé
    
    > **Explication :** Pour la gestion des secrets (clés API, identifiants de base de données, etc.), la meilleure pratique consiste à utiliser des variables d'environnement ou des gestionnaires de secrets spécialisés (comme HashiCorp Vault, AWS Secrets Manager ou Azure Key Vault). Ces solutions offrent plusieurs avantages :
    > - Séparation du code et des secrets
    > - Possibilité de rotation des secrets sans modifier le code
    > - Contrôle d'accès granulaire
    > - Journalisation des accès aux secrets
    > - Possibilités de chiffrement avancées
    >
    > Les autres approches présentent des risques importants : les secrets dans le code source peuvent être exposés lors d'une fuite de code, les fichiers de configuration en texte clair peuvent être accidentellement partagés, et les secrets hardcodés dans les binaires peuvent être extraits par rétro-ingénierie.

!!! quizdown id="qa4"

    ### Quelle technique permet de se protéger contre les attaques par injection SQL dans une application web ?
    
    - [ ] Filtrer les caractères spéciaux dans les noms de table
    - [ ] Limiter la longueur des champs de saisie
    - [x] Utiliser des requêtes préparées avec des paramètres
    - [ ] Encoder les requêtes SQL en Base64
    
    > **Explication :** Les requêtes préparées (ou paramétrées) constituent la meilleure protection contre les injections SQL car elles séparent structurellement le code SQL des données fournies par l'utilisateur. Avec les requêtes préparées :
    > - La structure de la requête (SQL) est envoyée séparément des paramètres
    > - Le SGBD traite les paramètres comme des données, jamais comme du code
    > - Les caractères spéciaux dans les paramètres ne peuvent pas modifier la structure de la requête
    >
    > Les autres techniques mentionnées sont insuffisantes : limiter la longueur des champs n'empêche pas les injections courtes, filtrer uniquement les caractères spéciaux peut être contourné, et l'encodage en Base64 ne protège pas contre les injections si le décodage est fait avant la construction de la requête.

!!! quizdown id="qa5"

    ### Quelle fonctionnalité du protocole HTTPS n'est PAS fournie par TLS (Transport Layer Security) ?
    
    - [ ] Chiffrement des données
    - [ ] Authentification du serveur
    - [ ] Vérification de l'intégrité des données
    - [x] Validation des entrées utilisateur
    
    > **Explication :** TLS (Transport Layer Security), le protocole qui sécurise les connexions HTTPS, fournit trois fonctionnalités principales :
    > - Le chiffrement des données, qui assure la confidentialité des échanges
    > - L'authentification du serveur via des certificats, qui permet au client de vérifier l'identité du serveur
    > - La vérification de l'intégrité des données, qui garantit que les informations n'ont pas été altérées en transit
    >
    > En revanche, TLS n'offre aucune protection contre les entrées utilisateur malveillantes. La validation des entrées doit être implémentée au niveau de l'application web elle-même, indépendamment du protocole de transport utilisé.

!!! quizdown id="qa6"

    ### Dans le cadre d'une application web, quel attribut de cookie renforce la sécurité contre les attaques XSS ?
    
    - [ ] SameSite=Strict
    - [x] HttpOnly
    - [ ] Secure
    - [ ] Expires
    
    > **Explication :** L'attribut `HttpOnly` des cookies est spécifiquement conçu pour protéger contre les attaques XSS (Cross-Site Scripting). Lorsqu'un cookie est marqué comme `HttpOnly`, il n'est pas accessible via JavaScript (via `document.cookie`), ce qui empêche un script malveillant injecté dans la page de voler le cookie.
    >
    > Les autres attributs ont des rôles différents :
    > - `SameSite=Strict` protège contre les attaques CSRF en empêchant l'envoi du cookie lors de requêtes cross-site
    > - `Secure` garantit que le cookie n'est transmis que via HTTPS, protégeant contre l'interception
    > - `Expires` définit simplement la durée de vie du cookie

!!! quizdown id="qa7"

    ### Quelle pratique est recommandée pour sécuriser une API REST contre les attaques par force brute ?
    
    - [ ] Utiliser exclusivement le protocole SOAP au lieu de REST
    - [ ] Chiffrer le corps de toutes les requêtes
    - [x] Mettre en place une limitation de débit (rate limiting)
    - [ ] Utiliser uniquement la méthode GET
    
    > **Explication :** La limitation de débit (rate limiting) est une technique efficace pour protéger les API contre les attaques par force brute, en limitant le nombre de requêtes qu'un client peut effectuer dans un intervalle de temps donné. Cela rend les attaques par force brute impraticables car elles nécessitent généralement un grand nombre de tentatives rapides.
    >
    > Les autres options ne sont pas adaptées : SOAP n'est pas intrinsèquement plus sécurisé que REST, le chiffrement du corps des requêtes n'empêche pas la multiplication des tentatives, et limiter l'API aux méthodes GET rendrait l'API inutilisable pour de nombreuses opérations (création, modification, suppression).

!!! quizdown id="qa8"

    ### Quelle est la meilleure approche pour implémenter l'autorisation dans une application web multi-utilisateurs ?
    
    - [ ] Vérifier les permissions côté client uniquement
    - [ ] Stocker le rôle de l'utilisateur dans un cookie non sécurisé
    - [ ] Implémenter des contrôles d'accès au niveau de la base de données uniquement
    - [x] Combiner des contrôles d'accès au niveau application et données
    
    > **Explication :** Une approche robuste d'autorisation dans une application web multi-utilisateurs combine des contrôles d'accès à plusieurs niveaux :
    > - Au niveau de l'interface utilisateur (masquer les fonctionnalités non autorisées)
    > - Au niveau du contrôleur/backend (vérifier les permissions avant d'exécuter les actions)
    > - Au niveau de la base de données (restrictions d'accès aux tables et enregistrements)
    >
    > Cette défense en profondeur assure que même si un niveau est compromis, les autres continuent à protéger les ressources. Les vérifications côté client seules sont facilement contournables, les cookies non sécurisés peuvent être modifiés, et les contrôles uniquement en base de données ne protègent pas contre les vulnérabilités d'application.

## Interprétation de votre score

- **7-8/8** : Excellent ! Vous avez une très bonne compréhension des principes de sécurité des applications et services web.
  
- **5-6/8** : Bon travail ! Vous maîtrisez les concepts essentiels mais quelques points méritent d'être revus.
  
- **3-4/8** : Des bases solides, mais plusieurs notions importantes nécessitent une révision.
  
- **0-2/8** : Il est recommandé de revoir l'ensemble du module pour consolider vos connaissances.

## Points clés à retenir

1. **Utilisez les en-têtes de sécurité HTTP** pour renforcer la sécurité de vos applications web

2. **Sécurisez vos API REST** avec une authentification et autorisation robustes

3. **Protégez-vous contre les vulnérabilités web courantes** (XSS, CSRF, injections SQL)

4. **Appliquez le principe de défense en profondeur** en combinant plusieurs couches de sécurité

5. **Intégrez la sécurité dans votre processus de développement et déploiement**

## Pour aller plus loin

- Consultez régulièrement le Top 10 OWASP des vulnérabilités web
- Testez la sécurité de vos applications avec des outils comme OWASP ZAP ou Burp Suite
- Familiarisez-vous avec les frameworks de sécurité web modernes
- Participez à des challenges de sécurité (CTF) pour améliorer vos compétences