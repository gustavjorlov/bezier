export interface Point {
  x: number;
  y: number;
}

export interface EasingState {
  // Cubic bezier control points
  p1: Point;
  p2: Point;
  
  // Animation settings
  duration: number;
  animationType: 'translateX' | 'scale' | 'rotate' | 'opacity' | 'combined';
  isPlaying: boolean;
  
  // Timeline scrubbing
  scrubPosition: number; // 0-1
  
  // UI state
  activePreset: string | null;
  selectedControlPoint: 'p1' | 'p2' | null;
}

export interface EasingPreset {
  name: string;
  displayName: string;
  p1: Point;
  p2: Point;
  description?: string;
}

export interface CSSOutput {
  transition: string;
  animation: string;
  customProperty: string;
  keyframes: string;
}

export type EasingAction = 
  | { type: 'SET_CONTROL_POINT'; point: 'p1' | 'p2'; value: Point }
  | { type: 'SET_DURATION'; value: number }
  | { type: 'SET_ANIMATION_TYPE'; value: EasingState['animationType'] }
  | { type: 'SET_PLAYING'; value: boolean }
  | { type: 'SET_SCRUB_POSITION'; value: number }
  | { type: 'SET_ACTIVE_PRESET'; value: string | null }
  | { type: 'SET_SELECTED_CONTROL_POINT'; value: 'p1' | 'p2' | null }
  | { type: 'LOAD_PRESET'; preset: EasingPreset }
  | { type: 'LOAD_FROM_URL'; state: Partial<EasingState> }; 