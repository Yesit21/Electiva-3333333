# 🌱 AGROCAMPO - Plataforma Agrícola de Detección de Enfermedades

## 📋 Descripción

AGROCAMPO es una aplicación web completa para la gestión y detección de enfermedades en plantas mediante análisis de imágenes con IA. La plataforma permite a los agricultores monitorear sus cultivos, analizar el estado de salud de las plantas y acceder a una biblioteca completa de enfermedades comunes.

## ✨ Características Principales

### 🔐 Autenticación
- **Registro de usuarios**: Formulario completo con validación
- **Inicio de sesión**: Autenticación con diseño profesional

### 📊 Dashboard
- Métricas rápidas (cultivos, plantas analizadas, enfermedades)
- Gráfico de enfermedades detectadas
- Panel de actividad reciente
- Alertas activas con código de colores

### 🔍 Análisis de Plantas
- Subida de fotografías mediante drag & drop
- Opción para tomar foto con cámara
- Selector de tipo de planta
- Historial de análisis recientes

### 🌾 Gestión de Cultivos
- Vista de cuadrícula con todos los cultivos
- Información detallada por cultivo
- Badges de estado (Saludable/Riesgo/Afectado)

### 📚 Biblioteca de Enfermedades
- Catálogo completo de enfermedades
- Filtrado por tipo de cultivo
- Información detallada y tratamientos

### ⚙️ Perfil y Configuración
- Gestión de información personal
- Cambio de contraseña
- Preferencias de notificaciones con toggles

## 🎨 Sistema de Diseño

### Paleta de Colores
- **Verde Oscuro** (#1B5E20): Branding, sidebar
- **Verde Primario** (#2E7D32): Botones principales
- **Verde Claro** (#4CAF50): Acciones, hover
- **Verde Suave** (#E8F5E9): Fondos de resaltado
- **Alertas**: Rojo (#E53935), Amarillo (#FBC02D)

### Características
- ✅ CSS Puro (sin frameworks)
- ✅ Variables CSS para consistencia
- ✅ Flexbox y CSS Grid
- ✅ Diseño responsive mobile-first
- ✅ Accesibilidad WCAG
- ✅ Transiciones suaves

## 📁 Estructura del Proyecto

```
agrocampo/
├── index.html                 # Página de inicio
├── src/
│   ├── components/
│   │   ├── login.html        # Inicio de sesión
│   │   ├── registro.html     # Registro de usuario
│   │   ├── dashboard.html    # Panel principal
│   │   ├── analisis.html     # Análisis de plantas
│   │   ├── cultivos.html     # Gestión de cultivos
│   │   ├── biblioteca.html   # Biblioteca de enfermedades
│   │   ├── perfil.html       # Perfil y configuración
│   │   └── sidebar.html      # Componente de navegación
│   ├── styles/
│   │   ├── variables.css     # Variables del sistema de diseño
│   │   ├── global.css        # Estilos globales
│   │   └── layout.css        # Layouts y estructura
│   └── assets/               # Imágenes y recursos
└── README.md
```

## 🚀 Cómo Usar

### Opción 1: Abrir Directamente en el Navegador

1. **Clonar o descargar el proyecto**
2. **Abrir `index.html` en tu navegador**
3. **Navegar por las diferentes secciones**

¡Así de simple! No requiere instalación, servidor ni compilación.

### Opción 2: Usar un Servidor Local (Recomendado)

Para evitar problemas con CORS y recursos locales:

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (http-server)
npx http-server

# Con PHP
php -S localhost:8000
```

Luego abre `http://localhost:8000` en tu navegador.

## 🗺️ Navegación

La aplicación incluye 7 pantallas principales:

1. **Inicio** (`index.html`) - Página de bienvenida
2. **Login** (`src/components/login.html`) - Iniciar sesión
3. **Registro** (`src/components/registro.html`) - Crear cuenta
4. **Dashboard** (`src/components/dashboard.html`) - Panel principal
5. **Análisis** (`src/components/analisis.html`) - Analizar plantas
6. **Cultivos** (`src/components/cultivos.html`) - Gestionar cultivos
7. **Biblioteca** (`src/components/biblioteca.html`) - Catálogo de enfermedades
8. **Perfil** (`src/components/perfil.html`) - Configuración

## 📱 Responsive Design

La aplicación es completamente responsive:

- **Desktop**: Layout completo con sidebar lateral fija
- **Tablet**: Adaptación de grids y espaciados
- **Mobile**: 
  - Sidebar colapsado a navegación horizontal
  - Grids de una columna
  - Formularios adaptados

## 🎯 Datos de Ejemplo

La aplicación incluye datos de demostración:
- 12 cultivos registrados
- 85 plantas analizadas
- 5 enfermedades detectadas
- 6+ enfermedades en la biblioteca

## 🌐 Compatibilidad de Navegadores

- ✅ Chrome/Edge (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ Opera (últimas 2 versiones)

## 🔮 Próximas Funcionalidades

- [ ] Integración con API de análisis de imágenes con IA
- [ ] Sistema de notificaciones push
- [ ] Exportación de reportes en PDF
- [ ] Gráficos interactivos con Chart.js
- [ ] Sistema de roles (Admin, Usuario, Técnico)
- [ ] Integración con sensores IoT
- [ ] Modo offline con LocalStorage
- [ ] Internacionalización (i18n)

## 👥 Autores

Proyecto desarrollado para la plataforma AGROCAMPO - Electiva III

## 📄 Licencia

Este proyecto es parte de un trabajo académico.

---

**¿Tienes preguntas o sugerencias?** Abre un issue o contacta al equipo de desarrollo.

🌱 **AGROCAMPO** - Cultivando el futuro con tecnología
