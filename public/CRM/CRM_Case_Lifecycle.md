# CRM Case Lifecycle Model
# نموذج دورة حياة القضية في نظام إدارة علاقات العملاء

## 1. Scope Definition | تعريف النطاق

### 1.1 System Scope | نطاق النظام

هذا النموذج يغطي جميع بلاغات الإبلاغ عن المخالفات (Whistleblowing) بما في ذلك:

| النوع (AR) | Type (EN) | Description |
|------------|-----------|-------------|
| الفساد | Corruption | جميع أشكال الفساد المالي والإداري |
| تضارب المصالح | Conflict of Interest | حالات تضارب المصالح المحتملة أو الفعلية |
| إساءة استخدام السلطة | Abuse of Power | استغلال المنصب أو الصلاحيات |
| المخالفات السلوكية | Behavioral Violations | مخالفات أخلاقيات العمل والسلوك المهني |

### 1.2 User Scope | نطاق المستخدمين

| الجهة (AR) | Entity (EN) | Role Description |
|------------|-------------|------------------|
| المبلّغون المجهولون | Anonymous Reporters | تقديم البلاغات دون الكشف عن الهوية |
| المبلّغون المعرّفون | Identified Reporters | تقديم البلاغات مع الإفصاح عن الهوية |
| إدارة الحوكمة والامتثال المؤسسي | GRC Department | استلام ومعالجة وتقييم البلاغات |
| لجان التحقيق | Investigation Committees | إجراء التحقيقات الموسّعة |
| لجان التظلّم والاستئناف | Appeal Committees | النظر في التظلّمات والطعون |
| الإدارة القانونية | Legal Department | تقديم الآراء القانونية والمشورة |
| الإدارات المعنية | Relevant Departments | تنفيذ الإجراءات التصحيحية والقرارات |

### 1.3 Integrated Systems | الأنظمة المتكاملة

| النظام (AR) | System (EN) | Purpose |
|-------------|-------------|---------|
| نظام إدارة علاقات العملاء | CRM | إدارة البلاغات والحالات وتتبع الحالات |
| نظام إدارة الوثائق | DMS (Document Management System) | حفظ وأرشفة المستندات والأدلة |
| محرك سير العمل | Workflow Engine | أتمتة انتقالات الحالات والموافقات |
| سجل التدقيق | Audit Log/SIEM | تسجيل جميع الأنشطة والتغييرات |

---

## 2. Key Definitions | التعريفات الأساسية

| # | المصطلح (AR) | Term (EN) | التعريف (AR) | Definition (EN) |
|---|--------------|-----------|--------------|-----------------|
| 1 | القضية | Case | كيان نظامي يمثل بلاغًا أو مجموعة بلاغات مرتبطة تخضع للمعالجة وفق إجراءات محددة | A formal entity representing a report or set of related reports subject to defined processing procedures |
| 2 | حالة CRM | CRM Status | الوضع الراهن للقضية ضمن دورة الحياة، يحدد الإجراءات المسموحة والمحظورة | Current state of the case within the lifecycle, defining allowed and prohibited actions |
| 3 | الانتقال | Transition | التحول من حالة إلى أخرى وفق قواعد وشروط محددة | Movement from one status to another according to defined rules and conditions |
| 4 | المحفّز | Trigger | الحدث أو الشرط الذي يبدأ انتقال الحالة | Event or condition that initiates a status transition |
| 5 | النموذج | Form | مستند رسمي مطلوب لتوثيق إجراء أو قرار | Formal document required to record an action or decision |
| 6 | اتفاقية مستوى الخدمة | SLA | الإطار الزمني المحدد لإنجاز مرحلة أو إجراء | Defined timeframe for completing a stage or action |
| 7 | التراجع | Rollback | إمكانية العودة لحالة سابقة وفق ضوابط محددة | Ability to revert to a previous status under specific controls |
| 8 | قيد الاستقلالية | Independence Constraint | متطلب فصل المهام ومنع تضارب المصالح في معالجة القضية | Requirement for separation of duties and conflict of interest prevention in case processing |

---

## 3. Governing Principles | المبادئ الحاكمة

| # | المبدأ (AR) | Principle (EN) | الوصف (AR) | Description (EN) |
|---|-------------|----------------|------------|------------------|
| 1 | السرية بالتصميم | Confidentiality by Design | حماية هوية المبلّغ وسرية البلاغات في جميع المراحل | Protecting reporter identity and report confidentiality at all stages |
| 2 | الاستقلالية وفصل المهام | Independence & SoD | ضمان استقلالية المحققين وفصل الصلاحيات بين المراحل | Ensuring investigator independence and separation of powers between stages |
| 3 | عدم الانتقام | Non-Retaliation | حماية المبلّغين من أي إجراء انتقامي مباشر أو غير مباشر | Protecting reporters from any direct or indirect retaliatory action |
| 4 | قابلية التدقيق | Auditability | تسجيل كامل لجميع الإجراءات والقرارات والانتقالات | Complete logging of all actions, decisions, and transitions |
| 5 | الحد الأدنى من الصلاحيات | Least Privilege | منح المستخدمين الصلاحيات اللازمة فقط لأداء مهامهم | Granting users only the permissions necessary for their tasks |
| 6 | التتبع الشامل | End-to-End Traceability | إمكانية تتبع القضية من الاستلام حتى الإغلاق والأرشفة | Ability to trace cases from receipt to closure and archival |

---

## 4. Case Lifecycle Model | نموذج دورة حياة القضية

### 4.1 Eight-Lane Processing Model | نموذج المعالجة ذو الثمانية مسارات

| # | رقم المسار | اسم المسار (AR) | Lane Name (EN) | الوصف (AR) | Description (EN) | الحالات الرئيسية | Key Statuses | المسؤول الرئيسي | Primary Owner |
|---|------------|-----------------|----------------|------------|------------------|------------------|--------------|-----------------|---------------|
| 1 | L01 | مسار الاستقبال والتسجيل | Reception & Registration Lane | استلام البلاغات عبر القنوات المعتمدة وتسجيلها رسميًا في النظام | Receiving reports through approved channels and formally registering them | S001-S003 | System/GRC |
| 2 | L02 | مسار التقييم المبدئي | Preliminary Assessment Lane | فرز البلاغات وتقييم جديتها وتحديد الاختصاص والمسار المناسب | Screening reports, assessing seriousness, and determining jurisdiction and appropriate path | S004-S005, S040-S044, S050-S051 | GRC Department |
| 3 | L03 | مسار التحقيق الأولي | Initial Investigation Lane | إجراء تحقيق محدود النطاق لتحديد الحاجة للتصعيد | Conducting limited-scope investigation to determine need for escalation | S006, S010, S054, S082-S083 | Investigator |
| 4 | L04 | مسار التصعيد ولجنة التحقيق | Escalation & Investigation Committee Lane | تصعيد القضايا الجسيمة وإجراء تحقيقات موسّعة بواسطة لجان متخصصة | Escalating serious cases and conducting expanded investigations by specialized committees | S016-S035, S073-S080, S088-S093, S109-S120 | Investigation Committee |
| 5 | L05 | مسار الحوكمة القانونية واتخاذ القرار | Legal Governance & Decision-Making Lane | طلب الآراء القانونية واعتماد القرارات النهائية | Requesting legal opinions and approving final decisions | S011-S012, S046-S047, S081, S084, S095, S106, S115, S119, S121, S136 | Legal/Authority |
| 6 | L06 | مسار الإجراءات التصحيحية والتأديبية | Corrective & Disciplinary Actions Lane | تنفيذ الإجراءات التصحيحية والجزاءات ومتابعة التنفيذ | Implementing corrective actions and sanctions, and monitoring execution | S013-S015, S018-S020, S036-S037, S048-S049, S060, S066-S068, S096, S101, S124-S125, S138-S139 | Relevant Departments |
| 7 | L07 | مسار لجنة التظلمات والاستئناف | Appeals & Grievance Committee Lane | النظر في التظلّمات والطعون وإصدار قرارات نهائية | Reviewing appeals and grievances and issuing final decisions | S070, S127-S128, S141-S150 | Appeal Committee |
| 8 | L08 | مسار الإغلاق والأرشفة | Closure & Archival Lane | إغلاق القضايا وأرشفتها وفق سياسات الاحتفاظ | Closing cases and archiving according to retention policies | S007-S009, S038-S039, S052-S053, S055-S059, S061, S065, S097, S102-S103, S114, S126, S131-S134, S137, S140 | GRC/System |

---

## 5. Status Architecture | معمارية الحالات

### 5.1 Status Classification | تصنيف الحالات

