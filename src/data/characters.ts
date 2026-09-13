// ============================================
// DEFINICIÓN DE PERSONAJES ROMÁNTICOS
// ============================================

import { Character } from '../types';

export const characters: Character[] = [
  {
    id: 'lyra',
    name: 'Lyra Frostwind',
    color: '#7dd3fc',
    description: 'Maga de hielo. Reservada pero con un corazón cálido bajo su exterior glacial.',
    portrait: '🧊',
    affectionThresholds: { romance1: 3, romance2: 6, ending: 8 }
  },
  {
    id: 'kael',
    name: 'Kael Ironheart',
    color: '#f97316',
    description: 'Capitán de la guardia. Honorável, fuerte y protector.',
    portrait: '⚔️',
    affectionThresholds: { romance1: 3, romance2: 6, ending: 8 }
  },
  {
    id: 'sage',
    name: 'Sage Nightwhisper',
    color: '#a78bfa',
    description: 'Bibliotecario erudito. Conoce secretos prohibidos y susurra verdades incómodas.',
    portrait: '📚',
    affectionThresholds: { romance1: 3, romance2: 6, ending: 8 }
  },
  {
    id: 'melody',
    name: 'Melody Starfall',
    color: '#fb7185',
    description: 'Barda carismática. Encantadora por fuera, esconde un pasado trágico.',
    portrait: '🎵',
    affectionThresholds: { romance1: 3, romance2: 6, ending: 8 }
  }
];

export const getCharacter = (id: string): Character | undefined => 
  characters.find(c => c.id === id);
