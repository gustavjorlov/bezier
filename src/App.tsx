import React from 'react';
import { Button } from '@rf-ui-platform/uno';
import '@rf-ui-platform/uno/dist/main.css';
import '@rf-ui-platform/uno/src/styles/theme.css';
import { EasingProvider } from './hooks/useEasingState';
import { CurveEditor } from './components/CurveEditor/CurveEditor';
import { AnimationPreview } from './components/AnimationPreview/AnimationPreview';
import { PresetLibrary } from './components/PresetLibrary/PresetLibrary';
import { ControlPanel } from './components/ControlPanel/ControlPanel';
import { CodeOutput } from './components/CodeOutput/CodeOutput';
import { copyToClipboard } from './utils/codeGenerator';
import styles from './App.module.css';

const App: React.FC = () => {
  const handleShare = async () => {
    try {
      // Get current state from URL
      const shareableURL = window.location.href;
      await copyToClipboard(shareableURL);
      
      // Show feedback (you could implement a toast notification here)
      console.log('URL copied to clipboard!');
    } catch (error) {
      console.error('Failed to copy URL:', error);
    }
  };

  return (
    <EasingProvider>
      <div className={styles.app}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <h1 className={styles.title}>
              <div className={styles.titleIcon}>E</div>
              Easing Function Editor
            </h1>
            <Button 
              size="medium" 
              color="secondary" 
              startIcon="share"
              onClick={handleShare}
            >
              Share
            </Button>
          </div>
        </header>

        <main className={styles.container}>
          <section className={styles.welcomeSection}>
            <div className={styles.welcomeContent}>
              <p className={styles.welcomeText}>
                Create custom easing functions for CSS animations with visual feedback. 
                Drag control points on the curve editor to design smooth transitions and copy the generated CSS code.
              </p>
              <div className={styles.tips}>
                <h3 className={styles.tipsTitle}>Quick tips</h3>
                <ul className={styles.tipsList}>
                  <li>Drag the blue control points to adjust the curve shape</li>
                  <li>Select preset easings from the library for common effects</li>
                  <li>Use the timeline scrubber to examine specific animation frames</li>
                  <li>Copy CSS code from the output panel to use in your projects</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={`${styles.section} ${styles.editorSection}`}>
            <h2 className={styles.sectionTitle} title="Drag the blue control points to shape your easing curve">
              <svg className={styles.sectionIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Curve Editor
            </h2>
            <CurveEditor />
          </section>

          <section className={`${styles.section} ${styles.previewSection}`}>
            <h2 className={styles.sectionTitle} title="Watch your animation play with the current easing function">
              <svg className={styles.sectionIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Animation Preview
            </h2>
            <AnimationPreview />
          </section>

          <section className={`${styles.section} ${styles.presetsSection}`}>
            <h2 className={styles.sectionTitle} title="Click any preset to apply common easing functions">
              <svg className={styles.sectionIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Presets
            </h2>
            <PresetLibrary />
          </section>

          <section className={`${styles.section} ${styles.controlsSection}`}>
            <h2 className={styles.sectionTitle} title="Adjust animation settings and scrub through frames">
              <svg className={styles.sectionIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"/>
              </svg>
              Controls
            </h2>
            <ControlPanel />
          </section>

          <section className={`${styles.section} ${styles.codeSection}`}>
            <h2 className={styles.sectionTitle} title="Copy CSS code to use in your projects">
              <svg className={styles.sectionIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
              </svg>
              CSS Code
            </h2>
            <CodeOutput />
          </section>
        </main>
      </div>
    </EasingProvider>
  );
};

export default App; 