import { Point, CSSOutput, EasingState } from '../types';

export const generateCubicBezier = (p1: Point, p2: Point): string => {
  return `cubic-bezier(${p1.x.toFixed(3)}, ${p1.y.toFixed(3)}, ${p2.x.toFixed(3)}, ${p2.y.toFixed(3)})`;
};

export const generateCSS = (state: EasingState): CSSOutput => {
  const { p1, p2, duration, animationType } = state;
  const cubicBezier = generateCubicBezier(p1, p2);
  
  const property = getAnimationProperty(animationType);
  
  return {
    transition: `${property} ${duration}s ${cubicBezier}`,
    animation: `myAnimation ${duration}s ${cubicBezier}`,
    customProperty: `--my-easing: ${cubicBezier}`,
    keyframes: generateKeyframes(animationType, cubicBezier, duration)
  };
};

const getAnimationProperty = (type: EasingState['animationType']): string => {
  switch (type) {
    case 'translateX':
      return 'transform';
    case 'scale':
      return 'transform';
    case 'rotate':
      return 'transform';
    case 'opacity':
      return 'opacity';
    case 'combined':
      return 'all';
    default:
      return 'transform';
  }
};

const generateKeyframes = (type: EasingState['animationType'], easing: string, duration: number): string => {
  switch (type) {
    case 'translateX':
      return `@keyframes myAnimation {
  from { transform: translateX(0); }
  to { transform: translateX(200px); }
}

.animated-element {
  animation: myAnimation ${duration}s ${easing};
}`;
    
    case 'scale':
      return `@keyframes myAnimation {
  from { transform: scale(1); }
  to { transform: scale(1.5); }
}

.animated-element {
  animation: myAnimation ${duration}s ${easing};
}`;
    
    case 'rotate':
      return `@keyframes myAnimation {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animated-element {
  animation: myAnimation ${duration}s ${easing};
}`;
    
    case 'opacity':
      return `@keyframes myAnimation {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animated-element {
  animation: myAnimation ${duration}s ${easing};
}`;
    
    case 'combined':
      return `@keyframes myAnimation {
  from { 
    transform: translateX(0) scale(1) rotate(0deg);
    opacity: 0;
  }
  to { 
    transform: translateX(200px) scale(1.2) rotate(180deg);
    opacity: 1;
  }
}

.animated-element {
  animation: myAnimation ${duration}s ${easing};
}`;
    
    default:
      return '';
  }
};

export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      document.execCommand('copy');
      document.body.removeChild(textArea);
      return true;
    } catch (err) {
      document.body.removeChild(textArea);
      return false;
    }
  }
}; 