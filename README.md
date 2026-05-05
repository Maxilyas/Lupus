<div align="center">

# 🐺 LUPUS

### *Survival of the Wild*

**Une nuit. Une forêt sans fin. Un loup.**

[![Play Now](https://img.shields.io/badge/▶_PLAY_NOW-d4c5a0?style=for-the-badge&logoColor=black&labelColor=0a0e14)](https://maxilyas.github.io/Lupus/)
&nbsp;
[![PWA](https://img.shields.io/badge/PWA-Installable-f4c430?style=for-the-badge&labelColor=0a0e14)](https://maxilyas.github.io/Lupus/)
&nbsp;
[![Mobile](https://img.shields.io/badge/Mobile-First-c0392b?style=for-the-badge&labelColor=0a0e14)](https://maxilyas.github.io/Lupus/)

---

*« Cours. Bondis. Survis. Au-delà, il n'y a que toi. »*

</div>

<br>

## 🌒 L'expérience

LUPUS est un plateformer 2D de survie cinématographique. Tu incarnes un loup mythique perdu dans une forêt nocturne infinie, où chaque mètre parcouru est arraché à la nuit. Pas de fin. Pas de victoire. Juste la **distance** que tu parviendras à conquérir avant que les pics, les corbeaux ou un mauvais bond ne t'arrêtent.

Le jeu se joue dans un seul fichier HTML. Aucun build, aucune dépendance. Juste **du Canvas, des polices choisies, et beaucoup de polish**.

<div align="center">

| 🌫️ **Brume Aveugle** | 🔥 **Forêt Brûlée** | ❄️ **Hauts Plateaux** | 🌲 **Forêt Profonde** |
|:---:|:---:|:---:|:---:|
| Vision réduite | Braises mortelles | Vent contraire | Mille-pattes lumineux |
| Hibou Sentinelle | Esprit-feu Lucarne | Crécerelle Sniper | Corbeaux affamés |

</div>

<br>

## ⚡ Mécanique signature : le Bond

Le **Bond** est le cœur du jeu. Une mécanique unique qui transforme le mouvement en danse.

> **Maintiens** la touche pour viser. Ton angle monte progressivement.
>
> **Relâche** au bon moment pour bondir avec la puissance du prédateur.
>
> **Maîtrise** la zone dorée pour des **Perfect Bonds** récompensés.

Une trajectoire pointillée prédit ton atterrissage. Tu vois littéralement où tu vas avant de sauter. Le casual apprend par observation. L'expert chaîne des bonds parfaits qui couvrent des écrans entiers.

```
┌─────────────────────────────┐
│  Charge → Angle             │
│  ●●●○○○○  → 🎯 rasant       │
│  ●●●●●○○  → ✨ PERFECT      │
│  ●●●●●●●  → 🌙 vertical     │
└─────────────────────────────┘
```

<br>

## 🎮 Comment jouer

<table>
<tr>
<td width="50%" valign="top">

### 🖥️ Clavier

| | |
|---:|:---|
| **Courir** | `A` `D` ou `←` `→` |
| **Sauter** | `Espace` ou `↑` |
| **Bond** | Maintenir `Shift` |
| **Pause** | `P` ou `Échap` |

</td>
<td width="50%" valign="top">

### 📱 Tactile

| | |
|---:|:---|
| **Courir** | Boutons `◀` `▶` |
| **Sauter** | Bouton `▲` |
| **Bond** | Maintenir `✦` |
| **Pause** | Bouton `⏸` |

</td>
</tr>
</table>

<br>

## 🌟 Ce qui rend LUPUS spécial

<table>
<tr>
<td width="50%" valign="top">

### 🎨 Direction artistique

Forêt nocturne, lune brillante, palette dorée et ambrée sur fond bleu profond. Vignette cinématographique, grain léger, parallaxe à 4 couches. Polices **Cinzel** et **IM Fell English** pour un sentiment mythique.

### 🌍 Génération procédurale

Niveaux infinis générés à la volée par seed déterministe. Chaque biome a sa palette, ses ennemis, ses hazards. Plateformes mobiles, plateformes qui s'effondrent, embers qui tombent du ciel.

</td>
<td width="50%" valign="top">

### 💫 Game feel travaillé

Screen shake calibré, hit-stop à l'impact, squash & stretch sur chaque saut, particules ambiantes (lucioles, feuilles), step-up automatique pour un mouvement fluide.

### 📱 Mobile-first

Conçu pour téléphone d'abord. Boutons glassmorphism, fullscreen automatique, orientation locked en paysage. Installable comme une vraie app via PWA.

</td>
</tr>
</table>

<br>

## ✨ Le Bond — en détail

| Type de Bond | Comment | Effet |
|:---|:---|:---|
| 🎯 **Standard** | Press-release rapide | Bond rasant à pleine puissance |
| 🌙 **Haut** | Maintenir long | Bond vertical pour atteindre les plateformes hautes |
| ⭐ **Perfect** | Relâche dans la zone dorée | +20% portée, sparkles, stamina remboursée |
| ⚡ **Chained** | Re-bondir dans les 0.5s | Bond instantané sans charge |
| 🔮 **Apex** | Au sommet d'un saut | Pure horizontale à pleine puissance |

<br>

## 🛠️ Stack technique

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![Canvas](https://img.shields.io/badge/Canvas_2D-FF6B6B?style=flat-square&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=flat-square&logo=pwa&logoColor=white)
![No Build](https://img.shields.io/badge/No_Build-000?style=flat-square)
![Zero Deps](https://img.shields.io/badge/Zero_Deps-4a5e36?style=flat-square)

</div>

**Mono-fichier** · **~110 KB** · **~3000 lignes** · **0 dépendance npm** · **0 framework** · **0 bundler**

Tout le jeu tient dans `index.html`. Tu peux l'ouvrir dans un éditeur de texte et tout lire. C'est volontaire.

<br>

## 🚀 Installation locale

```bash
git clone https://github.com/maxilyas/Lupus.git
cd Lupus
```

Le service worker exige HTTPS ou localhost. Sers le fichier au lieu de l'ouvrir directement :

```bash
# Python 3
python3 -m http.server 8080

# Node
npx serve .
```

Puis ouvre `http://localhost:8080` dans ton navigateur.

<br>

## 📁 Structure

```
Lupus/
├── index.html       # Le jeu complet (HTML + CSS + JS)
├── manifest.json    # Manifest PWA
├── sw.js            # Service worker pour mode hors-ligne
├── icon.svg         # Icône vectorielle
├── icon-192.png     # Icône PWA 192×192
├── icon-512.png     # Icône PWA 512×512
└── README.md
```

<br>

## 🎨 Palette signature

<table>
<tr>
<td align="center"><img src="https://placehold.co/80x80/0a0e14/0a0e14.png" /><br><sub><code>#0a0e14</code><br>Nuit profonde</sub></td>
<td align="center"><img src="https://placehold.co/80x80/d4c5a0/d4c5a0.png" /><br><sub><code>#d4c5a0</code><br>Or pâle</sub></td>
<td align="center"><img src="https://placehold.co/80x80/f4c430/f4c430.png" /><br><sub><code>#f4c430</code><br>Ambre</sub></td>
<td align="center"><img src="https://placehold.co/80x80/4a5e36/4a5e36.png" /><br><sub><code>#4a5e36</code><br>Vert mousse</sub></td>
<td align="center"><img src="https://placehold.co/80x80/c0392b/c0392b.png" /><br><sub><code>#c0392b</code><br>Sang</sub></td>
</tr>
</table>

<br>

## 🌌 Roadmap

Quelques pistes envisagées (sans engagement) :

- 🎵 Audio procédural via Web Audio API
- 🏆 Système de combo et multiplicateur de score
- 🌍 Nouveaux biomes (canyon, ruines, marais)
- 👹 Boss mythique après seuil de distance
- 📅 Daily Challenge à seed fixe pour leaderboard
- 📜 Vignettes narratives à l'approche du néant

<br>

## 📜 Licence

**MIT** — fais ce que tu veux du code. Une attribution serait appréciée mais pas requise.

<br>

## 🐺 Crédits

Conçu et développé en mono-fichier, avec l'aide de **Claude** (Anthropic) pour itérer sur la mécanique de Bond, les biomes, et le polish.

Polices : [**Cinzel**](https://fonts.google.com/specimen/Cinzel) et [**IM Fell English**](https://fonts.google.com/specimen/IM+Fell+English) — Google Fonts.

<br>

---

<div align="center">

### *« 100m : l'odeur de la meute s'estompe. »*
### *« 500m : les os de tes ancêtres. »*
### *« 1000m : au-delà, il n'y a que toi. »*

<br>

**[▶ Lance la chasse](https://maxilyas.github.io/Lupus/)**

</div>
