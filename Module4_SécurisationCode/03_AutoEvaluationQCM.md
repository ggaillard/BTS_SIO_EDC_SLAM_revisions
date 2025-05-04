# QCM d'auto-évaluation - Sécurisation du code et prévention des vulnérabilités

Ce QCM vous permet de vérifier votre compréhension des notions abordées dans ce module. Répondez aux questions pour évaluer votre progression.

!!! quizdown id="qa1"

    ### Quel code PHP est vulnérable à une injection SQL ?
    
    - [x] `$query = "SELECT * FROM users WHERE username = '" . $_POST['username'] . "'";`
    - [ ] `$stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?"); $stmt->execute([$_POST['username']]);`
    - [ ] `$username = filter_input(INPUT_POST, 'username', FILTER_SANITIZE_STRING); $query = "SELECT * FROM users WHERE username = '$username'";`
    - [ ] `$query = "SELECT * FROM users WHERE username = " . $pdo->quote($_POST['username']);`
    
    > **Explication :** Le premier exemple est vulnérable car il insère directement la valeur de `$_POST['username']` dans la requête SQL sans aucune validation ni échappement. Un attaquant pourrait saisir `' OR '1'='1` pour obtenir tous les enregistrements.
    >
    > Les autres options utilisent des méthodes de protection :
    > - La deuxième utilise une requête préparée avec un paramètre (méthode recommandée)
    > - La troisième filtre l'entrée (bien que `FILTER_SANITIZE_STRING` soit déprécié en PHP 8.1+)
    > - La quatrième utilise la méthode `quote()` qui échappe correctement les caractères spéciaux

