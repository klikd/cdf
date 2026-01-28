import { createRoot } from "react-dom/client";
import App from "./app/App-minimal.tsx";
import "./styles/index.css";

console.log('main.tsx: Starting React app with minimal component');

try {
  const root = createRoot(document.getElementById("root")!);
  root.render(<App />);
  console.log('main.tsx: React app rendered successfully');
} catch (error) {
  console.error('main.tsx: Failed to render React app:', error);
  document.getElementById('root')!.innerHTML = '<div style="padding: 20px; color: red;"><h1>React Error</h1><p>Failed to render React app. Check console for details.</p></div>';
}