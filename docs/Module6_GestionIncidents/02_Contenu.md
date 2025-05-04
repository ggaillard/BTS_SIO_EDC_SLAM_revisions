## Module 6 : Gestion des incidents et conformité

### Exercice 6.1 : Élaboration d'un plan de réponse aux incidents

**Rappel théorique**
Un plan de réponse aux incidents de sécurité comporte généralement six phases :
1. **Préparation** : mise en place préalable des processus et outils
2. **Identification** : détection et qualification de l'incident
3. **Confinement** : limitation de l'impact et de la propagation
4. **Éradication** : suppression de la menace
5. **Rétablissement** : retour à la normale
6. **Retour d'expérience** : analyse et amélioration continue

**Énoncé**
Pour une entreprise de e-commerce ayant subi une attaque par ransomware :
1. Élaborez un plan de réponse immédiate (premières 24h)
2. Définissez les rôles et responsabilités des membres de l'équipe de réponse
3. Proposez un modèle de communication de crise pour les parties prenantes

**Correction**

1. **Plan de réponse immédiate (24h)** :
   - **H+0-1** : Constatation et alerte de l'équipe de réponse
   - **H+1-2** : Isolation réseau des systèmes affectés et sauvegarde forensique
   - **H+2-4** : Évaluation de l'étendue de la compromission et identification du ransomware
   - **H+4-8** : Constitution de la cellule de crise et décision sur la continuité d'activité
   - **H+8-12** : Mise en œuvre du plan de continuité et préparation des communications
   - **H+12-24** : Début de l'investigation, signalement aux autorités (ANSSI, CNIL)

2. **Rôles et responsabilités** :
   - **Responsable de crise** : Coordination générale et prise de décision
   - **Expert technique** : Analyse technique et actions de confinement
   - **Juriste** : Aspects légaux et réglementaires (RGPD, obligations de notification)
   - **Communicant** : Gestion des communications internes et externes
   - **Responsable métier** : Évaluation de l'impact sur les activités critiques

3. **Modèle de communication** :
   - **Interne** : Message factuel aux employés expliquant les perturbations, les consignes à suivre et les prochaines étapes
   - **Clients** : Information sur les impacts potentiels, mesures prises et canal de suivi
   - **Autorités** : Notification détaillée et transparente conforme aux obligations légales
   - **Partenaires** : Information sur les impacts sur les services partagés et mesures de protection à prendre
   - **Presse** : Communiqué concis évitant les spéculations, focalisé sur les actions engagées

### Exercice 6.2 : Audit de conformité RGPD

**Rappel théorique**
Le RGPD (Règlement Général sur la Protection des Données) impose des obligations aux organisations traitant des données à caractère personnel :
- Licéité, transparence et limitation des finalités du traitement
- Minimisation des données et limitation de la conservation
- Sécurité appropriée et accountability (responsabilité démontrable)
- Respect des droits des personnes (accès, rectification, effacement, etc.)

**Énoncé**
Dans le cadre d'un audit RGPD pour une application de gestion de ressources humaines :
1. Élaborez une grille d'audit pour évaluer la conformité
2. Identifiez trois non-conformités courantes et leurs corrections
3. Proposez une méthode pour maintenir la conformité dans le temps

**Correction**

1. **Grille d'audit RGPD** :

   | Critère | Points de contrôle | Conformité |
   |---------|-------------------|------------|
   | Registre des traitements | Existence, exhaustivité, mise à jour | □ |
   | Information | Mentions légales, politique de confidentialité | □ |
   | Consentement | Mécanisme explicite, tracé, révocable | □ |
   | Sécurité | Chiffrement, contrôle d'accès, PIA | □ |
   | Exercice des droits | Procédure, délais, traçabilité | □ |
   | Sous-traitance | Clauses contractuelles, garanties | □ |
   | Conservation | Durées définies, purge automatique | □ |
   | Violation | Procédure de notification | □ |

2. **Non-conformités courantes et corrections** :
   - **Non-conformité** : Conservation excessive des données RH
     * **Correction** : Définir des durées de conservation par type de données et mettre en place une purge automatique

   - **Non-conformité** : Accès non différencié aux dossiers du personnel
     * **Correction** : Implémenter un contrôle d'accès basé sur les rôles avec cloisonnement par service

   - **Non-conformité** : Absence de journalisation des accès aux données sensibles
     * **Correction** : Déployer un système de logging des consultations/modifications avec horodatage et identité

3. **Méthode pour maintenir la conformité** :
   - Désignation d'un référent RGPD avec formation continue
   - Revue trimestrielle du registre des traitements
   - Tests réguliers des procédures d'exercice des droits
   - Audits internes annuels et externe tous les deux ans
   - Intégration de la conformité dès la conception des évolutions (Privacy by Design)

### Exercice 6.3 : Analyse post-incident

**Rappel théorique**
L'analyse post-incident (ou retour d'expérience) est une phase critique qui permet :
- De comprendre précisément ce qui s'est passé
- D'identifier les lacunes dans la détection et la réponse
- D'améliorer les procédures et les défenses
- De partager les connaissances avec la communauté
- De mettre à jour la politique de sécurité

**Énoncé**
Suite à une compromission de compte privilégié ayant entraîné une fuite de données :
1. Proposez une méthodologie d'analyse post-incident
2. Créez un modèle de rapport d'analyse
3. Suggérez trois améliorations techniques et organisationnelles

**Correction**

1. **Méthodologie d'analyse post-incident** :
   - **Collecte des preuves** : Logs systèmes, réseau, applications, témoignages
   - **Chronologie** : Reconstruction précise des événements
   - **Analyse de la cause racine** : Identification des vulnérabilités exploitées
   - **Évaluation de l'impact** : Quantification des dommages
   - **Évaluation de la réponse** : Efficacité des mesures prises
   - **Élaboration des recommandations** : Mesures préventives et correctives

2. **Modèle de rapport d'analyse** :
   - **Résumé exécutif** : Synthèse pour la direction
   - **Description de l'incident** : Nature, chronologie, impacts
   - **Analyse technique** : Vecteur d'attaque, TTPs (Tactics, Techniques, Procedures)
   - **Évaluation de la réponse** : Forces et faiblesses
   - **Recommandations** : Mesures correctives et préventives
   - **Plan d'action** : Responsables, délais, ressources
   - **Annexes** : Logs, IOCs (Indicators of Compromise), références

3. **Améliorations techniques et organisationnelles** :
   - **Technique** : Déploiement d'une solution PAM (Privileged Access Management) avec authentification multifacteur et sessions enregistrées
   - **Technique** : Implémentation d'un SIEM avec alertes sur les comportements anormaux des comptes privilégiés
   - **Organisationnelle** : Révision de la procédure d'attribution des droits administrateurs avec validation multiple et revue trimestrielle
