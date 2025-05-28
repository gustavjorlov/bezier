import React, { useEffect, useRef, useState } from 'react';
import { useEasingState } from '../../hooks/useEasingState';
import { generateCubicBezier } from '../../utils/codeGenerator';
import styles from './AnimationPreview.module.css';

export const AnimationPreview: React.FC = () => {
  const { state, dispatch } = useEasingState();
  const boxRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [animationKey, setAnimationKey] = useState(0);

  const cubicBezier = generateCubicBezier(state.p1, state.p2);

  // Create CSS custom properties for animation
  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.style.setProperty('--easing', cubicBezier);
      boxRef.current.style.setProperty('--duration', `${state.duration}s`);
    }
  }, [cubicBezier, state.duration]);

  // Restart animation when easing changes
  useEffect(() => {
    setAnimationKey(prev => prev + 1);
  }, [state.p1, state.p2, state.duration, state.animationType]);

  // Handle play/pause
  const togglePlay = () => {
    dispatch({ type: 'SET_PLAYING', value: !state.isPlaying });
  };

  // Get animation class based on type
  const getAnimationClass = () => {
    switch (state.animationType) {
      case 'translateX':
        return styles.animateTranslateX;
      case 'scale':
        return styles.animateScale;
      case 'rotate':
        return styles.animateRotate;
      case 'opacity':
        return styles.animateOpacity;
      case 'combined':
        return styles.animateCombined;
      default:
        return styles.animateTranslateX;
    }
  };

  const getAnimationDescription = () => {
    switch (state.animationType) {
      case 'translateX':
        return 'Moving horizontally';
      case 'scale':
        return 'Scaling up and down';
      case 'rotate':
        return 'Rotating 360 degrees';
      case 'opacity':
        return 'Fading in and out';
      case 'combined':
        return 'Multiple properties';
      default:
        return '';
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.easingInfo}>
          <span className={styles.label}>Easing:</span>
          <code className={styles.easingValue}>{cubicBezier}</code>
        </div>
        <div className={styles.animationInfo}>
          <span className={styles.label}>Animation:</span>
          <span className={styles.animationDescription}>
            {getAnimationDescription()}
          </span>
        </div>
      </div>

      <div ref={containerRef} className={styles.previewContainer}>
        <div
          ref={boxRef}
          key={animationKey}
          className={`${styles.previewBox} ${getAnimationClass()} ${
            state.isPlaying ? styles.playing : styles.paused
          }`}
          style={{
            animationPlayState: state.isPlaying ? 'running' : 'paused',
          }}
        />
        
        <div className={styles.track} />
      </div>

      <div className={styles.controls}>
        <button
          className={styles.playButton}
          onClick={togglePlay}
          aria-label={state.isPlaying ? 'Pause animation' : 'Play animation'}
        >
          {state.isPlaying ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
          {state.isPlaying ? 'Pause' : 'Play'}
        </button>

        <div className={styles.durationControl}>
          <label htmlFor="duration" className={styles.durationLabel}>
            Duration:
          </label>
          <input
            id="duration"
            type="range"
            min="0.1"
            max="5"
            step="0.1"
            value={state.duration}
            onChange={(e) => dispatch({ 
              type: 'SET_DURATION', 
              value: parseFloat(e.target.value) 
            })}
            className={styles.durationSlider}
          />
          <span className={styles.durationValue}>{state.duration}s</span>
        </div>
      </div>
    </div>
  );
}; 