| # | رمز التصنيف | التصنيف (AR) | Classification (EN) | الوصف (AR) | Description (EN) | نطاق الحالات | Status Range | عدد الحالات | Count |
|---|-------------|--------------|---------------------|------------|------------------|--------------|--------------|-------------|-------|
| 1 | استقبال | الاستقبال والتسجيل | Reception & Registration | استلام وتسجيل البلاغات الواردة | Receiving and registering incoming reports | S001-S003 | 3 |
| 2 | تقييم | التقييم والفرز | Assessment & Screening | تقييم البلاغات وتحديد المسار | Assessing reports and determining path | S004, S040-S044, S050-S051, S058, S063, S069, S089, S104, S107 | 13 |
| 3 | تحقيق | التحقيق | Investigation | إجراءات التحقيق المختلفة | Various investigation procedures | S006, S016-S017, S021, S025, S031, S035, S075-S076, S083, S092, S111-S113, S117-S118, S120 | 18 |
| 4 | انتظار | الانتظار والتعليق | Waiting & Suspension | حالات الانتظار لمدخلات خارجية | Waiting states for external inputs | S005, S015, S022-S024, S026-S027, S029, S032-S034, S050, S054, S064, S073-S074, S077, S080, S082, S096, S105-S106, S116, S123-S124, S143 | 25 |
| 5 | قرار | اتخاذ القرار | Decision-Making | مراحل اتخاذ القرار والموافقات | Decision-making and approval stages | S010-S012, S028, S030, S034, S046, S062, S078-S079, S081, S084, S086, S088-S090, S093, S095, S109, S115, S117, S119, S121, S136 | 23 |
| 6 | تنفيذ | التنفيذ والمتابعة | Execution & Follow-up | تنفيذ القرارات والإجراءات | Executing decisions and actions | S013-S014, S018-S020, S036-S037, S047-S049, S060, S066-S068, S087, S139 | 15 |
| 7 | استثناء | الاستثناءات | Exceptions | حالات الإغلاق الاستثنائية | Exceptional closure cases | S007-S009, S041-S043, S045, S052, S103 | 9 |
| 8 | إغلاق | الإغلاق | Closure | إغلاق القضايا | Case closure | S038, S053, S055-S057, S059, S061, S065, S097, S114, S132-S134, S137, S147-S148, S150 | 17 |
| 9 | أرشفة | الأرشفة | Archival | أرشفة السجلات | Record archival | S039, S102, S131 | 3 |
| 10 | تظلّم | التظلّم والاستئناف | Appeal & Grievance | مسار التظلّمات | Appeals path | S070, S127-S128, S141-S146, S149 | 10 |
| 11 | متابعة | المتابعة اللاحقة | Post-Follow-up | المتابعة بعد الإغلاق | Post-closure follow-up | S071-S072, S085, S094, S099-S101, S125-S126, S135, S138, S140 | 12 |

**إجمالي الحالات | Total Statuses: 150**

---

## 6. Status Specifications | مواصفات الحالات

> **ملاحظة**: للاطلاع على التفاصيل الكاملة لجميع الـ 150 حالة بما في ذلك الوصف التشغيلي والأهداف والمتطلبات والصلاحيات وقواعد الانتقال، يرجى الرجوع إلى ملف:
>
> **Note**: For complete details of all 150 statuses including operational descriptions, objectives, requirements, permissions, and transition rules, please refer to:
>
> **[CRM_Status.md](./CRM_Status.md)**

### 6.1 Status Summary Table | جدول ملخص الحالات

