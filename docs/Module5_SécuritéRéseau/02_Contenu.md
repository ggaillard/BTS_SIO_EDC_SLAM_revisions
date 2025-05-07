# Module 5 : Sécurité des applications et des services web

## Exercice 5.1 : Configuration des en-têtes de sécurité HTTP (20 min)

### Rappel théorique
Les en-têtes de sécurité HTTP sont des directives envoyées par le serveur web au navigateur client pour renforcer la sécurité d'une application web. Ils constituent une couche de défense supplémentaire contre diverses attaques web comme le XSS, le clickjacking ou les fuites d'informations. Voici les en-têtes les plus importants :

- **Content-Security-Policy (CSP)** : Contrôle les ressources que le navigateur est autorisé à charger
- **X-XSS-Protection** : Active la protection intégrée du navigateur contre les attaques XSS
- **X-Content-Type-Options** : Empêche le navigateur de deviner le type MIME des ressources
- **X-Frame-Options** : Protège contre les attaques de type clickjacking
- **Strict-Transport-Security (HSTS)** : Force les connexions HTTPS
- **Referrer-Policy** : Contrôle les informations de référent transmises lors de la navigation

### Énoncé

Vous développez une application web de gestion de tickets pour un service client. Cette application manipule des données sensibles comme les informations client et l'historique des demandes.

1. Proposez une configuration appropriée des en-têtes de sécurité HTTP pour cette application
2. Expliquez le rôle de chaque en-tête et les protections qu'il apporte
3. Implémentez ces en-têtes dans un environnement PHP (ou le langage de votre choix)

### Correction

#### 1. Configuration des en-têtes de sécurité

```php
// Content-Security-Policy
header("Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted-cdn.com; style-src 'self' https://trusted-cdn.com; img-src 'self' data:; connect-src 'self'; font-src 'self'; object-src 'none'; media-src 'self'; frame-src 'none'; frame-ancestors 'none'; form-action 'self';");

// Protection XSS
header("X-XSS-Protection: 1; mode=block");

// Empêcher le MIME sniffing
header("X-Content-Type-Options: nosniff");

// Protection contre le clickjacking
header("X-Frame-Options: DENY");

// Forcer HTTPS
header("Strict-Transport-Security: max-age=31536000; includeSubDomains; preload");

// Contrôler les informations de référent
header("Referrer-Policy: strict-origin-when-cross-origin");

// Protection des cookies
header("Set-Cookie: session=123; HttpOnly; Secure; SameSite=Strict");
```

#### 2. Rôle de chaque en-tête

1. **Content-Security-Policy** : 
   - Définit les sources fiables pour chaque type de contenu
   - Bloque l'exécution de scripts non autorisés et prévient les attaques XSS
   - Empêche le chargement de ressources depuis des domaines non approuvés

2. **X-XSS-Protection** : 
   - Active la protection contre les XSS intégrée aux navigateurs
   - `mode=block` arrête complètement le rendu de la page en cas de détection d'attaque

3. **X-Content-Type-Options** : 
   - Empêche le navigateur de "deviner" le type MIME d'une ressource
   - Prévient les attaques basées sur le MIME sniffing

4. **X-Frame-Options** : 
   - Empêche l'application d'être chargée dans un iframe
   - Protège contre les attaques de clickjacking

5. **Strict-Transport-Security** : 
   - Force le navigateur à utiliser HTTPS pour toutes les requêtes
   - Protège contre les attaques de déclassement HTTPS vers HTTP
   - `includeSubDomains` applique la politique à tous les sous-domaines
   - `preload` permet l'inclusion dans la liste de préchargement HSTS des navigateurs

6. **Referrer-Policy** : 
   - Contrôle les informations d'origine transmises lors de la navigation
   - Protège les informations sensibles présentes dans les URLs

7. **Set-Cookie avec attributs de sécurité** : 
   - `HttpOnly` empêche l'accès aux cookies via JavaScript
   - `Secure` limite l'envoi des cookies aux connexions HTTPS
   - `SameSite=Strict` protège contre les attaques CSRF

#### 3. Implémentation dans différents environnements

**PHP** (comme montré ci-dessus)

