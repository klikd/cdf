import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import WhistleblowingSubmission from "./pages/WhistleblowingSubmission";
import { WhistleblowingPolicy } from "./pages/WhistleblowingPolicy";
import WhistleblowingConfirmation from "./pages/WhistleblowingConfirmation";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white" dir="rtl">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<WhistleblowingSubmission />} />
            <Route path="/policy" element={<WhistleblowingPolicy />} />
            <Route path="/confirmation" element={<WhistleblowingConfirmation />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-center" dir="rtl" />
      </div>
    </Router>
  );
}
