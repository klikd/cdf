import { Link } from "react-router-dom";
import { Shield, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#E5E7EB] bg-gray-50 mt-16">
      <div className="mx-auto max-w-[1200px] px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col items-start" dir="ltr">
              <img 
                src="/logo.png" 
                alt="الصندوق الثقافي - Cultural Development Fund" 
                className="h-10 w-auto mb-4"
              />
            </div>
            <p className="text-sm text-[#6B7280] mb-4">
              الصندوق الثقافي للتنمية هو مؤسسة رائدة في دعم المشاريع الثقافية والإبداعية في المملكة العربية السعودية.
            </p>
            <div className="flex items-center space-x-2 space-x-reverse">
              <Shield className="w-5 h-5 text-[#DC2626]" />
              <span className="text-sm font-medium text-[#111827]">نظام الإبلاغ الآمن</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-[#111827] mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-[#6B7280] hover:text-[#111827] transition-colors">
                  الإبلاغ عن مخالفة
                </Link>
              </li>
              <li>
                <Link to="/policy" className="text-sm text-[#6B7280] hover:text-[#111827] transition-colors">
                  سياسة الإبلاغ
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-[#6B7280] hover:text-[#111827] transition-colors">
                  الأسئلة الشائعة
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#6B7280] hover:text-[#111827] transition-colors">
                  اتصل بنا
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-[#111827] mb-4">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 space-x-reverse">
                <Mail className="w-4 h-4 text-[#6B7280]" />
                <span className="text-sm text-[#6B7280]">info@cdf.gov.sa</span>
              </li>
              <li className="flex items-center space-x-2 space-x-reverse">
                <Phone className="w-4 h-4 text-[#6B7280]" />
                <span className="text-sm text-[#6B7280]">+966 920000000</span>
              </li>
              <li className="flex items-center space-x-2 space-x-reverse">
                <MapPin className="w-4 h-4 text-[#6B7280]" />
                <span className="text-sm text-[#6B7280]">الرياض، المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#E5E7EB] mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-[#6B7280] mb-4 md:mb-0">
              © 2026 الصندوق الثقافي للتنمية. جميع الحقوق محفوظة.
            </p>
            <div className="flex space-x-6 space-x-reverse">
              <a href="#" className="text-sm text-[#6B7280] hover:text-[#111827] transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#" className="text-sm text-[#6B7280] hover:text-[#111827] transition-colors">
                الشروط والأحكام
              </a>
              <a href="#" className="text-sm text-[#6B7280] hover:text-[#111827] transition-colors">
                إخلاء مسؤولية
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
