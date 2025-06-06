import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@rf-ui-platform/uno';
import { useEasingState } from '../../hooks/useEasingState';
import { generateCubicBezier } from '../../utils/codeGenerator';
import styles from './AnimationPreview.module.css';

export const AnimationPreview: React.FC = () => {
  const { state, dispatch } = useEasingState();
  const boxRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [animationKey, setAnimationKey] = useState(0);
  const [isScrubbing, setIsScrubbing] = useState(false);

  const cubicBezier = generateCubicBezier(state.p1, state.p2);

  // Create CSS custom properties for animation
  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.style.setProperty('--easing', cubicBezier);
      boxRef.current.style.setProperty('--duration', `${state.duration}s`);
      
      // Handle timeline scrubbing
      if (isScrubbing || !state.isPlaying) {
        // When scrubbing or paused, use animation-delay to show specific frame
        const delay = -state.scrubPosition * state.duration;
        boxRef.current.style.setProperty('--delay', `${delay}s`);
        boxRef.current.style.animationPlayState = 'paused';
      } else {
        // When playing normally, remove delay and let animation run
        boxRef.current.style.removeProperty('--delay');
        boxRef.current.style.animationPlayState = 'running';
      }
    }
  }, [cubicBezier, state.duration, state.scrubPosition, state.isPlaying, isScrubbing]);

  // Restart animation when easing changes
  useEffect(() => {
    setAnimationKey(prev => prev + 1);
  }, [state.p1, state.p2, state.duration, state.animationType]);

  // Handle play/pause
  const togglePlay = () => {
    dispatch({ type: 'SET_PLAYING', value: !state.isPlaying });
    setIsScrubbing(false);
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
          className={`${styles.previewBox} ${getAnimationClass()}`}
          style={{
            animationPlayState: (isScrubbing || !state.isPlaying) ? 'paused' : 'running',
          }}
        />
        
        <div className={styles.track} />
      </div>

      <div className={styles.controls}>
        <Button
          size="medium"
          color="secondary"
          startIcon={state.isPlaying ? "pause" : "play"}
          onClick={togglePlay}
        >
          {state.isPlaying ? 'Pause' : 'Play'}
        </Button>

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