# 🎮 PAC-MAN - Style Atari 2600

Un jeu Pac-Man rétro avec des graphismes inspirés de l'Atari 2600, développé en HTML5, CSS3 et JavaScript pur.

## 🕹️ Fonctionnalités

### Gameplay
- ✅ Labyrinthe classique Pac-Man
- ✅ Contrôles au clavier (flèches directionnelles)
- ✅ 4 fantômes avec IA différentes
- ✅ Points et super-points
- ✅ Mode power-up (manger les fantômes)
- ✅ Système de score et high score
- ✅ Système de vies
- ✅ Téléportation via les tunnels latéraux

### Style Atari 2600
- 🎨 Sprites pixelisés ultra-simples
- 🎨 Couleurs vives et contrastées
- 🎨 Effets de néon et glow
- 🎨 Interface rétro authentique
- 🎨 Animation bouche Pac-Man simplifiée
- 🎨 Fantômes en forme de carrés colorés

## 🎯 Comment Jouer

### Démarrage
1. Ouvrez `index.html` dans votre navigateur web
2. Cliquez sur le bouton **DÉMARRER**
3. Utilisez les flèches du clavier pour déplacer Pac-Man

### Contrôles
- **↑** - Déplacer vers le haut
- **↓** - Déplacer vers le bas
- **←** - Déplacer vers la gauche
- **→** - Déplacer vers la droite
- **Bouton PAUSE** - Mettre le jeu en pause

### Objectifs
- 🔴 Mangez tous les points pour gagner
- 👻 Évitez les fantômes (rouge, rose, cyan, orange)
- ⚪ Mangez les super-points (gros points blancs) pour pouvoir manger les fantômes temporairement
- 💯 Maximisez votre score !

### Système de Points
- **Point normal** : 10 points
- **Super-point** : 50 points
- **Fantôme mangé** : 200 points

### Fantômes
Chaque fantôme a sa propre personnalité :
- 🔴 **Blinky (Rouge)** - Poursuit directement Pac-Man
- 💗 **Pinky (Rose)** - Anticipe les mouvements de Pac-Man
- 💙 **Inky (Cyan)** - Alterne entre chasse et patrouille
- 🧡 **Clyde (Orange)** - Alterne entre chasse et patrouille

## 🛠️ Technologies Utilisées

- **HTML5 Canvas** - Rendu graphique
- **CSS3** - Design rétro avec animations et effets néon
- **JavaScript ES6** - Logique du jeu
- **Rendering pixelisé** - Pour un aspect authentique Atari

## 📁 Structure du Projet

```
.
├── index.html     # Page principale du jeu
├── style.css      # Styles rétro Atari 2600
├── game.js        # Logique complète du jeu
└── README.md      # Documentation
```

## 🎮 Caractéristiques Techniques

### Grille de Jeu
- Taille : 28 x 31 cases
- Taille d'une case : 20 pixels
- Canvas : 560 x 620 pixels

### Gameplay
- Vitesse Pac-Man : 0.05 unités/frame (ralenti style Atari 2600)
- Vitesse fantômes normale : 0.04 unités/frame
- Vitesse fantômes en fuite : 0.025 unités/frame
- Durée power-up : ~6 secondes
- Vitesse calibrée pour reproduire le gameplay de l'Atari 2600

### IA des Fantômes
- **Mode Chase** : Poursuivre Pac-Man
- **Mode Scatter** : Patrouiller dans les coins
- Changement de mode aléatoire
- Évitement des demi-tours
- Fuite intelligente pendant le power-up

## 🎨 Style Atari 2600

Le jeu reproduit fidèlement l'esthétique des jeux Atari 2600 :

- **Sprites simplifiés** : Formes géométriques basiques
- **Palette limitée** : Couleurs vives et primaires
- **Pixelisation** : Rendu carré sans antialiasing
- **Animations minimalistes** : Mouvements simples
- **Effets lumineux** : Simulation de l'écran CRT

## 🚀 Installation et Lancement

### Option 1 : Fichier Local
```bash
# Cloner ou télécharger le projet
# Ouvrir index.html dans votre navigateur
```

### Option 2 : Serveur Local
```bash
# Avec Python 3
python -m http.server 8000

# Avec Node.js (http-server)
npx http-server

# Puis ouvrir http://localhost:8000
```

## 🎯 Astuces et Stratégies

1. **Utilisez les tunnels** - Les côtés du labyrinthe vous téléportent
2. **Anticipez les fantômes** - Observez leurs patterns
3. **Économisez les super-points** - Utilisez-les stratégiquement
4. **Nettoyez méthodiquement** - Balayez zone par zone
5. **Restez mobile** - Ne restez jamais coincé dans un coin

## 🐛 Compatibilité

Le jeu fonctionne sur tous les navigateurs modernes :
- ✅ Chrome / Edge (v90+)
- ✅ Firefox (v88+)
- ✅ Safari (v14+)
- ✅ Opera (v76+)

## 📜 Licence

Ce projet est un hommage au Pac-Man original et à l'ère Atari 2600.
Créé à des fins éducatives et nostalgiques.

## 🎊 Améliorations Possibles

- [ ] Sons et effets sonores rétro
- [ ] Niveaux multiples avec difficulté croissante
- [ ] Fruits bonus
- [ ] Tableau des high scores avec localStorage
- [ ] Mode deux joueurs
- [ ] Animations de transition entre niveaux
- [ ] Écran d'introduction animé
- [ ] Système de succès/achievements

## 🙏 Crédits

Inspiré par :
- Pac-Man original (Namco, 1980)
- Atari 2600 (1977)
- L'âge d'or du jeu vidéo arcade

---

**Amusez-vous bien ! 🎮👾**
