import React, { useState } from 'react';
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
            <button
              key={format}
              className={`${styles.tab} ${
                activeFormat === format ? styles.active : ''
              }`}
              onClick={() => setActiveFormat(format as CodeFormat)}
            >
              {label}
            </button>
          ))}
        </div>
        
        <button
          className={`${styles.copyButton} ${copySuccess ? styles.success : ''}`}
          onClick={handleCopy}
          disabled={copySuccess}
        >
          {copySuccess ? (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
              </svg>
              Copy
            </>
          )}
        </button>
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