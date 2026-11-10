# Dedal des Couleurs — site de la galerie

Site statique (HTML et CSS uniquement, sans outil à installer). Il suit les maquettes Figma :
fond blanc, touches de bleu, typographies Cormorant Garamond et Inter.

## Ouvrir le site
Double-clique sur `index.html` (ou clic droit → ouvrir avec Chrome).
Si tu utilises VS Code, l'extension **Live Server** recharge la page à chaque modification.

## Structure
Le style (couleurs, polices, effets, media queries écrites en mobile-first : styles de base = téléphone, puis `min-width`) est dans le dossier `css/` : `style.css` pour `index.html` et `photo.css` pour les 12 pages détail, `fondateur.css` en plus pour `fondateur.html`. Pour changer une couleur partout, modifie-la dans ces deux fichiers (cherche `--blue`).

**100 % HTML + CSS : aucun JavaScript.**
```
dedal-des-couleurs/
├── index.html        page complète : accueil, à propos, galerie, événements, contact et inscription
├── css/              style.css (page d’accueil) et photo.css (pages détail)
├── js/               main.js (apparition au scroll + barre de progression)
├── fondateur.html    page de présentation de Paul Dechewsky (portrait + texte), ouverte depuis l’aperçu « Le fondateur » de l’accueil
├── photo-1.html … photo-12.html  une page détail par photographie
└── images/           les images à remplacer (voir ci-dessous)
```

## 🖼️ LES IMAGES (déjà en place)

Les vraies photos sont dans `images/`. Pour en changer une : **remplace le fichier en gardant EXACTEMENT le même nom**, la page la prend automatiquement.

| Fichier dans `images/` | Photo | Où elle apparaît |
|---|---|---|
| `hero.jpg` | Flamants roses à contre-jour | Grande image d'accueil (et aperçu du lien partagé) |
| `photo-1.jpg` | « Braise du soir » · Lionne | Galerie + page `photo-1.html` |
| `photo-2.jpg` | « Maître des cimes » · Bouquetin des Alpes (portrait) | Galerie + `photo-2.html` |
| `photo-3.jpg` | « Entre deux géants » · Rollier à longs brins | Galerie + `photo-3.html` |
| `photo-4.jpg` | « Bec à bec » · Jeunes chardonnerets élégants | Galerie + `photo-4.html` |
| `photo-5.jpg` | « Premier regard » · Lionceau | Galerie + `photo-5.html` |
| `photo-6.jpg` | « Ailes d'Apollon » · Apollon | Galerie + `photo-6.html` |
| `photo-7.jpg` | « Révérence » · Avocette élégante | Galerie (après « Voir toute la galerie ») |
| `photo-8.jpg` | « Crinière au vent » · Lion | idem |
| `photo-9.jpg` | « Sur la crête » · Mouflons | idem |
| `photo-10.jpg` | « Prise du jour » · Calao terrestre (portrait) | idem |
| `photo-11.jpg` | « Rosettes à l'ombre » · Léopard | idem |
| `photo-12.jpg` | « Leçon de savane » · Lionne et son petit | idem |
| `evenement-1.jpg` | Exposition « Sommets et crêtes » (mouflons) | Section Événements |
| `evenement-2.jpg` | Conférence « Patience et affût » (faucon crécerelle) | Section Événements |
| `paul-dechewsky.jpg` | Portrait de Paul Dechewsky (image générée par IA) | Page `fondateur.html` |

Chaque photo sert **deux fois** : dans la galerie (`index.html`) et sur sa page détail (`photo-N.html`).
Les photos en hauteur (bouquetin, calao) sont présentées sur un fond bleu pâle sans être recadrées.

Conseils :
- Garde le format **.jpg** et vise **moins de 400 Ko** par image (squoosh.app).
- Pense aux textes alternatifs (`alt="..."`) si tu changes une photo.