**Node.js (Express)**
```javascript
const express = require('express');
const helmet = require('helmet');
const app = express();

// Utilisation de helmet pour configurer automatiquement les en-têtes de sécurité
app.use(helmet());

// Personnalisation supplémentaire si nécessaire
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "https://trusted-cdn.com"],
    // Autres directives...
  }
}));
```

**Java (Spring)**
```java
@Configuration
public class WebSecurityConfig {
    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return (web) -> web.httpStrictTransportSecurity().maxAgeInSeconds(31536000)
                           .includeSubDomains(true)
                           .preload(true)
                           .and()
                           .contentSecurityPolicy("default-src 'self'; script-src 'self' https://trusted-cdn.com;")
                           // Autres configurations...
                           ;
    }
}
```

## Exercice 5.2 : Sécurisation des API REST (20 min)

### Rappel théorique
Les API REST (Representational State Transfer) sont omniprésentes dans le développement d'applications modernes. Leur sécurisation est cruciale car elles exposent souvent des données sensibles et des fonctionnalités critiques.

Les principales mesures de sécurité pour les API REST incluent :
- **Authentification** : Vérifier l'identité de l'appelant (JWT, OAuth 2.0, clés API)
- **Autorisation** : Vérifier les droits d'accès aux ressources
- **Validation des entrées** : Prévenir les injections et autres attaques
- **Chiffrement** : Protéger les données en transit (HTTPS)
- **Limitation de débit** : Prévenir les abus et les attaques par déni de service
- **Journalisation et surveillance** : Détecter les comportements suspects

### Énoncé

Vous développez une API REST pour une application de gestion de projets. Cette API permet aux utilisateurs de créer, lire, mettre à jour et supprimer des projets et des tâches.

1. Identifiez les risques de sécurité spécifiques à cette API
2. Proposez une stratégie d'authentification et d'autorisation adaptée
3. Implémentez un exemple de validation des entrées et de limitation de débit

### Correction

#### 1. Risques de sécurité spécifiques

- **Accès non autorisé aux données** : Un utilisateur pourrait accéder aux projets ou tâches d'autres utilisateurs
- **Élévation de privilèges** : Un utilisateur pourrait modifier ses droits ou accéder à des fonctionnalités administratives
- **Injection de données malveillantes** : Insertion de code malveillant dans les champs de titre ou description
- **Exposition excessive d'informations** : Retour de données sensibles dans les réponses (métadonnées, informations de débogage)
- **Attaques par force brute** : Tentatives répétées d'authentification
- **Attaques par déni de service** : Surcharge de l'API par de nombreuses requêtes
- **Man-in-the-Middle** : Interception des communications non chiffrées

#### 2. Stratégie d'authentification et d'autorisation

**Authentification**
- Utilisation de JWT (JSON Web Tokens) avec une courte durée de validité (15-30 minutes)
- Mise en place d'un mécanisme de rafraîchissement de token sécurisé
- Authentification à deux facteurs pour les actions sensibles (suppression de projet, modification des membres)

**Autorisation**
- Modèle RBAC (Role-Based Access Control) avec les rôles :
  * Admin : accès complet à tous les projets et utilisateurs
  * Chef de projet : CRUD sur ses projets et leurs tâches
  * Membre : lecture complète, création/modification de tâches, pas de suppression
  * Observateur : lecture seule

- Vérification d'autorisation à deux niveaux :
  1. Niveau global : le rôle a-t-il accès à cette ressource ?
  2. Niveau ressource : l'utilisateur a-t-il une relation avec cette ressource spécifique ?

**Exemple d'implémentation en pseudo-code**
```javascript
// Middleware d'authentification
function authenticate(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Non authentifié' });
  }
  
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Token invalide' });
  }
}

// Middleware d'autorisation
function authorize(requiredRole) {
  return (req, res, next) => {
    if (!req.user || !hasRole(req.user, requiredRole)) {
      return res.status(403).json({ error: 'Accès non autorisé' });
    }
    next();
  };
}

// Middleware d'autorisation au niveau ressource
function authorizeProjectAccess(req, res, next) {
  const projectId = req.params.projectId;
  const userId = req.user.id;
  
  ProjectMember.findOne({ where: { projectId, userId } })
    .then(membership => {
      if (!membership) {
        return res.status(403).json({ error: 'Accès non autorisé à ce projet' });
      }
      req.projectRole = membership.role;
      next();
    });
}

// Routes avec authentification et autorisation
app.get('/projects', authenticate, authorize('member'), getProjects);
app.post('/projects', authenticate, authorize('project_manager'), createProject);
app.get('/projects/:projectId', authenticate, authorizeProjectAccess, getProject);
app.delete('/projects/:projectId', authenticate, authorize('admin'), deleteProject);
```

