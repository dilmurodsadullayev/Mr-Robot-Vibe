import { useContext } from "react";

import LoadingContext from "../context/LoadingContext";

function useLoading() {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error(
      "useLoading must be used inside LoadingProvider",
    );
  }

  return context;
}

export default useLoading;