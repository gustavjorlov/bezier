import React from 'react';
import { Button } from '@rf-ui-platform/uno';
import { useEasingState } from '../../hooks/useEasingState';
import { EasingState } from '../../types';
import styles from './ControlPanel.module.css';

const animationTypes: Array<{
  value: EasingState['animationType'];
  label: string;
  description: string;
}> = [
  { value: 'translateX', label: 'Move X', description: 'Horizontal movement' },
  { value: 'scale', label: 'Scale', description: 'Size transformation' },
  { value: 'rotate', label: 'Rotate', description: '360° rotation' },
  { value: 'opacity', label: 'Opacity', description: 'Fade in/out' },
  { value: 'combined', label: 'Combined', description: 'Multiple properties' },
];

export const ControlPanel: React.FC = () => {
  const { state, dispatch } = useEasingState();

  const handleAnimationTypeChange = (type: EasingState['animationType']) => {
    dispatch({ type: 'SET_ANIMATION_TYPE', value: type });
  };

  const handleScrubChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    dispatch({ type: 'SET_SCRUB_POSITION', value });
    // Pause animation when manually scrubbing
    dispatch({ type: 'SET_PLAYING', value: false });
  };

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Animation Type</h4>
        <div className={styles.animationTypeGrid}>
          {animationTypes.map((type) => (
            <Button
              key={type.value}
              size="medium"
              color={state.animationType === type.value ? "primary" : "secondary"}
              onClick={() => handleAnimationTypeChange(type.value)}
            >
              {type.label}
            </Button>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Timeline Scrubber</h4>
        <p className={styles.sectionDescription}>
          Drag to manually control animation position for frame-by-frame analysis.
        </p>
        <div className={styles.scrubberContainer}>
          <div className={styles.scrubberTrack}>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={state.scrubPosition}
              onChange={handleScrubChange}
              className={styles.scrubberSlider}
              aria-label="Animation timeline position"
            />
            <div className={styles.scrubberLabels}>
              <span>Start</span>
              <span>End</span>
            </div>
          </div>
          <div className={styles.scrubberValue}>
            {Math.round(state.scrubPosition * 100)}%
          </div>
        </div>
        <div className={styles.scrubberInfo}>
          <span className={styles.infoText}>
            Current position: {(state.scrubPosition * state.duration).toFixed(2)}s / {state.duration}s
          </span>
        </div>
      </div>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Settings</h4>
        <div className={styles.settingsGrid}>
          <div className={styles.setting}>
            <label htmlFor="duration-input" className={styles.settingLabel}>
              Duration:
            </label>
            <input
              id="duration-input"
              type="number"
              min="0.1"
              max="10"
              step="0.1"
              value={state.duration}
              onChange={(e) => dispatch({ 
                type: 'SET_DURATION', 
                value: parseFloat(e.target.value) || 0.1 
              })}
              className={styles.numberInput}
            />
            <span className={styles.unit}>s</span>
          </div>
        </div>
      </div>
    </div>
  );
}; 