import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Checkbox } from "../components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import Hero from "../components/Hero";
import "../styles/form-enhancements.css";

interface FormData {
  // Step 1: Identity & Contact Information
  relationship: string;              // Field 1
  reportingType: 'anonymous' | 'email-only' | 'known';  // Field 2 (updated from boolean)
  fullName?: string;                 // Field 3 (conditional: only when 'known')
  phone?: string;                   // Field 4 (conditional: only when 'known')
  email?: string;                   // Field 5 (conditional: when 'email-only' or 'known')
  
  // Step 2: Report Details
  violationType: string;            // Field 6
  violationOtherText?: string;       // Field 7 (conditional: only when violationType = "أخرى")
  description: string;               // Field 8
  incidentDateTime?: string;          // Field 9
  incidentLocation?: string;          // Field 10
  accusedDetails?: string;            // Field 11
  attachments?: File[];              // Field 12
  
  // Step 3: Declaration
  declarationPolicyAcceptance: boolean; // Field 13
}

export default function WhistleblowingSubmission() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Check if user is returning from policy page
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const returnStep = urlParams.get('returnToStep');
    if (returnStep) {
      setCurrentStep(parseInt(returnStep));
      // Clean up the URL
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  const [consentChecked, setConsentChecked] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    relationship: "",
    reportingType: "anonymous",  // Updated from anonymous: false
    fullName: "",
    phone: "",
    email: "",
    violationType: "",
    violationOtherText: "",
    description: "",
    incidentDateTime: "",
    incidentLocation: "",
    accusedDetails: "",
    attachments: [],
    declarationPolicyAcceptance: false,
  });

  const stepRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    stepRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentStep]);

  /* -------------------- handlers -------------------- */

  const generateReferenceNumber = () => {
    return `WB-2026-${Math.random().toString(36).substr(2, 4).toUpperCase()}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Function to count words in Arabic text
  const countWords = (text: string): number => {
    if (!text.trim()) return 0;
    // Split by spaces and filter out empty strings
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    return words.length;
  };

  // Validation functions for each step
  const validateStep1 = (): boolean => {
    return formData.relationship.trim() !== "";
  };

  const validateStep2 = (): boolean => {
    const wordCount = countWords(formData.description);
    if (wordCount < 100) {
      alert(`الوصف يجب أن يحتوي على 100 كلمة على الأقل للانتقال للخطوة التالية. الوصف الحالي يحتوي على ${wordCount} كلمة فقط.`);
      return false;
    }
    return true;
  };

  const validateStep3 = (): boolean => {
    return formData.violationType.trim() !== "";
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({ ...prev, attachments: Array.from(e.target.files) }));
    }
  };

  const handleSubmit = () => {
    if (!consentChecked) return;
    
    // Validate minimum word count for description
    if (countWords(formData.description) < 100) {
      alert("يرجى كتابة وصف مفصل للواقعة (100 كلمة على الأقل)");
      return;
    }
    
    setIsSubmitting(true);

    // Save form data to localStorage for receipt printing
    localStorage.setItem('whistleblowingFormData', JSON.stringify(formData));

    // Simulate API call with setTimeout
    setTimeout(() => {
      const refNumber = generateReferenceNumber();
      setIsSubmitting(false);
      
      // Navigate to confirmation page with reference number
      navigate(`/confirmation?ref=${refNumber}`);
    }, 2000);
  };

  /* -------------------- UI -------------------- */

  return (
    <>
      {/* ---------- Breadcrumb Navigator ---------- */}
      <nav className="py-2" role="navigation" aria-label="مسار التنقل">
        <div className="max-w-[1200px] px-6">
          <div className="inline-flex items-center gap-2 text-[#6B7280] hover:text-[#111827] mb-8 transition-colors">
            <ol className="flex items-center text-sm space-x-2 space-x-reverse">
              <li>
                <Link to="/" className="text-black hover:text-[var(--cdf-primary)] transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li className="flex items-center">
                <span className="mx-2 text-gray-400">{">"}</span>
                <Link to="/about" className="text-black hover:text-[var(--cdf-primary)] transition-colors">
                  عن الصندوق
                </Link>
              </li>
              <li className="flex items-center">
                <span className="mx-2 text-gray-400">{">"}</span>
                <span className="text-black" aria-current="page">
                  الإبلاغ عن المخالفات
                </span>
              </li>
            </ol>
          </div>
        </div>
      </nav>

      <div className="bg-white py-8 md:py-12" role="banner" aria-label="قسم المقدمة">
        <div className="max-w-4xl" style={{marginLeft: '48px', marginRight: '48px'}}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight text-right">
            قناة الإبلاغ الآمنة
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl text-right">
           يلتزم صندوق التنمية الثقافي بتعزيز النزاهة والشفافية، ويتيح قنوات آمنة وسرية تمكّن الموظفين والمستفيدين والعملاء والموردين وأصحاب المصلحة والأطراف الثالثة من الإبلاغ عن أي ممارسات يُشتبه في مخالفتها للأنظمة أو السياسات المعتمدة.


          </p>
        </div>
      </div>
      
      <div className="min-h-screen bg-[var(--cdf-background)] px-4 py-6" role="main" aria-label="نموذج الإبلاغ عن المخالفات">
        <div className="max-w-4xl" style={{marginLeft: '48px', marginRight: '48px'}}>
          
          {/* ---------- Primary Action Card - Whistleblowing Form ---------- */}
          <div className="bg-white border border-gray-300 shadow-sm overflow-hidden relative mb-6" style={{maxWidth: '768px', margin: '0 0 24px 0', borderRadius: '10px'}}>
            {/* Top Right Corner Cut */}
            <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-white"></div>
            
            {/* Bottom Left Corner Cut */}
            <div className="absolute bottom-0 left-0 w-0 h-0 border-r-[20px] border-r-transparent border-t-[20px] border-t-white"></div>
          
          {/* ---------- Progress Header ---------- */}
          <div className="bg-[var(--cdf-legal-callout-bg)] border-b border-gray-300 px-4 py-3">
            {currentStep <= 3 && (
              <div 
                className="flex justify-between items-start text-sm relative px-4"
                role="progressbar" 
                aria-valuenow={currentStep} 
                aria-valuemin={1} 
                aria-valuemax={3}
                aria-label={`الخطوة ${currentStep} من 3`}
              >
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`flex-1 text-center relative z-10 ${
                      currentStep >= s ? "text-[var(--cdf-foreground)]" : "text-[var(--cdf-muted-foreground)]"
                    }`}
                  >
                    <div
                      className={`mx-auto w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold relative transition-all duration-300 ${
                        currentStep >= s
                          ? "bg-[var(--cdf-foreground)] text-[var(--cdf-background)] shadow-md"
                          : "bg-white border-2 border-gray-300 text-[var(--cdf-muted-foreground)]"
                      }`}
                      aria-hidden="true"
                    >
                      {s}
                    </div>
                    <span 
                      aria-hidden="true"
                      className="block mt-2 text-xs font-medium"
                    >
                      {["معلومات الهوية", "تفاصيل البلاغ", "الإقرار والإرسال"][s - 1]}
                    </span>
                  </div>
                ))}
                {/* Background line positioned at circle center, between first and last circle */}
                <div className="absolute top-5 left-4 right-4 h-px bg-gray-300" />
              </div>
            )}
          </div>
          
          {/* ---------- Form Content ---------- */}
          <div className="px-4 py-4 space-y-4">

          {/* ================= STEP 1 ================= */}
          {currentStep === 1 && (
            <>
              <div className="form-section">
                <h2 className="text-xl font-semibold text-[var(--cdf-foreground)] mb-3">معلومات الهوية والتواصل</h2>
                
                {/* Field 1: Relationship */}
                <div className="field-group mb-3">
                  <label className="field-label text-sm font-medium text-[var(--cdf-foreground)] mb-2">
                    العلاقة بالصندوق
                    <span className="text-[var(--cdf-error-text)] ml-1">*</span>
                  </label>
                  <Select
                    value={formData.relationship}
                    onValueChange={(v) =>
                      setFormData((p) => ({ ...p, relationship: v }))
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="اختر علاقتك بالصندوق" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="employee">
                        <div className="flex flex-col">
                          <span className="font-medium">موظف</span>
                          <span className="text-xs text-[var(--cdf-muted-foreground)]">يعمل حالياً في الصندوق</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="client">
                        <div className="flex flex-col">
                          <span className="font-medium">عميل</span>
                          <span className="text-xs text-[var(--cdf-muted-foreground)]">يستفيد من خدمات الصندوق</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="supplier">
                        <div className="flex flex-col">
                          <span className="font-medium">مورد</span>
                          <span className="text-xs text-[var(--cdf-muted-foreground)]">يقدم خدمات للصندوق</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="third-party">
                        <div className="flex flex-col">
                          <span className="font-medium">طرف ثالث</span>
                          <span className="text-xs text-[var(--cdf-muted-foreground)]">طرف خارجي متعلق بالصندوق</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="field-help text-xs text-[var(--cdf-muted-foreground)] mt-1">
                    اختر علاقتك بالصندوق لتسهيل معالجة البلاغ بشكل فعال ودقيق
                  </p>
                </div>

                {/* Field 2: Reporting Type Options */}
                <div className="field-group mb-3">
                  <label className="field-label text-sm font-medium text-[var(--cdf-foreground)] mb-2">
                    طريقة الإبلاغ
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 bg-[#FCFCFC] border border-[var(--cdf-border)] p-3 rounded-lg cursor-pointer hover:bg-[var(--cdf-muted-hover-bg)] transition-colors">
                      <input
                        type="radio"
                        name="reportingType"
                        value="anonymous"
                        checked={formData.reportingType === 'anonymous'}
                        onChange={(e) => setFormData((p) => ({ ...p, reportingType: e.target.value as any }))}
                        className="w-4 h-4 text-[var(--cdf-primary)]"
                      />
                      <div>
                        <span className="font-medium text-[var(--cdf-foreground)]">إبلاغ مجهول الهوية</span>
                        <p className="text-xs text-[var(--cdf-muted-foreground)]">بدون أي بيانات شخصية مع حماية كاملة للخصوصية وسرية المعلومات</p>
                      </div>
                    </label>
                    
                    <label className="flex items-center gap-2 bg-[#FCFCFC] border border-[var(--cdf-border)] p-3 rounded-lg cursor-pointer hover:bg-[var(--cdf-muted-hover-bg)] transition-colors">
                      <input
                        type="radio"
                        name="reportingType"
                        value="email-only"
                        checked={formData.reportingType === 'email-only'}
                        onChange={(e) => setFormData((p) => ({ ...p, reportingType: e.target.value as any }))}
                        className="w-4 h-4 text-[var(--cdf-primary)]"
                      />
                      <div>
                        <span className="font-medium text-[var(--cdf-foreground)]">إبلاغ ببريد إلكتروني فقط</span>
                        <p className="text-xs text-[var(--cdf-muted-foreground)]">لإرسال الرقم المرجعي والمتابعة والتواصل الآمن مع حماية كاملة للخصوصية وسرية المعلومات</p>
                      </div>
                    </label>
                    
                    <label className="flex items-center gap-2 bg-[#FCFCFC] border border-[var(--cdf-border)] p-3 rounded-lg cursor-pointer hover:bg-[var(--cdf-muted-hover-bg)] transition-colors">
                      <input
                        type="radio"
                        name="reportingType"
                        value="known"
                        checked={formData.reportingType === 'known'}
                        onChange={(e) => setFormData((p) => ({ ...p, reportingType: e.target.value as any }))}
                        className="w-4 h-4 text-[var(--cdf-primary)]"
                      />
                      <div>
                        <span className="font-medium text-[var(--cdf-foreground)]">إبلاغ معروف الهوية</span>
                        <p className="text-xs text-[var(--cdf-muted-foreground)]">بيانات كاملة لتسهيل التواصل والمتابعة والتواصل مع حماية كاملة للخصوصية وسرية المعلومات</p>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Field 3: Full Name (Conditional) */}
                {formData.reportingType === 'known' && (
                  <div className="field-group mb-3">
                    <label className="field-label text-sm font-medium text-[var(--cdf-foreground)] mb-2">
                      الاسم الكامل
                      <span className="text-[var(--cdf-muted-foreground)] ml-2">اختياري</span>
                    </label>
                    <Input
                      name="fullName"
                      placeholder="مثال: أحمد محمد العنزي"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                    <p className="field-help text-xs text-[var(--cdf-muted-foreground)] mt-1">
                      لإرسال الرقم المرجعي والمتابعة
                    </p>
                  </div>
                )}

                {/* Field 4: Phone (Conditional) */}
                {formData.reportingType === 'known' && (
                  <div className="field-group mb-3">
                    <label className="field-label text-sm font-medium text-[var(--cdf-foreground)] mb-2">
                      رقم الهاتف
                      <span className="text-[var(--cdf-muted-foreground)] ml-2">اختياري</span>
                    </label>
                    <Input
                      name="phone"
                      placeholder="مثال: 05xxxxxxxx"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <p className="field-help text-xs text-[var(--cdf-muted-foreground)] mt-1">
                      للتواصل المباشر عند الحاجة
                    </p>
                  </div>
                )}

                {/* Field 5: Email (Conditional) */}
                {(formData.reportingType === 'email-only' || formData.reportingType === 'known') && (
                  <div className="field-group mb-3">
                    <label className="field-label text-sm font-medium text-[var(--cdf-foreground)] mb-2">
                      البريد الإلكتروني
                      <span className="text-[var(--cdf-error-text)] ml-1">*</span>
                    </label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="example@email.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <p className="field-help text-xs text-[var(--cdf-muted-foreground)] mt-1">
                      {formData.reportingType === 'email-only' 
                        ? "سيتم إرسال الرقم المرجعي والمتابعة عبر هذا البريد الإلكتروني فقط"
                        : "لإرسال الرقم المرجعي والمتابعة"
                      }
                    </p>
                  </div>
                )}
              </div>

              <div className="flex justify-between">
                <Button 
                  className="bg-[var(--cdf-button-primary-bg)] text-[var(--cdf-button-primary-text)] border-[var(--cdf-button-primary-border)] hover:bg-[var(--cdf-button-primary-hover-bg)] hover:text-[var(--cdf-button-primary-hover-text)] transition-colors duration-200 rounded-none"
                  onClick={() => {
                    if (validateStep1()) {
                      setCurrentStep(2);
                    } else {
                      alert("يرجى اختيار العلاقة بالصندوق للمتابعة");
                    }
                  }}
                >
                  التالي
                </Button>
              </div>
            </>
          )}

          {/* ================= STEP 2 ================= */}
          {currentStep === 2 && (
            <>
              <div className="form-section">
                <h2 className="text-xl font-semibold text-[var(--cdf-foreground)] mb-3">تفاصيل البلاغ</h2>
              </div>
            </>
          )}

          {/* ================= STEP 3 ================= */}
          {currentStep === 3 && (
            <>
              <h2 className="text-xl font-semibold text-[var(--cdf-foreground)] mb-3">الإقرار والإرسال</h2>

              <div className="bg-[var(--cdf-warning-callout-bg)] border border-[var(--cdf-warning-callout-border)] p-4 rounded-[var(--cdf-radius-lg)] text-sm text-[var(--cdf-warning-callout-text)]">
                يُنبه إلى أن البلاغات الكيدية أو المعلومات غير الصحيحة عمدًا تُعد
                مخالفة نظامية.
              </div>

              <label className="flex gap-3 items-start">
                <Checkbox
                  checked={consentChecked}
                  onCheckedChange={() => setConsentChecked((p) => !p)}
                />
                <div>
                  <p className="text-base text-[var(--cdf-muted-foreground)]">
                    أقرّ بموجب هذا بأن المعلومات الواردة في هذا البلاغ صحيحة ودقيقة حسب علمي واعتقادي، وأنني أقدّم البلاغ بحسن نية ودون قصد الإساءة أو الإضرار، وأوافق على معالجة البلاغ والبيانات المرتبطة به وفق الأنظمة ذات العلاقة و
                    <Link 
                      to={`/policy?returnToStep=${currentStep}`}
                      target="_blank"
                      className="underline hover:text-[var(--cdf-primary)] transition-colors"
                    >
                      سياسة الإبلاغ عن المخالفات
                    </Link>
                       لدى صندوق التنمية الثقافي.
                  </p>
                </div>
              </label>

              <div className="flex justify-between">
                <Button 
                  variant="outline"
                  className="bg-[var(--cdf-button-secondary-bg)] text-[var(--cdf-button-secondary-text)] border-[var(--cdf-button-secondary-border)] hover:bg-[var(--cdf-button-secondary-hover-bg)] hover:text-[var(--cdf-button-secondary-hover-text)] transition-colors duration-200 rounded-none"
                  onClick={() => setCurrentStep(2)}
                >
                  رجوع
                </Button>
                <Button 
                  className="bg-[var(--cdf-button-primary-bg)] text-[var(--cdf-button-primary-text)] border-[var(--cdf-button-primary-border)] hover:bg-[var(--cdf-button-primary-hover-bg)] hover:text-[var(--cdf-button-primary-hover-text)] transition-colors duration-200 rounded-none"
                  onClick={handleSubmit}
                  disabled={!consentChecked || isSubmitting}
                >
                  {isSubmitting ? "جاري الإرسال..." : "إرسال البلاغ"}
                </Button>
              </div>
            </>
          )}

          {/* ================= STEP 2 ================= */}
          {currentStep === 2 && (
            <>
              <div className="form-section">
                {/* Field 6: Violation Type */}
                <div className="field-group mb-3">
                  <label className="field-label text-sm font-medium text-[var(--cdf-foreground)] mb-2">
                    نوع المخالفة
                    <span className="text-[var(--cdf-error-text)] ml-1">*</span>
                  </label>
                  <Select
                    value={formData.violationType}
                    onValueChange={(v) =>
                      setFormData((p) => ({ ...p, violationType: v }))
                    }
                  >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="اختر نوع المخالفة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="financial">
                      <div className="flex flex-col">
                        <span className="font-medium">فساد مالي</span>
                        <span className="text-xs text-[var(--cdf-muted-foreground)]">مخالفات مالية أو إهدار أموال</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="administrative">
                      <div className="flex flex-col">
                        <span className="font-medium">فساد إداري</span>
                        <span className="text-xs text-[var(--cdf-muted-foreground)]">مخالفات إدارية أو إجرائية</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="policy">
                      <div className="flex flex-col">
                        <span className="font-medium">مخالفة سياسات وإجراءات الصندوق</span>
                        <span className="text-xs text-[var(--cdf-muted-foreground)]">عدم الالتزام بالسياسات المعتمدة</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="environment">
                      <div className="flex flex-col">
                        <span className="font-medium">مخالفة البيئة والصحة والسلامة</span>
                        <span className="text-xs text-[var(--cdf-muted-foreground)]">مخالفات بيئية أو صحية أو سلامة</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="abuse">
                      <div className="flex flex-col">
                        <span className="font-medium">استغلال السلطة الوظيفية</span>
                        <span className="text-xs text-[var(--cdf-muted-foreground)]">استغلال النفوذ أو السلطة</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="irregular">
                      <div className="flex flex-col">
                        <span className="font-medium">تمرير عمليات غير نظامية</span>
                        <span className="text-xs text-[var(--cdf-muted-foreground)]">عمليات غير نظامية أو غير قانونية</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="public">
                      <div className="flex flex-col">
                        <span className="font-medium">التصرفات المخالفة للنظام العام</span>
                        <span className="text-xs text-[var(--cdf-muted-foreground)]">تصرفات تخل بالنظام العام</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="concealment">
                      <div className="flex flex-col">
                        <span className="font-medium">التستر على المخالفات</span>
                        <span className="text-xs text-[var(--cdf-muted-foreground)]">إخفاء أو التستر على مخالفات</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="other">
                      <div className="flex flex-col">
                        <span className="font-medium">أخرى</span>
                        <span className="text-xs text-[var(--cdf-muted-foreground)]">أنواع أخرى من المخالفات</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
                <p className="field-help text-xs text-[var(--cdf-muted-foreground)] mt-1">
                  القائمة الكاملة النظامية (9 فئات + أخرى)
                </p>
              </div>

              {/* Field 7: Violation Other Text (Conditional) */}
              {formData.violationType === "other" && (
                <div className="field-group mb-3">
                  <label className="field-label text-sm font-medium text-[var(--cdf-foreground)] mb-2">
                    يرجى توضيح نوع المخالفة
                  </label>
                  <Input
                    name="violationOtherText"
                    placeholder="يرجى توضيح نوع المخالفة بالتفصيل"
                    value={formData.violationOtherText}
                    onChange={handleChange}
                  />
                </div>
              )}

              {/* Field 8: Description */}
              <div className="field-group mb-6">
                <label className="field-label text-sm font-medium text-[var(--cdf-foreground)] mb-2">
                  وصف الواقعة
                  <span className="text-[var(--cdf-error-text)] ml-1">*</span>
                </label>
                <div className="relative">
                  <Textarea
                    name="description"
                    placeholder="اكتب وصفاً مفصلاً للواقعة بالترتيب الزمني: متى حدثت؟ أين حدثت؟ من كان حاضراً؟ ماذا حدث بالضبط؟ كيف تم الاكتشاف؟ لماذا تعتبر هذه الواقعة مخالفة؟ اذكر أي شهود أو أدلة أو وثائق ذات صلة. كن دقيقاً وموضوعياً وتجنب التخمينات."
                    value={formData.description}
                    onChange={handleChange}
                    rows={8}
                    className={`w-full min-h-[200px] resize-none transition-colors duration-200 ${
                      countWords(formData.description) > 0 && countWords(formData.description) < 100
                        ? "border-[var(--cdf-error-border)] focus:border-[var(--cdf-error-border)] focus:ring-[var(--cdf-error-border)]/20"
                        : "border-input focus:border-ring focus:ring-ring/50"
                    }`}
                    style={{ userSelect: 'text', WebkitUserSelect: 'text' }}
                  />
                  
                  {/* Inline Error Message */}
                  {countWords(formData.description) > 0 && countWords(formData.description) < 100 && (
                    <div className="absolute bottom-3 left-3 right-3 bg-[var(--cdf-muted-bg)]/95 backdrop-blur-sm border border-[var(--cdf-border)] rounded-lg px-3 py-2 flex items-center gap-2 shadow-lg">
                      <svg className="w-3 h-3 text-[var(--cdf-muted-foreground)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-xs text-[var(--cdf-muted-foreground)]">
                        {countWords(formData.description)} كلمة - يرجى إضافة {100 - countWords(formData.description)} كلمة أخرى للوصول إلى الحد الأدنى (100 كلمة)
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Progress Tracker */}
                <div className="mt-3 p-3 bg-[var(--cdf-muted-bg)] border border-[var(--cdf-border)] rounded-[var(--cdf-radius-lg)]">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-[var(--cdf-foreground)]">تقدم الوصف</span>
                    <span className="text-sm text-[var(--cdf-muted-foreground)]">
                      {countWords(formData.description)} كلمة
                    </span>
                  </div>
                  <div className="w-full bg-[var(--cdf-border)] rounded-full h-2">
                    <div 
                      className="bg-[var(--cdf-primary)] h-2 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min((countWords(formData.description) / 200) * 100, 100)}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-[var(--cdf-muted-foreground)] mt-2">
                    {countWords(formData.description) < 50 
                      ? "يرجى تقديم وصف مفصل للواقعة (100 كلمة على الأقل)"
                      : countWords(formData.description) < 100
                      ? "وصف جيد، يرجى إضافة المزيد من التفاصيل للوصول إلى 100 كلمة"
                      : countWords(formData.description) < 150
                      ? "وصف جيد جداً، يمكنك إضافة المزيد من التفاصيل"
                      : countWords(formData.description) < 200
                      ? "وصف ممتاز وشامل"
                      : "وصف مفصل وشامل جداً"
                    }
                  </p>
                </div>
              </div>

              {/* Field 9: Incident Date & Time */}
              <div className="field-group mb-6">
                <label className="field-label text-sm font-medium text-[var(--cdf-foreground)] mb-2">
                  تاريخ ووقت الواقعة
                  <span className="text-[var(--cdf-error-text)] ml-1">*</span>
                </label>
                <Input
                  name="incidentDateTime"
                  type="datetime-local"
                  value={formData.incidentDateTime}
                  onChange={handleChange}
                />
                <p className="field-help text-xs text-[var(--cdf-muted-foreground)] mt-1">
                  يمكن قبول تاريخ تقريبي
                </p>
              </div>

              {/* Field 10: Incident Location */}
              <div className="field-group mb-3">
                <label className="field-label text-sm font-medium text-[var(--cdf-foreground)] mb-2">
                  موقع أو جهة وقوع الواقعة
                  <span className="text-[var(--cdf-error-text)] ml-1">*</span>
                </label>
                <Input
                  name="incidentLocation"
                  placeholder="أين حدثت الواقعة؟ اكتب اسم الإدارة أو القسم مع تحديد الدور والمبنى أو الفرع والمدينة"
                  value={formData.incidentLocation}
                  onChange={handleChange}
                />
              </div>

              {/* Field 11: Accused Details */}
              <div className="field-group mb-3">
                <label className="field-label text-sm font-medium text-[var(--cdf-foreground)] mb-2">
                  تفاصيل الأشخاص المعنيين
                  <span className="text-[var(--cdf-error-text)] ml-1">*</span>
                </label>
                <Input
                  name="accusedDetails"
                  placeholder="من الأشخاص المعنيين بالواقعة؟ اكتب الأسماء الكاملة مع المسميات الوظيفية والإدارات التي يعملون بها"
                  value={formData.accusedDetails}
                  onChange={handleChange}
                />
              </div>

              {/* Field 12: Attachments */}
              <div className="field-group mb-6">
                <label className="field-label text-sm font-medium text-[var(--cdf-foreground)] mb-2">
                  مرفقات (اختياري)
                </label>
                <Input
                  name="attachments"
                  type="file"
                  multiple
                  accept=".pdf,.jpg,.jpeg,.png,.zip"
                  onChange={handleFileChange}
                />
                <p className="field-help text-xs text-[var(--cdf-muted-foreground)] mt-1">
                  PDF, JPG, PNG, ZIP (الحد الأقصى 10 ميجابايت)
                </p>
              </div>

              <div className="flex justify-between">
                <Button 
                  variant="outline"
                  className="bg-[var(--cdf-button-secondary-bg)] text-[var(--cdf-button-secondary-text)] border-[var(--cdf-button-secondary-border)] hover:bg-[var(--cdf-button-secondary-hover-bg)] hover:text-[var(--cdf-button-secondary-hover-text)] transition-colors duration-200 rounded-none"
                  onClick={() => setCurrentStep(1)}
                >
                  رجوع
                </Button>
                <Button 
                  className="bg-[var(--cdf-button-primary-bg)] text-[var(--cdf-button-primary-text)] border-[var(--cdf-button-primary-border)] hover:bg-[var(--cdf-button-primary-hover-bg)] hover:text-[var(--cdf-button-primary-hover-text)] transition-colors duration-200 rounded-none"
                  onClick={() => {
                    if (validateStep2()) {
                      setCurrentStep(3);
                    }
                  }}
                >
                  التالي
                </Button>
              </div>
            </div>
            </>
          )}

          </div>
        </div>

        {/* ---------- Footer Note ---------- */}
        <p className="text-xs text-[var(--cdf-muted-foreground)] leading-[var(--cdf-leading-relaxed)] text-right">
          تخضع هذه الخدمة لأحكام نظام حماية المبلغين والشهود والخبراء والضحايا الصادر بالمرسوم الملكي رقم (م/43) وتاريخ 11/5/1439هـ، ونظام مكافحة الرشوة الصادر بالمرسوم الملكي رقم (م/36) وتاريخ 9/4/1433هـ.
        </p>
        <p className="text-xs text-[var(--cdf-muted-foreground)] leading-[var(--cdf-leading-relaxed)] text-right">
          ويتم التعامل مع جميع البلاغات وفقًا <a href="#" className="text-[var(--cdf-primary)] hover:underline">لسياسة الإبلاغ عن المخالفات المعتمدة لدى صندوق التنمية الثقافي</a>، وبما يتوافق مع الأنظمة واللوائح المعمول بها في المملكة العربية السعودية.
        </p>
      </div>
    </div>
    </>
  );
}
