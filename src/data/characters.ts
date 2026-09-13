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
    image: 'https://image.qwenlm.ai/generated-images/193861c9-94e3-4d01-be93-df5a9e36a34f/_result.png',
    affectionThresholds: { romance1: 3, romance2: 6, ending: 8 }
  },
  {
    id: 'kael',
    name: 'Kael Ironheart',
    color: '#f97316',
    description: 'Capitán de la guardia. Honorável, fuerte y protector.',
    portrait: '⚔️',
    image: 'https://image.qwenlm.ai/generated-images/3dc6f7a2-d4e1-4965-a8ed-2965c6c050de/_result.png',
    affectionThresholds: { romance1: 3, romance2: 6, ending: 8 }
  },
  {
    id: 'sage',
    name: 'Sage Nightwhisper',
    color: '#a78bfa',
    description: 'Bibliotecario erudito. Conoce secretos prohibidos y susurra verdades incómodas.',
    portrait: '📚',
    image: 'https://image.qwenlm.ai/generated-images/cf960635-f9fb-47cf-91ac-d5b7bc9ed277/_result.png',
    affectionThresholds: { romance1: 3, romance2: 6, ending: 8 }
  },
  {
    id: 'melody',
    name: 'Melody Starfall',
    color: '#fb7185',
    description: 'Barda carismática. Encantadora por fuera, esconde un pasado trágico.',
    portrait: '🎵',
    image: 'https://image.qwenlm.ai/generated-images/5118629e-a0bf-45e5-af03-78c34a0825be/_result.png',
    affectionThresholds: { romance1: 3, romance2: 6, ending: 8 }
  }
];

export const getCharacter = (id: string): Character | undefined => 
  characters.find(c => c.id === id);
