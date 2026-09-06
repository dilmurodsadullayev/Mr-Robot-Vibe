import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import "./i18n";

import App from "./App.jsx";
import LoadingProvider from "./providers/LoadingProvider.jsx";

createRoot(
  document.getElementById("root"),
).render(
  <StrictMode>
    <LoadingProvider>
      <App />
    </LoadingProvider>
  </StrictMode>,
);