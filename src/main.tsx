import { createRoot } from "react-dom/client";
import App from "./app/App-debug.tsx";
import "./styles/index.css";

console.log('main.tsx: Starting React app');

createRoot(document.getElementById("root")!).render(<App />);