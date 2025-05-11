# QCM d'auto-évaluation - Analyse des risques

Ce QCM vous permet de vérifier votre compréhension des notions abordées dans ce module. Répondez aux questions pour évaluer votre progression.

<py-multiple-choice id="qa1">
  <py-title>Un système de paiement en ligne a besoin d'un niveau élevé de :</py-title>
  <py-choice>Disponibilité uniquement</py-choice>
  <py-choice>Intégrité uniquement</py-choice>
  <py-choice>Disponibilité et intégrité uniquement</py-choice>
  <py-choice correct>Disponibilité, intégrité et confidentialité</py-choice>
  <py-feedback>
    Un système de paiement en ligne nécessite :
    - Une **disponibilité** élevée car les transactions doivent pouvoir être effectuées à tout moment
    - Une **intégrité** élevée car les montants des transactions ne doivent pas être altérés
    - Une **confidentialité** élevée car les données bancaires sont des informations sensibles
    
    La preuve est également importante (pour éviter la répudiation des transactions), mais les trois autres critères sont particulièrement critiques pour ce type de système.
  </py-feedback>
</py-multiple-choice>

<py-multiple-choice id="qa2">
  <py-title>Quelle vulnérabilité correspond à la catégorie "Information Disclosure" du modèle STRIDE ?</py-title>
  <py-choice>Un attaquant modifie le prix d'un produit dans la base de données</py-choice>
  <py-choice>Un attaquant se connecte avec les identifiants d'un autre utilisateur</py-choice>
  <py-choice correct>Un attaquant accède à la liste des clients et leurs coordonnées</py-choice>
  <py-choice>Un attaquant rend le site web indisponible par une attaque DDoS</py-choice>
  <py-feedback>
    Dans le modèle STRIDE :
    - La modification des prix correspond à du **Tampering** (altération de données)
    - L'utilisation d'identifiants volés correspond à du **Spoofing** (usurpation d'identité)
    - L'accès non autorisé à des informations correspond à de l'**Information Disclosure** (divulgation d'informations)
    - Rendre un site indisponible correspond à du **Denial of Service** (déni de service)
  </py-feedback>
</py-multiple-choice>

<py-multiple-choice id="qa3">
  <py-title>Parmi ces mesures, laquelle est considérée comme corrective ?</py-title>
  <py-choice>Mise en place d'un pare-feu</py-choice>
  <py-choice>Formation des utilisateurs à la sécurité</py-choice>
  <py-choice correct>Restauration des données à partir d'une sauvegarde</py-choice>
  <py-choice>Journalisation des accès au système</py-choice>
  <py-feedback>
    **Explication :**
    - Un **pare-feu** est une mesure préventive qui bloque les accès non autorisés
    - La **formation des utilisateurs** est une mesure préventive qui réduit les risques d'erreurs humaines
    - La **restauration des données** est une mesure corrective qui permet de revenir à un état fonctionnel après un incident
    - La **journalisation** est une mesure détective qui permet de détecter et analyser les incidents
  </py-feedback>
</py-multiple-choice>

<py-multiple-choice id="qa4">
  <py-title>Quelle méthode serait la plus appropriée pour évaluer les besoins de sécurité d'une application ?</py-title>
  <py-choice>Analyse des logs système</py-choice>
  <py-choice>Test de pénétration</py-choice>
  <py-choice correct>Analyse d'impact et évaluation des risques</py-choice>
  <py-choice>Audit de conformité RGPD</py-choice>
  <py-feedback>
    **Explication :**
    - L'**analyse des logs** permet de détecter des incidents de sécurité mais pas d'évaluer les besoins
    - Le **test de pénétration** permet d'identifier des vulnérabilités techniques mais pas de déterminer les besoins de sécurité
    - L'**analyse d'impact et évaluation des risques** permet d'identifier les actifs à protéger, les menaces potentielles et leurs impacts, ce qui est fondamental pour déterminer les besoins de sécurité
    - L'**audit de conformité RGPD** vérifie le respect de la réglementation sur les données personnelles, mais ne couvre pas tous les aspects de la sécurité
  </py-feedback>
</py-multiple-choice>

<py-multiple-choice id="qa5">
  <py-title>Dans le contexte d'une attaque par injection SQL, quelle mesure préventive est la plus efficace ?</py-title>
  <py-choice>Surveillance des logs de la base de données</py-choice>
  <py-choice correct>Utilisation de requêtes préparées</py-choice>
  <py-choice>Sauvegarde régulière de la base de données</py-choice>
  <py-choice>Limitation du nombre de requêtes par utilisateur</py-choice>
  <py-feedback>
    **Explication :**
    - La **surveillance des logs** est une mesure détective, pas préventive
    - Les **requêtes préparées** séparent le code SQL des données, empêchant les injections SQL à la source
    - La **sauvegarde** est une mesure corrective qui permet de restaurer les données après une attaque
    - La **limitation des requêtes** peut réduire l'impact d'attaques par force brute mais n'empêche pas les injections SQL
  </py-feedback>
</py-multiple-choice>

<py-multiple-choice id="qa6">
  <py-title>Pour un système de vote électronique, quel critère DICP est particulièrement important pour garantir qu'un vote ne peut pas être modifié ?</py-title>
  <py-choice>Disponibilité</py-choice>
  <py-choice correct>Intégrité</py-choice>
  <py-choice>Confidentialité</py-choice>
  <py-choice>Preuve</py-choice>
  <py-feedback>
    Pour un système de vote électronique :
    - L'**intégrité** garantit que les votes ne peuvent pas être modifiés une fois enregistrés
    - La **confidentialité** assure le secret du vote
    - La **disponibilité** permet aux électeurs de voter quand ils le souhaitent
    - La **preuve** permet de vérifier qu'un vote a bien été pris en compte
    
    L'intégrité est particulièrement critique car elle garantit que la volonté des électeurs est respectée.
  </py-feedback>
</py-multiple-choice>

<py-multiple-choice id="qa7">
  <py-title>Quelle affirmation concernant les événements redoutés est correcte ?</py-title>
  <py-choice>Un événement redouté est toujours causé par une attaque externe</py-choice>
  <py-choice correct>Un événement redouté peut avoir plusieurs causes différentes</py-choice>
  <py-choice>Un événement redouté a toujours un impact faible sur l'organisation</py-choice>
  <py-choice>Un événement redouté ne concerne que la confidentialité des données</py-choice>
  <py-feedback>
    **Explication :**
    - Un événement redouté peut être causé par des attaques externes, mais aussi par des erreurs humaines, des pannes matérielles, des catastrophes naturelles, etc.
    - Un même événement redouté (par exemple : "les données client sont divulguées") peut avoir diverses causes (hacking, erreur d'un employé, perte d'un appareil...)
    - L'impact peut être faible, moyen ou élevé selon le contexte
    - Les événements redoutés peuvent concerner tous les critères DICP, pas uniquement la confidentialité
  </py-feedback>
</py-multiple-choice>

<py-multiple-choice id="qa8">
  <py-title>Qu'est-ce qu'une "menace" dans le contexte de l'analyse des risques ?</py-title>
  <py-choice>Une vulnérabilité dans un système informatique</py-choice>
  <py-choice correct>Un événement susceptible d'avoir un impact négatif sur un actif</py-choice>
  <py-choice>Une mesure de protection contre les attaques</py-choice>
  <py-choice>Un indicateur de performance de sécurité</py-choice>
  <py-feedback>
    Dans le contexte de l'analyse des risques :
    - Une **menace** est un événement potentiel qui peut porter atteinte à la sécurité (ex: piratage, incendie)
    - Une **vulnérabilité** est une faiblesse qui peut être exploitée par une menace
    - Une **mesure de protection** (ou contrôle) est mise en place pour réduire les risques
    - Un **risque** est la combinaison d'une menace, d'une vulnérabilité et d'un impact potentiel
  </py-feedback>
</py-multiple-choice>

## Interprétation de votre score

<py-script>
def check_score():
    score = 0
    score_element = document.getElementById("score-display")
    
    # Vérifier l'état des questions (le sélecteur exact dépend de l'implémentation de Pyodide)
    questions = document.querySelectorAll("py-multiple-choice")
    total = questions.length
    
    for q in questions:
        if q.getAttribute("answered") == "correctly":
            score += 1
    
    # Afficher le résultat
    result = f"Votre score : {score}/{total}<br><br>"
    
    if score >= 7:
        result += "**Excellent !** Vous avez une très bonne compréhension des concepts d'analyse des risques."
    elif score >= 5:
        result += "**Bon travail !** Vous maîtrisez les concepts essentiels mais quelques points méritent d'être revus."
    elif score >= 3:
        result += "**Des bases solides**, mais plusieurs notions importantes nécessitent une révision."
    else:
        result += "**Il est recommandé de revoir l'ensemble du module** pour consolider vos connaissances."
    
    score_element.innerHTML = result


# Ajouter un bouton pour vérifier le score

from js import document
button = document.createElement("button")
button.innerHTML = "Vérifier mon score"
button.classList.add("md-button")
button.onclick = check_score
document.getElementById("score-button-container").appendChild(button)
</py-script>

<div id="score-button-container"></div>
<div id="score-display"></div>

## Points clés à retenir

<py-terminal id="dicp-visualization">
import matplotlib.pyplot as plt
import numpy as np
import io
import base64
from IPython.display import display, HTML

# Données pour le radar chart DICP
categories = ['Disponibilité', 'Intégrité', 'Confidentialité', 'Preuve']
N = len(categories)

# Exemples de besoins pour différents systèmes (échelle 0-3)
medical_records = [3, 3, 3, 3]  # Dossiers médicaux
banking_system = [3, 3, 3, 2]   # Système bancaire
public_website = [3, 2, 1, 0]   # Site web public
hr_system = [2, 3, 3, 2]        # Système RH

# Conversion en radians et répétition du premier point pour fermer le polygone
angles = [n / float(N) * 2 * np.pi for n in range(N)]
angles += angles[:1]

medical_records += medical_records[:1]
banking_system += banking_system[:1]
public_website += public_website[:1]
hr_system += hr_system[:1]

# Création du graphique
fig, ax = plt.subplots(figsize=(10, 6), subplot_kw=dict(polar=True))

# Ajout des systèmes
ax.plot(angles, medical_records, linewidth=2, label="Dossiers médicaux")
ax.plot(angles, banking_system, linewidth=2, label="Système bancaire")
ax.plot(angles, public_website, linewidth=2, label="Site web public")
ax.plot(angles, hr_system, linewidth=2, label="Système RH")

# Remplissage
ax.fill(angles, medical_records, alpha=0.1)
ax.fill(angles, banking_system, alpha=0.1)
ax.fill(angles, public_website, alpha=0.1)
ax.fill(angles, hr_system, alpha=0.1)

# Ajout des catégories
ax.set_xticks(angles[:-1])
ax.set_xticklabels(categories)

# Configuration des axes
ax.set_yticks([0, 1, 2, 3])
ax.set_yticklabels(['0', '1', '2', '3'])
ax.set_ylim(0, 3)

# Légende et titre
ax.legend(loc='upper right', bbox_to_anchor=(0.1, 0.1))
plt.title("Besoins DICP pour différents systèmes d'information", size=15)

# Affichage
plt.tight_layout()

# Convertir le graphique en image pour l'affichage
buf = io.BytesIO()
plt.savefig(buf, format='png')
buf.seek(0)
img_str = "data:image/png;base64," + base64.b64encode(buf.read()).decode('utf-8')
print(f'<img src="{img_str}" alt="Visualisation DICP">')
</py-terminal>

1. **Analysez toujours les besoins DICP** selon le contexte et les enjeux métier

2. **Catégorisez les menaces** à l'aide de modèles comme STRIDE pour être exhaustif

3. **Mettez en place des mesures de sécurité** préventives, détectives et correctives

4. **Évaluez les risques** en fonction de la probabilité et de l'impact des menaces

5. **Priorisez les actions** en fonction du niveau de risque et des contraintes (coût, temps, ressources)

## Pour aller plus loin

<py-repl id="additional-resources">
# Ressources complémentaires sur l'analyse des risques
resources = {
    "Méthodologies": [
        "EBIOS Risk Manager (ANSSI)",
        "MEHARI (CLUSIF)",
        "ISO 27005",
        "NIST SP 800-30"
    ],
    "Outils": [
        "PILAR (EAR/PILAR)",
        "OCTAVE",
        "MONARC (CASES)",
        "CORAS"
    ],
    "Formations": [
        "MOOC SecNumacadémie (ANSSI)",
        "Certifications ISO 27001",
        "Formations CLUSIF"
    ]
}

# Affichage des ressources
print("# Ressources pour approfondir vos connaissances en analyse des risques\n")
for category, items in resources.items():
    print(f"## {category}")
    for item in items:
        print(f"- {item}")
    print()
</py-repl>