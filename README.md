# Café Torres VIP - Plataforma Web

Bienvenido al repositorio oficial de **Café Torres VIP**, el referente de calidad en café de origen en Pereira, Risaralda. Esta plataforma web está diseñada para ofrecer una experiencia digital de lujo, permitiendo a los usuarios descubrir experiencias sensoriales y soluciones corporativas B2B.

## 🚀 Tecnologías Utilizadas

- **React 18**: Biblioteca principal para la interfaz de usuario.
- **Vite**: Herramienta de construcción rápida para el desarrollo.
- **Tailwind CSS**: Framework de CSS para un diseño moderno y responsive.
- **Lucide React**: Set de iconos elegantes y minimalistas.
- **Google Fonts**: Tipografías Serif y Sans-serif seleccionadas para una estética premium.

## 📂 Estructura del Proyecto

El proyecto sigue una arquitectura modular para facilitar el mantenimiento y la escalabilidad:

```text
src/
├── components/
│   ├── features/      # Lógica y UI específica de funcionalidades (Experiencias)
│   ├── layout/        # Componentes globales (Navbar, Footer)
│   ├── sections/      # Secciones principales de la página (Hero, B2B, Stats)
│   └── ui/            # Componentes atómicos reutilizables (Botones, Títulos)
├── content/           # Capa de datos y textos (brand, features)
├── assets/            # Imágenes y recursos estáticos
├── App.jsx            # Orquestador principal de la aplicación
└── main.jsx           # Punto de entrada de React
```

## 🛠️ Instalación y Desarrollo

Para ejecutar este proyecto localmente, sigue estos pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone [url-del-repositorio]
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Construir para producción:**
   ```bash
   npm run build
   ```

## ✨ Características Principales

- **Diseño Responsive:** Optimizado para dispositivos móviles, tablets y escritorio.
- **Arquitectura Modular:** Componentes desacoplados y reutilizables.
- **Capa de Contenido:** Textos centralizados en `src/content/content.js` para ediciones rápidas.
- **Formularios Interactivos:** Sistema de reserva de experiencias con validación de estado.
- **Estética VIP:** Uso de una paleta de colores tierra (Amber, Stone) que evocan la cultura cafetera.

---
© 2026 Café Torres VIP. Pereira, Colombia.
