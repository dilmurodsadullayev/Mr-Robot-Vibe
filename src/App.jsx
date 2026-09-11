import {
  useCallback,
  useState,
} from "react";

import IntroLoader from "./components/IntroLoader/IntroLoader";
import SecretAccess from "./components/SecretAccess/SecretAccess";
import SecretSignalHint from "./components/SecretSignalHint/SecretSignalHint";

import MainLayout from "./layouts/MainLayout";

import HomePage from "./pages/Home/HomePage";

import useSecretSequence from "./hooks/useSecretSequence";

function App() {
  /* ============================= */
  /* Intro */
  /* ============================= */

  const [
    introCompleted,
    setIntroCompleted,
  ] = useState(false);

  const handleIntroComplete =
    useCallback(() => {
      setIntroCompleted(true);
    }, []);

  /* ============================= */
  /* Secret Access */
  /* ============================= */

  const {
    unlocked,
    reset,
  } = useSecretSequence();

  return (
    <>
      {/* Global Noise */}

      <div className="noise" />

      {/* Intro */}

      {!introCompleted && (
        <IntroLoader
          onComplete={
            handleIntroComplete
          }
        />
      )}

      {/* Website */}

      {introCompleted && (
        <>
          <MainLayout>
            <HomePage />
          </MainLayout>

          {/* Secret clue */}

          {!unlocked && (
            <SecretSignalHint />
          )}
        </>
      )}

      {/* FSociety secret network */}

      <SecretAccess
        open={unlocked}
        onClose={reset}
      />
    </>
  );
}

export default App;