// ============================================
// GALERÍA DE CGs DESBLOQUEADOS
// ============================================

import React from 'react';

interface GalleryProps {
  unlockedCGs: string[];
  onClose: () => void;
}

// Todos los CGs posibles
const ALL_CGS = [
  { id: 'lyra_romance1', name: 'Flores de Hielo', character: 'Lyra', emoji: '🧊', color: '#7dd3fc', image: 'https://image.qwenlm.ai/generated-images/193861c9-94e3-4d01-be93-df5a9e36a34f/_result.png' },
  { id: 'lyra_romance2', name: 'Bajo las Estrellas', character: 'Lyra', emoji: '💎', color: '#7dd3fc', image: 'https://image.qwenlm.ai/generated-images/193861c9-94e3-4d01-be93-df5a9e36a34f/_result.png' },
  { id: 'kael_romance2', name: 'Promesa del Guerrero', character: 'Kael', emoji: '⚔️', color: '#f97316', image: 'https://image.qwenlm.ai/generated-images/3dc6f7a2-d4e1-4965-a8ed-2965c6c050de/_result.png' },
  { id: 'sage_romance2', name: 'Capítulo del Corazón', character: 'Sage', emoji: '📚', color: '#a78bfa', image: 'https://image.qwenlm.ai/generated-images/cf960635-f9fb-47cf-91ac-d5b7bc9ed277/_result.png' },
  { id: 'melody_romance1', name: 'Lágrimas Doradas', character: 'Melody', emoji: '🎵', color: '#fb7185', image: 'https://image.qwenlm.ai/generated-images/5118629e-a0bf-45e5-af03-78c34a0825be/_result.png' },
  { id: 'melody_romance2', name: 'Sinfonía de Amor', character: 'Melody', emoji: '🎶', color: '#fb7185', image: 'https://image.qwenlm.ai/generated-images/5118629e-a0bf-45e5-af03-78c34a0825be/_result.png' },
  { id: 'ending_good', name: 'La Luz de Stellaris', character: 'Todos', emoji: '✨', color: '#fbbf24', image: null },
  { id: 'ending_truth', name: 'La Verdad de los Fundadores', character: 'Todos', emoji: '📖', color: '#a78bfa', image: null },
];

export default function Gallery({ unlockedCGs, onClose }: GalleryProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-purple-950 to-black p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">🖼 Galería</h1>
        <button 
          onClick={onClose}
          className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all"
        >
          ← Volver
        </button>
      </div>

      {/* Progreso */}
      <div className="mb-6 bg-white/5 rounded-lg p-3">
        <div className="flex justify-between text-sm text-white/60 mb-1">
          <span>CGs Desbloqueados</span>
          <span>{unlockedCGs.length} / {ALL_CGS.length}</span>
        </div>
        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
            style={{ width: `${(unlockedCGs.length / ALL_CGS.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Grid de CGs */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {ALL_CGS.map(cg => {
          const unlocked = unlockedCGs.includes(cg.id);
          return (
            <div 
              key={cg.id}
              className={`aspect-square rounded-xl border-2 flex flex-col items-center justify-center p-3 transition-all overflow-hidden ${
                unlocked 
                  ? 'border-white/30 bg-white/5 hover:bg-white/10' 
                  : 'border-white/10 bg-black/50'
              }`}
            >
              {unlocked ? (
                <>
                  {cg.image ? (
                    <img 
                      src={cg.image} 
                      alt={cg.name}
                      className="w-full h-3/4 object-cover rounded-lg mb-2"
                    />
                  ) : (
                    <div className="text-4xl mb-2">{cg.emoji}</div>
                  )}
                  <p className="text-white text-sm font-medium text-center">{cg.name}</p>
                  <p className="text-xs mt-1" style={{ color: cg.color }}>{cg.character}</p>
                </>
              ) : (
                <>
                  <div className="text-4xl mb-2 opacity-20">🔒</div>
                  <p className="text-white/30 text-sm text-center">???</p>
                  <p className="text-white/20 text-xs mt-1">Bloqueado</p>
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Tips */}
      <div className="mt-8 bg-white/5 rounded-lg p-4">
        <h3 className="text-white/80 font-medium mb-2">💡 Consejos</h3>
        <ul className="text-white/50 text-sm space-y-1">
          <li>• Toma decisiones que favorezcan a un personaje para desbloquear sus CGs de romance.</li>
          <li>• Hay 2 finales diferentes según tus decisiones finales.</li>
          <li>• Cada personaje tiene al menos 2 escenas de romance únicas.</li>
          <li>• ¡Reinicia y prueba diferentes rutas para desbloquear todo!</li>
        </ul>
      </div>
    </div>
  );
}
