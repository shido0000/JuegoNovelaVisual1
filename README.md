# 🌟 Academia Stellaris: Destinos Cruzados

> Novela visual romántica interactiva con sistema de afinidad, guardado y galería.

## 📖 Descripción

**Academia Stellaris: Destinos Cruzados** es una novela visual ambientada en una academia de magia donde el/la protagonista debe navegar misterios ancestrales mientras forja lazos con cuatro personajes románticos.

### Características
- 🎭 **4 personajes románticos** con rutas únicas
- 💕 **Sistema de afinidad** que altera diálogos y finales
- 💾 **Guardado/Carga** con 3 slots + auto-guardado
- 🖼 **Galería de CGs** desbloqueables
- 📱 **Compatible con Android** (via Capacitor)
- 📝 **4 capítulos** completamente jugables
- 🔀 **Múltiples finales** según decisiones

## 🚀 Instalación y Desarrollo

### Requisitos
- Node.js 18+
- npm 9+

### Pasos

```bash
# 1. Instalar dependencias
npm install

# 2. Ejecutar en modo desarrollo
npm run dev

# 3. Compilar para producción
npm run build
```

El juego se abrirá en `http://localhost:5173`

## 📱 Compilar APK/AAB para Android

### Requisitos adicionales
- Android Studio instalado
- Android SDK (API 24+)
- Java JDK 17+

### Pasos automáticos

```bash
# Ejecutar el script de build automático
chmod +x build-android.sh
./build-android.sh
```

### Pasos manuales

```bash
# 1. Instalar Capacitor
npm install @capacitor/core @capacitor/cli
npx cap init "Academia Stellaris" "com.stellaris.vn" --web-dir dist

# 2. Añadir plataforma Android
npm install @capacitor/android
npx cap add android

# 3. Compilar la web
npm run build

# 4. Sincronizar con Android
npx cap sync android

# 5. Abrir en Android Studio
npx cap open android

# 6. En Android Studio: Build > Generate Signed Bundle/APK
```

### APK Debug (rápido)

```bash
npm run build
npx cap sync android
cd android && ./gradlew assembleDebug
# APK en: android/app/build/outputs/apk/debug/app-debug.apk
```

## 📝 Añadir Nuevos Capítulos

Los capítulos se definen en `src/data/story.ts`. Para añadir contenido:

### 1. Crear una nueva escena

```typescript
export const chapter5Scenes: Scene[] = [
  {
    id: 'ch5_intro',          // ID único
    chapter: 5,                // Número de capítulo
    background: 'garden',      // Fondo (definido en GameEngine)
    lines: [
      { type: 'scene_change', text: 'Capítulo 5: Nuevo Amanecer', background: 'garden' },
      { type: 'narration', text: 'Texto del narrador en itálica...' },
      { type: 'dialogue', speaker: 'lyra', text: 'Diálogo de un personaje' },
      { type: 'choice', text: '¿Qué eliges?', choices: [
        { text: 'Opción A', effects: { lyra: 2, kael: -1 }, nextScene: 'ch5_path_a' },
        { text: 'Opción B', effects: { sage: 1, melody: 1 }, nextScene: 'ch5_path_b' }
      ]}
    ]
  }
];
```

### 2. Tipos de líneas disponibles

| Tipo | Descripción |
|------|-------------|
| `narration` | Texto del narrador (itálica) |
| `dialogue` | Diálogo de personaje (requiere `speaker`) |
| `choice` | Elección del jugador (requiere `choices`) |
| `scene_change` | Cambio de fondo con título |
| `cg_show` | Mostrar CG desbloqueable (requiere `cgId`) |
| `affinity_check` | Verificar afinidad para ramificar |
| `nextScene` | Transición automática a otra escena |

### 3. Añadir al array de escenas

```typescript
export const allScenes: Scene[] = [
  ...chapter1Scenes,
  ...chapter2Scenes,
  ...chapter3Scenes,
  ...chapter4Scenes,
  ...chapter5Scenes  // ← Añadir aquí
];
```

### 4. Añadir al array de capítulos

```typescript
export const chapters: Chapter[] = [
  // ... existentes
  { id: 'ch5', number: 5, title: 'Nuevo Amanecer', scenes: ['ch5_intro'] }
];
```

### 5. Fondos disponibles

Los fondos se definen como gradientes CSS en `GameEngine.tsx`. Para añadir uno nuevo:

```typescript
const bgStyles = {
  // ... existentes
  'mi-nuevo-fondo': 'from-blue-900 via-indigo-900 to-purple-900',
};
```

## 🎮 Sistema de Afinidad

Cada elección modifica la afinidad con los personajes:

```typescript
{ text: 'Opción romántica', effects: { lyra: 3, kael: -1 }, nextScene: '...' }
```

### Umbrales por personaje

| Nivel | Afinidad | Efecto |
|-------|----------|--------|
| Conocido | 0-2 | Diálogos básicos |
| Interés | 3-5 | Primer romance |
| Romance | 6-7 | Romance profundo |
| Final | 8+ | Ruta de final exclusivo |

## 🏗 Estructura del Proyecto

```
src/
├── App.tsx              # Componente principal
├── types.ts             # Definiciones TypeScript
├── index.css            # Estilos globales
├── main.tsx             # Entry point
├── data/
│   ├── characters.ts    # Personajes románticos
│   └── story.ts         # Todo el contenido narrativo
├── hooks/
│   └── useGameState.ts  # Estado del juego + guardado
└── components/
    ├── GameEngine.tsx    # Motor de novela visual
    ├── TitleScreen.tsx   # Pantalla de título
    ├── GameMenu.tsx      # Menú en juego
    └── Gallery.tsx       # Galería de CGs
```

## 📋 Licencia

Proyecto educativo. Libre para uso personal y aprendizaje.

---

*Hecho con ❤️ usando React, Vite y Tailwind CSS*
