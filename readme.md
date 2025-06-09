# Portfolio Personal - Antonio Santiago

Un sitio web personal moderno y responsivo que muestra mis habilidades como desarrollador web, incluyendo proyectos destacados y opciones de contacto.

## 📋 Información del Desarrollador

- **Nombre:** Antonio Santiago
- **Clan:** Macondo
- **Email:** santiagor.acarlos@gmail.com
- **GitHub:** [TonyS-dev](https://github.com/TonyS-dev)
- **CodePen:** [TonyS-dev](https://codepen.io/TonyS-dev)

## 🚀 Descripción del Proyecto

Este portfolio web fue desarrollado como parte del Módulo 2 de HTML y CSS del programa "Be a codernnn". El sitio presenta un diseño moderno con video de fondo, navegación fluida entre secciones y un diseño completamente responsivo que se adapta a diferentes dispositivos.

### ✨ Características Principales

- **Diseño Moderno:** Interfaz elegante con video de fondo y efectos de glassmorphism
- **Navegación SPA:** Transiciones suaves entre secciones sin recargas de página
- **Completamente Responsivo:** Optimizado para escritorio, tablet y móvil
- **Formulario de Contacto:** Sistema interactivo para consultas de clientes
- **Portfolio Interactivo:** Showcase de proyectos con previsualizaciones
- **Animaciones CSS:** Efectos hover y transiciones fluidas

## 🛠️ Tecnologías Utilizadas

- **HTML5:** Estructura semántica con etiquetas apropiadas
- **CSS3:** Estilos avanzados con Flexbox y Grid Layout
- **JavaScript (Vanilla):** Interactividad y navegación dinámica
- **Google Fonts:** Tipografía personalizada (Raleway)
- **Font Awesome:** Iconografía profesional
- **Video Background:** Elemento multimedia para mayor impacto visual

## 📁 Estructura del Proyecto

```
portfolio/
├── index.html                 # Página principal
├── assets/
│   ├── styles/
│   │   └── index/
│   │       └── styles.css     # Estilos principales
│   ├── videos/
│   │   └── background.mp4     # Video de fondo
│   └── img/
│       ├── poster.webp        # Poster del video
│       ├── me.webp           # Foto personal
│       ├── e-commerce-project.webp
│       ├── rpg-project.webp
│       └── cash-project.webp
└── src/
    └── main.js               # JavaScript principal
```

## 🎯 Funcionalidades Implementadas

### 1. Estructura HTML Semántica
- ✅ Uso correcto de `<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`
- ✅ Secciones bien definidas: Presentación, Acerca de, Contacto
- ✅ Formularios accesibles con labels y fieldsets apropiados

### 2. Estilos CSS Avanzados
- ✅ Archivo CSS externo bien organizado
- ✅ Paleta de colores consistente
- ✅ Tipografía personalizada con Google Fonts
- ✅ Efectos de sombra y transparencias
- ✅ Transiciones y animaciones fluidas

### 3. Diseño Responsivo
- ✅ **Escritorio (1024px+):** Layout de dos columnas con sidebar fijo
- ✅ **Tablet (768px):** Reorganización de elementos con flexbox
- ✅ **Móvil (480px):** Diseño vertical optimizado para touch

### 4. Interactividad
- ✅ Navegación SPA con JavaScript
- ✅ Efectos hover en botones y tarjetas
- ✅ Formulario de contacto funcional
- ✅ Animaciones CSS keyframes

## 🖥️ Secciones del Sitio

### Home
- Mensaje de bienvenida personalizado
- Grid de servicios ofrecidos (UI/UX, Web Development, Branding, Design Systems)
- Imagen personal profesional

### About Me
- Información personal y profesional
- Lista de habilidades técnicas
- Tabla de proyectos destacados con previsualizaciones
- Enlaces directos a proyectos en vivo

### Contact
- Formulario interactivo con validación
- Checkboxes para servicios de interés
- Campos de entrada con estilos personalizados
- Manejo de envío con JavaScript

## 🚀 Instalación y Uso

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/TonyS-dev/portfolio.git
   cd portfolio
   ```

2. **Abrir en navegador:**
   - Abrir `index.html` directamente en tu navegador
   - O usar un servidor local (recomendado):
   ```bash
   # Con Python
   python -m http.server 3000
   
   # Con Node.js (http-server)
   npx http-server
   
   # Con VS Code Live Server
   # Instalar extensión Live Server y hacer clic derecho > "Open with Live Server"
   ```

3. **Acceder al sitio:**
   - Abrir `http://localhost:3000` en tu navegador

## 📱 Compatibilidad

### Navegadores Soportados
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

### Resoluciones Testadas
- ✅ **Desktop:** 1920x1080, 1366x768, 1024x768
- ✅ **Tablet:** 768x1024, 1024x768
- ✅ **Mobile:** 375x667, 414x896, 360x640

## 🎨 Características de Diseño

### Paleta de Colores
- **Primario:** Blanco (#FFFFFF)
- **Secundario:** Grises (#757575, #6a6a6a, #333)
- **Acentos:** Azul claro (#47b3fc)
- **Fondos:** Negro con transparencias

### Tipografía
- **Fuente Principal:** Raleway (Google Fonts)
- **Pesos:** 100-900 (Variable)
- **Responsive:** Uso de clamp() para escalado fluido

### Efectos Visuales
- **Glassmorphism:** Fondos con backdrop-filter: blur()
- **Animaciones:** Bouncing buttons, fade-in transitions
- **Hover Effects:** Transform y color transitions

## 📋 Requisitos Cumplidos

### Requisitos Básicos (100%)
- ✅ **Estructura HTML:** Semántica correcta y completa
- ✅ **Estilos CSS:** Archivo externo con organización clara
- ✅ **Diseño Responsivo:** Flexbox y Grid implementados
- ✅ **Interactividad:** Transiciones y efectos hover

### Puntos Extra Implementados
- ✅ **SPA Navigation:** Navegación fluida sin recargas
- ✅ **Video Background:** Elemento multimedia profesional
- ✅ **Advanced CSS:** Animaciones keyframes personalizadas
- ✅ **Form Validation:** JavaScript para validación de formularios

## 🔧 Personalización

Para personalizar el portfolio:

1. **Contenido Personal:**
   - Editar información en `index.html`
   - Reemplazar imágenes en `assets/img/`
   - Actualizar enlaces sociales

2. **Estilos:**
   - Modificar variables CSS en `styles.css`
   - Ajustar colores en la sección de reset
   - Personalizar animaciones

3. **Funcionalidad:**
   - Extender JavaScript en `main.js`
   - Agregar nuevas secciones
   - Integrar APIs externas

## 📞 Contacto

¿Interesado en trabajar juntos? ¡Conectemos!

- **Email:** santiagor.acarlos@gmail.com
- **Teléfono:** +57 311 861 2730
- **GitHub:** [@TonyS-dev](https://github.com/TonyS-dev)
- **CodePen:** [@TonyS-dev](https://codepen.io/TonyS-dev)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

**Antonio Santiago © 2025** - Desarrollado con ❤️ como parte del desafío "Be a codernnn"