import {
  useCallback,
  useState,
} from "react";

import IntroLoader from "./components/IntroLoader/IntroLoader";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import SEOController from "./components/SEOController/SEOController";
import SecretAccess from "./components/SecretAccess/SecretAccess";
import SecretSignalHint from "./components/SecretSignalHint/SecretSignalHint";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/Home/HomePage";

import useSecretSequence from "./hooks/useSecretSequence";

function App() {
  /* ========================================================= */
  /* INTRO */
  /* ========================================================= */

  const [
    introCompleted,
    setIntroCompleted,
  ] = useState(false);

  const handleIntroComplete =
    useCallback(() => {
      setIntroCompleted(true);
    }, []);

  /* ========================================================= */
  /* SECRET FSOCIETY ACCESS */
  /* ========================================================= */

  const {
    unlocked,
    reset,
  } = useSecretSequence();

  /* ========================================================= */
  /* RENDER */
  /* ========================================================= */

  return (
    <>
      {/* ===================================================== */}
      {/* SEO / DOCUMENT METADATA */}
      {/* ===================================================== */}

      <SEOController />

      {/* ===================================================== */}
      {/* GLOBAL VISUAL NOISE */}
      {/* ===================================================== */}

      <div className="noise" />

      {/* ===================================================== */}
      {/* INTRO BOOT SCREEN */}
      {/* ===================================================== */}

      {!introCompleted && (
        <IntroLoader
          onComplete={
            handleIntroComplete
          }
        />
      )}

      {/* ===================================================== */}
      {/* MAIN WEBSITE */}
      {/* ===================================================== */}

      {introCompleted && (
        <>
          <MainLayout>
            <HomePage />
          </MainLayout>

          {/* ================================================= */}
          {/* FLOATING WEBSITE UI */}
          {/* ================================================= */}

          {!unlocked && (
            <>
              <ScrollProgress />

              <SecretSignalHint />
            </>
          )}
        </>
      )}

      {/* ===================================================== */}
      {/* FSOCIETY SECRET SYSTEM */}
      {/* ===================================================== */}

      <SecretAccess
        open={unlocked}
        onClose={reset}
      />
    </>
  );
}

export default App;