// ============================================
// TIPOS PRINCIPALES DEL MOTOR DE NOVELA VISUAL
// ============================================

export interface Character {
  id: string;
  name: string;
  color: string;
  description: string;
  portrait: string; // emoji placeholder
  image?: string; // URL de imagen del personaje
  affectionThresholds: {
    romance1: number;
    romance2: number;
    ending: number;
  };
}

export interface Choice {
  text: string;
  effects: {
    [characterId: string]: number;
  };
  nextScene: string;
  flag?: string;
}

export interface DialogueLine {
  type: 'dialogue' | 'narration' | 'choice' | 'scene_change' | 'cg_show' | 'affinity_check' | 'nextScene';
  speaker?: string;
  text: string;
  choices?: Choice[];
  nextScene?: string;
  cgId?: string;
  background?: string;
  condition?: {
    character: string;
    minAffection: number;
  };
  affinityCheck?: {
    character: string;
    threshold: number;
    passScene: string;
    failScene: string;
  };
}

export interface Scene {
  id: string;
  chapter: number;
  background: string;
  lines: DialogueLine[];
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  scenes: string[];
}

export interface GameState {
  currentScene: string;
  currentLine: number;
  affinity: { [characterId: string]: number };
  flags: string[];
  unlockedCGs: string[];
  completedChapters: number[];
  playerName: string;
  startedAt: string;
}

export interface SaveSlot {
  id: number;
  state: GameState;
  timestamp: string;
  chapterTitle: string;
  preview: string;
}
