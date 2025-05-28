import React from 'react';
import { EasingProvider } from './hooks/useEasingState';
import { CurveEditor } from './components/CurveEditor/CurveEditor';
import { AnimationPreview } from './components/AnimationPreview/AnimationPreview';
import { PresetLibrary } from './components/PresetLibrary/PresetLibrary';
import { ControlPanel } from './components/ControlPanel/ControlPanel';
import { CodeOutput } from './components/CodeOutput/CodeOutput';
import { getShareableURL } from './utils/urlManager';
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
            <button className={styles.shareButton} onClick={handleShare}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
              </svg>
              Share
            </button>
          </div>
        </header>

        <main className={styles.container}>
          <section className={`${styles.section} ${styles.editorSection}`}>
            <h2 className={styles.sectionTitle}>
              <svg className={styles.sectionIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Curve Editor
            </h2>
            <CurveEditor />
          </section>

          <section className={`${styles.section} ${styles.previewSection}`}>
            <h2 className={styles.sectionTitle}>
              <svg className={styles.sectionIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Animation Preview
            </h2>
            <AnimationPreview />
          </section>

          <section className={`${styles.section} ${styles.presetsSection}`}>
            <h2 className={styles.sectionTitle}>
              <svg className={styles.sectionIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Presets
            </h2>
            <PresetLibrary />
          </section>

          <section className={`${styles.section} ${styles.controlsSection}`}>
            <h2 className={styles.sectionTitle}>
              <svg className={styles.sectionIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"/>
              </svg>
              Controls
            </h2>
            <ControlPanel />
          </section>

          <section className={`${styles.section} ${styles.codeSection}`}>
            <h2 className={styles.sectionTitle}>
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