#### 3. Validation des entrées et limitation de débit

**Validation des entrées**
```javascript
const { body, validationResult } = require('express-validator');

// Middleware de validation pour la création/mise à jour de projet
const validateProject = [
  body('name').isString().trim().isLength({ min: 3, max: 100 })
    .withMessage('Le nom doit contenir entre 3 et 100 caractères'),
  body('description').optional().isString().trim().isLength({ max: 1000 })
    .withMessage('La description ne doit pas dépasser 1000 caractères'),
  body('startDate').optional().isISO8601().toDate()
    .withMessage('La date de début doit être une date valide'),
  body('endDate').optional().isISO8601().toDate()
    .custom((value, { req }) => {
      if (value && req.body.startDate && new Date(value) <= new Date(req.body.startDate)) {
        throw new Error('La date de fin doit être postérieure à la date de début');
      }
      return true;
    }),
  body('members').optional().isArray()
    .withMessage('Les membres doivent être un tableau'),
  body('members.*.id').optional().isInt()
    .withMessage('L\'ID du membre doit être un entier'),
  body('members.*.role').optional().isIn(['admin', 'member', 'observer'])
    .withMessage('Le rôle doit être admin, member ou observer'),
  
  // Middleware pour vérifier les résultats de validation
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

// Utilisation du middleware de validation
app.post('/projects', authenticate, authorize('project_manager'), validateProject, createProject);
app.put('/projects/:projectId', authenticate, authorizeProjectAccess, validateProject, updateProject);
```

**Limitation de débit**
```javascript
const rateLimit = require('express-rate-limit');

// Limitation globale
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requêtes par fenêtre par IP
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Trop de requêtes, veuillez réessayer plus tard' }
});

// Limitation spécifique pour l'authentification
const authLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 heure
  max: 5, // 5 tentatives par heure par IP
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Trop de tentatives de connexion, veuillez réessayer plus tard' }
});

// Application des limiteurs
app.use(globalLimiter); // Limitation globale
app.post('/auth/login', authLimiter, login); // Limitation spécifique
```

## Exercice 5.3 : Sécurisation du déploiement d'applications (20 min)

### Rappel théorique
La sécurité du déploiement d'applications est un aspect crucial du cycle de développement sécurisé (SDLC). Elle comprend plusieurs aspects :

- **Intégration continue et déploiement continu (CI/CD)** : Automatisation des tests de sécurité
- **Analyse de code statique et dynamique** : Détection des vulnérabilités avant déploiement
- **Gestion des dépendances** : Vérification des bibliothèques tierces
- **Gestion des secrets** : Protection des identifiants et clés d'API
- **Configuration sécurisée des environnements** : Durcissement des serveurs et services

### Énoncé

Vous êtes responsable du déploiement d'une application web développée en PHP/Laravel (ou framework de votre choix) qui sera hébergée sur un serveur cloud.

1. Proposez une stratégie CI/CD intégrant des contrôles de sécurité
2. Décrivez comment gérer les secrets (clés API, identifiants de base de données) de manière sécurisée
3. Proposez une checklist de sécurité pré-déploiement

### Correction

#### 1. Stratégie CI/CD avec contrôles de sécurité

