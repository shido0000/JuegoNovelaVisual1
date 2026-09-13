#!/bin/bash
# ============================================
# Script de Build para Android
# Academia Stellaris: Destinos Cruzados
# ============================================
# Uso: chmod +x build-android.sh && ./build-android.sh
# ============================================

set -e

echo "🌟 Academia Stellaris - Build Android"
echo "======================================"

# Colores
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

# Función de ayuda
show_help() {
    echo "Uso: ./build-android.sh [OPCIÓN]"
    echo ""
    echo "Opciones:"
    echo "  --debug       Compilar APK debug (por defecto)"
    echo "  --release     Compilar APK release (requiere keystore)"
    echo "  --aab         Compilar AAB para Play Store"
    echo "  --clean       Limpiar build antes de compilar"
    echo "  --help        Mostrar esta ayuda"
    echo ""
}

# Parsear argumentos
BUILD_TYPE="debug"
CLEAN_BUILD=false

while [[ $# -gt 0 ]]; do
    case $1 in
        --debug)
            BUILD_TYPE="debug"
            shift
            ;;
        --release)
            BUILD_TYPE="release"
            shift
            ;;
        --aab)
            BUILD_TYPE="aab"
            shift
            ;;
        --clean)
            CLEAN_BUILD=true
            shift
            ;;
        --help)
            show_help
            exit 0
            ;;
        *)
            echo -e "${RED}Opción desconocida: $1${NC}"
            show_help
            exit 1
            ;;
    esac
done

echo -e "${BLUE}Tipo de build: ${BUILD_TYPE}${NC}"
echo ""

# Verificar dependencias
echo -e "${YELLOW}[1/7] Verificando dependencias...${NC}"

if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Error: Node.js no está instalado${NC}"
    echo "Instala Node.js desde: https://nodejs.org/"
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ Error: npm no está disponible${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Node.js $(node --version)${NC}"
echo -e "${GREEN}✓ npm $(npm --version)${NC}"

# Instalar dependencias si es necesario
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}Instalando dependencias npm...${NC}"
    npm install
fi

# Instalar Capacitor si no existe
if [ ! -d "node_modules/@capacitor/core" ]; then
    echo -e "${YELLOW}[2/7] Instalando Capacitor...${NC}"
    npm install @capacitor/core @capacitor/cli @capacitor/android
else
    echo -e "${GREEN}[2/7] ✓ Capacitor ya instalado${NC}"
fi

# Inicializar Capacitor si es necesario
if [ ! -f "capacitor.config.json" ] && [ ! -f "capacitor.config.ts" ]; then
    echo -e "${YELLOW}Inicializando Capacitor...${NC}"
    npx cap init "Academia Stellaris" "com.stellaris.academia" --web-dir dist
fi

# Añadir plataforma Android si no existe
if [ ! -d "android" ]; then
    echo -e "${YELLOW}[3/7] Añadiendo plataforma Android...${NC}"
    npx cap add android
    echo -e "${GREEN}✓ Plataforma Android añadida${NC}"
else
    echo -e "${GREEN}[3/7] ✓ Plataforma Android ya existe${NC}"
fi

# Build de la web
echo -e "${YELLOW}[4/7] Compilando web...${NC}"
npm run build
echo -e "${GREEN}✓ Web compilada${NC}"

# Sincronizar con Android
echo -e "${YELLOW}[5/7] Sincronizando con Android...${NC}"
npx cap sync android
echo -e "${GREEN}✓ Sincronizado${NC}"

# Verificar que Android SDK está disponible
if [ -z "$ANDROID_HOME" ] && [ -z "$ANDROID_SDK_ROOT" ]; then
    echo ""
    echo -e "${YELLOW}[6/7] ⚠️  AVISO: ANDROID_HOME no está definido${NC}"
    echo -e "${YELLOW}No se puede compilar automáticamente.${NC}"
    echo ""
    echo -e "${BLUE}Opciones:${NC}"
    echo "  1. Configura ANDROID_HOME en tu sistema"
    echo "  2. Usa Android Studio: npx cap open android"
    echo "  3. Compila manualmente: cd android && ./gradlew assembleDebug"
    echo ""
    echo -e "${YELLOW}Configuración recomendada:${NC}"
    echo "  export ANDROID_HOME=\$HOME/Android/Sdk"
    echo "  export PATH=\$PATH:\$ANDROID_HOME/tools/bin"
    echo "  export PATH=\$PATH:\$ANDROID_HOME/platform-tools"
    exit 0
fi

echo -e "${GREEN}[6/7] ✓ Android SDK detectado${NC}"

# Limpiar si se solicitó
if [ "$CLEAN_BUILD" = true ]; then
    echo -e "${YELLOW}Limpiando build anterior...${NC}"
    cd android
    ./gradlew clean
    cd ..
fi

# Compilar según el tipo
echo -e "${YELLOW}[7/7] Compilando ${BUILD_TYPE}...${NC}"
cd android

case $BUILD_TYPE in
    debug)
        ./gradlew assembleDebug
        APK_PATH="app/build/outputs/apk/debug/app-debug.apk"
        ;;
    release)
        ./gradlew assembleRelease
        APK_PATH="app/build/outputs/apk/release/app-release-unsigned.apk"
        ;;
    aab)
        ./gradlew bundleRelease
        APK_PATH="app/build/outputs/bundle/release/app-release.aab"
        ;;
esac

cd ..

# Verificar resultado
if [ -f "android/$APK_PATH" ]; then
    echo ""
    echo -e "${GREEN}======================================${NC}"
    echo -e "${GREEN}✓ BUILD EXITOSO${NC}"
    echo -e "${GREEN}======================================${NC}"
    echo ""
    echo -e "Archivo generado: ${GREEN}android/${APK_PATH}${NC}"
    echo ""
    
    if [ "$BUILD_TYPE" = "debug" ] || [ "$BUILD_TYPE" = "release" ]; then
        echo -e "${BLUE}Para instalar en dispositivo:${NC}"
        echo "  adb install android/${APK_PATH}"
        echo ""
        echo -e "${BLUE}Para instalar en todos los dispositivos conectados:${NC}"
        echo "  adb devices  # lista dispositivos"
        echo "  adb -s <DEVICE_ID> install android/${APK_PATH}"
    fi
    
    if [ "$BUILD_TYPE" = "aab" ]; then
        echo -e "${BLUE}Para subir a Play Store:${NC}"
        echo "  1. Abre Android Studio: npx cap open android"
        echo "  2. Build > Generate Signed Bundle / APK"
        echo "  3. Selecciona el AAB generado"
    fi
    
    echo ""
    echo -e "${BLUE}Tamaño del archivo:${NC}"
    ls -lh "android/${APK_PATH}" | awk '{print $5}'
else
    echo -e "${RED}❌ Error: Archivo no encontrado${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}✓ Completado${NC}"
