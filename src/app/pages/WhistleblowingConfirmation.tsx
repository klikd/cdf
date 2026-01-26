import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { CheckCircle2, FileText, Shield, Clock, ArrowRight, Printer } from "lucide-react";

export default function WhistleblowingConfirmation() {
  const referenceNumber = Math.random().toString(36).substr(2, 9).toUpperCase();
  const submissionDate = new Date().toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' });
  const submissionTime = new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });

  // Function to format date/time to Arabic
  const formatDateTimeToArabic = (dateTimeString) => {
    if (!dateTimeString) return dateTimeString;
    try {
      const date = new Date(dateTimeString);
      const arabicDate = date.toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' });
      const arabicTime = date.toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
      return `${arabicDate} ${arabicTime}`;
    } catch (error) {
      return dateTimeString;
    }
  };

  // Get form data from localStorage (stored during submission)
  const getFormData = () => {
    const stored = localStorage.getItem('whistleblowingFormData');
    return stored ? JSON.parse(stored) : {};
  };

  const handlePrintReceipt = () => {
    const formData = getFormData();
    const printWindow = window.open('', '_blank');
    
    const receiptContent = `
      <!DOCTYPE html>
      <html dir="rtl" lang="ar">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>إيصال تقديم البلاغ - ${referenceNumber}</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
          
          @page { 
            size: A4; 
            margin: 5mm; 
          }
          
          * {
            box-sizing: border-box;
          }
          
          body { 
            font-family: 'IBM Plex Sans Arabic', 'Noto Sans Arabic', 'Arial', sans-serif; 
            padding: 0; 
            margin: 0; 
            line-height: 1.3; 
            color: #111827;
            background: white;
            font-size: 12px;
            -webkit-print-color-adjust: exact;
            color-adjust: exact;
            direction: rtl;
            unicode-bidi: embed;
          }
          
          .page {
            max-width: 210mm;
            min-height: 297mm;
            margin: 0 auto;
            padding: 3px;
            box-sizing: border-box;
            background: white;
            position: relative;
            overflow: hidden;
          }
          
          .page::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: #111827;
          }
          
          .header { 
            display: flex;
            flex-direction: column;
            padding: 1px 4px;
            margin-bottom: 4px;
            position: relative;
            background: #161616;
            border-radius: 0px;
            margin: 0 4px 4px 4px;
            border: 2px solid #000000;
            direction: ltr;
          }
          
          .header-top {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin-bottom: 4px;
          }
          
          .header-main {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 24px;
          }
          
          .logo-top {
            width: 160px;
            height: 80px;
            object-fit: contain;
            background: transparent;
            padding: 8px;
            border-radius: 4px;
          }
          
          .qr-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
          }
          
          .qr-code {
            width: 120px;
            height: 120px;
            background: white;
            border: 3px solid #F3F4F6;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 10px;
            font-weight: 700;
            color: #111827;
            text-align: center;
            padding: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            position: relative;
            overflow: hidden;
          }
          
          .qr-code img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          
          .qr-code::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: repeating-linear-gradient(
              0deg,
              #000 0px,
              #000 2px,
              transparent 2px,
              transparent 4px
            );
            opacity: 0.1;
            pointer-events: none;
          }
          
          .qr-label {
            font-size: 10px;
            color: #D1D5DB;
            font-weight: 500;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          
          .center-section {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            text-align: right;
            flex: 1;
            justify-content: flex-end;
          }
          
          .organization-info {
            direction: rtl;
            text-align: right;
          }
          
          .title { 
            font-size: 20px; 
            font-weight: 800; 
            color: #FFFFFF; 
            margin: 0 0 4px 0;
            letter-spacing: 0.5px;
            line-height: 1.2;
          }
          
          .subtitle {
            font-size: 12px;
            color: #9CA3AF;
            margin: 2px 0;
            font-weight: 500;
            line-height: 1.3;
          }
          
          .reference-number { 
            font-size: 16px; 
            font-weight: 700; 
            color: #FFFFFF; 
            background: rgba(255, 255, 255, 0.1);
            padding: 8px 16px; 
            border: 2px solid #FFFFFF; 
            border-radius: 0px;
            display: inline-block; 
            margin-top: 12px;
            letter-spacing: 1px;
            backdrop-filter: blur(10px);
          }
          
          .official-elements {
            position: absolute;
            top: 16px;
            right: 16px;
            display: none;
          }
          
          .watermark {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(-45deg);
            font-size: 48px;
            color: rgba(255, 255, 255, 0.05);
            font-weight: 900;
            z-index: 0;
            pointer-events: none;
            letter-spacing: 2px;
          }
          
          .official-stamp {
            border: 2px solid #EF4444;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            font-size: 10px;
            font-weight: 700;
            text-align: center;
            background: rgba(239, 68, 68, 0.1);
            color: #EF4444;
            z-index: 10;
            backdrop-filter: blur(5px);
          }
          
          .stamp-text {
            font-size: 8px;
            margin-top: 2px;
            line-height: 1;
          }
          
          .field-row-full-width {
            display: block;
            margin-bottom: 6px;
            padding: 6px;
            border-radius: 0px;
            background: #F9FAFB;
            border-left: 3px solid #D1D5DB;
          }
          
          .field-row-full-width .field-label {
            font-weight: 700 !important;
            color: #374151;
            font-size: 12px;
          }
          
          .section { 
            margin: 0 8px 4px 8px; 
            padding: 4px; 
            border: 1px solid #E5E7EB; 
            border-radius: 0px;
            background: #FFFFFF;
            position: relative;
            overflow: hidden;
          }
          
          .section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: #111827;
          }
          
          .section-title { 
            font-size: 12px; 
            font-weight: 700; 
            margin-bottom: 6px; 
            color: #111827; 
            display: flex;
            align-items: center;
            gap: 6px;
          }
          
          .section-number {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 18px;
            height: 18px;
            background: #111827;
            color: white;
            border-radius: 50%;
            font-size: 12px;
            font-weight: 700;
          }
          
          .field-row { 
            display: flex; 
            justify-content: space-between; 
            margin-bottom: 1px; 
            padding: 4px 3px; 
            border-radius: 0px;
            background: #F9FAFB !important; 
            border-left: 3px solid #D1D5DB !important;
            border-top: 1px solid #D1D5DB !important;
            border-right: 1px solid #D1D5DB !important;
            border-bottom: 1px solid #D1D5DB !important;
            font-size: 12px;
          }
          
          .field-row:hover {
            background: #F3F4F6;
            border-left-color: #9CA3AF;
            border-top-color: #9CA3AF;
            border-right-color: #9CA3AF;
            border-bottom-color: #9CA3AF;
          }
          
          .field-row:last-child {
            margin-bottom: 0;
          }
          
            border-left: 1px solid #111827;
          }
          
          .field-label { 
            font-weight: 700 !important; 
            color: #374151 !important; 
            min-width: 120px; 
            flex-shrink: 0;
            font-size: 12px !important;
            display: flex;
            align-items: center;
            gap: 3px;
          }
          
          .field-row .field-label,
          .field-row-full-width .field-label {
            font-weight: 700 !important;
            color: #374151 !important;
          }
          
          span.field-label {
            font-weight: 700 !important;
            color: #374151 !important;
          }
          
          .field-label::before {
            content: '';
            width: 2px;
            height: 2px;
            background: #9CA3AF;
            border-radius: 50%;
          }
          
          .field-value { 
            color: #111827; 
            flex: 1; 
            text-align: left; 
            font-size: 12px;
            font-weight: 400;
            line-height: 1.2;
          }
          
          .field-value-full-width {
            display: block;
            width: 100%;
            text-align: right;
            margin-top: 3px;
            font-weight: 500;
            font-size: 12px;
          }
          
          .footer { 
            margin-top: 6px; 
            padding: 6px; 
            background: #161616;
            border-radius: 0px;
            text-align: center; 
            font-size: 12px; 
            color: #FFFFFF;
            border: 1px solid #000000;
            margin: 0 8px;
          }
          
          .footer p {
            margin: 1px 0;
            line-height: 1.2;
          }
          
          .footer strong {
            color: #FFFFFF;
            font-weight: 600;
          }
          
          .empty-field { 
            color: #9CA3AF; 
            font-style: italic;
          }
          
          .watermark {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(-45deg);
            font-size: 30px;
            color: #F5F5F5;
            font-weight: 700;
            opacity: 0.2;
            z-index: 0;
            pointer-events: none;
            letter-spacing: 1px;
          }
          
          .official-stamp {
            border: 2px solid #111827;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            position: absolute;
            top: 12px;
            left: 12px;
            font-size: 7px;
            font-weight: 700;
            text-align: center;
            background: rgba(255, 255, 255, 0.9);
            z-index: 10;
          }
          
          .stamp-text {
            font-size: 5px;
            margin-top: 1px;
            color: #111827;
          }
          
          .two-column {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 6px;
          }
          
          .status-badge {
            padding: 2px 6px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 600;
            color: white;
            background: #10B981;
            display: inline-block;
          }
          
          .status-badge::before {
            content: '';
            width: 2px;
            height: 2px;
            background: white;
            border-radius: 50%;
          }
          
          .priority-high {
            background: #EF4444;
          }
          
          .priority-medium {
            background: #F59E0B;
          }
          
          .priority-low {
            background: #10B981;
          }
          
          .confirmation-text {
            font-size: 12px;
            line-height: 1.4;
            color: #374151;
            margin-top: 8px;
            padding: 8px;
            background: #F9FAFB;
            border-radius: 0px;
            border-left: 3px solid #D1D5DB;
            text-align: right;
          }
          
          @media print {
            body { 
              background: white;
            }
            .page {
              box-shadow: none;
              margin: 0;
              padding: 15px;
            }
            .section:hover {
              transform: none;
              box-shadow: none;
            }
            .field-row:hover {
              background: transparent;
            }
            .watermark {
              opacity: 0.1;
            }
          }
        </style>
      </head>
      <body>
          <div class="header">
            <div class="official-elements">
              <div class="official-stamp">
                رسمي
                <div class="stamp-text">الصندوق الثقافي</div>
              </div>
            </div>
            
            <div class="header-top">
              <img src="/Screenshot 2026-01-23 at 2.05.01 PM.png" alt="CDF Logo" class="logo-top" />
            </div>
            
            <div class="header-main">
              <div class="qr-section">
                <div class="qr-code">
                  <img src="/Screenshot 2026-01-23 at 2.09.48 PM.png" alt="QR Code" />
                </div>
              </div>
              
              <div class="center-section">
                <div class="organization-info">
                  <div class="title">تقرير بلاغ عن المخالفات</div>
                  <div class="subtitle">قناة الإبلاغ الآمنة</div>
                  <div class="reference-number">الرقم المرجعي: ${referenceNumber}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">
              <div class="section-number">1</div>
              معلومات التقديم
            </div>
            <div class="two-column">
              <div>
                <div class="field-row">
                  <span class="field-label">الرقم المرجعي:</span>
                  <span class="field-value">${referenceNumber}</span>
                </div>
                <div class="field-row">
                  <span class="field-label">تاريخ الاستلام:</span>
                  <span class="field-value">${submissionDate}</span>
                </div>
                <div class="field-row">
                  <span class="field-label">وقت الاستلام:</span>
                  <span class="field-value">${submissionTime}</span>
                </div>
              </div>
              <div>
                <div class="field-row">
                  <span class="field-label">حالة البلاغ:</span>
                  <span class="field-value">
                    <span class="status-badge">تم الاستلام</span>
                  </span>
                </div>
                <div class="field-row">
                  <span class="field-label">نوع الإبلاغ:</span>
                  <span class="field-value">إبلاغ عن مخالفة</span>
                </div>
                <div class="field-row">
                  <span class="field-label">القناة:</span>
                  <span class="field-value">الموقع الالكتروني</span>
                </div>
              </div>
            </div>
          </div>

          ${!formData.anonymous && formData.reportingType !== 'email-only' ? `
          <!-- KNOWN IDENTITY REPORT -->
          <div class="section">
            <div class="section-title">
              <div class="section-number">2</div>
              معلومات الهوية والتواصل
            </div>
            
            <!-- Reporting Type as Confirmation Box -->
            <div class="confirmation-text">
              <strong>طريقة الإبلاغ:</strong> <span style="color: #10B981; font-weight: 600;">إبلاغ معروف الهوية</span>
            </div>
            
            <!-- Contact Information Fields -->
            <div class="two-column">
              <div>
                <div class="field-row">
                  <span class="field-label">رقم الهاتف:</span>
                  <span class="field-value">لم يتم الإدخال</span>
                </div>
              </div>
              <div>
                <div class="field-row">
                  <span class="field-label">البريد الإلكتروني:</span>
                  <span class="field-value">لم يتم الإدخال</span>
                </div>
              </div>
            </div>
            <div class="two-column">
              <div>
                <div class="field-row">
                  <span class="field-label">العلاقة بالصندوق:</span>
                  <span class="field-value">${formData.relationship === 'client' ? 'عميل' : formData.relationship === 'employee' ? 'موظف' : formData.relationship === 'partner' ? 'شريك' : formData.relationship === 'other' ? 'أخرى' : '<span class="empty-field">غير محدد</span>'}</span>
                </div>
              </div>
              <div>
                <div class="field-row">
                  <span class="field-label">الاسم الكامل:</span>
                  <span class="field-value">${formData.fullName || '<span class="empty-field">لم يتم الإدخال</span>'}</span>
                </div>
              </div>
            </div>
          </div>
        ` : formData.reportingType === 'email-only' ? `
          <!-- EMAIL-ONLY REPORT -->
          <div class="section">
            <div class="section-title">
              <div class="section-number">2</div>
              معلومات الهوية والتواصل
            </div>
            
            <!-- Reporting Type as Confirmation Box -->
            <div class="confirmation-text">
              <strong>طريقة الإبلاغ:</strong> <span style="color: #F59E0B; font-weight: 600;">إبلاغ ببريد إلكتروني فقط</span>
            </div>
            
            <div class="two-column">
              <div>
                <div class="field-row">
                  <span class="field-label">العلاقة بالصندوق:</span>
                  <span class="field-value">${formData.relationship === 'client' ? 'عميل' : formData.relationship === 'employee' ? 'موظف' : formData.relationship === 'partner' ? 'شريك' : formData.relationship === 'other' ? 'أخرى' : '<span class="empty-field">غير محدد</span>'}</span>
                </div>
              </div>
              <div>
                <div class="field-row">
                  <span class="field-label">البريد الإلكتروني:</span>
                  <span class="field-value">${formData.email || '<span class="empty-field">لم يتم الإدخال</span>'}</span>
                </div>
                <div class="field-row">
                  <span class="field-label">ملاحظة:</span>
                  <span class="field-value">تم حماية الهوية الشخصية (الاسم والهاتف)</span>
                </div>
              </div>
            </div>
          </div>
        ` : `
          <!-- ANONYMOUS REPORT -->
          <div class="section">
            <div class="section-title">
              <div class="section-number">2</div>
              معلومات الهوية والتواصل
            </div>
            
            <!-- Reporting Type as Confirmation Box -->
            <div class="confirmation-text">
              <strong>طريقة الإبلاغ:</strong> <span style="color: #EF4444; font-weight: 600;">إبلاغ مجهول الهوية</span>
            </div>
            
            <div class="two-column">
              <div>
                <div class="field-row">
                  <span class="field-label">العلاقة بالصندوق:</span>
                  <span class="field-value">${formData.relationship === 'client' ? 'عميل' : formData.relationship === 'employee' ? 'موظف' : formData.relationship === 'partner' ? 'شريك' : formData.relationship === 'other' ? 'أخرى' : '<span class="empty-field">غير محدد</span>'}</span>
                </div>
              </div>
              <div>
                <div class="field-row">
                  <span class="field-label">ملاحظة:</span>
                  <span class="field-value">لم يتم الكشف عن أي بيانات شخصية</span>
                </div>
                <div class="field-row">
                  <span class="field-label">حماية الخصوصية:</span>
                  <span class="field-value">مؤكدة بالأنظمة السعودية</span>
                </div>
              </div>
            </div>
          </div>
        `}

          <div class="section">
            <div class="section-title">
              <div class="section-number">3</div>
              تفاصيل البلاغ
            </div>
            
            <div class="field-row-full-width">
              <span class="field-label">نوع المخالفة:</span>
              <div class="field-value-full-width">${formData.violationType === 'financial' ? 'فساد مالي' : formData.violationType === 'administrative' ? 'فساد إداري' : formData.violationType === 'policy' ? 'مخالفة سياسات وإجراءات الصندوق' : formData.violationType === 'health_safety' ? 'مخالفة البيئة والصحة والسلامة' : formData.violationType === 'abuse_power' ? 'استغلال السلطة الوظيفية' : formData.violationType === 'irregular_operations' ? 'تمرير عمليات غير نظامية' : formData.violationType === 'public_order' ? 'التصرفات المخالفة للنظام العام' : formData.violationType === 'concealment' ? 'التستر على المخالفات' : formData.violationType === 'other' ? 'أخرى' : '<span class="empty-field">لم يتم التحديد</span>'}</div>
            </div>
            
            ${formData.violationType === 'other' ? `
            <div class="field-row-full-width">
              <span class="field-label">توضيح المخالفة:</span>
              <div class="field-value-full-width">${formData.violationOtherText || '<span class="empty-field">لم يتم الإدخال</span>'}</div>
            </div>
            ` : ''}
            
            <div class="field-row-full-width">
              <span class="field-label">وصف الواقعة:</span>
              <div class="field-value-full-width">${formData.description || '<span class="empty-field">لم يتم الإدخال</span>'}</div>
            </div>
            
            <div class="field-row-full-width">
              <span class="field-label">تاريخ ووقت الواقعة:</span>
              <div class="field-value-full-width">${formatDateTimeToArabic(formData.incidentDateTime) || '<span class="empty-field">لم يتم الإدخال</span>'}</div>
            </div>
            
            <div class="field-row-full-width">
              <span class="field-label">موقع أو جهة وقوع المخالفة:</span>
              <div class="field-value-full-width">${formData.incidentLocation || '<span class="empty-field">لم يتم الإدخال</span>'}</div>
            </div>
            
            <div class="field-row-full-width">
              <span class="field-label">تفاصيل المبلغ ضده:</span>
              <div class="field-value-full-width">${formData.accusedDetails || '<span class="empty-field">لم يتم الإدخال</span>'}</div>
            </div>
            
            <div class="field-row-full-width">
              <span class="field-label">المرفقات:</span>
              <div class="field-value-full-width">
                ${formData.attachments && formData.attachments.length > 0 ? `<span class="status-badge priority-medium">${formData.attachments.length} ملف(ات)</span>` : '<span class="empty-field">لا توجد مرفقات</span>'}
              </div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">
              <div class="section-number">4</div>
              الإقرار والقبول
            </div>
            
            <div class="field-row">
              <span class="field-label">تم الاقرار</span>
              <span class="field-value">
                <span class="status-badge priority-low">موافق</span>
              </span>
            </div>
            
            <div class="confirmation-text">
              <strong>تأكيد المستخدم:</strong> تم تأكيد البلاغ من قبل المستخدم في ${submissionDate} ${submissionTime}<br><br>
              أُقِرّ بصحة ودقة المعلومات الواردة في هذا البلاغ حسب علمي، وأقدّمه بحسن نية ودون قصد الإساءة، وأوافق على معالجة البلاغ وبياناته وفق الأنظمة واللوائح المعمول بها في المملكة العربية السعودية، بما في ذلك سياسة الإبلاغ عن المخالفات وسياسة الخصوصية المعتمدة لدى صندوق التنمية الثقافي، وللأغراض النظامية فقط.
            </div>
          </div>

          <div class="footer">
            <p>نرحّب ببلاغك ونعالج جميع البلاغات بسرية تامة ووفق الأنظمة المعمول بها في المملكة العربية السعودية.</p>
            <p>يمكنك التواصل معنا بثقة، حيث نلتزم بحماية المبلّغ حسن النية وتوفير قناة آمنة تعزز النزاهة والشفافية.</p>
            <p><strong>whistleblowing@cdf.gov.sa</strong></p>
          </div>
        </div>
      </body>
      </html>
    `;
    
    if (printWindow) {
      printWindow.document.write(receiptContent);
      printWindow.document.close();
      printWindow.focus();
      
      // Wait for content to load before printing
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--cdf-background)]" dir="rtl">
      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          
          {/* Back Link - Similar to Policy Page */}
          <div className="mb-6">
            <Link to="/" className="text-[var(--cdf-muted-foreground)] hover:text-[var(--cdf-foreground)] text-sm font-medium transition-colors inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="ml-2">
                <path d="m15 18-6-6 6-6"/>
              </svg>
              العودة إلى نموذج الإبلاغ
            </Link>
          </div>
          
          {/* Reference Number - Prominent Top Section */}
          <div className="bg-gradient-to-r from-[var(--cdf-success-bg)] to-green-50 border-2 border-gray-400 p-8 mb-8 text-center shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <CheckCircle2 className="h-12 w-12 text-[var(--cdf-success-text)] ml-3" />
              <h1 className="text-3xl font-bold text-[var(--cdf-success-text)]">
                تم استلام بلاغك بنجاح
              </h1>
            </div>
            
            <div className="bg-white p-6 border-2 border-black inline-block">
              <p className="text-sm text-[var(--cdf-muted-foreground)] mb-2">الرقم المرجعي للبلاغ</p>
              <p className="text-2xl font-bold text-[var(--cdf-success-text)] tracking-wider mb-4">
                {referenceNumber}
              </p>
              
              {/* Print Button - Inside the reference number box */}
              <Button 
                onClick={handlePrintReceipt}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-9 px-4 py-2 has-[>_svg]:px-3 w-full border-gray-400 text-gray-600 bg-gray-100 hover:bg-black hover:text-white hover:border-black transition-colors duration-200"
              >
                <Printer className="h-4 w-4 ml-2" />
                طباعة الإيصال
              </Button>
            </div>
            
            <p className="text-lg text-[var(--cdf-success-text)] mt-6 max-w-2xl mx-auto">
              شكراً لك على ثقتك في نظام الإبلاغ عن المخالفات. تم استلام بلاغك وسيتم معالجته بسرية تامة.
            </p>
          </div>

          {/* Information Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            
            {/* Next Steps Card */}
            <div className="bg-white border border-[var(--cdf-border)] p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 text-[var(--cdf-primary)] ml-3" />
                <h2 className="text-lg font-semibold text-[var(--cdf-foreground)]">ما الخطوة التالية؟</h2>
              </div>
              <ul className="text-right text-[var(--cdf-muted-foreground)] space-y-3">
                <li className="flex items-start">
                  <span className="text-[var(--cdf-success-text)] ml-2">•</span>
                  <span>سيتم مراجعة بلاغك من قبل الفريق المختص</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--cdf-success-text)] ml-2">•</span>
                  <span>قد يتم التواصل معك لمزيد من المعلومات إذا لزم الأمر</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--cdf-success-text)] ml-2">•</span>
                  <span>يتم التعامل مع جميع البلاغات بسرية تامة</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--cdf-success-text)] ml-2">•</span>
                  <span>سيتم اتخاذ الإجراءات المناسبة بناءً على نتائج المراجعة</span>
                </li>
              </ul>
            </div>

            {/* Submission Details Card */}
            <div className="bg-white border border-[var(--cdf-border)] p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-[var(--cdf-primary)] ml-3" />
                <h2 className="text-lg font-semibold text-[var(--cdf-foreground)]">تفاصيل التقديم</h2>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-[var(--cdf-border)]">
                  <span className="text-[var(--cdf-muted-foreground)]">رقم المرجع</span>
                  <span className="font-mono font-bold text-[var(--cdf-success-text)]">{referenceNumber}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[var(--cdf-border)]">
                  <span className="text-[var(--cdf-muted-foreground)]">تاريخ الاستلام</span>
                  <span className="font-medium text-[var(--cdf-foreground)]">{submissionDate}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-[var(--cdf-muted-foreground)]">وقت الاستلام</span>
                  <span className="font-medium text-[var(--cdf-foreground)]">{submissionTime}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Protection Notice */}
          <div className="bg-[var(--cdf-info-bg)] border border-[var(--cdf-info-border)] p-6 mb-8">
            <div className="flex items-start">
              <Shield className="h-6 w-6 text-[var(--cdf-info-text)] ml-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-[var(--cdf-info-text)] mb-2">حماية خصوصيتك</h3>
                <p className="text-[var(--cdf-info-text)] leading-relaxed">
                  نؤكد التزامنا الكامل بحماية هويتك وبياناتك الشخصية. جميع البلاغات تتم معالجتها بسرية تامة وفق الأنظمة والسياسات المعتمدة، ولن يتم الإفصاح عن معلوماتك إلا في الحدود التي يسمح بها النظام.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="w-full sm:w-auto bg-[var(--cdf-button-primary-bg)] text-[var(--cdf-button-primary-text)] border-[var(--cdf-button-primary-border)] hover:bg-[var(--cdf-button-primary-hover-bg)] hover:text-[var(--cdf-button-primary-hover-text)] transition-colors duration-200 rounded-none">
                العودة للرئيسية
              </Button>
            </Link>
            <Link to="/policy">
              <Button variant="outline" className="w-full sm:w-auto border-[var(--cdf-button-secondary-border)] text-[var(--cdf-button-secondary-text)] bg-[var(--cdf-button-secondary-bg)] hover:bg-[var(--cdf-button-secondary-hover-bg)] hover:text-[var(--cdf-button-secondary-hover-text)] transition-colors duration-200 rounded-none">
                عرض سياسة الإبلاغ
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[var(--cdf-secondary)] border-t border-[var(--cdf-border)]">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="text-center text-[var(--cdf-muted-foreground)] text-sm">
            <p>© 2024 الصندوق الثقافي للتنمية الثقافية. جميع الحقوق محفوظة.</p>
            <p className="mt-2">هذا النظام مصمم لضمان سرية وسلامة البلاغات</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
