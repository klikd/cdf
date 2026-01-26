
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";
  import "./app/styles/cdf-tokens.css";
  import "./app/styles/form-enhancements.css";

  createRoot(document.getElementById("root")!).render(<App />);
  