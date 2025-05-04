# QCM de positionnement - Analyse des risques

Ce QCM vous permet d'évaluer vos connaissances avant d'aborder le module. Répondez aux questions puis vérifiez vos réponses pour savoir quels points nécessitent votre attention.

!!! quizdown id="q1"
    
    ### Que signifie l'acronyme DICP en sécurité informatique ?
    
    - [ ] Disponibilité, Intégrité, Confidentialité, Performance
    - [x] Disponibilité, Intégrité, Confidentialité, Preuve
    - [ ] Données, Information, Connaissance, Protection
    - [ ] Défense, Intégrité, Contrôle, Protection
    
    > **Explication :** La réponse correcte est "Disponibilité, Intégrité, Confidentialité, Preuve". Ces quatre critères sont fondamentaux en sécurité informatique :
    > - **Disponibilité** : Les données et services doivent être accessibles quand nécessaire
    > - **Intégrité** : Les données ne doivent pas être altérées
    > - **Confidentialité** : Les données ne doivent être accessibles qu'aux personnes autorisées
    > - **Preuve** (ou traçabilité) : Les actions doivent pouvoir être attribuées à leur auteur

!!! quizdown id="q2"

    ### Parmi ces éléments, lequel n'est PAS une catégorie du modèle STRIDE ?
    
    - [ ] Spoofing (usurpation d'identité)
    - [ ] Tampering (altération de données)
    - [x] Tracking (suivi des utilisateurs)
    - [ ] Elevation of privilege (élévation de privilèges)
    
    > **Explication :** Le modèle STRIDE est un modèle de classification des menaces développé par Microsoft qui comprend :
    > - **S**poofing (usurpation d'identité)
    > - **T**ampering (altération de données)
    > - **R**epudiation (rejet d'une action effectuée)
    > - **I**nformation disclosure (divulgation d'informations)
    > - **D**enial of service (déni de service)
    > - **E**levation of privilege (élévation de privilèges)
    > 
    > "Tracking" n'en fait pas partie - c'est un distracteur.

!!! quizdown id="q3"

    ### Qu'est-ce qu'une mesure préventive en sécurité ?
    
    - [ ] Une mesure qui détecte qu'une attaque a eu lieu
    - [x] Une mesure qui empêche une attaque de réussir
    - [ ] Une mesure qui restaure le système après une attaque
    - [ ] Une mesure qui analyse l'impact d'une attaque
    
    > **Explication :** Les mesures de sécurité peuvent être classées en trois catégories :
    > - **Préventives** : empêchent une attaque de réussir (ex: pare-feu, chiffrement)
    > - **Détectives** : détectent qu'une attaque a eu lieu (ex: IDS, journalisation)
    > - **Correctives** : restaurent le système après une attaque (ex: sauvegarde, plan de reprise)
    >
    > L'analyse d'impact est généralement réalisée avant la mise en place des mesures, lors de l'évaluation des risques.

!!! quizdown id="q4"

    ### Pour un dossier médical électronique, quel critère DICP est généralement considéré comme le plus important ?
    
    - [ ] Disponibilité
    - [x] Intégrité
    - [ ] Confidentialité
    - [ ] Preuve
    
    > **Explication :** Bien que tous les critères soient importants pour un dossier médical :
    > - L'**intégrité** est cruciale car des données médicales erronées peuvent avoir des conséquences fatales (mauvais diagnostic, traitement inapproprié)
    > - La **confidentialité** est aussi très importante en raison du caractère sensible des données médicales
    > - La **disponibilité** est nécessaire pour les soins d'urgence
    > - La **preuve** permet de savoir qui a accédé au dossier
    >
    > Mais l'intégrité est généralement considérée comme prioritaire car des données erronées peuvent directement mettre en danger la vie du patient.

!!! quizdown id="q5"

    ### Qu'est-ce qu'une analyse de risques ?
    
    - [ ] L'identification des vulnérabilités d'un système
    - [x] L'évaluation des menaces potentielles et de leurs impacts
    - [ ] La mise en place de contrôles de sécurité
    - [ ] La détection d'intrusions dans un réseau
    
    > **Explication :** Une analyse de risques est un processus méthodique qui consiste à :
    > 1. Identifier les actifs informationnels
    > 2. Identifier les menaces potentielles
    > 3. Évaluer la probabilité de réalisation des menaces
    > 4. Évaluer l'impact potentiel
    > 5. Déterminer le niveau de risque (généralement probabilité × impact)
    >
    > L'identification des vulnérabilités fait partie de ce processus, mais ne représente pas l'ensemble de l'analyse. La mise en place de contrôles et la détection d'intrusions sont des actions qui suivent l'analyse de risques.

## Interprétation de votre score

- **5/5** : Excellent ! Vous maîtrisez déjà les concepts de base de l'analyse des risques. Ce module vous permettra d'approfondir vos connaissances.
  
- **3-4/5** : Bon travail ! Vous avez de bonnes connaissances de base, mais certains concepts méritent d'être approfondis. Ce module vous aidera à consolider votre compréhension.
  
- **0-2/5** : Ce module sera particulièrement bénéfique pour vous, car il vous permettra d'acquérir les bases essentielles de l'analyse des risques, un domaine fondamental en cybersécurité.

## Points clés à retenir avant de commencer

- L'analyse des risques est un processus méthodique et structuré
- Les critères DICP permettent d'évaluer les besoins de sécurité
- Les mesures de sécurité peuvent être préventives, détectives ou correctives
- Le modèle STRIDE permet de classifier les menaces par catégories
- Le niveau de risque dépend généralement de la probabilité et de l'impact d'une menace