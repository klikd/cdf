# Whistleblowing Intake Form - Field Specifications

## Form Overview
A comprehensive whistleblowing intake form for reporting violations with three identity disclosure options: anonymous, email-only, and known identity.

## Field Specifications Table

| Field Name | Field Type | Required | Placeholder Text | Help Text | Validation | Notes |
|------------|------------|----------|------------------|-----------|------------|-------|
| **Identity Disclosure** | Radio Group | Yes | - | - | Must select one option | Three options: Anonymous, Email-Only, Known Identity |
| **Relationship to Fund** | Dropdown | Yes | اختر العلاقة | - | Must select from list | Options: عميل, موظف, شريك, أخرى |
| **Full Name** | Text Input | Conditional* | أدخل الاسم الكامل | - | Required if not anonymous | Only shown for known identity |
| **Phone Number** | Text Input | Conditional* | أدخل رقم الهاتف | - | Required if not anonymous | Only shown for known identity |
| **Email Address** | Text Input | Conditional* | أدخل البريد الإلكتروني | - | Required if not anonymous/email-only | Shown for email-only and known identity |
| **Incident Location** | Text Input | Yes | حدد موقع الحدث | - | Minimum 3 characters | Physical or digital location |
| **Concerned Persons** | Text Input | Yes | أدخل أسماء الأشخاص المعنيين | - | Minimum 3 characters | Names of people involved |
| **Violation Type** | Dropdown | Yes | اختر نوع المخالفة | - | Must select from list | Options: Financial, Administrative, Ethical, Other |
| **Incident Description** | Textarea | Yes | صف تفاصيل الحادث والمخالفة | - | Minimum 100 words | Detailed description of the incident |
| **Attachments** | File Upload | No | - | - | Max 5 files, 10MB each | Optional supporting documents |
| **User Agreement** | Checkbox | Yes | - | أقر بصحة ودقة المعلومات | Must be checked | Legal agreement checkbox |

## Identity Disclosure Options

### 1. Anonymous Reporting (إبلاغ مجهول الهوية)
- **Color**: Red (#EF4444)
- **Description**: بدون أي بيانات شخصية مع حماية كاملة للخصوصية وسرية المعلومات
- **Fields Shown**: Relationship to Fund only
- **Contact Fields**: Hidden

### 2. Email-Only Reporting (إبلاغ ببريد إلكتروني فقط)
- **Color**: Orange (#F59E0B)
- **Description**: لإرسال الرقم المرجعي والمتابعة والتواصل الآمن مع حماية كاملة للخصوصية وسرية المعلومات
- **Fields Shown**: Relationship to Fund, Email Address
- **Contact Fields**: Email only

### 3. Known Identity Reporting (إبلاغ معروف الهوية)
- **Color**: Green (#10B981)
- **Description**: بيانات كاملة لتسهيل التواصل والمتابعة والتواصل مع حماية كاملة للخصوصية وسرية المعلومات
- **Fields Shown**: All fields
- **Contact Fields**: All contact fields

## Form Sections

### Section 1: Identity Disclosure
- Radio buttons with colored labels
- Background: #FCFCFC
- Each option has descriptive text

### Section 2: Personal Information
- Conditional fields based on identity choice
- 2x2 grid layout for contact fields
- Professional form styling

### Section 3: Incident Details
- Location and concerned persons
- Violation type dropdown
- Detailed description textarea

### Section 4: Attachments
- Optional file upload
- Multiple file support
- File size and type restrictions

### Section 5: Agreement
- Legal agreement checkbox
- Required for submission

## Design Specifications

### Colors
- **Primary**: #10B981 (Green - Known Identity)
- **Secondary**: #F59E0B (Orange - Email-Only)
- **Danger**: #EF4444 (Red - Anonymous)
- **Background**: #FCFCFC (Radio button labels)
- **Border**: #D1D5DB (Field borders)

### Typography
- **Labels**: 12px, font-weight: 600
- **Placeholders**: 12px, regular weight
- **Help Text**: 10px, muted color
- **Section Titles**: 14px, bold

### Spacing
- **Field Margin**: 16px bottom
- **Section Margin**: 24px bottom
- **Radio Button Padding**: 12px
- **Form Padding**: 24px

### Validation States
- **Error**: Red border and text
- **Success**: Green border
- **Warning**: Orange border

## Responsive Design
- **Mobile**: Single column layout
- **Tablet**: Two-column for contact fields
- **Desktop**: Full layout with optimal spacing

## Accessibility
- **ARIA Labels**: All form elements properly labeled
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: Compatible with screen readers
- **Color Contrast**: WCAG AA compliant

## File Upload Specifications
- **Max Files**: 5
- **Max Size**: 10MB per file
- **Accepted Types**: PDF, DOC, DOCX, JPG, PNG
- **Preview**: Image thumbnails for visual files

## Form Validation Rules
- **Required Fields**: Must be filled
- **Email**: Valid email format
- **Phone**: Valid phone format
- **Description**: Minimum 100 words
- **Files**: Size and type validation

## Submission Flow
1. User fills form fields
2. Validation checks all required fields
3. User agreement must be checked
4. Form submission generates reference number
5. Confirmation page displays submitted information

## Error Handling
- **Field Validation**: Real-time validation feedback
- **Submission Errors**: Clear error messages
- **Network Issues**: Retry mechanism
- **File Upload**: Progress indicators and error states
