import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";

import "@department-of-veterans-affairs/formation/dist/formation.min.css";
import "@department-of-veterans-affairs/component-library/dist/main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
