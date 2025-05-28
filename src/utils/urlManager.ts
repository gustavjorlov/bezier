import { EasingState, Point } from '../types';

export const encodeEasingToURL = (state: EasingState): void => {
  const params = new URLSearchParams();
  
  // Encode control points
  params.set('p1', `${state.p1.x.toFixed(3)},${state.p1.y.toFixed(3)}`);
  params.set('p2', `${state.p2.x.toFixed(3)},${state.p2.y.toFixed(3)}`);
  
  // Encode other settings
  params.set('duration', state.duration.toString());
  params.set('type', state.animationType);
  
  // Update URL without page reload
  const newURL = `${window.location.pathname}#${params.toString()}`;
  window.history.replaceState(null, '', newURL);
};

export const decodeEasingFromURL = (): Partial<EasingState> | null => {
  const hash = window.location.hash.slice(1);
  if (!hash) return null;
  
  try {
    const params = new URLSearchParams(hash);
    const result: Partial<EasingState> = {};
    
    // Decode control points
    const p1Str = params.get('p1');
    const p2Str = params.get('p2');
    
    if (p1Str) {
      const [x, y] = p1Str.split(',').map(Number);
      if (!isNaN(x) && !isNaN(y)) {
        result.p1 = { x: Math.max(0, Math.min(1, x)), y };
      }
    }
    
    if (p2Str) {
      const [x, y] = p2Str.split(',').map(Number);
      if (!isNaN(x) && !isNaN(y)) {
        result.p2 = { x: Math.max(0, Math.min(1, x)), y };
      }
    }
    
    // Decode duration
    const durationStr = params.get('duration');
    if (durationStr) {
      const duration = Number(durationStr);
      if (!isNaN(duration) && duration > 0 && duration <= 10) {
        result.duration = duration;
      }
    }
    
    // Decode animation type
    const type = params.get('type');
    if (type && ['translateX', 'scale', 'rotate', 'opacity', 'combined'].includes(type)) {
      result.animationType = type as EasingState['animationType'];
    }
    
    return Object.keys(result).length > 0 ? result : null;
  } catch (error) {
    console.warn('Failed to decode easing from URL:', error);
    return null;
  }
};

export const constrainPoint = (point: Point): Point => {
  return {
    x: Math.max(0, Math.min(1, point.x)),
    y: point.y // Y can go outside 0-1 for advanced easing effects
  };
};

export const getShareableURL = (state: EasingState): string => {
  const params = new URLSearchParams();
  params.set('p1', `${state.p1.x.toFixed(3)},${state.p1.y.toFixed(3)}`);
  params.set('p2', `${state.p2.x.toFixed(3)},${state.p2.y.toFixed(3)}`);
  params.set('duration', state.duration.toString());
  params.set('type', state.animationType);
  
  return `${window.location.origin}${window.location.pathname}#${params.toString()}`;
}; 