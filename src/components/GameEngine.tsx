// ============================================
// MOTOR PRINCIPAL DE LA NOVELA VISUAL
// ============================================

import React, { useEffect, useState, useCallback } from 'react';
import { allScenes } from '../data/story';
import { getCharacter } from '../data/characters';
import { DialogueLine } from '../types';

interface GameEngineProps {
  gameState: {
    currentScene: string;
    currentLine: number;
    affinity: { [key: string]: number };
    flags: string[];
    unlockedCGs: string[];
  };
  advanceLine: () => void;
  goToScene: (sceneId: string) => void;
  modifyAffinity: (effects: { [key: string]: number }) => void;
  unlockCG: (cgId: string) => void;
  autoSave: () => void;
  getHighestAffinity: () => string;
  onOpenMenu: () => void;
}

export default function GameEngine({
  gameState,
  advanceLine,
  goToScene,
  modifyAffinity,
  unlockCG,
  autoSave,
  getHighestAffinity,
  onOpenMenu
}: GameEngineProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCG, setShowCG] = useState<string | null>(null);
  const [bgTransition, setBgTransition] = useState(false);

  const scene = allScenes.find(s => s.id === gameState.currentScene);
  const currentLine: DialogueLine | undefined = scene?.lines[gameState.currentLine];

  // Efecto de texto typewriter
  useEffect(() => {
    if (!currentLine) return;
    if (currentLine.type === 'choice' || currentLine.type === 'affinity_check') {
      setDisplayedText(currentLine.text);
      return;
    }

    const text = currentLine.text;
    setDisplayedText('');
    setIsTyping(true);
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1));
        i++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [currentLine, gameState.currentScene, gameState.currentLine]);

  // Auto-guardar cada 30 segundos
  useEffect(() => {
    const interval = setInterval(autoSave, 30000);
    return () => clearInterval(interval);
  }, [autoSave]);

  // Manejar CG
  useEffect(() => {
    if (currentLine?.type === 'cg_show' && currentLine.cgId) {
      unlockCG(currentLine.cgId);
      setShowCG(currentLine.cgId);
      setTimeout(() => {
        advanceLine();
        setShowCG(null);
      }, 2000);
    }
  }, [currentLine, unlockCG, advanceLine]);

  // Manejar affinity_check
  useEffect(() => {
    if (currentLine?.type === 'affinity_check' && currentLine.affinityCheck) {
      const check = currentLine.affinityCheck;
      let charId = check.character;
      if (charId === 'highest') {
        charId = getHighestAffinity();
      }
      const value = gameState.affinity[charId] || 0;
      const targetScene = value >= check.threshold ? check.passScene : check.failScene;
      
      setTimeout(() => {
        goToScene(targetScene);
      }, 500);
    }
  }, [currentLine, gameState.affinity, getHighestAffinity, goToScene]);

  // Manejar nextScene automático
  useEffect(() => {
    if (currentLine?.type === 'nextScene' && currentLine.nextScene) {
      setTimeout(() => {
        goToScene(currentLine.nextScene!);
      }, 1500);
    }
    // Auto-avance para títulos de capítulo (con texto)
    if (currentLine?.type === 'scene_change' && currentLine.text) {
      setTimeout(() => {
        advanceLine();
      }, 3000);
    }
    // Auto-avance para cambios de fondo sin texto
    if (currentLine?.type === 'scene_change' && !currentLine.text) {
      setTimeout(() => {
        advanceLine();
      }, 800);
    }
  }, [currentLine, goToScene, advanceLine]);

  // Manejar scene_change
  useEffect(() => {
    if (currentLine?.type === 'scene_change') {
      setBgTransition(true);
      setTimeout(() => setBgTransition(false), 500);
    }
  }, [currentLine]);

  // Click para avanzar
  const handleClick = useCallback(() => {
    if (showCG) return;
    if (isTyping) {
      // Saltar animación
      if (currentLine) {
        setDisplayedText(currentLine.text);
        setIsTyping(false);
      }
      return;
    }
    if (currentLine?.type === 'choice' || currentLine?.type === 'affinity_check') return;
    if (currentLine?.type === 'nextScene') return;
    advanceLine();
  }, [isTyping, currentLine, advanceLine, showCG]);

  // Manejar elección
  const handleChoice = useCallback((choiceIndex: number) => {
    if (!currentLine?.choices) return;
    const choice = currentLine.choices[choiceIndex];
    if (choice.effects) {
      modifyAffinity(choice.effects);
    }
    if (choice.nextScene) {
      goToScene(choice.nextScene);
    }
  }, [currentLine, modifyAffinity, goToScene]);

  if (!scene || !currentLine) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <p className="text-white text-xl">Escena no encontrada. Reinicia el juego.</p>
      </div>
    );
  }

  // Renderizar fondo
  const renderBackground = () => {
    const bg = currentLine.background || scene.background;
    const bgStyles: { [key: string]: string } = {
      'academy-gate': 'from-indigo-900 via-purple-900 to-blue-900',
      'main-hall': 'from-amber-900 via-orange-900 to-yellow-900',
      'dining-hall': 'from-amber-800 via-red-900 to-orange-900',
      'gardens': 'from-emerald-900 via-green-800 to-teal-900',
      'library': 'from-slate-900 via-indigo-950 to-purple-950',
      'library-basement': 'from-gray-950 via-slate-900 to-indigo-950',
      'great-hall': 'from-violet-900 via-purple-800 to-indigo-900',
      'classroom': 'from-blue-900 via-cyan-900 to-teal-900',
      'dormitory': 'from-slate-800 via-gray-900 to-indigo-950',
      'corridor': 'from-gray-800 via-slate-800 to-gray-900',
      'corridor-dark': 'from-gray-950 via-black to-slate-950',
      'courtyard': 'from-sky-900 via-blue-800 to-indigo-900',
      'ice-tower': 'from-cyan-200 via-blue-300 to-indigo-400',
      'ice-garden': 'from-cyan-100 via-blue-200 to-purple-300',
      'training-yard': 'from-orange-800 via-red-800 to-amber-900',
      'guard-quarters': 'from-stone-800 via-gray-800 to-slate-900',
      'music-room': 'from-pink-900 via-rose-800 to-fuchsia-900',
      'festival': 'from-violet-800 via-fuchsia-700 to-pink-800',
      'balcony': 'from-indigo-800 via-blue-900 to-purple-900',
      'library-secret': 'from-purple-950 via-violet-900 to-indigo-950',
      'stage': 'from-rose-800 via-pink-700 to-fuchsia-800',
    };
    const gradient = bgStyles[bg] || 'from-gray-900 via-slate-900 to-gray-900';
    
    return (
      <div className={`absolute inset-0 bg-gradient-to-b ${gradient} transition-opacity duration-500 ${bgTransition ? 'opacity-0' : 'opacity-100'}`}>
        {/* Partículas decorativas */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>
    );
  };

  // Renderizar personaje
  const renderCharacter = () => {
    if (!currentLine.speaker || currentLine.speaker === 'narrator') return null;
    const character = getCharacter(currentLine.speaker);
    if (!character) return null;

    return (
      <div className="absolute bottom-48 left-1/2 -translate-x-1/2 flex flex-col items-center animate-fade-in">
        <div 
          className="w-32 h-32 rounded-full flex items-center justify-center text-6xl border-4 shadow-2xl"
          style={{ 
            borderColor: character.color,
            boxShadow: `0 0 30px ${character.color}40`
          }}
        >
          {character.portrait}
        </div>
        <div 
          className="mt-2 px-4 py-1 rounded-full text-sm font-bold"
          style={{ backgroundColor: `${character.color}30`, color: character.color }}
        >
          {character.name}
        </div>
      </div>
    );
  };

  // CG overlay
  if (showCG) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center animate-pulse">
          <div className="text-8xl mb-4">✨</div>
          <p className="text-white text-xl">CG Desbloqueado: {showCG}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden select-none" onClick={handleClick}>
      {renderBackground()}
      
      {/* Header con menú */}
      <div className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center p-3">
        <button 
          onClick={(e) => { e.stopPropagation(); onOpenMenu(); }}
          className="bg-black/50 hover:bg-black/70 text-white px-3 py-1 rounded text-sm backdrop-blur-sm"
        >
          ☰ Menú
        </button>
        <div className="flex gap-2">
          {Object.entries(gameState.affinity).map(([charId, value]) => {
            const char = getCharacter(charId);
            if (!char) return null;
            return (
              <div key={charId} className="flex items-center gap-1 bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
                <span className="text-sm">{char.portrait}</span>
                <span className="text-xs font-bold" style={{ color: char.color }}>{value}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Título de capítulo */}
      {currentLine.type === 'scene_change' && currentLine.text && (
        <div className="absolute inset-0 flex items-center justify-center z-40 bg-black/60">
          <div className="text-center animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">{currentLine.text}</h2>
            <div className="w-32 h-0.5 bg-white/50 mx-auto"></div>
          </div>
        </div>
      )}

      {/* Personaje */}
      {renderCharacter()}

      {/* Caja de diálogo */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <div className="mx-2 mb-2 md:mx-4 md:mb-4 bg-black/80 backdrop-blur-md rounded-xl border border-white/20 p-4 md:p-6">
          {/* Texto */}
          {currentLine.type !== 'choice' && currentLine.type !== 'affinity_check' && currentLine.type !== 'nextScene' && !(currentLine.type === 'scene_change' && !currentLine.text) && (
            <div className="min-h-[80px]">
              {currentLine.speaker && currentLine.speaker !== 'narrator' && (
                <p className="text-sm font-bold mb-1" style={{ color: getCharacter(currentLine.speaker)?.color || '#fff' }}>
                  {getCharacter(currentLine.speaker)?.name || currentLine.speaker}
                </p>
              )}
              <p className={`text-white text-base md:text-lg leading-relaxed ${currentLine.type === 'narration' ? 'italic text-gray-300' : ''}`}>
                {displayedText}
                {isTyping && <span className="animate-pulse">▌</span>}
              </p>
            </div>
          )}

          {/* Indicador de avance */}
          {!isTyping && currentLine.type !== 'choice' && currentLine.type !== 'affinity_check' && currentLine.type !== 'nextScene' && !(currentLine.type === 'scene_change' && !currentLine.text) && (
            <div className="text-right mt-2">
              <span className="text-white/50 text-sm animate-bounce">▼ Click para continuar</span>
            </div>
          )}

          {/* Auto-avance para nextScene */}
          {currentLine.type === 'nextScene' && (
            <div className="text-center">
              <p className="text-white/60 text-sm animate-pulse">Continuando...</p>
            </div>
          )}

          {/* Elecciones */}
          {currentLine.type === 'choice' && currentLine.choices && (
            <div className="space-y-2">
              <p className="text-white/80 text-sm mb-3">{currentLine.text || '¿Qué haces?'}</p>
              {currentLine.choices.map((choice, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); handleChoice(idx); }}
                  className="w-full text-left px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/60 rounded-lg text-white transition-all duration-200 hover:translate-x-1"
                >
                  <span className="text-purple-300 mr-2">▸</span>
                  {choice.text}
                </button>
              ))}
            </div>
          )}

          {/* Affinity check loading */}
          {currentLine.type === 'affinity_check' && (
            <div className="text-center py-4">
              <div className="animate-spin text-2xl">⚡</div>
              <p className="text-white/60 text-sm mt-2">Calculando destino...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
