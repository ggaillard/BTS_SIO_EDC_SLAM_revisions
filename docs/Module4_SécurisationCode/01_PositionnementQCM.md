# QCM de positionnement - Sécurisation du code et prévention des vulnérabilités

Ce QCM vous permet d'évaluer vos connaissances avant d'aborder le module. Répondez aux questions puis vérifiez vos réponses pour savoir quels points nécessitent votre attention.

!!! quizdown id="q1"
    
    ### Qu'est-ce qu'une injection SQL ?
    
    - [ ] Un outil permettant d'optimiser les requêtes SQL
    - [x] Une attaque qui consiste à insérer du code SQL malveillant dans une requête
    - [ ] Une technique de programmation pour améliorer les performances des bases de données
    - [ ] Un framework SQL pour simplifier le développement d'applications
    
    > **Explication :** Une injection SQL est une technique d'attaque qui consiste à insérer du code SQL malveillant dans les entrées d'une application. Si ces entrées ne sont pas correctement validées ou assainies, l'attaquant peut manipuler les requêtes SQL exécutées par l'application, ce qui peut permettre :
    > - D'accéder à des données non autorisées
    > - De modifier des données (insertion, mise à jour, suppression)
    > - D'exécuter des commandes administratives sur la base de données
    > - De contourner l'authentification
    >
    > C'est l'une des vulnérabilités web les plus courantes et les plus dangereuses.

!!! quizdown id="q2"

    ### Quelle mesure n'est PAS efficace contre les attaques Cross-Site Scripting (XSS) ?
    
    - [ ] L'échappement des caractères spéciaux dans les sorties HTML
    - [x] L'utilisation de requêtes SQL préparées
    - [ ] La validation des entrées utilisateur
    - [ ] L'utilisation de l'en-tête HTTP Content-Security-Policy
    
    > **Explication :** L'utilisation de requêtes SQL préparées est une protection contre les injections SQL, pas contre les attaques XSS (Cross-Site Scripting). Les attaques XSS consistent à injecter du code JavaScript malveillant qui s'exécute dans le navigateur de la victime.
    >
    > Les mesures efficaces contre les XSS incluent :
    > - L'échappement des caractères spéciaux dans les sorties HTML (`<`, `>`, `"`, `'`, `&`)
    > - La validation et l'assainissement des entrées utilisateur
    > - L'utilisation de l'en-tête HTTP Content-Security-Policy (CSP) qui restreint les sources de scripts
    > - L'utilisation de l'attribut HttpOnly sur les cookies pour les protéger contre le vol via XSS

!!! quizdown id="q3"

    ### Qu'est-ce qu'une attaque CSRF (Cross-Site Request Forgery) ?
    
    - [ ] Une attaque qui exploite une vulnérabilité dans le code source de l'application
    - [ ] Une attaque qui injecte du code malveillant dans une page web
    - [x] Une attaque qui force le navigateur d'un utilisateur authentifié à envoyer une requête non désirée
    - [ ] Une attaque qui intercepte les communications entre l'utilisateur et le serveur
    
    > **Explication :** Une attaque CSRF (Cross-Site Request Forgery) consiste à forcer le navigateur d'un utilisateur authentifié à envoyer une requête HTTP non désirée à une application web vulnérable. Si l'utilisateur est authentifié sur cette application, la requête s'exécutera avec ses privilèges.
    >
    > Par exemple, un attaquant pourrait créer une page web contenant un formulaire invisible qui, au chargement de la page, soumet automatiquement une requête à la banque de la victime pour transférer de l'argent vers le compte de l'attaquant.
    >
    > Les défenses contre le CSRF incluent :
    > - L'utilisation de jetons anti-CSRF
    > - La vérification de l'en-tête Referer/Origin
    > - L'utilisation de SameSite cookies
    > - La demande de re-authentification pour les actions sensibles

!!! quizdown id="q4"

    ### Quelle méthode est la plus efficace pour prévenir les injections SQL ?
    
    - [ ] Utiliser des noms de tables et de colonnes difficiles à deviner
    - [x] Utiliser des requêtes paramétrées (prepared statements)
    - [ ] Filtrer les caractères spéciaux dans les entrées utilisateur
    - [ ] Limiter la longueur des entrées utilisateur
    
    > **Explication :** L'utilisation de requêtes paramétrées (prepared statements)