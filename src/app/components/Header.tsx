import { Link } from "react-router-dom";
import { UserIcon, Shield, FileText, Home } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="border-b border-[#E5E7EB] bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Always visually on the right */}
          <Link to="/" className="flex flex-col items-start" dir="ltr">
            <img 
              src="/logo.png" 
              alt="الصندوق الثقافي - Cultural Development Fund" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-6 space-x-reverse">
            <Link 
              to="/" 
              className="flex items-center space-x-2 space-x-reverse text-[#111827] hover:text-[#374151] font-medium transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>الرئيسية</span>
            </Link>
            
            <Link 
              to="/policy" 
              className="flex items-center space-x-2 space-x-reverse text-[#111827] hover:text-[#374151] font-medium transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>سياسة الإبلاغ</span>
            </Link>
          </nav>

          {/* Right side items */}
          <div className="flex items-center space-x-4 space-x-reverse">
            {/* Whistleblowing Quick Access */}
            <Link to="/">
              <Button 
                variant="outline" 
                className="flex items-center space-x-2 space-x-reverse border-[#DC2626] text-[#DC2626] hover:bg-[#DC2626] hover:text-white"
              >
                <Shield className="w-4 h-4" />
                <span>الإبلاغ عن مخالفة</span>
              </Button>
            </Link>

            {/* Language Switcher */}
            <button className="text-[#111827] hover:text-[#374151] text-sm font-medium transition-colors">
              English
            </button>

            {/* Login Button */}
            <button className="flex items-center space-x-2 space-x-reverse text-[#111827] hover:text-[#374151] text-sm font-medium transition-colors">
              <UserIcon className="w-4 h-4" />
              <span>تسجيل الدخول</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden mt-4 pt-4 border-t border-[#E5E7EB]">
          <nav className="flex flex-col space-y-2">
            <Link 
              to="/" 
              className="flex items-center space-x-2 space-x-reverse text-[#111827] hover:text-[#374151] font-medium py-2 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>الرئيسية</span>
            </Link>
            
            <Link 
              to="/policy" 
              className="flex items-center space-x-2 space-x-reverse text-[#111827] hover:text-[#374151] font-medium py-2 transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>سياسة الإبلاغ</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