| Status Code | الاسم (AR) | Name (EN) | التصنيف | Category | المسار | Lane |
|-------------|------------|-----------|---------|----------|--------|------|
| S001 | تم الاستلام | Received | استقبال | Reception | L01 |
| S002 | مسجّل | Registered | استقبال | Reception | L01 |
| S003 | مُحال إلى إدارة الحوكمة والامتثال المؤسسي | Referred to GRC | استقبال | Reception | L01 |
| S004 | التقييم المبدئي | Preliminary Assessment | تقييم | Assessment | L02 |
| S005 | بانتظار استكمال بيانات | Pending Info | انتظار | Waiting | L02 |
| S006 | تحقيق أولي | Initial Investigation | تحقيق | Investigation | L03 |
| S007 | غير جدي | Not Substantiated | استثناء | Exception | L08 |
| S008 | خارج النطاق | Out of Scope | استثناء | Exception | L08 |
| S009 | مُحوَّل | Transferred | استثناء | Exception | L08 |
| S010 | دون تصعيد | No Escalation | قرار | Decision | L03 |
| S011 | بانتظار القرار | Pending Decision | قرار | Decision | L05 |
| S012 | بانتظار رأي قانوني | Pending Legal Opinion | قرار | Decision | L05 |
| S013 | إجراء تصحيحي | Corrective Action | تنفيذ | Execution | L06 |
| S014 | متابعة تنفيذ الإجراء التصحيحي | Monitor Corrective Action | تنفيذ | Execution | L06 |
| S015 | بانتظار تنفيذ الإدارة المعنية | Pending Business Execution | انتظار | Waiting | L06 |
| S016 | مُصعَّد | Escalated | تحقيق | Investigation | L04 |
| S017 | تحقيق ثانوي | Secondary Investigation | تحقيق | Investigation | L04 |
| S018 | إجراء تصحيحي (بقرار لجنة التحقيق) | Committee Corrective Action | تنفيذ | Execution | L06 |
| S019 | تحقق امتثال | Compliance Verification | تنفيذ | Execution | L06 |
| S020 | إجراء تصحيحي متعثر | Corrective Action Delayed | تنفيذ | Execution | L06 |
| S021 | بانتظار جلسة استماع للموظف | Hearing Session | تحقيق | Investigation | L04 |
| S022 | بانتظار إفادة الموظف المبلَّغ ضده | Awaiting Parties | انتظار | Waiting | L04 |
| S023 | تعليق التحقيق – عدم تعاون | Awaiting Party Documents | انتظار | Waiting | L04 |
| S024 | تعليق التحقيق | Investigation Suspended | انتظار | Waiting | L04 |
| S025 | بانتظار تعيين محقق أولي | Investigation Resumed | تحقيق | Investigation | L04 |
| S026 | تعليق التذكرة – نقص موارد | Awaiting External Info | انتظار | Waiting | L04 |
| S027 | تعليق التحقيق – تغيير محقق | Awaiting Regulator Report | انتظار | Waiting | L04 |
| S028 | بانتظار تشكيل لجنة تحقيق | Investigation Review | قرار | Decision | L04 |
| S029 | تعليق التذكرة – تضارب مصالح | Conflict Suspension | انتظار | Waiting | L04 |
| S030 | بانتظار جلسة استماع | Investigation Committee Recommendation | قرار | Decision | L04 |
| S031 | جلسة استماع منعقدة | Hearing Conducted | تحقيق | Investigation | L04 |
| S032 | تعليق التحقيق – تعذر حضور | Hearing Postponed | انتظار | Waiting | L04 |
| S033 | تعليق التحقيق – شبهة تعارض مصالح | Conflict Suspected | انتظار | Waiting | L04 |
| S034 | بانتظار تشكيل لجنة التحقيق | Committee Formation Pending | قرار | Decision | L04 |
| S035 | جلسة استماع – موظف مبلَّغ ضده | Accused Hearing | تحقيق | Investigation | L04 |
| S036 | متابعة تنفيذ إجراء تصحيحي | Corrective Action Follow-up | تنفيذ | Execution | L06 |
| S037 | تم تنفيذ القرار | Decision Executed | تنفيذ | Execution | L06 |
| S038 | مغلق – إجراء نظامي | Closed – Regulatory Action | إغلاق | Closure | L08 |
| S039 | مؤرشفة | Archived | أرشفة | Archival | L08 |
| S040 | مُحال للحوكمة والامتثال | Referred to GRC | تقييم | Assessment | L02 |
| S041 | غير قابل للمعالجة | Non-Processable | استثناء | Exception | L08 |
| S042 | خارج الاختصاص الوظيفي | Out of Functional Scope | استثناء | Exception | L08 |
| S043 | مُحوَّل تعاقديًا | Contractually Referred | استثناء | Exception | L08 |
| S044 | نطاق تحقيق غير كافٍ | Insufficient Scope | تقييم | Assessment | L02 |
| S045 | تحقيق غير ممكن واقعيًا | Investigation Not Feasible | استثناء | Exception | L08 |
| S046 | تضارب توصيات اللجنة | Conflicting Committee Opinions | قرار | Decision | L05 |
| S047 | ثبوت مخالفة دون إمكانية جزاء | Violation Without Sanction | تنفيذ | Execution | L05 |
| S048 | توصية إصلاح حوكمي شامل | Governance Reform Recommendation | تنفيذ | Execution | L06 |
| S049 | تنفيذ جزئي للقرار | Partial Execution | تنفيذ | Execution | L06 |
| S050 | معلّق – بانتظار استكمال | Pending Completion | انتظار | Waiting | L02 |
| S051 | إعادة تصنيف | Reclassification | تقييم | Assessment | L02 |
| S052 | إغلاق – بلاغ مكرر | Closed – Duplicate Report | استثناء | Exception | L08 |
| S053 | مغلق – دون إجراء | Closed – No Action | إغلاق | Closure | L08 |
| S054 | بانتظار مستندات داعمة | Pending Supporting Docs | انتظار | Waiting | L02 |
| S055 | مغلق – غير جدي | Closed – Not Serious | إغلاق | Closure | L08 |
| S056 | مغلق – خارج النطاق | Closed – Out of Scope | إغلاق | Closure | L08 |
| S057 | مغلق – مُحوَّل | Closed – Referred | إغلاق | Closure | L08 |
| S058 | إعادة فتح التقييم المبدئي | Reopen Preliminary Assessment | تقييم | Assessment | L02 |
| S059 | إغلاق طارئ | Emergency Closure | إغلاق | Closure | L08 |
| S060 | إجراء نظامي | Regulatory Action | تنفيذ | Execution | L06 |
| S061 | مغلق – إجراء تصحيحي | Closed – Corrective Action | إغلاق | Closure | L08 |
| S062 | إلغاء التصعيد | De-Escalation | قرار | Decision | L04 |
| S063 | تنسيق خارجي | External Coordination | تقييم | Assessment | L02 |
| S064 | تعليق بقرار نظامي | System-Mandated Suspension | انتظار | Waiting | L04 |
| S065 | إحالة خارج النظام | Out-of-System Referral | إغلاق | Closure | L08 |
| S066 | إجراء تصحيحي + إجراء نظامي | Corrective + Regulatory Action | تنفيذ | Execution | L06 |
| S067 | إحالة للحوكمة والامتثال للمتابعة | GRC Follow-up Referral | تنفيذ | Execution | L06 |
| S068 | إعادة تنفيذ الإجراء التصحيحي | Re-Execution of Corrective Action | تنفيذ | Execution | L06 |
| S069 | تنسيق خارجي عاجل | Urgent External Coordination | تقييم | Assessment | L02 |
| S070 | إعادة فتح | Reopened | تظلّم | Appeal | L07 |
| S071 | مراجعة لاحقة | Post-Closure Review | متابعة | Follow-up | L08 |
| S072 | نقل ملكية | Ownership Transfer | متابعة | Follow-up | L08 |
| S073 | تعليق التحقيق – طلب محامٍ | Investigation Suspended – Lawyer Request | انتظار | Waiting | L04 |
| S074 | تعليق التحقيق – إجازة أو مرض | Investigation Suspended – Leave/Illness | انتظار | Waiting | L04 |
| S075 | استئناف التحقيق | Investigation Resumed | تحقيق | Investigation | L04 |
| S076 | مُصعَّد فوري | Immediate Escalation | تحقيق | Investigation | L04 |
| S077 | تعليق كامل | Full Suspension | انتظار | Waiting | L04 |
| S078 | بانتظار تعيين محقق بديل | Awaiting Alternate Investigator | قرار | Decision | L04 |
| S079 | إعادة جدولة جلسة | Hearing Rescheduled | قرار | Decision | L04 |
| S080 | امتناع الموظف عن التعاون | Non-Cooperation | انتظار | Waiting | L04 |
| S081 | بانتظار رأي الإدارة القانونية | Pending Legal Opinion | قرار | Decision | L05 |
| S082 | بانتظار استكمال مستندات جوهرية | Pending Critical Documents | انتظار | Waiting | L03 |
| S083 | استبعاد أدلة غير نظامية | Exclude Invalid Evidence | تحقيق | Investigation | L04 |
| S084 | تعارض توصية اللجنة مع الرأي القانوني | Committee vs Legal Conflict | قرار | Decision | L05 |
| S085 | متابعة ما بعد الإغلاق | Post-Closure Follow-up | متابعة | Follow-up | L08 |
| S086 | إعادة فتح التحقيق بقرار نظامي | Reopen Investigation by Authority | قرار | Decision | L04 |
| S087 | إحالة لجهة رقابية خارجية | External Regulatory Referral | تنفيذ | Execution | L05 |
| S088 | بانتظار تقييم تعارض مصالح | Pending Conflict of Interest Review | قرار | Decision | L04 |
| S089 | بانتظار تحديد نطاق التحقيق | Pending Scope Definition | قرار | Decision | L02 |
| S090 | فصل المسارات | Lane Separation | قرار | Decision | L02 |
| S091 | تحويل لمسار إداري بحت | Administrative Track Only | تحويل | Transfer | L02 |
| S092 | إشعار بحقوق الموظف | Employee Rights Notification | إجراء | Action | L04 |
| S093 | إعادة تشكيل اللجنة جزئيًا | Partial Committee Reformation | قرار | Decision | L04 |
| S094 | مراجعة جودة التحقيق | Investigation Quality Review | مراجعة | Review | L08 |
| S095 | اختلاف أصحاب الصلاحية | Authority Conflict | قرار | Decision | L05 |
| S096 | بانتظار تبليغ الأطراف | Pending Stakeholder Notification | انتظار | Waiting | L06 |
| S097 | محمي من الطعن | Immune from Appeal | إغلاق | Closure | L08 |
| S098 | نقل السرية | Confidentiality Reclassification | إجراء | Action | L02 |
| S099 | تجميد قانوني | Post-Implementation Impact Assessment | متابعة | Follow-up | L06 |
| S100 | قياس الأثر بعد التنفيذ | Closure Quality Assessment | مراجعة | Review | L08 |
| S101 | متابعة التزام ما بعد الجزاء | Post-Sanction Compliance Follow-up | متابعة | Follow-up | L06 |
| S102 | حجز أرشيفي | Archival Hold | أرشفة | Archival | L08 |
| S103 | مرفوض – إساءة استخدام القناة | Channel Abuse Rejection | استثناء | Exception | L08 |
| S104 | موقوف – فحص ازدواجية متقدمة | Advanced Duplication Check | تعليق | Suspension | L02 |
| S105 | بانتظار تصنيف السرية | Pending Confidentiality Classification | انتظار | Waiting | L01 |
| S106 | بانتظار رأي اختصاصي | Pending Expert Opinion | انتظار | Waiting | L05 |
| S107 | فصل وقائع البلاغ | Incident Segmentation | معالجة | Processing | L02 |
| S108 | إحالة لمسار إداري | Administrative Referral | تحويل | Transfer | L02 |
| S109 | تحديد نطاق التحقيق | Investigation Scope Definition | قرار | Decision | L02 |
| S110 | إشعار رسمي بحقوق الدفاع | Formal Defense Rights Notice | إجراء | Action | L04 |
| S111 | بانتظار شاهد | Pending Witness | تحقيق | Investigation | L04 |
| S112 | استبعاد شاهد | Witness Exclusion | تحقيق | Investigation | L04 |
| S113 | بانتظار تحليل أدلة رقمية | Pending Digital Forensics | تحقيق | Investigation | L04 |
| S114 | إغلاق – عدم اختصاص شخصي | Closure – No Personal Jurisdiction | إغلاق | Closure | L08 |
| S115 | توصية تسوية داخلية | Internal Settlement Recommendation | قرار | Decision | L05 |
| S116 | بانتظار اعتماد ميزانية التحقيق | Pending Investigation Budget Approval | انتظار | Waiting | L04 |
| S117 | توسيع نطاق التحقيق | Investigation Scope Expansion | قرار | Decision | L04 |
| S118 | استبعاد دليل | Evidence Exclusion | تحقيق | Investigation | L04 |
| S119 | رأي قانوني ملزم | Binding Legal Opinion | قرار | Decision | L05 |
| S120 | إعادة جلسة استماع | Re-Hearing Session | تحقيق | Investigation | L04 |
| S121 | توصية بعدم الإحالة | Recommendation – No Referral | قرار | Decision | L05 |
| S122 | إحالة لمجلس الإدارة | Board Referral | تصعيد | Escalation | L05 |
| S123 | تعليق – انتظار جهة سيادية | Suspension – Sovereign Authority | تعليق | Suspension | L04 |
| S124 | بانتظار تبليغ الموظف | Pending Employee Notification | انتظار | Waiting | L06 |
| S125 | متابعة أثر الجزاء | Sanction Impact Follow-up | متابعة | Follow-up | L06 |
| S126 | تقييم جودة الإغلاق | Closure Quality Review | رقابة | Control | L08 |
| S127 | اعتراض الموظف | Employee Appeal | تظلّم | Appeal | L07 |
| S128 | رد على اعتراض | Appeal Response | تظلّم | Appeal | L07 |
| S129 | تجميد قضائي | Legal Hold | تعليق | Suspension | L04 |
| S130 | استرجاع قضائي | Judicial Retrieval | إعادة فتح | Reopen | L04 |
| S131 | إتلاف بعد المدة | Disposal After Retention | أرشفة | Archival | L08 |
| S132 | مغلق – غير قابل للمعالجة | Closed – Not Actionable | إغلاق | Closure | L08 |
| S133 | مغلق – خارج الاختصاص الوظيفي | Closed – Outside Functional Scope | إغلاق | Closure | L08 |
| S134 | مغلق – تعذر التحقيق | Closed – Investigation Not Feasible | إغلاق | Closure | L08 |
| S135 | تفعيل حماية المبلّغ | Whistleblower Protection Activated | حماية | Protection | L01 |
| S136 | بانتظار قرار مرجّح | Pending Tie-Break Decision | قرار | Decision | L05 |
| S137 | مغلق – توثيق واقعة | Closed – Incident Logged | إغلاق | Closure | L08 |
| S138 | متابعة تنفيذ إصلاح حوكمي | Governance Reform Follow-up | متابعة | Follow-up | L06 |
| S139 | بانتظار استكمال التنفيذ | Pending Completion | تنفيذ | Execution | L06 |
| S140 | مراجعة نزاهة الإجراء | Procedural Integrity Review | رقابة | Control | L08 |
| S141 | قيد التحقق من أهلية التظلّم | Appeal Eligibility Check | تظلّم | Appeal | L07 |
| S142 | تظلّم مقبول شكليًا | Appeal Formally Accepted | تظلّم | Appeal | L07 |
| S143 | بانتظار استكمال ملف التظلّم | Pending Appeal Completion | تظلّم | Appeal | L07 |
| S144 | جلسة تظلّم منعقدة | Appeal Hearing Session | تظلّم | Appeal | L07 |
| S145 | مداولة لجنة التظلّم | Appeal Committee Deliberation | تظلّم | Appeal | L07 |
| S146 | قرار لجنة التظلّم | Appeal Committee Decision | قرار | Decision | L07 |
| S147 | رفض التظلّم شكليًا | Appeal Formally Rejected | تظلّم | Appeal | L07 |
| S148 | تحصين قرار التظلّم | Appeal Decision Finalized | تحصين | Finalization | L07 |
| S149 | تبليغ أطراف التظلّم | Appeal Decision Notification | تبليغ | Notification | L07 |
| S150 | إغلاق مسار التظلّم | Appeal Process Closure | إغلاق | Closure | L07 |

---

## 7. State Transitions | انتقالات الحالات

### 7.1 Primary Transition Rules | قواعد الانتقال الرئيسية

