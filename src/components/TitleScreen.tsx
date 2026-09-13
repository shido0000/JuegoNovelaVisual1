// ============================================
// PANTALLA DE TÍTULO
// ============================================

import React, { useState, useEffect } from 'react';

interface TitleScreenProps {
  onNewGame: () => void;
  onLoadGame: () => void;
  onGallery: () => void;
  hasSave: boolean;
}

export default function TitleScreen({ onNewGame, onLoadGame, onGallery, hasSave }: TitleScreenProps) {
  const [show, setShow] = useState(false);
  const [stars, setStars] = useState<{ x: number; y: number; delay: number; size: number }[]>([]);

  useEffect(() => {
    setShow(true);
    const s = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      size: Math.random() * 3 + 1
    }));
    setStars(s);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-950 to-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Estrellas animadas */}
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        />
      ))}

      {/* Logo/Título */}
      <div className={`text-center transition-all duration-2000 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-6xl mb-4">✨</div>
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 mb-2">
          Academia Stellaris
        </h1>
        <p className="text-xl md:text-2xl text-purple-200/80 font-light tracking-widest">
          Destinos Cruzados
        </p>
        <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mt-4"></div>
      </div>

      {/* Menú */}
      <div className={`mt-12 space-y-3 transition-all duration-1000 delay-500 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <button
          onClick={onNewGame}
          className="block w-64 mx-auto px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
        >
          ✦ Nuevo Juego
        </button>
        
        {hasSave && (
          <button
            onClick={onLoadGame}
            className="block w-64 mx-auto px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 border border-white/20"
          >
            ▶ Continuar
          </button>
        )}
        
        <button
          onClick={onLoadGame}
          className="block w-64 mx-auto px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 border border-white/20"
        >
          💾 Cargar Partida
        </button>
        
        <button
          onClick={onGallery}
          className="block w-64 mx-auto px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 border border-white/20"
        >
          🖼 Galería
        </button>
      </div>

      {/* Footer */}
      <div className={`absolute bottom-6 text-center transition-all duration-1000 delay-1000 ${show ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-purple-300/50 text-sm">Acto I: La Llegada • 4 Capítulos • 4 Rutas Románticas</p>
        <p className="text-purple-300/30 text-xs mt-1">v1.0 — Novela Visual Interactiva</p>
      </div>
    </div>
  );
}
