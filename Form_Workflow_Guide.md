# CDF Whistleblowing Form - 4-Level Structure & Workflow Guide

## Overview

The CDF Whistleblowing Form implements a sophisticated 4-step progressive disclosure workflow designed to maximize user confidence while minimizing cognitive load. Each step serves a specific purpose in the reporting journey, with clear CTAs and validation rules.

## Form Structure Architecture

### Step Progression Logic

```
Step 1: General Information
    ↓ [Validation Required]
Step 2: Report Details  
    ↓ [Validation Required]
Step 3: Identity & Privacy
    ↓ [Validation Required]
Step 4: Consent & Submission
    ↓ [Final Validation]
Success Confirmation
```

## Detailed Step-by-Step Workflow

### Step 1: General Information (25% Progress)

#### Purpose
- **Goal**: Establish the reporter's relationship and violation context
- **Cognitive Load**: Low - Simple dropdown selections
- **Time Estimate**: 1-2 minutes

#### Form Fields
```
┌─────────────────────────────────────────────────────────────────┐
│                   الخطوة 1: المعلومات العامة              │
│           معلومات أساسية عن العلاقة ونوع الإبلاغ      │
│                                                         │
│  العلاقة بالصندوق: [Required]                          │
│  ┌─────────────────────────────────────────────────┐         │
│  │ موظف حالي                              │         │
│  │ متعاون/مستشار                         │         │
│  │ متعاقب مع جهة خارجية                 │         │
│  │ شريك تجاري                             │         │
│  │ مقدم خدمة                              │         │
│  │ عضو مجلس إدارة                     │         │
│  │ عميل/مورد                             │         │
│  │ جهة حكومية                          │         │
│  │ عام الجمهور                            │         │
│  │ أخرى (يرجى التحديد)                      │         │
│  └─────────────────────────────────────────────────┘         │
│                                                         │
│  نوع المخالفة: [Required]                            │
│  ┌─────────────────────────────────────────────────┐         │
│  │ سوء السلوك المهني                   │         │
│  │ الإهمال أو التقصير                   │         │
│  │ الفساد المالي والإداري                 │ │         │
│  │ انتهاك خصوصيات العمل                  │         │
│  │ الممارسات المالية غير المشروعة          │         │
│  │ مخالفات الأنظمة والتعليمات           │         │
│  │ انتهاك حقوق الملكية الفكرية            │         │
│  │ أخرى (يرجى التحديد)                   │         │
│  └─────────────────────────────────────────────────┘         │
│                                                         │
│                   [السابق]  [التالي]                       │
└─────────────────────────────────────────────────────────────────┘
```

#### Validation Rules
- **Relationship**: Required selection
- **Violation Type**: Required selection
- **Conditional Logic**: If "أخرى" selected, show text field for specification

#### User Interactions & CTAs

