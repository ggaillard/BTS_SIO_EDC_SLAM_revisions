# Module 1 : Analyse des risques et besoins de sécurité

## Exercice 1.1 : Évaluation des critères DICP (20 min)

### Rappel théorique
Les quatre critères fondamentaux de la sécurité sont :

   - **Disponibilité** : le service doit être utilisable quand nécessaire
   - **Intégrité** : les données doivent être exactes et complètes
   - **Confidentialité** : les données ne doivent pas être divulguées aux personnes non autorisées
   - **Preuve/Traçabilité** : il doit être possible d'attribuer les actions à leur auteur

L'évaluation de ces critères dépend du contexte métier et des enjeux liés à l'information ou au service.

### Énoncé

Pour chacun des cas d'utilisation suivants, évaluez les besoins en termes de DICP selon l'échelle : 0 (pas important), + (important), ++ (très important). Justifiez brièvement votre évaluation.

1. Un médecin consulte le dossier médical d'un patient
2. Un client effectue un virement bancaire en ligne
3. Un étudiant consulte ses notes sur le portail de l'université
4. Un employé enregistre ses heures de travail dans le système de pointage

<py-terminal id="dicp-exercice">
# Vous pouvez utiliser ce terminal pour prendre des notes ou structurer votre réponse
# Exemple de format pour l'exercice 1:
"""
1. Un médecin consulte le dossier médical d'un patient
   - Disponibilité: ++ (justification...)
   - Intégrité: ++ (justification...)
   - Confidentialité: ++ (justification...)
   - Preuve: + (justification...)
"""
</py-terminal>

### Solution interactive

