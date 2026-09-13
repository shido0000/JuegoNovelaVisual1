// ============================================
// HOOK DE ESTADO DEL JUEGO
// Maneja afinidad, guardado, galería y progreso
// ============================================

import { useState, useCallback } from 'react';
import { GameState, SaveSlot } from '../types';
import { STARTING_SCENE, allScenes, chapters } from '../data/story';

const SAVE_KEY = 'stellaris_saves';
const AUTO_SAVE_KEY = 'stellaris_autosave';

const createInitialState = (): GameState => ({
  currentScene: STARTING_SCENE,
  currentLine: 0,
  affinity: { lyra: 0, kael: 0, sage: 0, melody: 0 },
  flags: [],
  unlockedCGs: [],
  completedChapters: [],
  playerName: 'Aventurero/a',
  startedAt: new Date().toISOString()
});

export function useGameState() {
  const [gameState, setGameState] = useState<GameState>(createInitialState);
  const [isStarted, setIsStarted] = useState(false);

  // Avanzar al siguiente diálogo
  const advanceLine = useCallback(() => {
    setGameState(prev => {
      const scene = allScenes.find(s => s.id === prev.currentScene);
      if (!scene) return prev;
      
      const nextLine = prev.currentLine + 1;
      if (nextLine >= scene.lines.length) {
        // Buscar nextScene en la última línea
        const lastLine = scene.lines[scene.lines.length - 1];
        if (lastLine.nextScene) {
          return { ...prev, currentScene: lastLine.nextScene, currentLine: 0 };
        }
        return prev;
      }
      return { ...prev, currentLine: nextLine };
    });
  }, []);

  // Ir a una escena específica
  const goToScene = useCallback((sceneId: string) => {
    setGameState(prev => {
      const scene = allScenes.find(s => s.id === sceneId);
      if (!scene) return prev;
      
      // Marcar capítulo como completado
      const completedChapters = [...prev.completedChapters];
      const chapterNum = scene.chapter;
      if (!completedChapters.includes(chapterNum)) {
        completedChapters.push(chapterNum);
      }
      
      return { ...prev, currentScene: sceneId, currentLine: 0, completedChapters };
    });
  }, []);

  // Modificar afinidad
  const modifyAffinity = useCallback((effects: { [key: string]: number }) => {
    setGameState(prev => {
      const newAffinity = { ...prev.affinity };
      for (const [char, value] of Object.entries(effects)) {
        newAffinity[char] = Math.max(0, (newAffinity[char] || 0) + value);
      }
      return { ...prev, affinity: newAffinity };
    });
  }, []);

  // Desbloquear CG
  const unlockCG = useCallback((cgId: string) => {
    setGameState(prev => {
      if (prev.unlockedCGs.includes(cgId)) return prev;
      return { ...prev, unlockedCGs: [...prev.unlockedCGs, cgId] };
    });
  }, []);

  // Añadir flag
  const addFlag = useCallback((flag: string) => {
    setGameState(prev => {
      if (prev.flags.includes(flag)) return prev;
      return { ...prev, flags: [...prev.flags, flag] };
    });
  }, []);

  // Obtener personaje con mayor afinidad
  const getHighestAffinity = useCallback((): string => {
    let highest = '';
    let maxVal = -1;
    for (const [char, val] of Object.entries(gameState.affinity)) {
      if (val > maxVal) {
        maxVal = val;
        highest = char;
      }
    }
    return highest;
  }, [gameState.affinity]);

  // Guardar juego
  const saveGame = useCallback((slotId: number) => {
    const saves = loadSaves();
    const currentScene = allScenes.find(s => s.id === gameState.currentScene);
    const chapter = chapters.find(c => c.number === currentScene?.chapter);
    
    const slot: SaveSlot = {
      id: slotId,
      state: { ...gameState },
      timestamp: new Date().toISOString(),
      chapterTitle: chapter?.title || 'Desconocido',
      preview: `Cap. ${currentScene?.chapter || '?'} - ${chapter?.title || ''}`
    };
    
    saves[slotId] = slot;
    localStorage.setItem(SAVE_KEY, JSON.stringify(saves));
  }, [gameState]);

  // Cargar juego
  const loadGame = useCallback((slotId: number) => {
    const saves = loadSaves();
    const slot = saves[slotId];
    if (slot) {
      setGameState(slot.state);
      setIsStarted(true);
    }
  }, []);

  // Auto-guardar
  const autoSave = useCallback(() => {
    localStorage.setItem(AUTO_SAVE_KEY, JSON.stringify(gameState));
  }, [gameState]);

  // Cargar auto-guardado
  const loadAutoSave = useCallback((): boolean => {
    const data = localStorage.getItem(AUTO_SAVE_KEY);
    if (data) {
      try {
        const state = JSON.parse(data) as GameState;
        setGameState(state);
        setIsStarted(true);
        return true;
      } catch { return false; }
    }
    return false;
  }, []);

  // Nuevo juego
  const newGame = useCallback(() => {
    setGameState(createInitialState());
    setIsStarted(true);
  }, []);

  // Obtener slots de guardado
  const getSaveSlots = useCallback((): (SaveSlot | null)[] => {
    const saves = loadSaves();
    return [0, 1, 2].map(i => saves[i] || null);
  }, []);

  // Verificar si hay auto-guardado
  const hasAutoSave = useCallback((): boolean => {
    return !!localStorage.getItem(AUTO_SAVE_KEY);
  }, []);

  return {
    gameState,
    isStarted,
    setIsStarted,
    advanceLine,
    goToScene,
    modifyAffinity,
    unlockCG,
    addFlag,
    getHighestAffinity,
    saveGame,
    loadGame,
    autoSave,
    loadAutoSave,
    newGame,
    getSaveSlots,
    hasAutoSave,
    setGameState
  };
}

function loadSaves(): { [key: number]: SaveSlot } {
  const data = localStorage.getItem(SAVE_KEY);
  if (data) {
    try { return JSON.parse(data); } catch { return {}; }
  }
  return {};
}
