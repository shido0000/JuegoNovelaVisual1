// ============================================
// APP PRINCIPAL - Academia Stellaris: Destinos Cruzados
// Motor de Novela Visual con sistema de romance
// ============================================

import React, { useState, useCallback } from 'react';
import TitleScreen from './components/TitleScreen';
import GameEngine from './components/GameEngine';
import GameMenu from './components/GameMenu';
import Gallery from './components/Gallery';
import { useGameState } from './hooks/useGameState';

type Screen = 'title' | 'game' | 'gallery';

export default function App() {
  const {
    gameState,
    isStarted,
    setIsStarted,
    advanceLine,
    goToScene,
    modifyAffinity,
    unlockCG,
    autoSave,
    loadAutoSave,
    newGame,
    getSaveSlots,
    hasAutoSave,
    getHighestAffinity,
    saveGame,
    loadGame
  } = useGameState();

  const [screen, setScreen] = useState<Screen>('title');
  const [showMenu, setShowMenu] = useState(false);

  // Handlers
  const handleNewGame = useCallback(() => {
    newGame();
    setScreen('game');
  }, [newGame]);

  const handleContinue = useCallback(() => {
    const loaded = loadAutoSave();
    if (loaded) {
      setScreen('game');
    }
  }, [loadAutoSave]);

  const handleLoadFromTitle = useCallback(() => {
    setScreen('game');
    setShowMenu(true);
  }, []);

  const handleGalleryFromTitle = useCallback(() => {
    setScreen('gallery');
  }, []);

  const handleGalleryFromMenu = useCallback(() => {
    setShowMenu(false);
    setScreen('gallery');
  }, []);

  const handleBackFromGallery = useCallback(() => {
    if (isStarted) {
      setScreen('game');
    } else {
      setScreen('title');
    }
  }, [isStarted]);

  const handleBackToTitle = useCallback(() => {
    setShowMenu(false);
    setScreen('title');
  }, []);

  // Render
  if (screen === 'title') {
    return (
      <TitleScreen
        onNewGame={handleNewGame}
        onLoadGame={handleLoadFromTitle}
        onGallery={handleGalleryFromTitle}
        hasSave={hasAutoSave()}
      />
    );
  }

  if (screen === 'gallery') {
    return (
      <Gallery
        unlockedCGs={gameState.unlockedCGs}
        onClose={handleBackFromGallery}
      />
    );
  }

  // Pantalla de juego
  return (
    <div className="relative">
      <GameEngine
        gameState={gameState}
        advanceLine={advanceLine}
        goToScene={goToScene}
        modifyAffinity={modifyAffinity}
        unlockCG={unlockCG}
        autoSave={autoSave}
        getHighestAffinity={getHighestAffinity}
        onOpenMenu={() => setShowMenu(true)}
      />

      {showMenu && (
        <GameMenu
          onClose={() => setShowMenu(false)}
          onSave={saveGame}
          onLoad={loadGame}
          onGallery={handleGalleryFromMenu}
          onTitle={handleBackToTitle}
          saveSlots={getSaveSlots()}
          affinity={gameState.affinity}
        />
      )}
    </div>
  );
}
