# QCM de positionnement - Gestion des incidents et conformité orienté SLAM

Ce QCM vous permet d'évaluer vos connaissances avant d'aborder le module. Répondez aux questions puis vérifiez vos réponses pour savoir quels points nécessitent votre attention.

!!! quizdown id="q1"
    
    ### Que signifie SDLC dans le contexte de la sécurité applicative ?
    
    - [ ] Secure Data Link Control
    - [x] Software Development Life Cycle
    - [ ] System Defense Level Certification
    - [ ] Security Detection and Log Collection
    
    > **Explication :** SDLC signifie Software Development Life Cycle (cycle de vie du développement logiciel). Dans le contexte de la sécurité, on parle souvent de Secure SDLC, qui consiste à intégrer la sécurité à chaque étape du cycle de développement, de la conception initiale jusqu'à la maintenance, en passant par le développement, les tests et le déploiement.

!!! quizdown id="q2"

    ### Quelle pratique n'est PAS recommandée lors de la gestion d'un incident de sécurité impliquant une fuite de données dans une application ?
    
    - [ ] Documenter chronologiquement toutes les étapes de l'investigation
    - [ ] Identifier et corriger la vulnérabilité ayant permis l'incident
    - [x] Effacer immédiatement les logs pour empêcher l'attaquant d'y accéder
    - [ ] Notifier les autorités et les personnes concernées conformément au RGPD
    
    > **Explication :** Effacer les logs est une mauvaise pratique car ils constituent des preuves essentielles pour l'investigation de l'incident et peuvent être nécessaires pour des raisons légales ou réglementaires. De plus, cette action pourrait détruire des informations précieuses sur le mode opératoire de l'attaquant et les données compromises.

!!! quizdown id="q3"

    ### Qu'est-ce que le DevSecOps ?
    
    - [ ] Un outil d'analyse de code automatisé
    - [ ] Un framework de test d'intrusion pour applications web
    - [x] Une approche qui intègre la sécurité dans le processus DevOps
    - [ ] Un standard de certification pour les développeurs en sécurité
    
    > **Explication :** DevSecOps est une approche qui intègre la sécurité dans le processus DevOps, en automatisant les contrôles de sécurité tout au long du cycle de développement et d'exploitation des applications. Cela permet d'identifier et de corriger les problèmes de sécurité plus tôt dans le cycle de développement, réduisant ainsi les coûts et les risques.

!!! quizdown id="q4"

    ### Quelle action fait partie d'une analyse post-mortem après un incident de sécurité applicative ?
    
    - [ ] Blâmer publiquement l'équipe responsable de la vulnérabilité
    - [x] Identifier les améliorations à apporter au code et aux processus de développement
    - [ ] Restaurer les systèmes sans analyser la cause première
    - [ ] Imposer immédiatement des changements radicaux dans l'architecture logicielle
    
    > **Explication :** Une bonne analyse post-mortem après un incident se concentre sur l'apprentissage et l'amélioration, pas sur la recherche de coupables. Elle vise à identifier les améliorations à apporter au code, aux pratiques de développement et aux processus pour éviter que des incidents similaires ne se reproduisent à l'avenir. C'est une approche constructive qui permet de renforcer la sécurité des applications.

!!! quizdown id="q5"

    ### Quel élément constitue une preuve d'une violation de données dans une application web ?
    
    - [ ] Un avis personnel d'un développeur sur la gravité de l'incident
    - [ ] Une estimation du coût financier de l'incident
    - [x] Les journaux d'accès à la base de données montrant des requêtes anormales
    - [ ] Un rapport verbal d'un utilisateur signalant un comportement étrange
    
    > **Explication :** Les journaux d'accès à la base de données constituent une preuve technique tangible qui peut montrer des modèles d'accès anormaux, des requêtes malveillantes ou des extractions massives de données caractéristiques d'une violation. Ces logs sont essentiels pour l'investigation, peuvent être analysés de manière objective et servent souvent de preuves dans les enquêtes officielles.

## Interprétation de votre score

- **5/5** : Excellent ! Vous avez déjà une bonne connaissance des principes de gestion des incidents et de conformité appliqués au développement logiciel.
  
- **3-4/5** : Bon travail ! Vous connaissez les bases mais certains concepts méritent d'être approfondis.
  
- **0-2/5** : Ce module sera particulièrement bénéfique pour vous, car il vous permettra d'acquérir les connaissances essentielles sur la gestion des incidents et la conformité dans le contexte du développement logiciel, des compétences fondamentales pour un développeur SLAM.

## Points clés à retenir avant de commencer

- La gestion des incidents dans le développement logiciel implique des processus spécifiques pour détecter, analyser et résoudre les problèmes de sécurité
- L'intégration de la sécurité tout au long du cycle de développement logiciel est essentielle
- La conformité aux réglementations comme le RGPD nécessite des pratiques de développement spécifiques
- Une bonne analyse post-incident permet d'améliorer continuellement la sécurité des applications
- La documentation des incidents de sécurité est cruciale tant pour l'aspect technique que pour la conformité légale