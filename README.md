# 🧩 Portafolio / Landing Freelance – Victor Sánchez

Proyecto de landing page y portafolio profesional desarrollado con **React + TypeScript + TailwindCSS**, enfocado en presentar servicios de desarrollo web, software a medida y soluciones digitales modernas. Incluye secciones de héroe, servicios, roadmap, portafolio, precios, FAQ y blog.

---
## 📌 Tabla de Contenidos
1. [Descripción](#-descripción)
2. [Tecnologías](#-tecnologías)
3. [Instalación](#-instalación)
4. [Scripts Disponibles](#-scripts-disponibles)
5. [Estructura del Proyecto](#-estructura-del-proyecto)
6. [Características Principales](#-características-principales)
7. [Optimización Técnica](#-optimización-técnica)
8. [Cómo Contribuir](#-cómo-contribuir)
9. [Licencia](#-licencia)

---
## 🧾 Descripción
Este repositorio contiene el código fuente del sitio personal / portafolio freelance de **Victor Sánchez**, diseñado para:
- Mostrar servicios (landing pages, e-commerce, software a medida, etc.)
- Presentar un portafolio visual de proyectos
- Ofrecer información clara sobre precios y procesos de trabajo
- Servir como base modular y escalable para futuras extensiones (blog, CMS, etc.)

---
## 🛠 Tecnologías
| Área | Tecnología |
|------|------------|
| Framework UI | [React 18](https://react.dev/) |
| Lenguaje | [TypeScript](https://www.typescriptlang.org/) |
| Estilos utilitarios | [TailwindCSS](https://tailwindcss.com/) |
| Componentes UI | Shadcn/UI (Radix + Tailwind) |
| Animaciones | [Framer Motion](https://www.framer.com/motion/) |
| Routing | React Router DOM 7 |
| Iconografía | Lucide React / Radix Icons |
| Accesibilidad & Prácticas | Semántica HTML + ARIA básica |

> La arquitectura prioriza **performance**, **mantenibilidad** y **consistencia visual**.

---
## ⚙ Instalación
Clona el repositorio y entra en el directorio:
```bash
git clone https://github.com/tu-usuario/victorfreelance.git
cd victorfreelance
```
Instala dependencias (elige uno):
```bash
npm install
# o
yarn install
# o
pnpm install
```
Entorno de desarrollo:
```bash
npm run dev
```
Build de producción:
```bash
npm run build
```
Vista previa del build:
```bash
npm run preview
```
Linting (si deseas validar estilo y tipos ESLint):
```bash
npm run lint
```

---
## 🏗 Scripts Disponibles
| Script | Descripción |
|--------|------------|
| `npm run dev` | Inicia servidor de desarrollo Vite |
| `npm run build` | Compila TypeScript y genera build optimizado |
| `npm run preview` | Sirve localmente el build de producción |
| `npm run lint` | Ejecuta ESLint (reglas TS/React) |

---
## 📂 Estructura del Proyecto
```
root
├── public/                # Assets públicos estáticos
├── src/
│   ├── assets/            # Imágenes e ilustraciones
│   ├── components/        # Componentes reutilizables (UI + secciones)
│   │   ├── ui/            # Componentes base de la librería shadcn/ui
│   │   ├── Navbar.tsx     # Barra de navegación fija con modo oscuro
│   │   ├── Hero.tsx       # Sección principal introductoria
│   │   ├── PortfolioSection.tsx
│   │   ├── Pricing.tsx
│   │   ├── DevelopmentRoadmap.tsx
│   │   ├── FAQSection.tsx
│   │   ├── About.tsx
│   │   └── ...
│   ├── pages/             # Vistas/entradas de rutas
│   ├── data/              # (Opcional) Data estructurada (posts, listas)
│   ├── lib/               # Utilidades generales (helpers)
│   ├── App.tsx            # Definición de rutas y layout raíz
│   ├── main.tsx           # Punto de entrada (hydrate/render)
│   ├── index.css          # Estilos globales + utilidades @layer
│   └── App.css            # Variables de tema + Tailwind layers base
├── tailwind.config.js     # Configuración Tailwind (colores, dark mode)
├── vite.config.ts         # Configuración de Vite / bundling
├── tsconfig.json          # Configuración TypeScript
└── package.json
```
**Notas:**
- Clases reutilizables agregadas dentro de `index.css` bajo `@layer components` (ej: `section-title`, `heading-gradient`, `section-x-padding`).
- El modo oscuro se gestiona mediante clase `dark` + variables CSS (HSL) definidas en `App.css`.

---
## 🌟 Características Principales
- **✅ 100% Responsive**: Mobile-first, adaptado a móviles, tablets y desktop.
- **🌗 Dark / Light Mode**: Toggle accesible y variables CSS definidas por tema.
- **♻ Código Reutilizable**: Componentes desacoplados y utilidades centralizadas.
- **🎨 Diseño Moderno**: Gradientes suaves, tipografía clara y espaciados consistentes.
- **⚡ Rendimiento Mejorado**: Uso de `React.memo` en componentes puros y lazy loading de imágenes.
- **🧱 Escalable**: Fácil de extender con más páginas, blog dinámico o API.
- **🛡 Buenas Prácticas**: Tipado fuerte, semántica y clases declarativas.

---
## 🚀 Optimización Técnica
| Área | Mejora Aplicada |
|------|-----------------|
| Estilos | Reducción de duplicación con utilidades personalizadas (`@apply`). |
| Theming | Variables HSL para colores + soporte dark mode por clase. |
| Performance | `React.memo` en componentes sin props dinámicos. |
| Imágenes | `loading="lazy"` en recursos no críticos. |
| Layout | Eliminación de scroll horizontal con `overflow-x-hidden` + control de `w-screen`. |
| Accesibilidad | `aria-label` en icon buttons, alt descriptivos. |
| Consistencia | Clases utilitarias (`section-title`, `section-lead`, `heading-gradient`). |

**Ideas Futuras (Roadmap Técnico):**
- Code splitting por rutas con `React.lazy` (si no se añadió ya).
- Optimización de imágenes (WebP/AVIF + `srcset`).
- Integración CMS headless (ej: Sanity o Contentlayer) para blog real.
- Test unitarios con Vitest / React Testing Library.
- Métricas Core Web Vitals & Lighthouse CI.

---
## 🤝 Cómo Contribuir
1. Haz un fork del repositorio.
2. Crea una rama de feature: `git checkout -b feature/nueva-seccion`.
3. Realiza tus cambios siguiendo el estilo existente.
4. Ejecuta `npm run lint` y asegúrate de que no haya errores.
5. Haz commit: `git commit -m "feat: agrega nueva sección"`.
6. Sube tu rama: `git push origin feature/nueva-seccion`.
7. Abre un Pull Request describiendo claramente el cambio.

> Sugerencias, issues y mejoras de rendimiento son bienvenidas.

---
## 📄 Licencia
Este proyecto está licenciado bajo la **MIT License**. Consulta el archivo `LICENSE` (o el campo `license` en `package.json`) para más detalles.

---
## 🙌 Créditos
Inspirado y construido sobre buenas prácticas de la comunidad React + Tailwind. Íconos por [Lucide](https://lucide.dev/) y [Radix](https://www.radix-ui.com/). Diseño y desarrollo por **Victor Sánchez**.

---
## 📨 Contacto
¿Interesado en colaborar o contratar? Puedes conectar a través de:
- GitHub: https://github.com/VictorDev1986
- LinkedIn: (agregar enlace si aplica)
- Portafolio: (agregar dominio cuando esté desplegado)

---
> "Construyendo experiencias digitales que impulsan ideas hacia la acción." 🚀
