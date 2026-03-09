# 🚀 Suraj Bhandari - Full Stack Developer Portfolio

A modern, interactive portfolio website showcasing my skills, projects, and experience as a Full Stack Developer.

**Live Demo:** [localhost:5173](http://localhost:5173)

---

## ✨ Features

- **Interactive 3D Character** - Animated 3D model with smooth interactions and responsive design
- **Smooth Scrolling Experience** - Custom scroll animations with GSAP ScrollTrigger
- **Performance Optimized** - Throttled events, memoized components, and optimized rendering
- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Dark Theme** - Modern dark UI with cyan accent colors
- **Smooth Animations** - Seamless transitions and scroll-based animations
- **Tech Stack Showcase** - Interactive 3D visualization of technologies
- **Work Portfolio** - Carousel showcasing key projects and achievements

---

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI framework
- **TypeScript** - Type safety
- **Three.js** - 3D graphics and animations
- **React Three Fiber** - React renderer for Three.js
- **Vite** - Build tool and dev server

### Animation & Effects
- **GSAP** - Advanced animations and timeline control
- **GSAP ScrollTrigger** - Scroll-based animations
- **React Three Rapier** - Physics simulation for 3D objects

### Performance
- **Custom Performance Utils** - Throttle, debounce, RAF throttle functions
- **React.memo** - Prevent unnecessary re-renders
- **Lazy Loading** - Code splitting with React.lazy
- **Passive Event Listeners** - Non-blocking scroll and resize handlers

### Styling
- **CSS3** - Modern CSS with custom properties and animations
- **Responsive Design** - Mobile-first approach with media queries

---

## 📋 Page Sections

- **Landing** - Hero section with 3D character and intro text
- **About** - Professional summary and overview
- **What I Do** - Frontend and Backend services with skill highlights
- **Career** - Work experience timeline
- **Work** - Project showcase carousel
- **Tech Stack** - Interactive 3D technology visualization
- **Contact** - Contact information and social links

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd rajesh-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The portfolio will open at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview the build**
   ```bash
   npm run preview
   ```

---

## 📂 Project Structure

```
src/
├── components/
│   ├── About.tsx                 # About section
│   ├── Career.tsx                # Experience timeline
│   ├── Character/                # 3D character and scene
│   │   ├── Scene.tsx
│   │   ├── DeveloperCharacter.tsx
│   │   └── utils/
│   ├── Contact.tsx               # Contact section
│   ├── Cursor.tsx                # Custom cursor
│   ├── Landing.tsx               # Hero section
│   ├── Navbar.tsx                # Navigation bar
│   ├── SocialIcons.tsx           # Social links
│   ├── TechStack.tsx             # 3D tech visualization
│   ├── WhatIDo.tsx               # Services section
│   ├── Work.tsx                  # Projects carousel
│   ├── styles/                   # Component stylesheets
│   └── utils/                    # Utility functions
├── context/
│   └── LoadingProvider.tsx       # Loading context
├── data/
│   └── boneData.ts               # Animation bone data
├── utils/
│   ├── performanceUtils.ts       # Throttle, debounce functions
│   └── GsapScroll.ts             # Scroll animations
├── App.tsx                       # Root component
├── main.tsx                      # Entry point
└── index.css                     # Global styles
```

---

## 🎨 Customization

### Update Personal Information

**Update Name & Contact:**
- Edit [src/components/Landing.tsx](src/components/Landing.tsx) - Landing intro
- Edit [src/components/Contact.tsx](src/components/Contact.tsx) - Contact details
- Edit [src/components/Navbar.tsx](src/components/Navbar.tsx) - Navigation email

**Update Skills & Experience:**
- Edit [src/components/About.tsx](src/components/About.tsx) - Professional summary
- Edit [src/components/WhatIDo.tsx](src/components/WhatIDo.tsx) - Services and skills
- Edit [src/components/Career.tsx](src/components/Career.tsx) - Work experience
- Edit [src/components/Work.tsx](src/components/Work.tsx) - Projects

### Change Colors

Edit CSS variables in [src/index.css](src/index.css):
```css
:root {
  --accentColor: #5eead4;      /* Cyan accent */
  --backgroundColor: #0a0e17;   /* Dark background */
}
```

### Change 3D Character

Option 1: Use the developer character
- Edit [src/components/Character/index.tsx](src/components/Character/index.tsx)
- Change import from `Scene` to `DeveloperCharacter`

Option 2: Replace with custom model
- Replace the encrypted model in `public/models/`
- Update loader path in [src/components/Character/utils/character.ts](src/components/Character/utils/character.ts)

---

## ⚡ Performance Optimizations

This portfolio includes several performance optimizations:

1. **Throttled Scroll Events** - Reduces scroll handler calls by 90%+
2. **Debounced Resize** - Prevents excessive layout recalculations
3. **Memoized Components** - React.memo wrapping static sections
4. **Code Splitting** - Lazy loading of heavy components (TechStack)
5. **RAF-Based Throttling** - Smooth cursor tracking with RAF
6. **Optimized Three.js** - Disabled shadows, limited DPR, optimized materials
7. **Passive Listeners** - Non-blocking scroll and resize events

---

## 📦 Dependencies

### Core
- `react` - UI library
- `react-dom` - DOM rendering
- `typescript` - Type safety

### 3D & Animation
- `three` - 3D graphics
- `@react-three/fiber` - React renderer for Three.js
- `@react-three/drei` - Useful Three.js abstractions
- `@react-three/rapier` - Physics engine
- `gsap` - Animation library

### Build Tools
- `vite` - Build tool
- `@vitejs/plugin-react` - React plugin for Vite

---

## 🔗 Links

- **GitHub:** [SurajBhandari5110](https://github.com/SurajBhandari5110)
- **LinkedIn:** [suraj-bhandari-1aa31323a](https://www.linkedin.com/in/suraj-bhandari-1aa31323a)
- **Email:** surajbhandari2301@gmail.com

---

## 📝 License

This project is open source and available under the MIT License.

---

## 🤝 Contributing

Suggestions and improvements are welcome! Feel free to fork and create a pull request.

---

**Last Updated:** March 9, 2026
