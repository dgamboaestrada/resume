# Google Style Theme for JSON Resume

A modern resume theme inspired by Google's visual style, featuring Material Design principles and professional color palette.

## Features

### 🎨 **Modern Design**
- **Google Material Design color palette** - Professional and sophisticated colors
- **Google Sans/Roboto typography** - Clean and readable modern fonts
- **Responsive layout** - Perfect display on mobile, tablet, and desktop
- **Subtle gradients** - Elegant visual effects without overwhelming

### 🚀 **Contemporary Interface**
- **CSS Grid and Flexbox** - Modern and flexible layout system
- **Material Design shadows** - Subtle depth effects
- **Micro-interactions** - Smooth hover effects and transitions
- **Glassmorphism** - Glass effects in header section

### 📱 **Responsive and Accessible**
- **Mobile First** - Designed primarily for mobile devices
- **Print optimized** - Perfect for PDF export
- **High contrast** - Meets WCAG accessibility standards
- **Font scaling** - Typography that scales correctly

### 🎯 **Optimized for Resumes**
- **Visual timeline** - Modern timeline for work experience
- **Skill categorization** - Skills organized by level with color coding
- **Social links** - Professional links with Font Awesome 6 icons
- **Section organization** - Clear and scannable structure

## Color Palette

### Primary Colors
```css
--google-blue: #1a73e8;      /* Links and accents */
--google-green: #34a853;     /* Advanced skills */
--google-yellow: #fbbc04;    /* Intermediate skills */
--google-red: #ea4335;       /* Beginner skills */
```

### Professional Grays
```css
--google-grey-900: #202124;  /* Primary text */
--google-grey-700: #5f6368;  /* Secondary text */
--google-grey-300: #dadce0;  /* Borders */
--google-grey-50: #f8f9fa;   /* Background */
```

## Usage

### Live Preview
```bash
npm run preview     # English on port 4000
npm run preview:es  # Spanish on port 4001
```

## File Structure

```
jsonresume-themes/google-style/
├── package.json     # Theme dependencies
├── index.js         # Theme engine and helpers
├── resume.hbs       # HTML template with Handlebars
├── style.css        # Modern CSS with Material Design variables
└── README.md        # This documentation
```

## Compatibility

- ✅ **JSON Resume Schema** - Compatible with standard
- ✅ **Node.js 12+** - Works with current versions
- ✅ **resume-cli 3.x** - Compatible with official tool
- ✅ **Handlebars 4.x** - Modern templating engine

## Customization

### Change Primary Colors
Edit CSS variables in `style.css`:

```css
:root {
  --google-blue: #your-color-here;
  --google-green: #your-color-here;
  /* ... */
}
```

### Modify Layout
Edit the template in `resume.hbs` to change the HTML structure.

### Add Sections
Extend the template by adding new sections following the existing pattern.

## Technical Stack

- **JSON Resume** - Standard schema compliance
- **Handlebars** - Template engine
- **CSS Grid/Flexbox** - Modern layout
- **Font Awesome 6** - Modern iconography
- **Google Fonts** - Professional typography
- **Material Design** - Color system and principles

## Author

**Daniel Gamboa Estrada**
Site Reliability Engineer & Backend Developer

- 🌐 Website: [danielgamboa.mx](https://danielgamboa.mx)
- 💼 LinkedIn: [dgamboaestrada](https://linkedin.com/in/dgamboaestrada)
- 🐱 GitHub: [dgamboaestrada](https://github.com/dgamboaestrada)
- 🐳 Docker Hub: [jefecito](https://hub.docker.com/u/jefecito)

## License

MIT License - Free to use and modify.