!!! quizdown id="qa2"

    ### Quelle méthode permet de protéger une application contre une attaque XSS stockée ?
    
    - [ ] Utiliser un certificat SSL/TLS
    - [ ] Implémenter un contrôle d'accès strict
    - [x] Utiliser des fonctions d'échappement HTML (comme htmlspecialchars) lors de l'affichage des données
    - [ ] Limiter le nombre de requêtes par IP
    
    > **Explication :** Pour protéger une application contre les attaques XSS stockées (où le code malveillant est enregistré en base de données puis affiché à d'autres utilisateurs), il faut échapper les caractères spéciaux HTML lors de l'affichage des données. Par exemple, en PHP, la fonction `htmlspecialchars()` convertit les caractères spéciaux comme `<` en `&lt;`, ce qui empêche l'exécution de code JavaScript.
    >
    > Les autres méthodes ne protègent pas contre les XSS :
    > - SSL/TLS chiffre les communications mais n'empêche pas l'exécution de code malveillant déjà présent dans l'application
    > - Le contrôle d'accès limite qui peut accéder à quoi, mais pas le contenu des données affichées
    > - La limitation des requêtes par IP est une protection contre les attaques par force brute ou DoS

!!! quizdown id="qa3"

    ### Comment implémenter correctement une vérification de jeton anti-CSRF ?
    
    - [ ] Stocker le jeton dans une variable JavaScript accessible depuis le navigateur
    - [ ] Utiliser un jeton identique pour tous les utilisateurs pour simplifier la vérification
    - [ ] Générer un nouveau jeton après chaque requête pour améliorer la sécurité
    - [x] Générer un jeton unique, le stocker en session et l'inclure dans un champ caché du formulaire
    
    > **Explication :** La méthode correcte pour implémenter un jeton anti-CSRF consiste à :
    > 1. Générer un jeton aléatoire unique pour chaque session utilisateur
    > 2. Stocker ce jeton côté serveur (généralement dans la session)
    > 3. Inclure ce jeton dans un champ caché des formulaires HTML ou dans les en-têtes des requêtes AJAX
    > 4. Vérifier côté serveur que le jeton reçu dans la requête correspond à celui stocké en session
    >
    > Les autres approches sont problématiques :
    > - Un jeton accessible en JavaScript peut être volé par une attaque XSS
    > - Un jeton identique pour tous les utilisateurs n'offre aucune protection
    > - Générer un nouveau jeton après chaque requête peut causer des problèmes avec le bouton "retour" du navigateur et les onglets multiples

!!! quizdown id="qa4"

    ### Quelle pratique peut aider à prévenir les vulnérabilités de désérialisation non sécurisée ?
    
    - [ ] Utiliser exclusivement le chiffrement symétrique
    - [x] Vérifier l'intégrité des données avant la désérialisation et utiliser des formats d'échange de données sécurisés
    - [ ] Désérialiser tous les objets dans un thread séparé
    - [ ] Toujours utiliser la sérialisation native du langage de programmation
    
    > **Explication :** Les vulnérabilités de désérialisation non sécurisée sont dangereuses car elles peuvent permettre l'exécution de code arbitraire. Pour les prévenir, il est recommandé de :
    >
    > - Vérifier l'intégrité des données avant la désérialisation (par exemple avec une signature numérique)
    > - Préférer des formats d'échange de données sécurisés comme JSON sans code dynamique
    > - Ne pas désérialiser des données provenant de sources non fiables
    > - Utiliser des bibliothèques de désérialisation sécurisées et à jour
    > - Implémenter des vérifications de type et des validations strictes
    >
    > La désérialisation dans un thread séparé n'empêche pas l'exécution de code malveillant, et la sérialisation native peut justement être vulnérable dans certains langages.

!!! quizdown id="qa5"

    ### Quelle méthode est efficace pour prévenir les attaques par inclusion de fichier (File Inclusion) ?
    
    - [ ] Utiliser exclusivement le protocole HTTPS
    - [ ] Limiter la taille des fichiers uploadés
    - [x] Valider et restreindre les noms de fichiers à une liste blanche (whitelist)
    - [ ] Encoder les noms de fichiers en Base64
    
    > **Explication :** Les attaques par inclusion de fichier (Local File Inclusion - LFI ou Remote File Inclusion - RFI) exploitent les fonctionnalités d'inclusion dynamique de fichiers en manipulant les paramètres pour accéder à des fichiers non autorisés ou exécuter du code malveillant.
    >
    > La validation stricte des noms de fichiers et l'utilisation d'une liste blanche (whitelist) sont les méthodes les plus efficaces :
    > - Vérifier que le fichier est dans un répertoire autorisé (pas de traversée de répertoires avec `../`)
    > - Limiter les inclusions à une liste prédéfinie de fichiers
    > - Éviter d'utiliser des entrées utilisateur pour déterminer le fichier à inclure
    >
    > Les autres méthodes ne protègent pas contre ce type d'attaque : HTTPS sécurise la communication mais pas les inclusions de fichiers, limiter la taille concerne les uploads, et l'encodage Base64 peut être décodé facilement.

!!! quizdown id="qa6"

    ### Qu'est-ce que la validation côté serveur des entrées utilisateur ?
    
    - [ ] Une technique pour améliorer les performances des applications web
    - [ ] Une vérification effectuée uniquement par le navigateur
    - [x] Un processus qui vérifie que les données reçues du client sont conformes aux attentes avant leur traitement
    - [ ] Une méthode pour compresser les données transmises entre le client et le serveur
    
    > **Explication :** La validation côté serveur des entrées utilisateur est un processus essentiel qui vérifie que les données reçues du client sont conformes aux attentes (type, format, longueur, etc.) avant leur traitement. C'est une mesure de sécurité fondamentale car :
    >
    > - La validation côté client (JavaScript) peut être contournée facilement
    > - Toutes les données provenant du client doivent être considérées comme potentiellement malveillantes
    > - C'est la dernière ligne de défense avant le traitement des données
    >
    > La validation peut inclure :
    > - Vérification du type de données
    > - Vérification de format (par exemple, email, date, code postal)
    > - Vérification de plage ou de longueur
    > - Vérification par rapport à une liste blanche de valeurs autorisées

!!! quizdown id="qa7"

    ### Quel est le but d'un test de pénétration (pentest) dans le cycle de développement sécurisé ?
    
    - [ ] Tester les performances de l'application sous charge
    - [ ] Vérifier la compatibilité de l'application avec différents navigateurs
    - [x] Identifier les vulnérabilités de sécurité en simulant des attaques réelles
    - [ ] Valider que l'application répond aux exigences fonctionnelles
    
    > **Explication :** Un test de pénétration (pentest) a pour but d'identifier les vulnérabilités de sécurité en simulant des attaques réelles qu'un attaquant pourrait mener. Il est généralement réalisé par des experts en sécurité qui utilisent des techniques similaires à celles des hackers mais avec l'autorisation explicite du propriétaire du système.
    >
    > Dans le cycle de développement sécurisé, les pentests interviennent généralement :
    > - Après les tests de sécurité automatisés (comme l'analyse statique de code)
    > - Avant la mise en production
    > - Périodiquement sur les systèmes en production
    >
    > Ils permettent de découvrir des vulnérabilités que les outils automatisés ne peuvent pas détecter et offrent une vision plus réaliste de l'exposition aux menaces.

!!! quizdown id="qa8"

    ### Quelle est la meilleure approche pour gérer les erreurs dans une application en production ?
    
    - [ ] Désactiver tous les messages d'erreur pour éviter de donner des informations aux attaquants
    - [ ] Afficher des messages d'erreur détaillés pour aider à résoudre les problèmes rapidement
    - [x] Afficher des messages génériques aux utilisateurs et journaliser les détails pour les développeurs
    - [ ] Utiliser les mêmes messages d'erreur pour tous les types d'erreurs
    
    > **Explication :** La meilleure approche pour gérer les erreurs en production est d'afficher des messages génériques aux utilisateurs tout en journalisant les détails techniques pour les développeurs. Cette approche :
    >
    > - Évite de divulguer des informations sensibles qui pourraient aider un attaquant (comme des noms de tables, des versions de composants, des structures de répertoires)
    > - Fournit une expérience utilisateur acceptable en informant qu'une erreur s'est produite
    > - Conserve toutes les informations nécessaires au diagnostic et à la correction du problème
    >
    > Désactiver complètement les messages d'erreur dégrade l'expérience utilisateur, tandis qu'afficher des détails techniques expose des informations sensibles.

## Interprétation de votre score

- **7-8/8** : Excellent ! Vous avez une très bonne compréhension des principes de sécurisation du code et de prévention des vulnérabilités.
  
- **5-6/8** : Bon travail ! Vous maîtrisez les concepts essentiels mais quelques points méritent d'être revus.
  
- **3-4/8** : Des bases solides, mais plusieurs notions importantes nécessitent une révision.
  
- **0-2/8** : Il est recommandé de revoir l'ensemble du module pour consolider vos connaissances.

## Points clés à retenir

1. **Validez et assainissez toujours les entrées utilisateur**, de préférence côté serveur

2. **Utilisez des requêtes paramétrées** pour prévenir les injections SQL

3. **Échappez les sorties** pour prévenir les attaques XSS

4. **Implémentez des jetons anti-CSRF** pour les formulaires et actions sensibles

5. **Gérez correctement les erreurs** en production pour ne pas exposer d'informations sensibles

## Pour aller plus loin

- Familiarisez-vous avec l'OWASP Top 10, une liste des vulnérabilités web les plus critiques
- Pratiquez le développement sécurisé sur des plateformes comme OWASP WebGoat
- Intégrez des outils d'analyse statique et dynamique dans votre cycle de développement
- Restez informé des nouvelles vulnérabilités et des bonnes pratiques via des sites spécialisés