**Primary CTA: "التالي" (Next)**
- **State**: Disabled until both required fields are selected
- **Click Action**: Validates Step 1, advances to Step 2
- **Visual Feedback**: Button becomes enabled with CDF green (#0F3A2F)
- **Hover State**: Darker green with subtle transition

**Secondary CTA: "السابق" (Previous)**
- **State**: Disabled (grayed out) - this is the first step
- **Purpose**: Not available in Step 1

**Micro-interactions**
- **Dropdown Focus**: Border color changes to CDF green
- **Selection Confirmation**: Visual checkmark appears next to selected option
- **Error States**: Red border with error message below field

### Step 2: Report Details (50% Progress)

#### Purpose
- **Goal**: Gather specific incident information
- **Cognitive Load**: Medium - requires narrative description
- **Time Estimate**: 3-5 minutes

#### Form Fields
```
┌─────────────────────────────────────────────────────────────────┐
│                  الخطوة 2: تفاصيل البلاغ                │
│                     ماذا حدث ومتى وأين               │
│                                                         │
│  وصف البلاغ: [Required]                                │
│  ┌─────────────────────────────────────────────────────────┐     │
│  │                                         │     │
│  │           (الرجاء تقديم وصف تفصيلي...     │     │
│  │                                         │     │
│  │                                         │     │
│  │                                         │     │
│  └─────────────────────────────────────────────────────────┘     │
│  الحد الأدنى: 50 حرف | الحالي: 0 حرف                   │
│                                                         │
│  تاريخ الواقعة (اختياري):                            │
│  ┌─────────────────────────────────┐                    │
│  │   [يوم/يوم/سنة]        │                    │
│  └─────────────────────────────────┘                    │
│                                                         │
│  الجهة المتعلقة بالبلاغ (اختياري):                    │
│  ┌─────────────────────────────────┐                    │
│  │ [اسم الجهة أو القسم]      │                    │
│  └─────────────────────────────────┘                    │
│                                                         │
│                   [السابق]  [التالي]                       │
└─────────────────────────────────────────────────────────────────┘
```

#### Validation Rules
- **Description**: Required, minimum 50 characters, maximum 2000 characters
- **Date**: Optional, must be valid date format (DD/MM/YYYY)
- **Entity**: Optional, maximum 100 characters

#### User Interactions & CTAs

**Primary CTA: "التالي" (Next)**
- **State**: Disabled until description meets minimum character requirement
- **Click Action**: Validates Step 2, advances to Step 3
- **Real-time Validation**: Character counter updates as user types
- **Visual Feedback**: Progress bar fills to 50%

**Secondary CTA: "السابق" (Previous)**
- **State**: Enabled
- **Click Action**: Returns to Step 1, preserves all entered data
- **Confirmation**: No confirmation needed - smooth transition

**Field-Specific Interactions**
- **Description Textarea**: Auto-expands up to 8 lines, character counter
- **Date Picker**: Calendar popup with Arabic date format
- **Entity Field**: Autocomplete suggestions for known departments

### Step 3: Identity & Privacy (75% Progress)

#### Purpose
- **Goal**: Handle sensitive identity information with privacy controls
- **Cognitive Load**: High - involves privacy decisions
- **Time Estimate**: 2-3 minutes

#### Form Fields & Privacy Logic
```
┌─────────────────────────────────────────────────────────────────┐
│                الخطوة 3: الهوية والخصوصية             │
│           اختيار الإبلanonymous وتقديم المعلومات      │
│                                                         │
│  ☐ أرغب في الإبلاغ بشكل مجهول                   │
│                                                         │
│  عند اختيار الإبلanonymous، لن يتم طلب أي معلومات   │
│  هوية، وسيتم التعامل مع بلاغك بسرية تامة.     │
│                                                         │
│  ┌─────────────────────────────────────────────────────────┐     │
│  │           🔒 وضع الخصوصية: مجهول             │     │
│  │                                                         │     │
│  │  لقد اخترت الإبلanonymous بشكل مجهول. هذا يعني:     │     │
│  │  • لن يتم طلب معلومات هوية منك                 │     │
│  │  • سيتم حماية هويتك بالكامل                   │     │
│  │  • يمكننا التواصل معك فقط إذا قدمت وسيلة        │     │
│  │    للتواصل طوعاً                               │     │
│  │                                                         │     │
│  │  [تغيير الاختيار]                               │     │
│  └─────────────────────────────────────────────────────────┘     │
│                                                         │
│  الاسم الكامل (إذا لم تكن مجهولاً):               │
│  ┌─────────────────────────────────────────────────────────┐     │
│  │ [الاسم الكامل]                        │     │
│  └─────────────────────────────────────────────────────────┘     │
│                                                         │
│  البريد الإلكتروني (إذا لم تكن مجهولاً):           │
│  ┌─────────────────────────────────────────────────────────┐     │
│  │ [البريد الإلكتروني]                 │     │
│  └─────────────────────────────────────────────────────────┘     │
│                                                         │
│                   [السابق]  [التالي]                       │
└─────────────────────────────────────────────────────────────────┘
```

#### Privacy Toggle Logic

**Anonymous Mode (Default)**
- **Checkbox**: Checked by default for user protection
- **Identity Fields**: Hidden and disabled
- **Visual State**: Green privacy card with lock icon
- **Messaging**: Reassuring privacy protection text

**Identified Mode (Optional)**
- **Checkbox**: User can uncheck to reveal identity
- **Identity Fields**: Become required fields
- **Visual State**: Standard form appearance
- **Messaging**: Clear explanation of identification implications

#### Validation Rules

**Anonymous Mode**
- **Name**: Not required (field hidden)
- **Email**: Not required (field hidden)
- **Validation**: Privacy choice is sufficient

**Identified Mode**
- **Name**: Required, minimum 3 characters, maximum 100 characters
- **Email**: Required, valid email format
- **Validation**: Both fields must be valid to proceed

#### User Interactions & CTAs

**Primary CTA: "التالي" (Next)**
- **Anonymous Mode**: Always enabled (no additional validation needed)
- **Identified Mode**: Enabled only when both name and email are valid
- **Click Action**: Validates Step 3, advances to Step 4
- **Visual Feedback**: Progress bar fills to 75%

**Secondary CTA: "السابق" (Previous)**
- **State**: Enabled
- **Click Action**: Returns to Step 2, preserves privacy choice
- **Data Persistence**: All form data maintained

**Privacy Toggle Interactions**
- **Checkbox Click**: Smooth animation between modes
- **Mode Switch**: Fields fade in/out with transition
- **Confirmation**: No confirmation needed - instant feedback
- **Visual Lock**: Lock icon changes state based on mode

### Step 4: Consent & Submission (100% Progress)

#### Purpose
- **Goal**: Final legal consent and file attachment
- **Cognitive Load**: Medium-High - legal review required
- **Time Estimate**: 2-4 minutes

#### Form Fields
```
┌─────────────────────────────────────────────────────────────────┐
│               الخطوة 4: الإقرار والإرسال              │
│          الموافقة النهائية وتقديم البلاغ         │
│                                                         │
│  رفع الملفات (اختياري):                              │
│  ┌─────────────────────────────────────────────────────────┐     │
│  │                                         │     │
│  │        [اختر ملفات أو اسحبها هنا]       │     │
│  │                                         │     │
│  │                                         │     │
│  │                                         │     │
│  │       PDF, DOC, DOCX, JPG, PNG            │     │
│  │           الحد الأقصى: 10 ميجابايت        │     │
│  └─────────────────────────────────────────────────────────┘     │
│                                                         │
│  📎 الملفات المرفقة:                                  │
│     • document.pdf (2.3 MB) [❌]                     │
│     • evidence.jpg (1.1 MB) [❌]                     │
│                                                         │
│  ☐ أوافق على جميع الأحكام والشروط المنصوص عليها   │
│                                                         │
│  بنقري على هذا المربع، تقر بأنك:                   │
│                                                         │
│  • قرأت وفهمت سياسة الإبلاغ عن المخالفات           │
│  • جميع المعلومات المقدمة صحيحة ودقيقة              │
│  • تعلم أن البلاغات الكاذبة قد تعرضك للمساءلة     │
│  • توافق على معالجة بياناتك حسب سياسة الخصوصية     │
│                                                         │
│  [قراءة السياسة الكاملة]                           │
│                                                         │
│                   [السابق]  [إرسال البلاغ]              │
└─────────────────────────────────────────────────────────────────┘
```

#### File Upload Workflow

**Upload States**
1. **Initial State**: Empty dropzone with hover effects
2. **Drag Over**: Border turns green, "اسحب الملفات هنا" text
3. **Uploading**: Progress bar with percentage
4. **Success**: File list with remove options
5. **Error**: Red border with error message

**File Validation**
- **Types**: PDF, DOC, DOCX, JPG, PNG only
- **Size**: Maximum 10MB per file
- **Count**: Maximum 5 files total
- **Security**: Client-side validation + server-side scan

#### Legal Consent Logic

**Consent Checkbox Requirements**
- **Mandatory**: Must be checked to enable submission
- **Legal Language**: Clear, comprehensive terms
- **Policy Link**: Direct link to full policy document
- **Read State**: Visual confirmation when checked

#### Validation Rules
- **Files**: Optional, but must meet type/size requirements if uploaded
- **Consent**: Required checkbox
- **Final Review**: All previous steps validated before submission

#### User Interactions & CTAs

**Primary CTA: "إرسال البلاغ" (Submit Report)**
- **State**: Disabled until consent checkbox is checked
- **Visual State**: CDF green when enabled, gray when disabled
- **Click Action**: Triggers final validation and submission process
- **Loading State**: Shows spinner with "جاري الإرسال..." text

**Secondary CTA: "السابق" (Previous)**
- **State**: Enabled
- **Click Action**: Returns to Step 3, preserves all data
- **Confirmation**: No confirmation needed

**File Upload Interactions**
- **Click Dropzone**: Opens file browser dialog
- **Drag & Drop**: Visual feedback during drag operations
- **File Removal**: X button removes individual files
- **File Preview**: Click filename to preview (if supported)

**Policy Link Interaction**
- **Click Action**: Opens policy in new tab/modal
- **No Data Loss**: Form data preserved when returning

## Submission Workflow

### Pre-Submission Validation
```
1. Validate Step 1: Relationship + Violation Type ✓
2. Validate Step 2: Description (50+ chars) ✓
3. Validate Step 3: Privacy choice + Identity (if required) ✓
4. Validate Step 4: Files (if any) + Consent ✓
5. Generate unique reference number
6. Prepare submission payload
```

### Submission Process
```
┌─────────────────────────────────────────────────────────────────┐
│                                                         │
│                    جاري إرسال البلاغ...                │
│                                                         │
│  ⏳ التحقق من البيانات...                              │
│  ⏳ تشفير المعلومات...                                │
│  ⏳ إرسال إلى الخادم الآمن...                         │
│  ⏳ إنشاء رقم المرجعة...                              │
│                                                         │
│  [رجوع]                                               │
└─────────────────────────────────────────────────────────────────┘
```

### Success Confirmation
```
┌─────────────────────────────────────────────────────────────────┐
│                                                         │
│                    ✅ تم استلام بلاغك                │
│                                                         │
│  شكراً لك على ثقتك بالإبلاغ عن هذه المخالفة.   │
│                                                         │
│  📋 رقم مرجعة البلاغ: WB-2024-XXXXX               │
│                                                         │
│  📧 تم إرسال تأكيد إلى بريدك الإلكتروني             │
│                                                         │
│  الخطوات التالية:                                     │
│                                                         │
│  1. سيتم مراجعة بلاغك من قبل الفريق المختص      │
│  2. قد نتواصل معك للمزيد من المعلومات            │
│  3. ستحصل على تحديثات عبر البريد الإلكتروني      │
│                                                         │
│  🔍 [تتبع البلاغ]  🏠 [العودة للصفحة الرئيسية]     │
│                                                         │
└─────────────────────────────────────────────────────────────────┘
```

## Error Handling & Recovery

### Validation Errors
- **Field-Level**: Red border + error message below field
- **Step-Level**: Summary of all errors at top of step
- **Submission**: General error message with retry option

### Network Errors
- **Timeout**: "انتهت مهلة الاتصال، يرجى المحاولة مرة أخرى"
- **Server Error**: "حدث خطأ في الخادم، يرجى المحاولة لاحقاً"
- **File Upload**: Specific file-related error messages

### Data Persistence
- **Auto-Save**: Form data saved to localStorage every 30 seconds
- **Session Recovery**: Can restore form if browser closes accidentally
- **Step Memory**: Each step's data preserved during navigation

## Accessibility Features

### Keyboard Navigation
- **Tab Order**: Logical progression through form fields
- **Enter Key**: Submits form when on final button
- **Escape Key**: Cancels modal dialogs
- **Arrow Keys**: Navigate dropdown options

### Screen Reader Support
- **ARIA Labels**: Descriptive labels for all interactive elements
- **Live Regions**: Announce validation errors and progress updates
- **Heading Structure**: Proper H1-H6 hierarchy
- **Form Labels**: All inputs have associated labels

### Visual Accessibility
- **Color Contrast**: WCAG AA compliant throughout
- **Focus Indicators**: Clear focus states for all interactive elements
- **Text Scaling**: Supports 200% zoom without breaking layout
- **Motion Preferences**: Respects prefers-reduced-motion setting

## Mobile Optimizations

### Touch Interactions
- **Touch Targets**: Minimum 44px for all interactive elements
- **Swipe Gestures**: Swipe between steps (optional)
- **Touch Keyboard**: Appropriate keyboard types for each input
- **File Upload**: Camera integration for mobile devices

### Layout Adaptations
- **Single Column**: Stacked layout on small screens
- **Sticky Header**: Progress indicator stays visible
- **Bottom CTAs**: Primary actions fixed at bottom on mobile
- **Optimized Spacing**: Increased spacing for touch accuracy

## Performance Considerations

### Loading Optimization
- **Lazy Loading**: Step content loaded as needed
- **Image Optimization**: Compressed icons and illustrations
- **Bundle Splitting**: Separate chunks for different features
- **Service Worker**: Offline capability for form data

### Submission Optimization
- **Compression**: Gzip compression for all requests
- **Chunked Upload**: Large files uploaded in chunks
- **Retry Logic**: Automatic retry for failed uploads
- **Progress Feedback**: Real-time upload progress

## User Experience Enhancements

### Micro-interactions
- **Button States**: Hover, active, and disabled states
- **Field Focus**: Smooth transitions and color changes
- **Progress Animation**: Smooth progress bar updates
- **Success Animations**: Subtle celebration on completion

### Trust Signals
- **Security Badges**: Visual indicators of secure processing
- **Privacy Icons**: Lock symbols for protected information
- **Legal Compliance**: Official CDF branding throughout
- **Professional Design**: Clean, institutional appearance

### Help & Support
- **Tooltips**: Contextual help for complex fields
- **FAQ Links**: Quick access to common questions
- **Contact Options**: Multiple ways to get help
- **Language Support**: Arabic/English language toggle

This comprehensive workflow ensures users can confidently and securely submit whistleblowing reports while maintaining the highest standards of privacy, accessibility, and user experience.
