import React, { useState } from 'react';
import { Button } from '@rf-ui-platform/uno';
import { useEasingState } from '../../hooks/useEasingState';
import { generateCSS, copyToClipboard } from '../../utils/codeGenerator';
import styles from './CodeOutput.module.css';

type CodeFormat = 'transition' | 'animation' | 'customProperty' | 'keyframes';

const formatLabels: Record<CodeFormat, string> = {
  transition: 'CSS Transition',
  animation: 'CSS Animation',
  customProperty: 'Custom Property',
  keyframes: 'Keyframes'
};

export const CodeOutput: React.FC = () => {
  const { state } = useEasingState();
  const [activeFormat, setActiveFormat] = useState<CodeFormat>('transition');
  const [copySuccess, setCopySuccess] = useState(false);

  const cssOutput = generateCSS(state);

  const handleCopy = async () => {
    const codeToCopy = cssOutput[activeFormat];
    const success = await copyToClipboard(codeToCopy);
    
    if (success) {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  const getCodeContent = () => {
    switch (activeFormat) {
      case 'transition':
        return cssOutput.transition;
      case 'animation':
        return cssOutput.animation;
      case 'customProperty':
        return cssOutput.customProperty;
      case 'keyframes':
        return cssOutput.keyframes;
      default:
        return cssOutput.transition;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.tabs}>
          {Object.entries(formatLabels).map(([format, label]) => (
            <Button
              key={format}
              size="small"
              color={activeFormat === format ? "primary" : "secondary"}
              onClick={() => setActiveFormat(format as CodeFormat)}
            >
              {label}
            </Button>
          ))}
        </div>
        
        <Button
          size="small"
          color="secondary"
          startIcon={copySuccess ? "check" : "copy"}
          onClick={handleCopy}
          isDisabled={copySuccess}
        >
          {copySuccess ? "Copied!" : "Copy"}
        </Button>
      </div>

      <div className={styles.codeContainer}>
        <pre className={styles.codeBlock}>
          <code className={styles.code}>
            {getCodeContent()}
          </code>
        </pre>
      </div>

      <div className={styles.usage}>
        <h4 className={styles.usageTitle}>Usage Instructions</h4>
        <div className={styles.usageContent}>
          {activeFormat === 'transition' && (
            <p>
              Apply this transition to any element. The transition will trigger when the 
              specified property changes (e.g., on hover, click, or class change).
            </p>
          )}
          {activeFormat === 'animation' && (
            <p>
              Use this animation property to apply the easing function to a CSS animation. 
              Make sure to define corresponding keyframes.
            </p>
          )}
          {activeFormat === 'customProperty' && (
            <p>
              Define this custom property in your CSS and reference it with var(--my-easing) 
              in any transition or animation declaration.
            </p>
          )}
          {activeFormat === 'keyframes' && (
            <p>
              Complete animation with keyframes. Copy this entire block to your CSS file. 
              Apply the .animated-element class to trigger the animation.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}; 