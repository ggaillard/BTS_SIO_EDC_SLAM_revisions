# QCM d'auto-évaluation - Analyse des risques

Ce QCM vous permet de vérifier votre compréhension des notions abordées dans ce module. Répondez aux questions pour évaluer votre progression.

!!! quizdown id="qa1"

    ### Un système de paiement en ligne a besoin d'un niveau élevé de :
    
    - [ ] Disponibilité uniquement
    - [ ] Intégrité uniquement
    - [ ] Disponibilité et intégrité uniquement
    - [x] Disponibilité, intégrité et confidentialité
    
    > **Explication :** Un système de paiement en ligne nécessite :
    > - Une **disponibilité** élevée car les transactions doivent pouvoir être effectuées à tout moment
    > - Une **intégrité** élevée car les montants des transactions ne doivent pas être altérés
    > - Une **confidentialité** élevée car les données bancaires sont des informations sensibles
    > 
    > La preuve est également importante (pour éviter la répudiation des transactions), mais les trois autres critères sont particulièrement critiques pour ce type de système.

!!! quizdown id="qa2"

    ### Quelle vulnérabilité correspond à la catégorie "Information Disclosure" du modèle STRIDE ?
    
    - [ ] Un attaquant modifie le prix d'un produit dans la base de données
    - [ ] Un attaquant se connecte avec les identifiants d'un autre utilisateur
    - [x] Un attaquant accède à la liste des clients et leurs coordonnées
    - [ ] Un attaquant rend le site web indisponible par une attaque DDoS
    
    > **Explication :** Dans le modèle STRIDE :
    > - La modification des prix correspond à du **Tampering** (altération de données)
    > - L'utilisation d'identifiants volés correspond à du **Spoofing** (usurpation d'identité)
    > - L'accès non autorisé à des informations correspond à de l'**Information Disclosure** (divulgation d'informations)
    > - Rendre un site indisponible correspond à du **Denial of Service** (déni de service)

!!! quizdown id="qa3"

    ### Parmi ces mesures, laquelle est considérée comme corrective ?
    
    - [ ] Mise en place d'un pare-feu
    - [ ] Formation des utilisateurs à la sécurité
    - [x] Restauration des données à partir d'une sauvegarde
    - [ ] Journalisation des accès au système
    
    > **Explication :**
    > - Un **pare-feu** est une mesure préventive qui bloque les accès non autorisés
    > - La **formation des utilisateurs** est une mesure préventive qui réduit les risques d'erreurs humaines
    > - La **restauration des données** est une mesure corrective qui permet de revenir à un état fonctionnel après un incident
    > - La **journalisation** est une mesure détective qui permet de détecter et analyser les incidents

!!! quizdown id="qa4"

    ### Quelle méthode serait la plus appropriée pour évaluer les besoins de sécurité d'une application ?
    
    - [ ] Analyse des logs système
    - [ ] Test de pénétration
    - [x] Analyse d'impact et évaluation des risques
    - [ ] Audit de conformité RGPD
    
    > **Explication :**
    > - L'**analyse des logs** permet de détecter des incidents de sécurité mais pas d'évaluer les besoins
    > - Le **test de pénétration** permet d'identifier des vulnérabilités techniques mais pas de déterminer les besoins de sécurité
    > - L'**analyse d'impact et évaluation des risques** permet d'identifier les actifs à protéger, les menaces potentielles et leurs impacts, ce qui est fondamental pour déterminer les besoins de sécurité
    > - L'**audit de conformité RGPD** vérifie le respect de la réglementation sur les données personnelles, mais ne couvre pas tous les aspects de la sécurité

!!! quizdown id="qa5"

    ### Dans le contexte d'une attaque par injection SQL, quelle mesure préventive est la plus efficace ?
    
    - [ ] Surveillance des logs de la base de données
    - [x] Utilisation de requêtes préparées
    - [ ] Sauvegarde régulière de la base de données
    - [ ] Limitation du nombre de requêtes par utilisateur
    
    > **Explication :**
    > - La **surveillance des logs** est une mesure détective, pas préventive
    > - Les **requêtes préparées** séparent le code SQL des données, empêchant les injections SQL à la source
    > - La **sauvegarde** est une mesure corrective qui permet de restaurer les données après une attaque
    > - La **limitation des requêtes** peut réduire l'impact d'attaques par force brute mais n'empêche pas les injections SQL

!!! quizdown id="qa6"

    ### Pour un système de vote électronique, quel critère DICP est particulièrement important pour garantir qu'un vote ne peut pas être modifié ?
    
    - [ ] Disponibilité
    - [x] Intégrité
    - [ ] Confidentialité
    - [ ] Preuve
    
    > **Explication :** Pour un système de vote électronique :
    > - L'**intégrité** garantit que les votes ne peuvent pas être modifiés une fois enregistrés
    > - La **confidentialité** assure le secret du vote
    > - La **disponibilité** permet aux électeurs de voter quand ils le souhaitent
    > - La **preuve** permet de vérifier qu'un vote a bien été pris en compte
    >
    > L'intégrité est particulièrement critique car elle garantit que la volonté des électeurs est respectée.

!!! quizdown id="qa7"

    ### Quelle affirmation concernant les événements redoutés est correcte ?
    
    - [ ] Un événement redouté est toujours causé par une attaque externe
    - [x] Un événement redouté peut avoir plusieurs causes différentes
    - [ ] Un événement redouté a toujours un impact faible sur l'organisation
    - [ ] Un événement redouté ne concerne que la confidentialité des données
    
    > **Explication :**
    > - Un événement redouté peut être causé par des attaques externes, mais aussi par des erreurs humaines, des pannes matérielles, des catastrophes naturelles, etc.
    > - Un même événement redouté (par exemple : "les données client sont divulguées") peut avoir diverses causes (hacking, erreur d'un employé, perte d'un appareil...)
    > - L'impact peut être faible, moyen ou élevé selon le contexte
    > - Les événements redoutés peuvent concerner tous les critères DICP, pas uniquement la confidentialité

!!! quizdown id="qa8"

    ### Qu'est-ce qu'une "menace" dans le contexte de l'analyse des risques ?
    
    - [ ] Une vulnérabilité dans un système informatique
    - [x] Un événement susceptible d'avoir un impact négatif sur un actif
    - [ ] Une mesure de protection contre les attaques
    - [ ] Un indicateur de performance de sécurité
    
    > **Explication :** Dans le contexte de l'analyse des risques :
    > - Une **menace** est un événement potentiel qui peut porter atteinte à la sécurité (ex: piratage, incendie)
    > - Une **vulnérabilité** est une faiblesse qui peut être exploitée par une menace
    > - Une **mesure de protection** (ou contrôle) est mise en place pour réduire les risques
    > - Un **risque** est la combinaison d'une menace, d'une vulnérabilité et d'un impact potentiel

## Interprétation de votre score

- **7-8/8** : Excellent ! Vous avez une très bonne compréhension des concepts d'analyse des risques.
  
- **5-6/8** : Bon travail ! Vous maîtrisez les concepts essentiels mais quelques points méritent d'être revus.
  
- **3-4/8** : Des bases solides, mais plusieurs notions importantes nécessitent une révision.
  
- **0-2/8** : Il est recommandé de revoir l'ensemble du module pour consolider vos connaissances.

## Points clés à retenir

1. **Analysez toujours les besoins DICP** selon le contexte et les enjeux métier

2. **Catégorisez les menaces** à l'aide de modèles comme STRIDE pour être exhaustif

3. **Mettez en place des mesures de sécurité** préventives, détectives et correctives

4. **Évaluez les risques** en fonction de la probabilité et de l'impact des menaces

5. **Priorisez les actions** en fonction du niveau de risque et des contraintes (coût, temps, ressources)

## Pour aller plus loin

- Familiarisez-vous avec les méthodologies d'analyse de risques comme EBIOS, MEHARI ou ISO 27005
- Entraînez-vous à identifier les risques dans différents contextes métier
- Pratiquez l'évaluation des besoins DICP sur des cas concrets