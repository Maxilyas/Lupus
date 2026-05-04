# LUPUS

> *Survival of the Wild* — un plateformer 2D survival où tu incarnes un loup dans une forêt nocturne sans fin.

[**▶ Jouer maintenant**](https://yourname.github.io/lupus/) · [Capture d'écran](#aperçu) · [Comment jouer](#comment-jouer)

---

## Aperçu

![LUPUS — gameplay](screenshot.png)

Forêt nocturne, lune brillante, herbes hautes qui frémissent. Tu cours, tu sautes, tu chasses, tu fuis. Pas d'objectif, pas de fin — juste la distance que tu parviendras à parcourir avant que les corbeaux, les pics ou un mauvais saut ne t'arrêtent.

## Comment jouer

**Clavier**

| Action | Touches |
|---|---|
| Courir | `A` `D` ou `←` `→` |
| Sauter / Double-saut | `Espace` `W` `↑` |
| Sprinter | `Shift` |
| Stomper un ennemi | Tomber dessus en plein saut |
| Pause | `P` ou `Échap` |

**Tactile (mobile)**

Quatre boutons en bas de l'écran : `◀` `▶` `⚡` `▲`. Le jeu force le mode paysage et le plein écran. Bouton `⏸` en haut pour mettre en pause.

**Survie**

- 🥩 **Viande** restaure la santé (+20)
- 🔵 **Orbes bleues** restaurent l'endurance (+30)
- ⚠️ **Pics** infligent 25 dégâts et te projettent en arrière
- 🪶 **Corbeaux** plongent sur toi — saute par-dessus pour les écraser, ou esquive

## Aperçu des fonctionnalités

- Génération procédurale infinie en chunks de 480px (RNG seedé)
- Difficulté progressive : gaps plus larges, ennemis plus fréquents
- Plateformes mobiles, plateformes qui s'effondrent au contact
- Physique avec coyote time, jump buffer, double-saut
- Screen shake, hit-stop, squash & stretch — gamefeel travaillé
- Particules ambiantes : lucioles, feuilles dans le vent
- High score local persistant
- 4 couches de parallaxe : étoiles, lune, montagnes, arbres lointains
- PWA installable, fonctionne hors-ligne

## Stack technique

Mono-fichier, zéro dépendance, zéro build.

- **HTML / CSS / JavaScript vanilla** (~1900 lignes, ~64 KB)
- **Canvas 2D** pour le rendu, IIFE encapsulée
- **Polices** : Cinzel + IM Fell English (Google Fonts)
- **PWA** : manifest.json + service worker pour mode hors-ligne
- **Mobile-first** : viewport `dvh`, fullscreen API, orientation lock

Aucun framework, aucun bundler, aucun NPM. Le `index.html` est complet et exécutable seul.

## Lancer le jeu localement

```bash
git clone https://github.com/yourname/lupus.git
cd lupus
```

Comme le service worker exige HTTPS ou localhost, ne double-clique pas le fichier — sers-le :

```bash
# Python 3
python3 -m http.server 8080

# Node
npx serve .
```

Puis ouvre `http://localhost:8080`.

## Structure du projet

```
lupus/
├── index.html       # Tout le jeu (HTML + CSS + JS)
├── manifest.json    # Manifest PWA
├── sw.js            # Service worker
├── icon.svg         # Icône vectorielle
├── icon-192.png     # Icône PWA
└── README.md
```

## Direction artistique

Palette cinématographique nocturne :

| | |
|---|---|
| `#0a0e14` | Nuit profonde |
| `#d4c5a0` | Or pâle |
| `#4a5e36` | Vert mousse |
| `#f4c430` | Ambre (yeux du loup) |
| `#c0392b` | Sang |

Vignette, grain léger, lune brillante. Typo : Cinzel pour les titres, IM Fell English pour le corps. Pas de couleurs vives en dehors de ces accents.

## Performance

Cible : 60 FPS stables sur Pixel 8 et équivalents.

- Génération paresseuse de chunks, cleanup des chunks éloignés
- Culling agressif hors-écran pour plateformes, ennemis, particules
- Cap dur sur les particules ambiantes (40 max)
- Hit-stop implémenté en early-return dans la boucle update

## Roadmap

Idées à explorer (sans engagement) :

- Audio procédural via Web Audio API
- Système de combo / multiplicateur de score
- Biomes différents (canyon, ruines, marais)
- Ennemis au sol (loups rivaux)
- Boss après seuil de distance
- Daily challenge à seed fixe

## Licence

MIT — fais ce que tu veux du code, attribution appréciée.

## Crédits

Conçu et développé en mono-fichier avec l'aide de Claude (Anthropic).

Polices : [Cinzel](https://fonts.google.com/specimen/Cinzel) et [IM Fell English](https://fonts.google.com/specimen/IM+Fell+English) par Google Fonts.

---

*« Au-delà, il n'y a que toi. »*
