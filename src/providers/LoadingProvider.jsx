import {
  useCallback,
  useMemo,
  useState,
} from "react";

import GlobalLoader from "../components/GlobalLoader/GlobalLoader";
import LoadingContext from "../context/LoadingContext";

function LoadingProvider({ children }) {
  const [loadingCount, setLoadingCount] =
    useState(0);

  const [loadingMessage, setLoadingMessage] =
    useState(null);

  const showLoading = useCallback(
    (message = null) => {
      setLoadingMessage(message);

      setLoadingCount((current) =>
        current + 1,
      );
    },
    [],
  );

  const hideLoading = useCallback(() => {
    setLoadingCount((current) =>
      Math.max(0, current - 1),
    );
  }, []);

  const withLoading = useCallback(
    async (task, message = null) => {
      showLoading(message);

      try {
        return await task();
      } finally {
        hideLoading();
      }
    },
    [showLoading, hideLoading],
  );

  const value = useMemo(
    () => ({
      isLoading: loadingCount > 0,
      showLoading,
      hideLoading,
      withLoading,
    }),
    [
      loadingCount,
      showLoading,
      hideLoading,
      withLoading,
    ],
  );

  return (
    <LoadingContext.Provider value={value}>
      {children}

      <GlobalLoader
        visible={loadingCount > 0}
        message={loadingMessage}
      />
    </LoadingContext.Provider>
  );
}

export default LoadingProvider;