**Pipeline CI/CD avec GitHub Actions**
```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]

jobs:
  security-checks:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      # Installation des dépendances
      - name: Install dependencies
        run: composer install --no-dev --no-interaction --prefer-dist
      
      # Analyse statique du code
      - name: PHP Static Analysis
        run: ./vendor/bin/phpstan analyse src tests
      
      # Vérification des vulnérabilités des dépendances
      - name: Security Check
        run: composer audit
      
      # Tests de sécurité automatisés
      - name: Run Security Tests
        run: ./vendor/bin/phpunit --testsuite=security
  
  build-and-test:
    needs: security-checks
    runs-on: ubuntu-latest
    steps:
      # Tests unitaires et d'intégration standard
      - name: Run Tests
        run: ./vendor/bin/phpunit
      
      # Construction des artefacts
      - name: Build Application
        run: npm run build
  
  deploy:
    needs: build-and-test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      # Déploiement avec configuration sécurisée
      - name: Deploy to Production
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          key: ${{ secrets.SSH_KEY }}
          script: |
            cd /var/www/app
            git pull origin main
            composer install --no-dev
            php artisan migrate --force
            php artisan config:cache
            php artisan route:cache
            php artisan view:cache
```

**Intégration avec des outils de sécurité supplémentaires**
- SAST (Static Application Security Testing) : SonarQube, Snyk, ou RIPS
- DAST (Dynamic Application Security Testing) : OWASP ZAP
- SCA (Software Composition Analysis) : Dependabot, Snyk

#### 2. Gestion sécurisée des secrets

**Approche recommandée**
1. **Utilisation d'un gestionnaire de secrets**
   - AWS Secrets Manager, HashiCorp Vault, ou Azure Key Vault
   - Rotation automatique des secrets
   - Accès aux secrets basé sur les rôles

2. **Variables d'environnement sécurisées**
   - Ne jamais stocker les secrets dans le code source
   - Utiliser des variables d'environnement injectées au moment du déploiement
   - Fichier `.env` uniquement pour le développement local, jamais commité

3. **Gestion des secrets dans le pipeline CI/CD**
   - Secrets stockés dans GitHub Secrets ou équivalent
   - Injection sécurisée lors du déploiement
   - Accès limité aux actions qui en ont besoin

**Exemple avec Laravel**
```php
// config/database.php
'mysql' => [
    'driver' => 'mysql',
    'host' => env('DB_HOST', '127.0.0.1'),
    'port' => env('DB_PORT', '3306'),
    'database' => env('DB_DATABASE', 'forge'),
    'username' => env('DB_USERNAME', 'forge'),
    'password' => env('DB_PASSWORD', ''),
    'unix_socket' => env('DB_SOCKET', ''),
    'charset' => 'utf8mb4',
    'collation' => 'utf8mb4_unicode_ci',
    'prefix' => '',
    'strict' => true,
    'engine' => null,
],
```

**Scénario de déploiement**
1. Les secrets sont stockés dans AWS Secrets Manager
2. Lors du déploiement, un script récupère les secrets et les injecte dans le fichier `.env` sur le serveur
3. L'application charge les variables d'environnement au démarrage
4. Le fichier `.env` est protégé avec des permissions strictes (600)

#### 3. Checklist de sécurité pré-déploiement

**Sécurité du code et des dépendances**
- [ ] Analyse statique de code effectuée et aucune vulnérabilité critique détectée
- [ ] Audit des dépendances effectué et aucune CVE critique
- [ ] Tests de sécurité automatisés passés avec succès
- [ ] Revue de code par un pair avec focus sur la sécurité

**Configuration de l'application**
- [ ] Mode débogage désactivé en production
- [ ] En-têtes de sécurité HTTP configurés
- [ ] Protection CSRF activée
- [ ] Validation des entrées mise en place
- [ ] Gestion des erreurs configurée pour ne pas exposer d'informations sensibles
- [ ] Sessions configurées avec les attributs de sécurité appropriés

**Sécurité de l'infrastructure**
- [ ] Serveur web configuré avec HTTPS obligatoire
- [ ] Certificats SSL/TLS valides et à jour
- [ ] Pare-feu configuré pour n'exposer que les ports nécessaires
- [ ] Permissions de fichiers restrictives
- [ ] Services non essentiels désactivés

**Gestion des accès**
- [ ] Comptes de service avec privilèges minimaux
- [ ] Authentification forte pour les accès admin
- [ ] Journalisation des accès activée
- [ ] Stratégie de sauvegarde et de restauration testée

**Suivi et surveillance**
- [ ] Système de journalisation configuré
- [ ] Alertes pour les comportements suspects
- [ ] Surveillance des performances mise en place
- [ ] Plan de réponse aux incidents défini
```