| # | From Status | To Status | الشرط (AR) | Condition (EN) | النموذج المطلوب | Required Form | SOP Reference | ملاحظات تقنية | Technical Notes | نقطة الرقابة | Control Point | مستوى المخاطر | Risk Level |
|---|-------------|-----------|------------|----------------|-----------------|---------------|---------------|---------------|-----------------|--------------|---------------|---------------|------------|
| 1 | S001 | S002 | اكتمال البيانات الإلزامية | Mandatory fields complete | نموذج الاستلام | WB.F.001 | WB.P.C.01 | التحقق الآلي من الحقول | Auto field validation | CP-01 | Low |
| 2 | S001 | S003 | إحالة مباشرة للحوكمة | Direct GRC referral | نموذج إحالة | WB.F.002 | WB.P.C.01 | تجاوز التسجيل | Skip registration | CP-02 | Low |
| 3 | S001 | S105 | تصنيف السرية مطلوب | Confidentiality classification required | نموذج تصنيف سرية | WB.F.100 | WB.P.C.01 | تعليق المعالجة | Processing suspended | CP-03 | Medium |
| 4 | S002 | S003 | تسجيل مكتمل | Registration complete | نموذج إحالة | WB.F.002 | WB.P.C.02 | توليد رقم القضية | Case ID generated | CP-04 | Low |
| 5 | S002 | S004 | إحالة مباشرة للتقييم | Direct assessment referral | — | WB.P.C.02 | مسار مختصر | Short path | CP-05 | Low |
| 6 | S003 | S004 | استلام من الحوكمة | GRC receipt | نموذج تقييم مبدئي | WB.F.003 | WB.P.C.03 | بدء التقييم | Assessment start | CP-06 | Low |
| 7 | S004 | S005 | بيانات ناقصة | Missing data | طلب استكمال | WB.F.004 | WB.P.C.04 | تعليق SLA | SLA paused | CP-07 | Low |
| 8 | S004 | S006 | بلاغ جدي ضمن النطاق | Serious report within scope | تعيين محقق | WB.F.005 | WB.P.C.04 | بدء التحقيق الأولي | Initial investigation start | CP-08 | Medium |
| 9 | S004 | S007 | بلاغ غير جدي | Not substantiated | نموذج تصنيف | WB.F.006 | WB.P.C.04 | تسبيب مكتوب مطلوب | Written justification required | CP-09 | Medium |
| 10 | S004 | S008 | خارج النطاق | Out of scope | نموذج خارج النطاق | WB.F.007 | WB.P.C.04 | تحديد الجهة المختصة | Identify competent authority | CP-10 | Medium |
| 11 | S004 | S040 | إحالة للحوكمة | GRC referral | نموذج إحالة | WB.F.002 | WB.P.C.04 | تغيير المسؤولية | Ownership change | CP-11 | Low |
| 12 | S004 | S041 | غير قابل للمعالجة | Non-processable | مذكرة سبب | WB.F.008 | WB.P.C.04 | سبب موثق | Documented reason | CP-12 | High |
| 13 | S004 | S042 | خارج الاختصاص الوظيفي | Outside functional scope | مذكرة إحالة | WB.F.009 | WB.P.C.04 | تحويل للجهة المختصة | Refer to competent authority | CP-13 | Medium |
| 14 | S004 | S043 | إحالة تعاقدية | Contractual referral | عقد/اتفاقية | WB.F.010 | WB.P.C.04 | التحقق من العقد | Contract verification | CP-14 | Medium |
| 15 | S004 | S044 | نطاق غير كافٍ | Insufficient scope | تحليل نطاق | WB.F.011 | WB.P.C.04 | إعادة تحديد النطاق | Scope redefinition | CP-15 | Medium |
| 16 | S004 | S050 | بانتظار استكمال | Pending completion | طلب استكمال | WB.F.004 | WB.P.C.04 | تعليق مؤقت | Temporary suspension | CP-16 | Low |
| 17 | S004 | S051 | إعادة تصنيف | Reclassification | مذكرة إعادة تصنيف | WB.F.012 | WB.P.C.04 | تصحيح المسار | Path correction | CP-17 | Medium |
| 18 | S004 | S052 | بلاغ مكرر | Duplicate report | تحليل تطابق | WB.F.013 | WB.P.C.04 | ربط بالبلاغ الأصلي | Link to original report | CP-18 | Medium |
| 19 | S004 | S054 | مستندات داعمة مطلوبة | Supporting docs required | طلب مستندات | WB.F.014 | WB.P.C.04 | قائمة المستندات | Document list | CP-19 | Low |
| 20 | S004 | S063 | تنسيق خارجي مطلوب | External coordination required | مراسلات رسمية | WB.F.015 | WB.P.C.04 | تحديد الجهات | Identify entities | CP-20 | Medium |
| 21 | S004 | S069 | تنسيق خارجي عاجل | Urgent external coordination | مراسلة عاجلة | WB.F.016 | WB.P.C.04 | أولوية عالية | High priority | CP-21 | High |
| 22 | S004 | S089 | تحديد نطاق مطلوب | Scope definition required | تحليل نطاق | WB.F.011 | WB.P.C.04 | قبل التحقيق | Before investigation | CP-22 | Medium |
| 23 | S004 | S103 | إساءة استخدام القناة | Channel abuse | توثيق إساءة | WB.F.017 | WB.P.C.04 | تسبيب مكتوب | Written justification | CP-23 | High |
| 24 | S004 | S104 | فحص ازدواجية متقدم | Advanced duplication check | تقرير فحص | WB.F.018 | WB.P.C.04 | ربط بلاغات مرتبطة | Link related reports | CP-24 | Medium |
| 25 | S005 | S004 | استلام البيانات | Data received | — | WB.P.C.05 | استئناف التقييم | Assessment resume | CP-25 | Low |
| 26 | S006 | S007 | بلاغ غير جدي بعد التحقيق | Not substantiated after investigation | تقرير تحقيق | WB.F.019 | WB.P.C.06 | تسبيب موثق | Documented justification | CP-26 | High |
| 27 | S006 | S010 | لا حاجة للتصعيد | No escalation needed | تقرير تحقيق | WB.F.019 | WB.P.C.06 | قرار مسبب | Justified decision | CP-27 | Medium |
| 28 | S006 | S016 | تصعيد مطلوب | Escalation required | قرار تصعيد | WB.F.020 | WB.P.C.06 | معايير التصعيد متحققة | Escalation criteria met | CP-28 | High |
| 29 | S006 | S017 | تحقيق موسّع | Expanded investigation | نموذج تحقيق لجنة | WB.F.021 | WB.P.C.06 | إحالة للجنة | Committee referral | CP-29 | High |
| 30 | S006 | S026 | معلومات خارجية مطلوبة | External info required | مراسلات رسمية | WB.F.015 | WB.P.C.06 | تعليق التحقيق | Investigation suspended | CP-30 | Medium |
| 31 | S006 | S029 | تضارب مصالح مكتشف | Conflict of interest discovered | إفصاح تعارض | WB.F.022 | WB.P.C.06 | تعليق فوري | Immediate suspension | CP-31 | Critical |
| 32 | S006 | S045 | تحقيق غير ممكن | Investigation not feasible | مذكرة مبررات | WB.F.023 | WB.P.C.06 | تسبيب موثق | Documented justification | CP-32 | High |
| 33 | S006 | S054 | مستندات داعمة مطلوبة | Supporting docs required | طلب مستندات | WB.F.014 | WB.P.C.06 | قائمة المستندات | Document list | CP-33 | Low |
| 34 | S006 | S073 | طلب محامٍ | Lawyer request | طلب رسمي | WB.F.024 | WB.P.C.06 | ضمان الحقوق | Rights guarantee | CP-34 | Medium |
| 35 | S006 | S074 | إجازة أو مرض | Leave/illness | إشعار | WB.F.025 | WB.P.C.06 | تعليق مؤقت | Temporary suspension | CP-35 | Low |
| 36 | S006 | S082 | مستندات جوهرية مطلوبة | Critical docs required | طلب مستندات | WB.F.014 | WB.P.C.06 | استكمال جوهري | Critical completion | CP-36 | Medium |
| 37 | S006 | S083 | استبعاد أدلة | Evidence exclusion | محضر استبعاد | WB.F.026 | WB.P.C.06 | سلامة الإثبات | Evidence integrity | CP-37 | High |
| 38 | S006 | S092 | إشعار بالحقوق | Rights notification | إشعار حقوق | WB.F.027 | WB.P.C.06 | إلزامي قبل الجلسة | Mandatory before hearing | CP-38 | High |
| 39 | S007 | S055 | إغلاق نهائي | Final closure | محضر إغلاق | WB.F.028 | WB.P.C.07 | اعتماد مستقل | Independent approval | CP-39 | Medium |
| 40 | S008 | S009 | تحويل لجهة مختصة | Transfer to competent authority | نموذج تحويل | WB.F.029 | WB.P.C.08 | تأكيد الاستلام | Receipt confirmation | CP-40 | Medium |
| 41 | S008 | S056 | إغلاق خارج النطاق | Out of scope closure | محضر إغلاق | WB.F.028 | WB.P.C.08 | تسبيب موثق | Documented justification | CP-41 | Medium |
| 42 | S009 | S010 | متابعة داخلية | Internal follow-up | — | WB.P.C.09 | استثنائي | Exceptional | CP-42 | Low |
| 43 | S009 | S057 | إغلاق بعد التحويل | Closure after transfer | محضر إغلاق | WB.F.028 | WB.P.C.09 | تأكيد الاستلام | Receipt confirmation | CP-43 | Low |
| 44 | S010 | S011 | رفع للقرار | Elevate to decision | محضر توصية | WB.F.030 | WB.P.C.10 | توصية مكتملة | Complete recommendation | CP-44 | Medium |
| 45 | S010 | S013 | إجراء تصحيحي | Corrective action | خطة إجراء تصحيحي | WB.F.031 | WB.P.C.10 | اعتماد الخطة | Plan approval | CP-45 | Medium |
| 46 | S010 | S053 | إغلاق دون إجراء | Closure without action | مذكرة إغلاق | WB.F.032 | WB.P.C.10 | تسبيب موثق | Documented justification | CP-46 | High |
| 47 | S011 | S012 | رأي قانوني مطلوب | Legal opinion required | طلب رأي قانوني | WB.F.033 | WB.P.C.11 | تعليق القرار | Decision suspended | CP-47 | Medium |
| 48 | S011 | S013 | إجراء تصحيحي معتمد | Corrective action approved | خطة إجراء تصحيحي | WB.F.031 | WB.P.C.11 | بدء التنفيذ | Execution start | CP-48 | Medium |
| 49 | S011 | S037 | تنفيذ مباشر | Direct execution | إثبات تنفيذ | WB.F.034 | WB.P.C.11 | للقرارات البسيطة | For simple decisions | CP-49 | Medium |
| 50 | S011 | S046 | تضارب توصيات | Conflicting recommendations | محضر لجنة | WB.F.035 | WB.P.C.11 | رفع للحسم | Elevate for resolution | CP-50 | High |
| 51 | S011 | S053 | إغلاق دون إجراء | Closure without action | مذكرة إغلاق | WB.F.032 | WB.P.C.11 | تسبيب موثق | Documented justification | CP-51 | High |
| 52 | S011 | S060 | إجراء نظامي | Regulatory action | قرار نظامي | WB.F.036 | WB.P.C.11 | امتثال نظامي | Regulatory compliance | CP-52 | High |
| 53 | S011 | S095 | اختلاف أصحاب الصلاحية | Authority conflict | محضر اختلاف | WB.F.037 | WB.P.C.11 | رفع للحسم | Elevate for resolution | CP-53 | Critical |
| 54 | S011 | S106 | رأي اختصاصي مطلوب | Expert opinion required | طلب رأي فني | WB.F.038 | WB.P.C.11 | دعم القرار | Decision support | CP-54 | Medium |
| 55 | S011 | S115 | توصية تسوية | Settlement recommendation | نموذج توصية تسوية | WB.F.039 | WB.P.C.11 | موافقة صريحة | Explicit consent | CP-55 | Medium |
| 56 | S012 | S011 | استلام الرأي القانوني | Legal opinion received | نموذج رأي قانوني | WB.F.040 | WB.P.C.12 | استئناف القرار | Decision resume | CP-56 | Medium |
| 57 | S012 | S013 | إجراء تصحيحي بتوصية قانونية | Corrective action per legal advice | خطة إجراء تصحيحي | WB.F.031 | WB.P.C.12 | توافق قانوني | Legal compliance | CP-57 | Medium |
| 58 | S012 | S047 | مخالفة دون جزاء | Violation without sanction | تقرير قانوني | WB.F.041 | WB.P.C.12 | سبب قانوني موثق | Legal reason documented | CP-58 | High |
| 59 | S012 | S048 | إصلاح حوكمي | Governance reform | تقرير إصلاح | WB.F.042 | WB.P.C.12 | خطة معتمدة | Approved plan | CP-59 | High |
| 60 | S012 | S060 | إجراء نظامي | Regulatory action | قرار نظامي | WB.F.036 | WB.P.C.12 | توافق قانوني | Legal compliance | CP-60 | High |
| 61 | S012 | S066 | إجراء مركب | Combined action | قرارات معتمدة | WB.F.043 | WB.P.C.12 | تنفيذ متزامن | Parallel execution | CP-61 | High |
| 62 | S012 | S087 | إحالة لجهة رقابية | Regulatory referral | محضر إحالة | WB.F.044 | WB.P.C.12 | امتثال نظامي | Regulatory compliance | CP-62 | High |
| 63 | S013 | S014 | بدء المتابعة | Start monitoring | تقارير تقدم | WB.F.045 | WB.P.C.13 | متابعة دورية | Periodic monitoring | CP-63 | Low |
| 64 | S013 | S015 | انتظار التنفيذ | Pending execution | خطة تنفيذ | WB.F.046 | WB.P.C.13 | تحميل المسؤولية | Accountability | CP-64 | Medium |
| 65 | S013 | S020 | تعثر التنفيذ | Execution delayed | تقرير تعثر | WB.F.047 | WB.P.C.13 | تصعيد إداري | Administrative escalation | CP-65 | High |
| 66 | S013 | S061 | اكتمال التنفيذ | Execution complete | تقرير تنفيذ معتمد | WB.F.048 | WB.P.C.13 | إغلاق منضبط | Controlled closure | CP-66 | Medium |
| 67 | S014 | S015 | انتظار الإدارة | Pending business | خطة تنفيذ | WB.F.046 | WB.P.C.14 | نقل المسؤولية | Responsibility transfer | CP-67 | Low |
| 68 | S014 | S020 | تعثر ملحوظ | Notable delay | تقرير تعثر | WB.F.047 | WB.P.C.14 | تصعيد مطلوب | Escalation required | CP-68 | High |
| 69 | S014 | S036 | استمرار المتابعة | Continue follow-up | تقرير متابعة | WB.F.049 | WB.P.C.14 | تقدم مثبت | Progress documented | CP-69 | Low |
| 70 | S015 | S014 | تقدم جزئي | Partial progress | تقرير تقدم | WB.F.045 | WB.P.C.15 | استمرار المتابعة | Continue monitoring | CP-70 | Low |
| 71 | S015 | S020 | تعثر التنفيذ | Execution delayed | تقرير تعثر | WB.F.047 | WB.P.C.15 | تصعيد إداري | Administrative escalation | CP-71 | High |
| 72 | S015 | S036 | اكتمال جزئي | Partial completion | تقرير متابعة | WB.F.049 | WB.P.C.15 | متابعة مستمرة | Continuous follow-up | CP-72 | Low |
| 73 | S016 | S017 | تشكيل اللجنة | Committee formation | نموذج تحقيق لجنة | WB.F.021 | WB.P.C.16 | بدء التحقيق الموسّع | Expanded investigation start | CP-73 | High |
| 74 | S016 | S028 | مراجعة داخلية | Internal review | تقرير التحقيق | WB.F.019 | WB.P.C.16 | ضمان الجودة | Quality assurance | CP-74 | Medium |
| 76 | S016 | S030 | توصية اللجنة | Committee recommendation | تقرير نهائي | WB.F.050 | WB.P.C.16 | تمهيد القرار | Decision preparation | CP-76 | High |
| 77 | S016 | S034 | انتظار تشكيل اللجنة | Pending committee formation | قرار تشكيل | WB.F.051 | WB.P.C.16 | ضبط مؤسسي | Institutional control | CP-77 | Medium |
| 78 | S017 | S011 | رفع للقرار | Elevate to decision | محضر توصية | WB.F.030 | WB.P.C.17 | توصية مكتملة | Complete recommendation | CP-78 | High |
| 79 | S017 | S021 | جلسة استماع | Hearing session | محضر جلسة | WB.F.052 | WB.P.C.17 | ضمان حق السماع | Hearing right guarantee | CP-79 | High |
| 80 | S017 | S023 | انتظار مستندات | Awaiting documents | طلب مستندات | WB.F.014 | WB.P.C.17 | استكمال الوقائع | Complete facts | CP-80 | Medium |
| 81 | S017 | S024 | تعليق التحقيق | Investigation suspended | مبررات تعليق | WB.F.053 | WB.P.C.17 | إدارة المخاطر | Risk management | CP-81 | High |
| 82 | S017 | S026 | انتظار معلومات خارجية | Awaiting external info | مراسلات رسمية | WB.F.015 | WB.P.C.17 | استكمال الأدلة | Evidence completion | CP-82 | Medium |
| 83 | S017 | S027 | انتظار تقرير رقابي | Awaiting regulator report | طلب تقرير | WB.F.054 | WB.P.C.17 | مواءمة نظامية | Regulatory alignment | CP-83 | High |
| 84 | S017 | S028 | مراجعة نتائج | Results review | تقرير التحقيق | WB.F.019 | WB.P.C.17 | ضمان الجودة | Quality assurance | CP-84 | Medium |
| 85 | S017 | S029 | تضارب مصالح | Conflict of interest | إفصاح تعارض | WB.F.022 | WB.P.C.17 | تعليق فوري | Immediate suspension | CP-85 | Critical |
| 86 | S017 | S030 | توصية اللجنة | Committee recommendation | تقرير نهائي | WB.F.050 | WB.P.C.17 | تمهيد القرار | Decision preparation | CP-86 | High |
| 87 | S017 | S033 | شبهة تعارض | Conflict suspected | إفادة أولية | WB.F.055 | WB.P.C.17 | تعليق احترازي | Precautionary suspension | CP-87 | High |
| 88 | S017 | S035 | جلسة المتهم | Accused hearing | إشعار، محضر | WB.F.056 | WB.P.C.17 | حق الدفاع | Defense right | CP-88 | High |
| 89 | S017 | S073 | طلب محامٍ | Lawyer request | طلب رسمي | WB.F.024 | WB.P.C.17 | ضمان الحقوق | Rights guarantee | CP-89 | Medium |
| 90 | S017 | S074 | إجازة أو مرض | Leave/illness | إشعار | WB.F.025 | WB.P.C.17 | تعليق مؤقت | Temporary suspension | CP-90 | Low |
| 91 | S017 | S080 | امتناع عن التعاون | Non-cooperation | محضر امتناع | WB.F.057 | WB.P.C.17 | توثيق الامتناع | Document non-cooperation | CP-91 | High |
| 92 | S017 | S083 | استبعاد أدلة | Evidence exclusion | محضر استبعاد | WB.F.026 | WB.P.C.17 | سلامة الإثبات | Evidence integrity | CP-92 | High |
| 93 | S017 | S088 | تقييم تعارض | Conflict review | إفصاحات | WB.F.058 | WB.P.C.17 | حماية الاستقلالية | Independence protection | CP-93 | High |
| 94 | S017 | S092 | إشعار بالحقوق | Rights notification | إشعار حقوق | WB.F.027 | WB.P.C.17 | إلزامي | Mandatory | CP-94 | High |
| 95 | S017 | S093 | إعادة تشكيل جزئي | Partial reformation | قرار إعادة تشكيل | WB.F.059 | WB.P.C.17 | ضمان الاستقلالية | Independence assurance | CP-95 | High |
| 96 | S017 | S111 | انتظار شاهد | Pending witness | نموذج طلب شاهد | WB.F.060 | WB.P.C.17 | استكمال الوقائع | Complete facts | CP-96 | Medium |
| 97 | S017 | S113 | تحليل أدلة رقمية | Digital forensics | طلب تحليل | WB.F.061 | WB.P.C.17 | سلامة الأدلة | Evidence integrity | CP-97 | High |
| 98 | S017 | S116 | انتظار ميزانية | Pending budget | طلب اعتماد ميزانية | WB.F.062 | WB.P.C.17 | استدامة التحقيق | Investigation sustainability | CP-98 | Medium |
| 99 | S017 | S117 | توسيع النطاق | Scope expansion | نموذج اعتماد توسيع | WB.F.063 | WB.P.C.17 | مبررات موثقة | Documented justification | CP-99 | High |
| 100 | S017 | S118 | استبعاد دليل | Evidence exclusion | نموذج استبعاد دليل | WB.F.064 | WB.P.C.17 | نزاهة الملف | File integrity | CP-100 | High |
| 101 | S018 | S014 | بدء المتابعة | Start monitoring | تقارير تقدم | WB.F.045 | WB.P.C.18 | متابعة دورية | Periodic monitoring | CP-101 | Low |
| 102 | S018 | S015 | انتظار التنفيذ | Pending execution | خطة تنفيذ | WB.F.046 | WB.P.C.18 | تحميل المسؤولية | Accountability | CP-102 | Medium |
| 103 | S018 | S020 | تعثر التنفيذ | Execution delayed | تقرير تعثر | WB.F.047 | WB.P.C.18 | تصعيد للجنة | Committee escalation | CP-103 | High |
| 104 | S019 | S036 | استمرار المتابعة | Continue follow-up | تقرير متابعة | WB.F.049 | WB.P.C.19 | تقدم مثبت | Progress documented | CP-104 | Low |
| 105 | S019 | S061 | اكتمال الامتثال | Compliance complete | تقرير تحقق | WB.F.065 | WB.P.C.19 | تحقق مستقل | Independent verification | CP-105 | Medium |
| 106 | S020 | S016 | تصعيد | Escalation | قرار تصعيد | WB.F.020 | WB.P.C.20 | معايير التصعيد | Escalation criteria | CP-106 | High |
| 107 | S020 | S036 | إعادة التخطيط | Replanning | خطة تصحيح | WB.F.066 | WB.P.C.20 | خطة محدثة | Updated plan | CP-107 | Medium |
| 108 | S020 | S049 | تنفيذ جزئي | Partial execution | تقرير تقدم | WB.F.045 | WB.P.C.20 | استكمال مطلوب | Completion required | CP-108 | Medium |
| 109 | S020 | S068 | إعادة التنفيذ | Re-execution | خطة تصحيح | WB.F.066 | WB.P.C.20 | تصحيح الانحراف | Deviation correction | CP-109 | High |
| 110 | S021 | S011 | رفع للقرار | Elevate to decision | محضر الجلسة | WB.F.052 | WB.P.C.21 | توصية مكتملة | Complete recommendation | CP-110 | High |
| 111 | S021 | S022 | انتظار الأطراف | Awaiting parties | إشعارات حضور | WB.F.067 | WB.P.C.21 | ضمان العدالة | Justice guarantee | CP-111 | Medium |
| 112 | S021 | S030 | توصية اللجنة | Committee recommendation | تقرير نهائي | WB.F.050 | WB.P.C.21 | تمهيد القرار | Decision preparation | CP-112 | High |
| 113 | S021 | S031 | جلسة منعقدة | Hearing conducted | محضر جلسة معتمد | WB.F.068 | WB.P.C.21 | إثبات الإجراء | Procedure proof | CP-113 | Medium |
| 114 | S021 | S032 | تأجيل الجلسة | Hearing postponed | إشعار تعذر | WB.F.069 | WB.P.C.21 | ضمان العدالة | Justice guarantee | CP-114 | Medium |
| 115 | S021 | S079 | إعادة جدولة | Reschedule | إشعار جدولة | WB.F.070 | WB.P.C.21 | عدالة إجرائية | Procedural justice | CP-115 | Medium |
| 116 | S022 | S021 | حضور الأطراف | Parties present | — | WB.P.C.22 | استئناف الجلسة | Hearing resume | CP-116 | Low |
| 117 | S022 | S023 | انتظار مستندات | Awaiting documents | طلب مستندات | WB.F.014 | WB.P.C.22 | استكمال الوقائع | Complete facts | CP-117 | Medium |
| 118 | S023 | S017 | استلام المستندات | Documents received | — | WB.P.C.23 | استئناف التحقيق | Investigation resume | CP-118 | Low |
| 119 | S023 | S030 | توصية بدون مستندات | Recommendation without docs | تقرير نهائي | WB.F.050 | WB.P.C.23 | بناءً على المتاح | Based on available | CP-119 | High |
| 120 | S024 | S017 | رفع التعليق | Suspension lifted | قرار استئناف | WB.F.071 | WB.P.C.24 | استكمال التحقيق | Investigation resume | CP-120 | Medium |
| 121 | S024 | S025 | استئناف التحقيق | Investigation resumed | قرار استئناف | WB.F.071 | WB.P.C.24 | زوال السبب | Cause resolved | CP-121 | Medium |
| 122 | S025 | S017 | استمرار التحقيق | Continue investigation | — | WB.P.C.25 | استكمال الإجراءات | Complete procedures | CP-122 | Medium |
| 123 | S025 | S021 | جلسة استماع | Hearing session | محضر جلسة | WB.F.052 | WB.P.C.25 | ضمان حق السماع | Hearing right guarantee | CP-123 | High |
| 124 | S026 | S017 | استلام المعلومات | Info received | — | WB.P.C.26 | استئناف التحقيق | Investigation resume | CP-124 | Medium |
| 125 | S026 | S030 | توصية بدون معلومات | Recommendation without info | تقرير نهائي | WB.F.050 | WB.P.C.26 | بناءً على المتاح | Based on available | CP-125 | High |
| 126 | S027 | S017 | استلام التقرير | Report received | — | WB.P.C.27 | استئناف التحقيق | Investigation resume | CP-126 | Medium |
| 127 | S027 | S030 | توصية بدون تقرير | Recommendation without report | تقرير نهائي | WB.F.050 | WB.P.C.27 | بناءً على المتاح | Based on available | CP-127 | High |
| 128 | S027 | S078 | تعيين محقق بديل | Alternate investigator | قرار تعيين | WB.F.072 | WB.P.C.27 | ضمان الاستقلالية | Independence assurance | CP-128 | High |
| 129 | S028 | S011 | رفع للقرار | Elevate to decision | تقرير مراجعة | WB.F.073 | WB.P.C.28 | توصية مكتملة | Complete recommendation | CP-129 | High |
| 130 | S028 | S017 | استكمال التحقيق | Continue investigation | — | WB.P.C.28 | تعديل مطلوب | Modification required | CP-130 | Medium |
| 131 | S028 | S030 | توصية اللجنة | Committee recommendation | تقرير نهائي | WB.F.050 | WB.P.C.28 | تمهيد القرار | Decision preparation | CP-131 | High |
| 132 | S029 | S006 | إعادة التوزيع - أولي | Redistribution - initial | قرار تعليق | WB.F.074 | WB.P.C.29 | محقق جديد | New investigator | CP-132 | High |
| 133 | S029 | S017 | إعادة التوزيع - لجنة | Redistribution - committee | قرار تعليق | WB.F.074 | WB.P.C.29 | لجنة جديدة | New committee | CP-133 | High |
| 134 | S030 | S011 | رفع للقرار | Elevate to decision | نموذج توصية | WB.F.075 | WB.P.C.30 | توصية رسمية | Formal recommendation | CP-134 | High |
| 135 | S030 | S012 | رأي قانوني مطلوب | Legal opinion required | طلب رأي قانوني | WB.F.033 | WB.P.C.30 | ضمان السلامة | Safety assurance | CP-135 | High |
| 136 | S030 | S016 | تصعيد إضافي | Additional escalation | قرار تصعيد | WB.F.020 | WB.P.C.30 | جسامة إضافية | Additional severity | CP-136 | High |
| 137 | S031 | S028 | مراجعة داخلية | Internal review | محضر الجلسة | WB.F.052 | WB.P.C.31 | ضمان الجودة | Quality assurance | CP-137 | Medium |
| 138 | S031 | S030 | توصية اللجنة | Committee recommendation | تقرير نهائي | WB.F.050 | WB.P.C.31 | تمهيد القرار | Decision preparation | CP-138 | High |
| 139 | S032 | S021 | استئناف الجلسة | Resume hearing | — | WB.P.C.32 | جدولة جديدة | New schedule | CP-139 | Medium |
| 140 | S032 | S024 | تعليق التحقيق | Investigation suspended | مبررات تعليق | WB.F.053 | WB.P.C.32 | إدارة المخاطر | Risk management | CP-140 | High |
| 141 | S033 | S024 | تعليق التحقيق | Investigation suspended | مبررات تعليق | WB.F.053 | WB.P.C.33 | احتراز | Precaution | CP-141 | High |
| 142 | S033 | S029 | تأكيد التضارب | Conflict confirmed | إفصاح تعارض | WB.F.022 | WB.P.C.33 | تعليق فوري | Immediate suspension | CP-142 | Critical |
| 143 | S033 | S078 | تعيين محقق بديل | Alternate investigator | قرار تعيين | WB.F.072 | WB.P.C.33 | ضمان الاستقلالية | Independence assurance | CP-143 | High |
| 144 | S033 | S088 | تقييم التعارض | Conflict review | إفصاحات | WB.F.058 | WB.P.C.33 | تقييم رسمي | Formal assessment | CP-144 | High |
| 145 | S034 | S017 | تشكيل اللجنة | Committee formed | قرار التشكيل | WB.F.051 | WB.P.C.34 | بدء التحقيق الموسّع | Expanded investigation start | CP-145 | High |
| 146 | S034 | S028 | مراجعة مبكرة | Early review | — | WB.P.C.34 | ضمان الجودة | Quality assurance | CP-146 | Medium |
| 147 | S035 | S028 | مراجعة داخلية | Internal review | محضر الجلسة | WB.F.052 | WB.P.C.35 | ضمان الجودة | Quality assurance | CP-147 | Medium |
| 148 | S035 | S030 | توصية اللجنة | Committee recommendation | تقرير نهائي | WB.F.050 | WB.P.C.35 | تمهيد القرار | Decision preparation | CP-148 | High |
| 149 | S036 | S019 | تحقق امتثال | Compliance verification | نموذج تحقق امتثال | WB.F.065 | WB.P.C.36 | تحقق مستقل | Independent verification | CP-149 | Medium |
| 150 | S036 | S037 | اكتمال التنفيذ | Execution complete | إثبات تنفيذ | WB.F.034 | WB.P.C.36 | إقفال التنفيذ | Execution closure | CP-150 | Medium |
| 151 | S036 | S049 | تنفيذ جزئي | Partial execution | تقرير تقدم | WB.F.045 | WB.P.C.36 | استكمال مطلوب | Completion required | CP-151 | Medium |
| 152 | S037 | S038 | إغلاق نظامي | Regulatory closure | محضر إغلاق | WB.F.028 | WB.P.C.37 | إنهاء نظامي | Regulatory termination | CP-152 | Medium |
| 153 | S037 | S067 | إحالة للمتابعة | Follow-up referral | قرار إحالة | WB.F.076 | WB.P.C.37 | ضمان الاستدامة | Sustainability assurance | CP-153 | Low |
| 154 | S037 | S096 | انتظار التبليغ | Pending notification | إشعارات رسمية | WB.F.077 | WB.P.C.37 | نفاذ القرار | Decision effect | CP-154 | Medium |
| 155 | S037 | S100 | تقييم جودة | Quality assessment | تقرير تقييم | WB.F.078 | WB.P.C.37 | ضمان النزاهة | Integrity assurance | CP-155 | Medium |
| 156 | S037 | S124 | انتظار تبليغ الموظف | Pending employee notification | نموذج تبليغ | WB.F.079 | WB.P.C.37 | صحة الإجراءات | Procedure validity | CP-156 | Medium |
| 157 | S037 | S125 | متابعة أثر الجزاء | Sanction impact follow-up | نموذج متابعة أثر | WB.F.080 | WB.P.C.37 | منع التكرار | Prevent recurrence | CP-157 | Medium |
| 158 | S038 | S039 | أرشفة | Archival | سياسة أرشفة | WB.F.081 | WB.P.C.38 | حفظ السجلات | Record preservation | CP-158 | Low |
| 159 | S038 | S070 | إعادة فتح | Reopen | طلب مسبب | WB.F.082 | WB.P.C.38 | تصحيح إجرائي | Procedural correction | CP-159 | High |
| 160 | S038 | S086 | إعادة فتح نظامي | Authority reopen | قرار رسمي | WB.F.083 | WB.P.C.38 | تصحيح قهري | Compulsory correction | CP-160 | Critical |
| 161 | S039 | S102 | حجز أرشيفي | Archival hold | نموذج حجز أرشيفي | WB.F.084 | WB.P.C.39 | منع الإتلاف | Prevent destruction | CP-161 | High |
| 162 | S041 | S132 | إغلاق غير قابل للمعالجة | Not actionable closure | قرار إغلاق | WB.F.085 | WB.P.C.41 | ترشيد الموارد | Resource optimization | CP-162 | High |
| 163 | S042 | S133 | إغلاق خارج الاختصاص | Outside scope closure | قرار عدم اختصاص | WB.F.086 | WB.P.C.42 | ضبط الاختصاص | Jurisdiction control | CP-163 | High |
| 164 | S043 | S057 | إغلاق تعاقدي | Contractual closure | محضر إحالة | WB.F.044 | WB.P.C.43 | احترام العقود | Contract respect | CP-164 | Medium |
| 165 | S044 | S050 | انتظار استكمال | Pending completion | طلب استكمال | WB.F.004 | WB.P.C.44 | ضبط الجودة | Quality control | CP-165 | Medium |
| 166 | S044 | S089 | تحديد النطاق | Scope definition | تحليل نطاق | WB.F.011 | WB.P.C.44 | ضبط النطاق | Scope control | CP-166 | Medium |
| 167 | S045 | S134 | إغلاق تعذر التحقيق | Investigation not feasible closure | محضر إغلاق | WB.F.028 | WB.P.C.45 | سلامة الإجراءات | Procedure safety | CP-167 | High |
| 168 | S046 | S081 | رأي قانوني مطلوب | Legal opinion required | طلب رأي قانوني | WB.F.033 | WB.P.C.46 | حسم التعارض | Conflict resolution | CP-168 | High |
| 169 | S046 | S136 | قرار مرجّح | Tie-break decision | محضر اختلاف | WB.F.037 | WB.P.C.46 | حسم نظامي | Regulatory resolution | CP-169 | Critical |
| 170 | S047 | S060 | إجراء نظامي | Regulatory action | قرار نظامي | WB.F.036 | WB.P.C.47 | امتثال نظامي | Regulatory compliance | CP-170 | High |
| 171 | S048 | S138 | متابعة الإصلاح | Reform follow-up | خطة إصلاح | WB.F.042 | WB.P.C.48 | تحسين النظام | System improvement | CP-171 | High |
| 172 | S049 | S036 | استمرار المتابعة | Continue follow-up | تقرير متابعة | WB.F.049 | WB.P.C.49 | استكمال التنفيذ | Execution completion | CP-172 | Medium |
| 173 | S049 | S037 | اكتمال التنفيذ | Execution complete | إثبات تنفيذ | WB.F.034 | WB.P.C.49 | إقفال التنفيذ | Execution closure | CP-173 | Medium |
| 174 | S049 | S068 | إعادة التنفيذ | Re-execution | خطة تصحيح | WB.F.066 | WB.P.C.49 | تصحيح الانحراف | Deviation correction | CP-174 | High |
| 175 | S050 | S004 | استكمال التقييم | Assessment completion | مستند مكتمل | WB.F.087 | WB.P.C.50 | استئناف التقييم | Assessment resume | CP-175 | Low |
| 176 | S050 | S058 | إعادة فتح التقييم | Reopen assessment | مستندات مكتملة | WB.F.088 | WB.P.C.50 | ضمان الدقة | Accuracy assurance | CP-176 | Medium |
| 177 | S051 | S004 | إعادة التقييم | Re-assessment | مذكرة التصنيف | WB.F.012 | WB.P.C.51 | تصحيح المسار | Path correction | CP-177 | Medium |
| 178 | S051 | S006 | بدء تحقيق | Start investigation | تعيين محقق | WB.F.005 | WB.P.C.51 | بعد إعادة التصنيف | After reclassification | CP-178 | Medium |
| 179 | S051 | S089 | تحديد النطاق | Scope definition | تحليل نطاق | WB.F.011 | WB.P.C.51 | ضبط النطاق | Scope control | CP-179 | Medium |
| 180 | S051 | S104 | فحص ازدواجية | Duplication check | تقرير فحص | WB.F.018 | WB.P.C.51 | منع التكرار | Prevent duplication | CP-180 | Medium |
| 181 | S052 | S053 | إغلاق مكرر | Duplicate closure | محضر إغلاق | WB.F.028 | WB.P.C.52 | منع الازدواجية | Prevent duplication | CP-181 | Medium |
| 182 | S053 | S039 | أرشفة | Archival | سياسة أرشفة | WB.F.081 | WB.P.C.53 | حفظ السجلات | Record preservation | CP-182 | Low |
| 183 | S054 | S004 | استلام المستندات | Documents received | — | WB.P.C.54 | استئناف التقييم | Assessment resume | CP-183 | Low |
| 184 | S054 | S006 | استلام المستندات - تحقيق | Documents received - investigation | — | WB.P.C.54 | استئناف التحقيق | Investigation resume | CP-184 | Low |
| 185 | S055 | S039 | أرشفة | Archival | سياسة أرشفة | WB.F.081 | WB.P.C.55 | حفظ السجلات | Record preservation | CP-185 | Low |
| 186 | S056 | S039 | أرشفة | Archival | سياسة أرشفة | WB.F.081 | WB.P.C.56 | حفظ السجلات | Record preservation | CP-186 | Low | CP-186 | Low |
| 187 | S059 | S039 | إغلاق طارئ | Emergency closure | محضر إغلاق | WB.F.028 | WB.P.C.57 | حفظ السجلات | Record preservation | CP-187 | Critical | CP-187 | Critical |
| 188 | S059 | S070 | إعادة فتح طارئ | Emergency reopen | طلب مسبب | WB.F.082 | WB.P.C.57 | تصحيح إجرائي | Procedural correction | CP-188 | Critical | CP-188 | Critical |
| 189 | S060 | S037 | اكتمال الإجراء | Action complete | إثبات تنفيذ | WB.F.034 | WB.P.C.58 | إقفال التنفيذ | Execution closure | CP-189 | High | CP-189 | High |
| 190 | S060 | S038 | إغلاق نظامي | Regulatory closure | محضر إغلاق | WB.F.028 | WB.P.C.58 | إنهاء نظامي | Regulatory termination | CP-190 | High | CP-190 | High |
| 191 | S061 | S039 | أرشفة | Archival | سياسة أرشفة | WB.F.081 | WB.P.C.59 | حفظ السجلات | Record preservation | CP-191 | Low | CP-191 | Low |
| 192 | S062 | S006 | إعادة تحقيق أولي | Re-investigate initial | قرار إلغاء تصعيد | WB.F.089 | WB.P.C.60 | محقق جديد | New investigator | CP-192 | High | CP-192 | High |
| 193 | S062 | S010 | قرار مباشر | Direct decision | نموذج قرار | WB.F.030 | WB.P.C.60 | حسم مباشر | Direct resolution | CP-193 | Medium | CP-193 | Medium |
| 194 | S063 | S004 | استكمال التنسيق | Coordination complete | مراسلات رسمية | WB.F.015 | WB.P.C.61 | استئناف التقييم | Assessment resume | CP-194 | Medium | CP-194 | Medium |
| 195 | S063 | S006 | تنسيق للتحقيق | Coordination to investigation | مراسلات رسمية | WB.F.015 | WB.P.C.61 | بدء التحقيق | Investigation start | CP-195 | Medium | CP-195 | Medium |
| 196 | S064 | S004 | رفع التعليق النظامي | System suspension lifted | قرار رفع التعليق | WB.F.090 | WB.P.C.62 | استئناف التقييم | Assessment resume | CP-196 | Critical | CP-196 | Critical |
| 197 | S064 | S006 | رفع التعليق النظامي | System suspension lifted | قرار رفع التعليق | WB.F.090 | WB.P.C.62 | استئناف التحقيق | Investigation resume | CP-197 | Critical | CP-197 | Critical |
| 198 | S065 | S039 | إغلاق إحالة | Referral closure | محضر إغلاق | WB.F.028 | WB.P.C.63 | توثيق الإحالة | Referral documentation | CP-198 | High | CP-198 | High |
| 199 | S066 | S036 | متابعة مركبة | Combined follow-up | تقارير تنفيذ | WB.F.045 | WB.P.C.64 | متابعة دورية | Periodic monitoring | CP-199 | High | CP-199 | High |
| 200 | S066 | S037 | اكتمال مركب | Combined completion | إثبات تنفيذ | WB.F.034 | WB.P.C.64 | إقفال التنفيذ | Execution closure | CP-200 | High | CP-200 | High |
| 201 | S067 | S036 | متابعة مستمرة | Continuous follow-up | محضر متابعة | WB.F.049 | WB.P.C.65 | تقدم مثبت | Progress documented | CP-201 | Medium | CP-201 | Medium |
| 202 | S067 | S071 | مراجعة لاحقة | Post-closure review | خطة مراجعة | WB.F.078 | WB.P.C.65 | تحسين الجودة | Quality improvement | CP-202 | Medium | CP-202 | Medium |
| 203 | S068 | S036 | استئناف المتابعة | Resume follow-up | خطة تصحيح | WB.F.066 | WB.P.C.66 | تقدم مثبت | Progress documented | CP-203 | Medium | CP-203 | Medium |
| 204 | S068 | S037 | اكتمال التنفيذ | Execution complete | إثبات تنفيذ | WB.F.034 | WB.P.C.66 | إقفال التنفيذ | Execution closure | CP-204 | Medium | CP-204 | Medium |
| 205 | S069 | S004 | تنسيق مكتمل | Urgent coordination complete | مراسلة عاجلة | WB.F.016 | WB.P.C.67 | استئناف التقييم | Assessment resume | CP-205 | Critical | CP-205 | Critical |
| 206 | S069 | S006 | تنسيق للتحقيق العاجل | Urgent coordination to investigation | مراسلة عاجلة | WB.F.016 | WB.P.C.67 | بدء تحقيق عاجل | Urgent investigation start | CP-206 | Critical | CP-206 | Critical |
| 207 | S070 | S067 | متابعة إعادة فتح | Reopen follow-up | قرار إعادة فتح | WB.F.082 | WB.P.C.68 | متابعة دورية | Periodic monitoring | CP-207 | High | CP-207 | High |
| 208 | S070 | S071 | مراجعة إعادة فتح | Reopen review | خطة مراجعة | WB.F.078 | WB.P.C.68 | تحسين الجودة | Quality improvement | CP-208 | High | CP-208 | High |
| 209 | S071 | S085 | متابعة مستمرة | Continuous follow-up | محضر متابعة | WB.F.049 | WB.P.C.69 | تقدم مثبت | Progress documented | CP-209 | Medium | CP-209 | Medium |
| 210 | S071 | S094 | مراجعة جودة | Quality review | تقرير مراجعة | WB.F.078 | WB.P.C.69 | تحسين الجودة | Quality improvement | CP-210 | Medium | CP-210 | Medium |
| 211 | S072 | S071 | نقل مكتمل | Ownership transfer complete | محضر نقل | WB.F.091 | WB.P.C.70 | استمرار المتابعة | Follow-up continuity | CP-211 | Medium | CP-211 | Medium |
| 212 | S072 | S085 | متابعة بعد النقل | Post-transfer follow-up | محضر متابعة | WB.F.049 | WB.P.C.70 | تقدم مثبت | Progress documented | CP-212 | Medium | CP-212 | Medium |
| 213 | S073 | S075 | استئناف بمحامٍ | Resume with lawyer | إشعار استئناف | WB.F.092 | WB.P.C.71 | استكمال التحقيق | Investigation completion | CP-213 | High | CP-213 | High |
| 214 | S074 | S075 | استئناف بعد إجازة | Resume after leave | إشعار استئناف | WB.F.093 | WB.P.C.72 | استكمال التحقيق | Investigation completion | CP-214 | Low | CP-214 | Low |
| 215 | S075 | S006 | استئناف تحقيق أولي | Resume initial investigation | — | WB.P.C.73 | استكمال التحقيق | Investigation completion | CP-215 | Medium | CP-215 | Medium |
| 216 | S075 | S017 | استئناف تحقيق ثانوي | Resume secondary investigation | — | WB.P.C.73 | استكمال التحقيق | Investigation completion | CP-216 | High | CP-216 | High |
| 217 | S076 | S016 | تصعيد عاجل | Urgent escalation | محضر تصعيد | WB.F.020 | WB.P.C.74 | بدء تحقيق موسّع | Expanded investigation start | CP-217 | Critical | CP-217 | Critical |
| 218 | S076 | S028 | مراجعة عاجلة | Urgent review | تقرير مراجعة | WB.F.073 | WB.P.C.74 | ضمان الجودة | Quality assurance | CP-218 | Critical | CP-218 | Critical |
| 219 | S076 | S030 | توصية عاجلة | Urgent recommendation | تقرير نهائي | WB.F.050 | WB.P.C.74 | تمهيد القرار | Decision preparation | CP-219 | Critical | CP-219 | Critical |
| 220 | S077 | S004 | رفع تعليق كامل | Full suspension lifted | قرار رفع التعليق | WB.F.094 | WB.P.C.75 | استئناف التقييم | Assessment resume | CP-220 | Critical | CP-220 | Critical |
| 221 | S077 | S006 | رفع تعليق كامل | Full suspension lifted | قرار رفع التعليق | WB.F.094 | WB.P.C.75 | استئناف التحقيق | Investigation resume | CP-221 | Critical | CP-221 | Critical |
| 222 | S078 | S006 | تعيين محقق بديل | Alternate investigator assigned | قرار تعيين | WB.F.072 | WB.P.C.76 | بدء التحقيق | Investigation start | CP-222 | High | CP-222 | High |
| 223 | S078 | S017 | تشكيل لجنة جديدة | New committee formed | قرار التشكيل | WB.F.051 | WB.P.C.76 | بدء التحقيق الموسّع | Expanded investigation start | CP-223 | High | CP-223 | High |
| 224 | S079 | S021 | جدولة جديدة | New schedule | إشعار جدولة | WB.F.070 | WB.P.C.77 | استئناف الجلسة | Hearing resume | CP-224 | Medium | CP-224 | Medium |
| 225 | S079 | S032 | تأجيل جديد | New postponement | إشعار تعذر | WB.F.069 | WB.P.C.77 | ضمان العدالة | Justice guarantee | CP-225 | Medium | CP-225 | Medium |
| 226 | S080 | S023 | استمرار عدم التعاون | Continued non-cooperation | محضر امتناع | WB.F.057 | WB.P.C.78 | توثيق الامتناع | Document non-cooperation | CP-226 | High | CP-226 | High |
| 227 | S080 | S024 | تعليق للامتناع | Suspension for non-cooperation | محضر تعليق | WB.F.053 | WB.P.C.78 | إدارة المخاطر | Risk management | CP-227 | High | CP-227 | High |
| 228 | S081 | S012 | استلام الرأي القانوني | Legal opinion received | نموذج رأي قانوني | WB.F.040 | WB.P.C.79 | استئناف القرار | Decision resume | CP-228 | High | CP-228 | High |
| 229 | S081 | S119 | رأي اختصاصي مطلوب | Expert opinion required | طلب رأي فني | WB.F.038 | WB.P.C.79 | دعم القرار | Decision support | CP-229 | Medium | CP-229 | Medium |
| 230 | S082 | S004 | استلام مستندات جوهرية | Critical documents received | — | WB.P.C.80 | استئناف التقييم | Assessment resume | CP-230 | Medium | CP-230 | Medium |

---

## 8. Appendices | الملاحق

### 8.1 Document References | مراجع الوثائق

| Reference | الوصف (AR) | Description (EN) |
|-----------|------------|------------------|
| CRM_Status.md | مواصفات الحالات التفصيلية | Detailed status specifications |
| WB.P.C.XX | إجراءات التشغيل القياسية | Standard Operating Procedures |
| WB.F.XXX | نماذج النظام | System Forms |

### 8.2 Control Points Summary | ملخص نقاط الرقابة

| Risk Level | Count | Description |
|------------|-------|-------------|
| Low | 45 | انتقالات روتينية منخفضة المخاطر |
| Medium | 85 | انتقالات تتطلب مراقبة متوسطة |
| High | 48 | انتقالات عالية المخاطر تتطلب اعتماد |
| Critical | 8 | انتقالات حرجة تتطلب تصعيد فوري |

### 8.3 Version History | سجل الإصدارات

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-01-27 | CDF Whistleblowing Team | Initial release |

---

**Document Owner**: Governance, Risk & Compliance Department  
**Classification**: Internal Use Only  
**Last Updated**: 2025-01-27
