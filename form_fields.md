# Whistleblowing Form Field Requirements

## Step 1: معلومات التواصل (Contact Information)

### Required Fields:
1. **relationship** - العلاقة بالصندوق (Relationship with Fund)
   - Type: Select dropdown
   - Required: Yes
   - Options: employee, supplier, beneficiary, third-party
   - Help Text: "اختر علاقتك بالصندوق لتسهيل معالجة البلاغ بشكل فعال ودقيق"

2. **email** - البريد الإلكتروني (Email)
   - Type: Email input
   - Required: Yes
   - Validation: Email format
   - Help Text: "سيتم استخدام البريد الإلكتروني للتواصل معك حول البلاغ"

---

## Step 2: تفاصيل البلاغ (Report Details)

### Required Fields:
3. **violationType** - نوع المخالفة (Violation Type)
   - Type: Select dropdown
   - Required: Yes
   - Options: financial, administrative, conflict, other
   - Help Text: "حدد نوع المخالفة التي ترغب في الإبلاغ عنها"

4. **description** - وصف الواقعة (Incident Description)
   - Type: Textarea
   - Required: Yes
   - Max Length: 500 characters
   - Help Text: "يرجى وصف الواقعة بالتفصيل مع ذكر التواريخ والمكان والأشخاص المعنيين"

5. **date** - تاريخ الواقعة (Incident Date)
   - Type: Date input
   - Required: No
   - Help Text: "حدد تاريخ وقوع الواقعة قدر الإمكان"

6. **location** - موقع أو جهة وقوع المخالفة (Location)
   - Type: Text input
   - Required: No
   - Help Text: "حدد الموقع الجغرافي أو اسم الجهة المعنية بالبلاغ"

---

## Step 3: الهوية والخصوصية (Identity and Anonymity)

### Required Fields:
7. **anonymous** - الإبلاغ دون الإفصاح عن الهوية (Anonymous Reporting)
   - Type: Checkbox
   - Required: No (default: false)
   - Help Text: "لن يتم جمع أي بيانات تعريفية"

8. **fullName** - الاسم الكامل (Full Name)
   - Type: Text input
   - Required: No (only when not anonymous)
   - Conditional: Only shown when anonymous = false
   - Help Text: "الاسم الكامل (اختياري)"

---

## Step 4: الإقرار (Acknowledgment)

### Required Fields:
9. **consentChecked** - الموافقة على الشروط (Consent to Terms)
   - Type: Checkbox
   - Required: Yes
   - Help Text: "أقر بصحة المعلومات وأوافق على الشروط والأحكام"

---

## Field Reordering Reference

### Current Field Order by Step:
- **Step 1**: [1, 2]
- **Step 2**: [3, 4, 5, 6]
- **Step 3**: [7, 8]
- **Step 4**: [9]

### Field Properties Summary:
| Field ID | Field Name | Type | Required | Step | Conditional |
|----------|-------------|-------|----------|-------|-------------|
| 1 | relationship | Select | Yes | 1 | No |
| 2 | email | Email | Yes | 1 | No |
| 3 | violationType | Select | Yes | 2 | No |
| 4 | description | Textarea | Yes | 2 | No |
| 5 | date | Date | No | 2 | No |
| 6 | location | Text | No | 2 | No |
| 7 | anonymous | Checkbox | No | 3 | No |
| 8 | fullName | Text | No | 3 | Yes (when !anonymous) |
| 9 | consentChecked | Checkbox | Yes | 4 | No |

### Validation Rules:
- **Email**: Always required, format validation
- **Name**: Only required when not anonymous
- **Description**: Required, max 500 characters
- **Relationship**: Required, must select option
- **Violation Type**: Required, must select option
- **Consent**: Required, must be checked

### State Management:
```typescript
interface FormData {
  relationship: string;      // Field 1
  email: string;           // Field 2
  violationType: string;    // Field 3
  description: string;       // Field 4
  date?: string;            // Field 5
  location?: string;         // Field 6
  anonymous: boolean;        // Field 7
  fullName?: string;         // Field 8 (conditional)
  consentChecked: boolean;   // Field 9
}
```

---

*Last Updated: January 22, 2026*
*File Purpose: Field reference for reordering and validation logic*