## ✏️ TEXTES À VÉRIFIER
- **Lieux** : les cartes indiquent seulement l'habitat (« Savane africaine », « Haute montagne », « Zone humide »). Remplace-les par les vrais lieux de prise de vue dans `index.html` **et** dans la page `photo-N.html`.
- **Titres, légendes, formats, éditions** : mêmes endroits (carte de la galerie + page détail).
- **Coordonnées** (téléphone, e-mail, adresse) : `index.html`, cherche `REMPLACER`.
- **Réseaux sociaux** : dans le pied de page, remplace les `href="#"`.
- **Événements** : section `#evenements` dans `index.html`.

### Ajouter une photo
1. Ajoute l'image dans `images/` (ex. `photo-13.jpg`).
2. Dans `index.html`, copie un bloc `<article class="card …">` : change l'image, le titre, le lien `photo-13.html` et les classes de catégorie (`c-oiseaux`, `c-mammiferes`, `c-savane`, `c-montagne`).
3. Copie `photo-6.html` en `photo-13.html` et change les textes et l'image.

## Comment ça marche sans JavaScript
- **Filtres de la galerie** et bouton « Voir toute la galerie » : boutons radio / case à cocher cachés + `label`, le CSS masque les cartes (`:checked ~ …`).
- **Menu mobile** : le burger est un lien vers `#menu`, le CSS affiche le menu avec `:target`.
- **Photo en grand** : lien vers `#zoom`, affiché avec `:target`. Un clic dessus la ferme.
- **Formulaire** : validation HTML5 (`required`, `type="email"`, `minlength`), erreurs en rouge avec `:user-invalid`.
- **Apparition au scroll et barre de progression** : animations CSS liées au défilement (`animation-timeline`). Sur un navigateur trop ancien, tout s'affiche simplement sans animation.

## Effets
- Apparition en fondu au scroll (sections, cartes).
- Image d'accueil qui zoome doucement, texte en cascade.
- Survol : zoom des photos, étiquette « Voir la photographie », boutons qui se remplissent, soulignement animé du menu, icônes qui montent.
- Barre de progression de lecture en haut, bouton « retour en haut ».
- Filtres de la galerie, photo en grand (clic sur la page détail).
- Les effets sont désactivés automatiquement pour les personnes qui ont demandé moins d'animations (`prefers-reduced-motion`).

## Responsive (media queries dans la balise `<style>`, partie 9)
| Largeur | Ce qui change |
|---|---|
| ≥ 1600 px | texte légèrement plus grand |
| ≤ 1100 px | espacements resserrés, « photos similaires » en 2 colonnes |
| ≤ 900 px (tablette) | menu burger plein écran, galerie en 2 colonnes, contact et détail en 1 colonne |
| ≤ 640 px (mobile) | tout en 1 colonne, boutons pleine largeur |
| ≤ 400 px | tags et pied de page resserrés |
| paysage < 500 px de haut | hero adapté |
| `hover: none` | pas d'effet de survol sur écran tactile |
| `print` | version imprimable |

Les tailles de texte (`clamp()`) et les marges s'adaptent aussi de façon fluide entre ces seuils.

## Formulaire de contact (nom, prénom, e-mail)
Sans JavaScript, le formulaire ouvre le logiciel de messagerie du visiteur (`action="mailto:…"`) : remplace `dedal@gmail.com` dans `index.html`.
Pour recevoir de vrais messages sans logiciel de mail : crée un formulaire gratuit sur **formspree.io**, remplace `action` par son adresse (`https://formspree.io/f/xxxxxx`) et supprime `enctype="text/plain"`.

## Mise en ligne sur GitHub Pages
1. Crée un dépôt GitHub et envoie-y le contenu du dossier (`index.html` à la racine).
2. Dépôt → **Settings → Pages** → Source : *Deploy from a branch* → branche `main`, dossier `/ (root)` → Save.
3. Le site sera disponible sur `https://TON-PSEUDO.github.io/NOM-DU-DEPOT/` au bout d'une minute.
Tous les chemins sont relatifs : rien à changer.
