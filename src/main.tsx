import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App";

createRoot(document.getElementById("App")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
