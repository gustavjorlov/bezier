import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { EasingState, EasingAction } from '../types';
import { decodeEasingFromURL, encodeEasingToURL } from '../utils/urlManager';

const initialState: EasingState = {
  p1: { x: 0.25, y: 0.1 },
  p2: { x: 0.25, y: 1 },
  duration: 1,
  animationType: 'translateX',
  isPlaying: true,
  scrubPosition: 0,
  activePreset: 'ease',
  selectedControlPoint: null,
};

const easingReducer = (state: EasingState, action: EasingAction): EasingState => {
  switch (action.type) {
    case 'SET_CONTROL_POINT':
      return {
        ...state,
        [action.point]: action.value,
        activePreset: null, // Clear preset when manually adjusting
      };
    
    case 'SET_DURATION':
      return {
        ...state,
        duration: Math.max(0.1, Math.min(10, action.value)),
      };
    
    case 'SET_ANIMATION_TYPE':
      return {
        ...state,
        animationType: action.value,
      };
    
    case 'SET_PLAYING':
      return {
        ...state,
        isPlaying: action.value,
      };
    
    case 'SET_SCRUB_POSITION':
      return {
        ...state,
        scrubPosition: Math.max(0, Math.min(1, action.value)),
      };
    
    case 'SET_ACTIVE_PRESET':
      return {
        ...state,
        activePreset: action.value,
      };
    
    case 'SET_SELECTED_CONTROL_POINT':
      return {
        ...state,
        selectedControlPoint: action.value,
      };
    
    case 'LOAD_PRESET':
      return {
        ...state,
        p1: action.preset.p1,
        p2: action.preset.p2,
        activePreset: action.preset.name,
        selectedControlPoint: null,
      };
    
    case 'LOAD_FROM_URL':
      return {
        ...state,
        ...action.state,
      };
    
    default:
      return state;
  }
};

interface EasingContextType {
  state: EasingState;
  dispatch: React.Dispatch<EasingAction>;
}

const EasingContext = createContext<EasingContextType | undefined>(undefined);

interface EasingProviderProps {
  children: ReactNode;
}

export const EasingProvider: React.FC<EasingProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(easingReducer, initialState);

  // Load state from URL on mount
  useEffect(() => {
    const urlState = decodeEasingFromURL();
    if (urlState) {
      dispatch({ type: 'LOAD_FROM_URL', state: urlState });
    }
  }, []);

  // Update URL when state changes (debounced)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      encodeEasingToURL(state);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [state.p1, state.p2, state.duration, state.animationType]);

  const value = { state, dispatch };

  return (
    <EasingContext.Provider value={value}>
      {children}
    </EasingContext.Provider>
  );
};

export const useEasingState = (): EasingContextType => {
  const context = useContext(EasingContext);
  if (context === undefined) {
    throw new Error('useEasingState must be used within an EasingProvider');
  }
  return context;
}; 