<py-accordion>
  <py-accordion-item heading="Afficher la correction">
    <h4>1. Un médecin consulte le dossier médical d'un patient</h4>
    <ul>
      <li><strong>Disponibilité</strong> : ++ (Le dossier doit être accessible en permanence, surtout en cas d'urgence)</li>
      <li><strong>Intégrité</strong> : ++ (Des données médicales erronées peuvent avoir des conséquences graves)</li>
      <li><strong>Confidentialité</strong> : ++ (Les données médicales sont sensibles et protégées par le secret médical)</li>
      <li><strong>Preuve</strong> : ++ (Il est essentiel de tracer qui a accédé aux dossiers médicaux pour des raisons légales et éthiques)</li>
    </ul>

    <h4>2. Un client effectue un virement bancaire en ligne</h4>
    <ul>
      <li><strong>Disponibilité</strong> : + (Le service doit être disponible, mais une indisponibilité temporaire est acceptable)</li>
      <li><strong>Intégrité</strong> : ++ (Le montant et les coordonnées bancaires doivent être exacts)</li>
      <li><strong>Confidentialité</strong> : ++ (Les informations bancaires sont confidentielles)</li>
      <li><strong>Preuve</strong> : ++ (Les transactions bancaires doivent être traçables pour des raisons légales)</li>
    </ul>

    <h4>3. Un étudiant consulte ses notes sur le portail de l'université</h4>
    <ul>
      <li><strong>Disponibilité</strong> : + (Une indisponibilité temporaire est acceptable)</li>
      <li><strong>Intégrité</strong> : ++ (Les notes doivent être exactes)</li>
      <li><strong>Confidentialité</strong> : + (Les notes sont personnelles mais pas hautement sensibles)</li>
      <li><strong>Preuve</strong> : + (Il est important de savoir qui a consulté ou modifié les notes)</li>
    </ul>

    <h4>4. Un employé enregistre ses heures de travail dans le système de pointage</h4>
    <ul>
      <li><strong>Disponibilité</strong> : + (Le système doit être disponible pendant les heures de travail)</li>
      <li><strong>Intégrité</strong> : ++ (Les heures doivent être exactes pour la paie et les statistiques)</li>
      <li><strong>Confidentialité</strong> : + (Ces informations sont relativement confidentielles)</li>
      <li><strong>Preuve</strong> : ++ (Il est important de savoir qui a enregistré quelles heures pour éviter la fraude)</li>
    </ul>
  </py-accordion-item>
</py-accordion>

## Exercice 1.2 : Identification des menaces (20 min)

### Rappel théorique
Une menace est un scénario qui peut porter atteinte à la sécurité du système. Le modèle STRIDE permet de catégoriser les menaces :

- **Spoofing** (usurpation d'identité) : se faire passer pour quelqu'un d'autre
- **Tampering** (altération de données) : modification non autorisée des données
- **Repudiation** (rejet d'une action effectuée) : nier avoir effectué une action
- **Information disclosure** (divulgation d'informations) : accès non autorisé à des informations
- **Denial of service** (déni de service) : rendre un service indisponible
- **Elevation of privilege** (élévation de privilèges) : obtenir des droits supérieurs

### Énoncé

Pour un site e-commerce comprenant une zone client avec historique des commandes, paiement en ligne et profil utilisateur, identifiez :
1. Deux menaces pour chaque catégorie du modèle STRIDE
2. Pour chaque menace, indiquez un impact potentiel sur l'entreprise

<py-editor id="stride-exercise" auto-run>
# Utilisez cet éditeur pour structurer votre analyse STRIDE
# Vous pouvez exécuter ce code pour générer un tableau des menaces

import pandas as pd
from IPython.display import display, HTML

# Structure pour organiser les menaces STRIDE
stride_categories = {
    "Spoofing": [],
    "Tampering": [],
    "Repudiation": [],
    "Information disclosure": [],
    "Denial of service": [],
    "Elevation of privilege": []
}

# Exemple pour une catégorie
stride_categories["Spoofing"] = [
    {
        "menace": "Un attaquant utilise les identifiants volés d'un client",
        "impact": "Perte de confiance des clients, atteinte à la réputation"
    },
    {
        "menace": "Votre exemple...",
        "impact": "Votre impact..."
    }
]

# Complétez les autres catégories ici
# stride_categories["Tampering"] = [...]

# Fonction pour afficher le tableau des menaces
def display_stride_analysis():
    all_rows = []
    for category, threats in stride_categories.items():
        for i, threat in enumerate(threats):
            if i == 0:
                all_rows.append([category, threat["menace"], threat["impact"]])
            else:
                all_rows.append(["", threat["menace"], threat["impact"]])
    
    df = pd.DataFrame(all_rows, columns=["Catégorie STRIDE", "Menace", "Impact"])
    display(HTML(df.to_html(index=False)))

# Afficher le tableau (à compléter)
display_stride_analysis()
</py-editor>

### Solution interactive

<py-accordion>
  <py-accordion-item heading="Afficher la correction">
    <h4>Analyse STRIDE complète</h4>
    <p>Voici une analyse des menaces STRIDE pour un site e-commerce :</p>

    <h5>Spoofing (usurpation d'identité)</h5>
    <ol>
      <li><strong>Menace</strong> : Un attaquant utilise les identifiants volés d'un client pour se connecter à son compte.<br>
      <strong>Impact</strong> : Perte de confiance des clients, atteinte à la réputation, possibles poursuites judiciaires.</li>
      <li><strong>Menace</strong> : Un attaquant se fait passer pour le site e-commerce par phishing.<br>
      <strong>Impact</strong> : Atteinte à l'image de marque, perte de confiance des clients, responsabilité légale potentielle.</li>
    </ol>

    <h5>Tampering (altération de données)</h5>
    <ol>
      <li><strong>Menace</strong> : Modification des prix des produits dans la base de données.<br>
      <strong>Impact</strong> : Pertes financières, incohérences dans la comptabilité.</li>
      <li><strong>Menace</strong> : Altération de l'historique des commandes pour masquer des fraudes.<br>
      <strong>Impact</strong> : Difficultés de suivi des commandes, litiges avec les clients, pertes financières.</li>
    </ol>

    <h5>Repudiation (rejet d'une action effectuée)</h5>
    <ol>
      <li><strong>Menace</strong> : Un client nie avoir passé une commande livrée.<br>
      <strong>Impact</strong> : Pertes financières, coûts de gestion des litiges.</li>
      <li><strong>Menace</strong> : Un employé nie avoir modifié des informations sensibles.<br>
      <strong>Impact</strong> : Difficultés à identifier l'origine d'une fuite de données, obstacles aux investigations.</li>
    </ol>

    <h5>Information disclosure (divulgation d'informations)</h5>
    <ol>
      <li><strong>Menace</strong> : Fuite de la base de données clients (noms, adresses, historiques d'achat).<br>
      <strong>Impact</strong> : Violation du RGPD avec amendes potentielles, atteinte à la réputation, perte de confiance.</li>
      <li><strong>Menace</strong> : Accès non autorisé aux données de carte bancaire.<br>
      <strong>Impact</strong> : Non-conformité PCI DSS, amendes, perte de l'autorisation de traiter des paiements.</li>
    </ol>

    <h5>Denial of service (déni de service)</h5>
    <ol>
      <li><strong>Menace</strong> : Attaque DDoS rendant le site inaccessible.<br>
      <strong>Impact</strong> : Perte de chiffre d'affaires pendant la durée de l'indisponibilité, atteinte à la réputation.</li>
      <li><strong>Menace</strong> : Saturation de la base de données par des requêtes malveillantes.<br>
      <strong>Impact</strong> : Ralentissements du site, expérience utilisateur dégradée, pertes de ventes.</li>
    </ol>

    <h5>Elevation of privilege (élévation de privilèges)</h5>
    <ol>
      <li><strong>Menace</strong> : Un attaquant exploite une vulnérabilité pour obtenir un accès administrateur.<br>
      <strong>Impact</strong> : Compromission complète du système, accès à toutes les données sensibles.</li>
      <li><strong>Menace</strong> : Un client modifie ses paramètres pour accéder à des fonctionnalités réservées aux employés.<br>
      <strong>Impact</strong> : Accès à des informations confidentielles, possibilité de modifier des paramètres critiques.</li>
    </ol>
  </py-accordion-item>
</py-accordion>

## Exercice 1.3 : Mesures de sécurité (20 min)

### Rappel théorique
Pour contrer les menaces, on peut mettre en place des mesures :
- **Préventives** : empêchent la réalisation de la menace
- **Détectives** : détectent qu'une menace s'est réalisée
- **Correctives** : corrigent les effets d'une menace réalisée

Ces mesures peuvent être techniques, organisationnelles ou juridiques.

### Énoncé

Pour le scénario suivant : "Un attaquant utilise une injection SQL pour accéder à la base de données clients d'une application web".

1. Proposez trois mesures préventives
2. Proposez deux mesures détectives
3. Proposez une mesure corrective

<py-exercise id="sql-injection-measures">
  <py-title>Mesures de sécurité contre les injections SQL</py-title>
  <py-specs>
def check_solution(code_str):
    """Vérifie si la solution proposée contient des mesures dans chaque catégorie"""
    # Éléments à rechercher dans la solution
    preventive_keywords = [
        "requête préparée", "requetes preparees", "requêtes paramétrées", 
        "requetes parametrees", "prepared statement", "orm", 
        "validation", "filtr", "échap", "echap", 
        "moindre privilège", "moindre privilege"
    ]
    
    detective_keywords = [
        "ids", "détection d'intrusion", "detection d'intrusion", 
        "log", "journal", "audit", "surveill", "monitor"
    ]
    
    corrective_keywords = [
        "sauvegarde", "backup", "restauration", "restoration", 
        "plan de reprise", "disaster recovery"
    ]
    
    # Vérifier la présence des éléments
    preventive_count = sum(1 for kw in preventive_keywords if kw.lower() in code_str.lower())
    detective_count = sum(1 for kw in detective_keywords if kw.lower() in code_str.lower())
    corrective_count = sum(1 for kw in corrective_keywords if kw.lower() in code_str.lower())
    
    if preventive_count < 3:
        return False, f"Proposez au moins 3 mesures préventives différentes"
    
    if detective_count < 2:
        return False, f"Proposez au moins 2 mesures détectives différentes"
    
    if corrective_count < 1:
        return False, f"Proposez au moins 1 mesure corrective"
    
    return True, "Excellente analyse ! Vous avez identifié des mesures dans chaque catégorie."
  </