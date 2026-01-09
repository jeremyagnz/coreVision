# 🎬 CORE Vision

Site web officiel de **CORE Vision** - Films et Photographie professionnelle par Alexandre Martins.

## 📋 À propos

CORE Vision est le portfolio professionnel d'Alexandre Martins, vidéaste et photographe basé à Lyon. Ancien marin-pompier de Marseille, Alexandre capture l'intensité et l'excellence dans le sport, le corporate et l'événementiel.

**Tagline**: *Au cœur de l'action, l'essentiel de l'émotion*

## 🚀 Technologies Utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Design moderne avec variables CSS
- **JavaScript ES6+** - Modules natifs
- **GSAP 3.12** - Animations fluides
- **ScrollTrigger** - Parallax et scroll animations
- **Google Fonts** - Typographie Inter

## 📁 Structure du Projet

```
coreVision/
├── index.html              # Page principale
├── sitemap.xml            # Plan du site
├── robots.txt             # Instructions robots
├── README.md              # Documentation
└── assets/
    ├── css/
    │   ├── variables.css   # Variables CSS
    │   ├── reset.css       # Reset styles
    │   ├── layout.css      # Layouts & grids
    │   ├── components.css  # Composants UI
    │   ├── animations.css  # Animations CSS
    └── responsive.css  # Media queries
    ├── js/
    │   ├── main.js         # Point d'entrée
    │   ├── cursor.js       # Curseur custom
    │   ├── navigation.js   # Menu & nav
    │   ├── animations.js   # GSAP animations
    │   ├── carousel.js     # Carousel 3D
    │   └── filters.js      # Filtres projets
    └── images/
        └── .gitkeep
```

## ✨ Fonctionnalités

- ✅ **Preloader animé** avec barre de progression
- ✅ **Custom cursor** avec états hover interactifs
- ✅ **Menu fullscreen** avec animations staggered
- ✅ **Hero avec video background** et parallax
- ✅ **Progress bar** de scroll
- ✅ **Carousel 3D** pour reels Instagram
- ✅ **Filtres de projets** par catégorie
- ✅ **Animations GSAP** avec ScrollTrigger
- ✅ **Responsive design** mobile-first
- ✅ **SEO optimisé** (meta tags, Schema.org)

## 🎨 Palette de Couleurs

```css
--primary: #0D1D25  /* Bleu très foncé */
--ocean: #104C64    /* Bleu océan */
--fire: #B6410F     /* Orange feu */
--sunset: #C0754D   /* Orange coucher de soleil */
--sand: #D59D80     /* Beige sable */
--stone: #C6C8D0    /* Gris pierre */
--light: #F5F5F5    /* Gris très clair */
--white: #FFFFFF    /* Blanc */
```

## 🛠️ Installation

1. Clonez le repository:
```bash
git clone https://github.com/jeremyagnz/coreVision.git
cd coreVision
```

2. Ouvrez `index.html` dans votre navigateur ou utilisez un serveur local:
```bash
# Avec Python 3
python -m http.server 8000

# Avec Node.js (http-server)
npx http-server
```

3. Visitez `http://localhost:8000`

## 📱 Sections du Site

1. **Hero** - Video background avec logo animé
2. **À propos** - Biographie et valeurs
3. **Projets** - Portfolio filtrable (Sport, Corporate, Événementiel)
4. **Instagram** - Carousel 3D des derniers reels
5. **Contact** - Call-to-action
6. **Footer** - Informations et navigation

## 🎯 SEO

Le site est optimisé pour les moteurs de recherche avec:
- Meta tags complets (title, description, keywords)
- Open Graph pour partage social
- Twitter Cards
- Schema.org JSON-LD (ProfessionalService)
- Sitemap.xml
- Robots.txt
- URL canonique
- Sémantique HTML5

## 📞 Contact

