import { createRoot } from "react-dom/client";
import App from "./app/App.js";
import "./styles/index.css";

console.log('main.tsx: Starting React app with plain JS component');

createRoot(document.getElementById("root")!.render(<App />);