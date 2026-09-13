// ============================================
// MENÚ EN JUEGO (Guardar, Cargar, Galería, etc.)
// ============================================

import React, { useState } from 'react';
import { SaveSlot } from '../types';
import { getCharacter } from '../data/characters';

interface GameMenuProps {
  onClose: () => void;
  onSave: (slot: number) => void;
  onLoad: (slot: number) => void;
  onGallery: () => void;
  onTitle: () => void;
  saveSlots: (SaveSlot | null)[];
  affinity: { [key: string]: number };
}

export default function GameMenu({
  onClose,
  onSave,
  onLoad,
  onGallery,
  onTitle,
  saveSlots,
  affinity
}: GameMenuProps) {
  const [tab, setTab] = useState<'main' | 'save' | 'load' | 'affinity'>('main');

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-gray-900 border border-white/20 rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-white/10">
          <h2 className="text-xl font-bold text-white">
            {tab === 'main' && '⚙️ Menú'}
            {tab === 'save' && '💾 Guardar'}
            {tab === 'load' && '📂 Cargar'}
            {tab === 'affinity' && '💕 Afinidad'}
          </h2>
          <button onClick={onClose} className="text-white/60 hover:text-white text-2xl">✕</button>
        </div>

        {/* Contenido */}
        <div className="p-4">
          {tab === 'main' && (
            <div className="space-y-3">
              <button onClick={() => setTab('save')} className="w-full px-4 py-3 bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/30 rounded-lg text-white text-left transition-all">
                💾 Guardar Partida
              </button>
              <button onClick={() => setTab('load')} className="w-full px-4 py-3 bg-green-600/20 hover:bg-green-600/40 border border-green-500/30 rounded-lg text-white text-left transition-all">
                📂 Cargar Partida
              </button>
              <button onClick={() => setTab('affinity')} className="w-full px-4 py-3 bg-pink-600/20 hover:bg-pink-600/40 border border-pink-500/30 rounded-lg text-white text-left transition-all">
                💕 Ver Afinidad
              </button>
              <button onClick={onGallery} className="w-full px-4 py-3 bg-purple-600/20 hover:bg-purple-600/40 border border-purple-500/30 rounded-lg text-white text-left transition-all">
                🖼 Galería de CGs
              </button>
              <hr className="border-white/10 my-4" />
              <button onClick={onTitle} className="w-full px-4 py-3 bg-red-600/20 hover:bg-red-600/40 border border-red-500/30 rounded-lg text-white text-left transition-all">
                🏠 Volver al Título
              </button>
            </div>
          )}

          {tab === 'save' && (
            <div className="space-y-3">
              {saveSlots.map((slot, idx) => (
                <button
                  key={idx}
                  onClick={() => { onSave(idx); onClose(); }}
                  className="w-full px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/20 rounded-lg text-left transition-all"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">Slot {idx + 1}</span>
                    {slot && (
                      <span className="text-white/50 text-xs">
                        {new Date(slot.timestamp).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                  {slot && (
                    <p className="text-white/60 text-sm mt-1">{slot.preview}</p>
                  )}
                  {!slot && (
                    <p className="text-white/30 text-sm mt-1">— Vacío —</p>
                  )}
                </button>
              ))}
              <button onClick={() => setTab('main')} className="w-full px-4 py-2 text-white/60 hover:text-white text-sm">
                ← Volver
              </button>
            </div>
          )}

          {tab === 'load' && (
            <div className="space-y-3">
              {saveSlots.map((slot, idx) => (
                <button
                  key={idx}
                  onClick={() => { if (slot) { onLoad(idx); onClose(); } }}
                  disabled={!slot}
                  className="w-full px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/20 rounded-lg text-left transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">Slot {idx + 1}</span>
                    {slot && (
                      <span className="text-white/50 text-xs">
                        {new Date(slot.timestamp).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                  {slot ? (
                    <p className="text-white/60 text-sm mt-1">{slot.preview}</p>
                  ) : (
                    <p className="text-white/30 text-sm mt-1">— Vacío —</p>
                  )}
                </button>
              ))}
              <button onClick={() => setTab('main')} className="w-full px-4 py-2 text-white/60 hover:text-white text-sm">
                ← Volver
              </button>
            </div>
          )}

          {tab === 'affinity' && (
            <div className="space-y-4">
              {Object.entries(affinity).map(([charId, value]) => {
                const char = getCharacter(charId);
                if (!char) return null;
                const maxAffection = 12;
                const percentage = Math.min((value / maxAffection) * 100, 100);
                return (
                  <div key={charId} className="bg-white/5 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{char.portrait}</span>
                        <span className="text-white font-medium">{char.name}</span>
                      </div>
                      <span className="text-lg font-bold" style={{ color: char.color }}>{value}</span>
                    </div>
                    <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%`, backgroundColor: char.color }}
                      />
                    </div>
                    <p className="text-white/40 text-xs mt-1">{char.description}</p>
                    {value >= char.affectionThresholds.ending && (
                      <p className="text-xs mt-1" style={{ color: char.color }}>❤️ Romance desbloqueado</p>
                    )}
                    {value >= char.affectionThresholds.romance2 && value < char.affectionThresholds.ending && (
                      <p className="text-xs mt-1 text-yellow-400">💫 Romance profundo</p>
                    )}
                    {value >= char.affectionThresholds.romance1 && value < char.affectionThresholds.romance2 && (
                      <p className="text-xs mt-1 text-green-400">💚 Interés romántico</p>
                    )}
                    {value < char.affectionThresholds.romance1 && (
                      <p className="text-xs mt-1 text-white/30">Conocido/a</p>
                    )}
                  </div>
                );
              })}
              <button onClick={() => setTab('main')} className="w-full px-4 py-2 text-white/60 hover:text-white text-sm">
                ← Volver
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