**Alexandre Martins**
- 📧 Email: contact@corevision.fr
- 📱 Téléphone: 06 68 91 85 89
- 📸 Instagram: [@alexmrts_visuals](https://instagram.com/alexmrts_visuals)
- 📍 Localisation: Lyon, France

## 🏗️ Architecture du Code

### CSS Modulaire

Le CSS est organisé en 6 fichiers pour une maintenance optimale:

1. **variables.css** - Variables globales (couleurs, espacements, transitions)
2. **reset.css** - Reset CSS et styles de base
3. **layout.css** - Layouts, grids et structures de sections
4. **components.css** - Composants réutilisables (boutons, cartes, navigation)
5. **animations.css** - Keyframes et animations CSS
6. **responsive.css** - Media queries pour mobile et tablette

### JavaScript Modulaire

Le JavaScript utilise des modules ES6 pour une organisation claire:

1. **main.js** - Point d'entrée et orchestration
2. **cursor.js** - Gestion du curseur personnalisé
3. **navigation.js** - Menu, burger et barre de progression
4. **animations.js** - Animations GSAP et ScrollTrigger
5. **carousel.js** - Carousel 3D Instagram
6. **filters.js** - Filtres de projets

## ⚡ Performance

### Optimisations Implémentées

- **Lazy loading** - Images et vidéos chargées à la demande
- **Preload fonts** - Chargement prioritaire des polices critiques
- **CSS modulaire** - Chargement progressif des styles
- **JavaScript modules** - Code splitting natif
- **Compression ready** - Structure prête pour minification
- **Async scripts** - Scripts non-bloquants

### Métriques Cibles

- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- Time to Interactive (TTI): < 3.8s

## ♿ Accessibilité

Le site respecte les standards WCAG 2.1 niveau AA:

- **ARIA labels** - Navigation et éléments interactifs
- **Alt text** - Descriptions pour toutes les images
- **Contraste** - Ratio minimum 4.5:1
- **Navigation clavier** - Tab, Enter, Escape fonctionnels
- **Semantic HTML** - Structure logique et accessible
- **Focus visible** - Indicateurs clairs pour la navigation

## 🌐 Compatibilité Navigateurs

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile (iOS Safari 14+, Chrome Android 90+)

## 📐 Breakpoints Responsive

```css
/* Mobile */
@media (max-width: 768px) { }

/* Tablet */
@media (max-width: 1024px) { }

/* Desktop */
@media (min-width: 1025px) { }
```

## 🔧 Développement

### Prérequis

- Navigateur moderne
- Serveur local (optionnel mais recommandé)

### Lancer en développement

```bash
# Avec Python
python -m http.server 8000

# Avec Node.js
npx http-server -p 8000

# Avec PHP
php -S localhost:8000
```

### Structure des fichiers

- Gardez les CSS modulaires séparés
- Un module JS = une fonctionnalité
- Commentaires en français et anglais
- Nommage BEM pour les classes CSS

## 🚀 Déploiement

Le site est prêt pour être déployé sur:

- **GitHub Pages** - Gratuit et simple
- **Netlify** - CI/CD automatique
- **Vercel** - Optimisations automatiques
- **Serveur classique** - Apache, Nginx

### Checklist de déploiement

- [ ] Vérifier les URLs (remplacer corevision.fr)
- [ ] Ajouter vraies images (remplacer placeholders)
- [ ] Configurer analytics (Google Analytics, etc.)
- [ ] Tester sur mobile réel
- [ ] Vérifier SEO avec outils (Lighthouse, etc.)
- [ ] Configurer HTTPS/SSL
- [ ] Soumettre sitemap à Google Search Console

## 📝 Personnalisation

### Changer les couleurs

Modifiez les variables dans `assets/css/variables.css`:

```css
:root {
    --primary: #VotreCouleur;
    --fire: #VotreCouleur;
    /* ... */
}
```

### Ajouter un projet

Dans `index.html`, dupliquez un `<article class="project-card">` et modifiez:
- `data-category` - Catégorie du projet
- `src` de la vidéo - URL de votre vidéo
- Textes (titre, catégorie, description)

### Modifier le carousel Instagram

Dans `index.html`, section `#instagram`:
- Ajoutez/supprimez des `<div class="carousel-item">`
- Ajustez le `radius` dans `assets/js/carousel.js` si besoin

## 🐛 Résolution de problèmes

### Les vidéos ne se chargent pas

- Vérifiez la connexion internet
- Les URLs Mixkit peuvent nécessiter CORS headers
- Utilisez un serveur local, pas `file://`

### Le cursor custom ne s'affiche pas

- Normal sur mobile (désactivé automatiquement)
- Vérifiez que JavaScript est activé
- Vérifiez les imports de modules

### Les animations GSAP ne fonctionnent pas

- Vérifiez que GSAP est chargé (voir console)
- Attendez le chargement complet de la page
- Vérifiez les erreurs JavaScript dans la console

## 📄 License

© 2024 CORE Vision. Tous droits réservés.

## 🙏 Crédits

- **Design & Développement**: CORE Vision
- **Vidéos placeholder**: [Mixkit](https://mixkit.co/)
- **Photos placeholder**: [Pravatar](https://pravatar.cc/)
- **Typographie**: [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
- **Animations**: [GSAP](https://greensock.com/gsap/)

## 📞 Support

Pour toute question ou assistance:
- Email: contact@corevision.fr
- Instagram: [@alexmrts_visuals](https://instagram.com/alexmrts_visuals)

---

**Fait avec ❤️ à Lyon, France**