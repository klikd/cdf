import WhistleblowingSubmission from "./pages/WhistleblowingSubmission";

export default function App() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <header className="border-b border-gray-200 bg-white p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-xl font-bold text-gray-900">نظام الإبلاغ عن المخالفات</h1>
        </div>
      </header>
      
      <main className="max-w-4xl mx-auto p-4">
        <WhistleblowingSubmission />
      </main>
      
      <footer className="border-t border-gray-200 bg-white p-4 mt-8">
        <div className="max-w-4xl mx-auto text-center text-gray-600">
          <p>© 2026 الصندوق الثقافي للتنمية - جميع الحقوق محفوظة</p>
        </div>
      </footer>
    </div>
  );
}
