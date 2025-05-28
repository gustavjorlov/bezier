import React from 'react';
import { Button } from '@rf-ui-platform/uno';
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
          <div key={preset.name} className={styles.presetWrapper}>
            <Button
              size="large"
              color={state.activePreset === preset.name ? "primary" : "secondary"}
              onClick={() => handlePresetSelect(preset)}
              fullWidth
            >
              {preset.displayName}
            </Button>
            <div className={styles.presetInfo}>
              <code className={styles.presetValues}>
                {preset.p1.x.toFixed(2)}, {preset.p1.y.toFixed(2)}, {preset.p2.x.toFixed(2)}, {preset.p2.y.toFixed(2)}
              </code>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 