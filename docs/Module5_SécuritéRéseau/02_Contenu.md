# Module 5 : Sécurité réseau et infrastructure

## Exercice 5.1 : Configuration d'un pare-feu (20 min)

### Rappel théorique
Un pare-feu (firewall) est un élément essentiel de la sécurité réseau qui filtre le trafic entrant et sortant selon des règles prédéfinies. Il existe plusieurs types de pare-feu :
- **Pare-feu de filtrage de paquets** : analyse les paquets au niveau des couches réseau et transport
- **Pare-feu à états** : maintient une table d'état des connexions actives
- **Pare-feu applicatif** : analyse le trafic au niveau de la couche application
- **Pare-feu de nouvelle génération (NGFW)** : combine plusieurs fonctionnalités avancées

La configuration d'un pare-feu repose sur le principe de sécurité par défaut : "tout ce qui n'est pas explicitement autorisé est interdit".

### Énoncé

Vous êtes responsable de la sécurité d'un serveur web hébergeant une application e-commerce avec les caractéristiques suivantes :
- Serveur web Apache sur le port 80 (HTTP) et 443 (HTTPS)
- Base de données MySQL sur le port 3306
- Serveur SSH pour l'administration sur le port 22
- Serveur de messagerie SMTP sur le port 25
- API REST sur le port 8080
- Accès FTP sur le port 21

1. Rédigez des règles de pare-feu iptables pour sécuriser ce serveur
2. Proposez des améliorations de sécurité supplémentaires concernant les ports et services

### Correction

#### 1. Règles iptables

Voici un ensemble de règles iptables pour sécuriser le serveur :

```bash
# Politique par défaut : bloquer tout le trafic
iptables -P INPUT DROP
iptables -P FORWARD DROP
iptables -P OUTPUT ACCEPT

# Autoriser les connexions établies et associées
iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

# Autoriser le loopback (localhost)
iptables -A INPUT -i lo -j ACCEPT

# Autoriser SSH (port 22) uniquement depuis l'adresse IP d'administration
iptables -A INPUT -p tcp -s 192.168.1.100 --dport 22 -m state --state NEW -j ACCEPT

# Autoriser HTTP et HTTPS (ports 80 et 443) depuis n'importe où
iptables -A INPUT -p tcp --dport 80 -m state --state NEW -j ACCEPT
iptables -A INPUT -p tcp --dport 443 -m state --state NEW -j ACCEPT

# Autoriser l'API REST (port 8080) uniquement depuis les adresses IP spécifiées
iptables -A INPUT -p tcp -s 192.168.1.0/24 --dport 8080 -m state --state NEW -j ACCEPT

# Autoriser MySQL (port 3306) uniquement en local et depuis les serveurs d'application
iptables -A INPUT -p tcp -s 127.0.0.1 --dport 3306 -m state --state NEW -j ACCEPT
iptables -A INPUT -p tcp -s 192.168.1.10 --dport 3306 -m state --state NEW -j ACCEPT

# Autoriser SMTP (port 25) uniquement pour les serveurs de messagerie autorisés
iptables -A INPUT -p tcp -s 192.168.1.20 --dport 25 -m state --state NEW -j ACCEPT

# Autoriser FTP (port 21) uniquement depuis le réseau interne
iptables -A INPUT -p tcp -s 192.168.1.0/24 --dport 21 -m state --state NEW -j ACCEPT

# Autoriser le FTP passif (ports 1024-1048)
iptables -A INPUT -p tcp -s 192.168.1.0/24 --dport 1024:1048 -m state --state NEW -j ACCEPT

# Autoriser le ping (ICMP) avec une limite de taux pour éviter les attaques par inondation
iptables -A INPUT -p icmp -m limit --limit 5/second -j ACCEPT

# Journaliser les paquets rejetés pour analyse
iptables -A INPUT -j LOG --log-prefix "IPTABLES-DROPPED: " --log-level 4

# Rejeter explicitement le reste du trafic
iptables -A INPUT -j DROP
```

#### 2. Améliorations de sécurité supplémentaires

1. **Remplacer FTP par SFTP** : Le FTP transmet les informations en clair, y compris les identifiants. Remplacer le FTP (port 21) par SFTP qui fonctionne sur le port SSH (22) et chiffre toutes les communications.

2. **Forcer HTTPS uniquement** : Rediriger tout le trafic HTTP (port 80) vers HTTPS (port 443) et implémenter HSTS (HTTP Strict Transport Security).

3. **Utiliser un port non standard pour SSH** : Changer le port SSH du port par défaut 22 à un port non standard (par exemple 2222) pour réduire les attaques automatisées.

4. **Limiter les tentatives de connexion SSH** : Utiliser fail2ban pour bloquer temporairement les adresses IP après plusieurs tentatives de connexion infructueuses.

5. **Mettre en place un VPN** : Placer les services d'administration (SSH, MySQL) derrière un VPN pour qu'ils ne soient pas directement accessibles depuis Internet.

6. **Segmenter le réseau** : Placer la base de données dans un réseau séparé, accessible uniquement par le serveur d'application.

7. **Utiliser un pare-feu applicatif web (WAF)** : Mettre en place un WAF comme ModSecurity pour protéger contre les attaques web spécifiques (XSS, injection SQL, etc.).

8. **Implémenter un système de détection d'intrusion (IDS)** : Déployer un IDS comme Snort pour surveiller le trafic réseau et détecter