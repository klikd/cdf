import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function WhistleblowingPolicy() {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const returnToStep = urlParams.get('returnToStep');
  
  const backLink = returnToStep ? `/?returnToStep=${returnToStep}` : "/";
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-12">
        {/* Back link */}
        <Link
          to={backLink}
          className="inline-flex items-center gap-2 text-[#6B7280] hover:text-[#111827] mb-8 transition-colors"
        >
          <ArrowRight className="w-5 h-5" />
          <span>العودة إلى نموذج الإبلاغ</span>
        </Link>

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-[#111827] mb-8">
          سياسة الإبلاغ عن المخالفات
        </h1>

        {/* Divider */}
        <div className="h-px bg-[#E5E7EB] mb-8"></div>

        {/* Policy Content */}
        <div className="prose prose-slate max-w-none">
          <p className="text-[#111827] leading-[1.8] text-lg mb-6">
            يلتزم صندوق التنمية الثقافي بتطبيق سياسة الإبلاغ عن المخالفات المعتمدة لديه كأحد المرتكزات الأساسية لتعزيز النزاهة والشفافية وترسيخ مبادئ الحوكمة والامتثال المؤسسي. ويتيح الصندوق من خلال هذه السياسة قنوات إبلاغ موثوقة وآمنة تمكّن الموظفين والمستفيدين والعملاء والموردين وأصحاب المصلحة والأطراف الثالثة من الإبلاغ عن أي ممارسات يُشتبه في مخالفتها للأنظمة أو السياسات المعمول بها، وذلك بسرية وأمان وبما يحقق المصلحة العامة. ويؤكد الصندوق التزامه الكامل بحماية المبلّغين الذين يتقدمون ببلاغاتهم بحسن نية من أي إجراء انتقامي أو ضرر مباشر أو غير مباشر، مع الحفاظ التام على سرية هويتهم وبياناتهم وعدم الإفصاح عنها أو استخدامها إلا في الحدود التي يجيزها النظام، وبما يعزز الثقة في منظومة الإبلاغ ويشجع على الاستخدام المسؤول لها. كما يولي الصندوق البلاغات الواردة اهتمامًا جادًا، ويتعامل معها بمهنية وحياد وموضوعية وفق الأنظمة واللوائح السارية وأفضل ممارسات الحوكمة، مع التنبيه إلى أن إساءة استخدام قنوات الإبلاغ أو تقديم بلاغات كيدية أو تضمين معلومات غير صحيحة عمدًا يُعد مخالفة نظامية قد يترتب عليها اتخاذ الإجراءات النظامية اللازمة، بما يضمن نزاهة المنظومة وحماية حقوق جميع الأطراف.
          </p>
        </div>
      </div>
    </div>
  );
}
