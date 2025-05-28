import React from 'react';
import { useEasingState } from '../../hooks/useEasingState';
import { easingPresets } from '../../utils/easingPresets';
import styles from './PresetLibrary.module.css';

export const PresetLibrary: React.FC = () => {
  const { state, dispatch } = useEasingState();

  const handlePresetSelect = (preset: typeof easingPresets[0]) => {
    dispatch({ type: 'LOAD_PRESET', preset });
  };

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {easingPresets.map((preset) => (
          <button
            key={preset.name}
            className={`${styles.presetButton} ${
              state.activePreset === preset.name ? styles.active : ''
            }`}
            onClick={() => handlePresetSelect(preset)}
            title={preset.description}
          >
            <div className={styles.presetHeader}>
              <span className={styles.presetName}>{preset.displayName}</span>
            </div>
            <div className={styles.presetInfo}>
              <code className={styles.presetValues}>
                {preset.p1.x.toFixed(2)}, {preset.p1.y.toFixed(2)}, {preset.p2.x.toFixed(2)}, {preset.p2.y.toFixed(2)}
              </code>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}; 