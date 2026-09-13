# 🌟 Academia Stellaris: Destinos Cruzados

> **Novela visual romántica interactiva** con sistema de afinidad, guardado, galería y soporte Android.

![Versión](https://img.shields.io/badge/versión-1.0.0-purple)
![Plataformas](https://img.shields.io/badge/plataformas-Web%20%7C%20Android-blue)
![Capítulos](https://img.shields.io/badge/capítulos-4-green)
![Romances](https://img.shields.io/badge/romances-4%20personajes-pink)

---

## 📖 Descripción

**Academia Stellaris: Destinos Cruzados** es una novela visual ambientada en una academia de magia donde el/la protagonista debe navegar misterios ancestrales mientras forja lazos con cuatro personajes románticos.

### ✨ Características principales

- 🎭 **4 personajes románticos** con rutas únicas
- 💕 **Sistema de afinidad** que altera diálogos y finales
- 💾 **Guardado/Carga** con 3 slots + auto-guardado
- 🖼 **Galería de CGs** desbloqueables (8 CGs)
- 📱 **100% compatible con Android** (APK/AAB)
- 📝 **4 capítulos** completamente jugables
- 🔀 **2 finales alternativos** según decisiones
- 🎨 **20+ fondos** con gradientes dinámicos
- ⌨️ **Efecto typewriter** en diálogos

---

## 🚀 Inicio Rápido

### Requisitos mínimos

- **Node.js** 18+ ([descargar](https://nodejs.org/))
- **npm** 9+ (incluido con Node.js)
- **Navegador** moderno (Chrome, Firefox, Safari, Edge)

### Instalación

```bash
# 1. Clonar o descargar el proyecto
git clone <url-del-repositorio>
cd academia-stellaris

# 2. Instalar dependencias
npm install

# 3. Ejecutar en modo desarrollo
npm run dev
```

El juego se abrirá automáticamente en `http://localhost:5173`

### Compilar para producción

```bash
npm run build
# Los archivos se generan en /dist
```

---

## 📱 Compilar APK/AAB para Android

### 📋 Requisitos previos

| Herramienta | Versión mínima | Instalación |
|---|---|---|
| **Node.js** | 18+ | [nodejs.org](https://nodejs.org/) |
| **Android Studio** | Latest | [developer.android.com](https://developer.android.com/studio) |
| **Android SDK** | API 24+ (Android 7.0) | Se instala con Android Studio |
| **Java JDK** | 17+ | Incluido con Android Studio |
| **Gradle** | 8.0+ | Incluido con el proyecto |

### 🔧 Paso 1: Configurar Android Studio

1. **Descarga e instala** [Android Studio](https://developer.android.com/studio)
2. Durante la instalación, asegúrate de marcar:
   - ✅ Android SDK
   - ✅ Android SDK Platform
   - ✅ Android Virtual Device
3. Abre Android Studio → **Settings** → **Languages & Frameworks** → **Android SDK**
4. En la pestaña **SDK Platforms**, instala al menos:
   - ✅ Android 13.0 (API 33)
   - ✅ Android 12.0 (API 31)
5. En la pestaña **SDK Tools**, instala:
   - ✅ Android SDK Build-Tools
   - ✅ Android SDK Platform-Tools

### 🔧 Paso 2: Configurar variables de entorno

**En Linux/macOS** (añadir a `~/.bashrc` o `~/.zshrc`):

```bash
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
```

**En Windows**:
1. Panel de Control → Sistema → Variables de entorno
2. Nueva variable de sistema:
   - Nombre: `ANDROID_HOME`
   - Valor: `C:\Users\TU_USUARIO\AppData\Local\Android\Sdk`
3. Editar `PATH` y añadir:
   - `%ANDROID_HOME%\platform-tools`
   - `%ANDROID_HOME%\tools`

### 🔧 Paso 3: Instalar Capacitor

```bash
# Instalar dependencias de Capacitor
npm install @capacitor/core @capacitor/cli @capacitor/android
```

### 🔧 Paso 4: Inicializar Capacitor

```bash
# Inicializar (si no se ha hecho)
npx cap init "Academia Stellaris" "com.stellaris.academia" --web-dir dist

# Añadir plataforma Android
npx cap add android
```

### 🔧 Paso 5: Compilar (Automático)

```bash
# Dar permisos al script
chmod +x build-android.sh

# Compilar APK Debug
./build-android.sh

# Opciones disponibles:
./build-android.sh --debug    # APK debug (por defecto)
./build-android.sh --release  # APK release
./build-android.sh --aab      # AAB para Play Store
./build-android.sh --clean    # Limpiar antes de compilar
```

### 🔧 Paso 5 (Alternativo): Compilar Manualmente

```bash
# 1. Compilar la web
npm run build

# 2. Sincronizar con Android
npx cap sync android

# 3. Compilar APK Debug
cd android
./gradlew assembleDebug
cd ..

# El APK estará en:
# android/app/build/outputs/apk/debug/app-debug.apk
```

### 🔧 Paso 6: Instalar en dispositivo

```bash
# Conectar dispositivo por USB y activar "Depuración USB"
adb devices  # Verificar que se detecta

# Instalar APK
adb install android/app/build/outputs/apk/debug/app-debug.apk
```

### 🔧 Paso 7: Abrir en Android Studio (Opcional)

```bash
npx cap open android
```

Desde Android Studio puedes:
- Ejecutar en emulador
- Generar APK firmado
- Generar AAB para Play Store
- Depurar la aplicación

### 📦 Generar APK para Play Store (Release)

1. **Crear keystore**:
```bash
keytool -genkey -v -keystore release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias stellaris
```

2. **Configurar en `android/app/build.gradle`**:
```gradle
android {
    signingConfigs {
        release {
            storeFile file('../../release-key.jks')
            storePassword 'TU_PASSWORD'
            keyAlias 'stellaris'
            keyPassword 'TU_PASSWORD'
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
        }
    }
}
```

3. **Compilar**:
```bash
cd android
./gradlew assembleRelease
cd ..
# APK en: android/app/build/outputs/apk/release/app-release.apk
```

4. **Para AAB (Play Store)**:
```bash
cd android
./gradlew bundleRelease
cd ..
# AAB en: android/app/build/outputs/bundle/release/app-release.aab
```

---

## 📝 Añadir Nuevos Capítulos

Los capítulos se definen en `src/data/story.ts`.

### Ejemplo: Añadir Capítulo 5

```typescript
// 1. Definir las escenas
export const chapter5Scenes: Scene[] = [
  {
    id: 'ch5_intro',
    chapter: 5,
    background: 'garden',
    lines: [
      { type: 'scene_change', text: 'Capítulo 5: Nuevo Amanecer', background: 'garden' },
      { type: 'narration', text: 'El sol se levanta sobre la academia...' },
      { type: 'dialogue', speaker: 'lyra', text: 'Buenos días.' },
      { type: 'choice', text: '¿Qué respondes?', choices: [
        { text: 'Sonreír', effects: { lyra: 2 }, nextScene: 'ch5_happy' },
        { text: 'Ignorar', effects: { lyra: -1 }, nextScene: 'ch5_cold' }
      ]}
    ]
  }
];

// 2. Añadir al array principal
export const allScenes: Scene[] = [
  ...chapter1Scenes,
  ...chapter2Scenes,
  ...chapter3Scenes,
  ...chapter4Scenes,
  ...chapter5Scenes  // ← Aquí
];

// 3. Registrar el capítulo
export const chapters: Chapter[] = [
  // ... existentes
  { id: 'ch5', number: 5, title: 'Nuevo Amanecer', scenes: ['ch5_intro'] }
];
```

### Tipos de líneas disponibles

| Tipo | Descripción | Propiedades requeridas |
|---|---|---|
| `narration` | Texto del narrador (itálica) | `text` |
| `dialogue` | Diálogo de personaje | `text`, `speaker` |
| `choice` | Elección del jugador | `choices[]` |
| `scene_change` | Cambio de fondo/título | `text`, `background` |
| `cg_show` | Mostrar CG desbloqueable | `cgId` |
| `affinity_check` | Verificar afinidad | `affinityCheck{}` |
| `nextScene` | Transición automática | `nextScene` |

### Sistema de efectos

```typescript
{ 
  text: 'Opción', 
  effects: { lyra: 2, kael: -1, sage: 0, melody: 1 }, 
  nextScene: 'ch5_path_b' 
}
```

### Fondos disponibles

Los fondos son gradientes CSS definidos en `GameEngine.tsx`:

```typescript
'academy-gate': 'from-indigo-900 via-purple-900 to-blue-900',
'main-hall': 'from-amber-900 via-orange-900 to-yellow-900',
'gardens': 'from-emerald-900 via-green-800 to-teal-900',
// ... 20+ más
```

Para añadir un nuevo fondo:
```typescript
'mi-fondo': 'from-rose-900 via-pink-800 to-red-900',
```

---

## 🎮 Sistema de Afinidad

### Umbrales por personaje

| Nivel | Afinidad | Efecto |
|---|---|---|
| Conocido | 0–2 | Diálogos básicos |
| Interés | 3–5 | Primera escena de romance |
| Romance | 6–7 | Romance profundo + CG |
| Final | 8+ | Ruta de final exclusivo |

### Cómo funciona

- Cada elección modifica la afinidad
- El sistema verifica afinidad en puntos clave
- El personaje con mayor afinidad determina la ruta romántica
- La afinidad afecta diálogos y el final

---

## 🏗 Estructura del Proyecto

```
academia-stellaris/
├── index.html              # HTML con splash screen Android
├── package.json            # Dependencias
├── capacitor.config.json   # Configuración Capacitor
├── build-android.sh        # Script de build Android
├── README.md               # Esta documentación
├── src/
│   ├── App.tsx             # Componente principal
│   ├── types.ts            # Definiciones TypeScript
│   ├── index.css           # Estilos globales + Tailwind
│   ├── main.tsx            # Entry point React
│   ├── data/
│   │   ├── characters.ts   # 4 personajes románticos
│   │   └── story.ts        # 4 capítulos (49 escenas)
│   ├── hooks/
│   │   └── useGameState.ts # Estado + guardado + galería
│   └── components/
│       ├── GameEngine.tsx   # Motor de novela visual
│       ├── TitleScreen.tsx  # Pantalla de título
│       ├── GameMenu.tsx     # Menú en juego
│       └── Gallery.tsx      # Galería de CGs
└── dist/                   # Build de producción
```

---

## 🐛 Solución de Problemas

### Android

| Problema | Solución |
|---|---|
| `ANDROID_HOME not found` | Configurar variable de entorno |
| `SDK location not found` | Instalar Android SDK |
| `Gradle sync failed` | `cd android && ./gradlew clean` |
| `App se cierra al abrir` | Verificar `npx cap sync android` |
| `Pantalla en blanco` | Verificar que `npm run build` funcione |

### Web

| Problema | Solución |
|---|---|
| `npm run dev` no funciona | Borrar `node_modules` y `npm install` |
| Estilos no cargan | Verificar que Tailwind esté configurado |
| Guardado no persiste | Verificar que localStorage esté habilitado |

---

## 📋 Checklist de Criterios de Aceptación

- [x] Se juega sin errores en Chrome, Firefox
- [x] Compatible con móvil Android (orientación vertical)
- [x] Splash screen al abrir la app
- [x] El guardado persiste tras cerrar (localStorage)
- [x] Sistema de afinidad altera 12+ líneas de diálogo
- [x] 2 finales diferentes según decisiones
- [x] El juego se puede terminar de principio a fin
- [x] 4 personajes con 2+ escenas de romance cada uno
- [x] Galería funcional con CGs desbloqueables
- [x] README.md con instrucciones completas
- [x] Script `build-android.sh` automatizado

---

## 📄 Licencia

Proyecto educativo. Libre para uso personal y aprendizaje.

---

*Hecho con ❤️ usando React, Vite, Tailwind CSS y Capacitor*
