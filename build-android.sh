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
NC='\033[0m'

# Verificar dependencias
echo -e "${YELLOW}[1/6] Verificando dependencias...${NC}"

if ! command -v node &> /dev/null; then
    echo -e "${RED}Error: Node.js no está instalado${NC}"
    exit 1
fi

if ! command -v npx &> /dev/null; then
    echo -e "${RED}Error: npx no está disponible${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Node.js $(node --version)${NC}"

# Instalar Capacitor si no existe
if [ ! -d "node_modules/@capacitor/core" ]; then
    echo -e "${YELLOW}[2/6] Instalando Capacitor...${NC}"
    npm install @capacitor/core @capacitor/cli @capacitor/android
else
    echo -e "${GREEN}[2/6] ✓ Capacitor ya instalado${NC}"
fi

# Inicializar Capacitor si es necesario
if [ ! -f "capacitor.config.json" ] && [ ! -f "capacitor.config.ts" ]; then
    echo -e "${YELLOW}Inicializando Capacitor...${NC}"
    npx cap init "Academia Stellaris" "com.stellaris.vn" --web-dir dist
fi

# Añadir plataforma Android si no existe
if [ ! -d "android" ]; then
    echo -e "${YELLOW}Añadiendo plataforma Android...${NC}"
    npx cap add android
fi

# Build de la web
echo -e "${YELLOW}[3/6] Compilando web...${NC}"
npm run build
echo -e "${GREEN}✓ Web compilada${NC}"

# Sincronizar con Android
echo -e "${YELLOW}[4/6] Sincronizando con Android...${NC}"
npx cap sync android
echo -e "${GREEN}✓ Sincronizado${NC}"

# Verificar que Android SDK está disponible
if [ -z "$ANDROID_HOME" ] && [ -z "$ANDROID_SDK_ROOT" ]; then
    echo -e "${YELLOW}[5/6] AVISO: ANDROID_HOME no está definido${NC}"
    echo -e "${YELLOW}Configura ANDROID_HOME o usa Android Studio para compilar${NC}"
    echo ""
    echo -e "${YELLOW}Opciones:${NC}"
    echo "  1. npx cap open android  (abre Android Studio)"
    echo "  2. cd android && ./gradlew assembleDebug"
    exit 0
fi

# Compilar APK debug
echo -e "${YELLOW}[5/6] Compilando APK Debug...${NC}"
cd android
./gradlew assembleDebug
cd ..
echo -e "${GREEN}✓ APK compilado${NC}"

# Resultado
APK_PATH="android/app/build/outputs/apk/debug/app-debug.apk"
if [ -f "$APK_PATH" ]; then
    echo ""
    echo -e "${GREEN}======================================${NC}"
    echo -e "${GREEN}✓ BUILD EXITOSO${NC}"
    echo -e "${GREEN}======================================${NC}"
    echo ""
    echo -e "APK generado en: ${GREEN}${APK_PATH}${NC}"
    echo ""
    echo "Para instalar en dispositivo:"
    echo "  adb install ${APK_PATH}"
    echo ""
    echo "Para compilar AAB (release):"
    echo "  cd android && ./gradlew bundleRelease"
else
    echo -e "${RED}Error: APK no encontrado${NC}"
    exit 1
fi

echo -e "${GREEN}[6/6] ✓ Completado${NC}"
