# JSX Development Guidelines - CDF Whistleblowing Prototype

<div align="center" style="margin-bottom: 2rem;">

## 🏛️ الصندوق الثقافي للتنمية الثقافية
## Cultural Development Fund

### JSX Development Guidelines & Standards

**Official Documentation for CDF Whistleblowing Prototype**

---

</div>

## 🚨 CRITICAL: JSX Structure Rules (MANDATORY)

### The Golden Rule
**EVERY JSX element MUST be inside a `return()` statement. No exceptions.**

---

## ❌ FORBIDDEN PATTERNS (NEVER DO THESE)

### 1. JSX Outside Return
```tsx
// ❌ NEVER DO THIS
export function Component() {
  return (
    <div>Content</div>
  );
}
<p>This is OUTSIDE return - WILL BREAK!</p>  // ← FORBIDDEN
```

### 2. Invalid Characters in JSX
```tsx
// ❌ NEVER DO THIS
return (
  <div>
    [Some text with brackets]  // ← FORBIDDEN
    {invalid syntax}
  </div>
);
```

### 3. Multiple Root Elements
```tsx
// ❌ NEVER DO THIS
return (
  <div>First element</div>
  <div>Second element</div>  // ← FORBIDDEN - needs wrapper
);
```

### 4. Unclosed/Mismatched Tags
```tsx
// ❌ NEVER DO THIS
return (
  <div>  // ← Opened
    <p>Content</p>
  // ← Missing closing </div>
);
```

---

## ✅ REQUIRED PATTERNS (ALWAYS DO THESE)

### 1. Single Root Element
```tsx
// ✅ ALWAYS DO THIS
export function Component() {
  return (
    <div className="wrapper">
      <p>All content inside wrapper</p>
      <ChildComponent />
    </div>
  );
}
```

### 2. Use Fragments for Multiple Elements
```tsx
// ✅ ALWAYS DO THIS
return (
  <>
    <div>Element 1</div>
    <div>Element 2</div>
    <div>Element 3</div>
  </>
);
```

### 3. Proper Import/Export Consistency
```tsx
// ✅ DEFAULT EXPORT
export default function Component() {
  return <div>Content</div>;
}

// Import with:
import Component from "./Component";

// ✅ NAMED EXPORT  
export function Component() {
  return <div>Content</div>;
}

// Import with:
import { Component } from "./Component";
```

### 4. Proper Component Structure
```tsx
// ✅ ALWAYS FOLLOW THIS PATTERN
export function ComponentName() {
  // 1. State declarations
  const [state, setState] = useState();
  
  // 2. Handler functions
  const handleClick = () => {
    // Logic here
  };
  
  // 3. Single return statement
  return (
    <div className="container">
      {/* All JSX inside return */}
      <ChildComponent />
    </div>
  );
}
```

---

## 🔍 PRE-COMMIT CHECKLIST (MANDATORY)

Before committing any JSX code, verify:

### ✅ Structure Validation
- [ ] All JSX is inside `return()`
- [ ] Single root element or Fragment wrapper
- [ ] No orphaned JSX elements
- [ ] All opening tags have matching closing tags

### ✅ Syntax Validation  
- [ ] No `[` or `]` brackets in JSX (unless in expressions)
- [ ] No invalid characters in JSX
- [ ] Proper indentation and nesting
- [ ] No `); }` followed by JSX

### ✅ Import/Export Validation
- [ ] Import matches export type (default vs named)
- [ ] Correct file paths
- [ ] No circular dependencies

### ✅ TypeScript Validation
- [ ] No implicit `any` types
- [ ] Proper type annotations
- [ ] No Promise/async issues in older environments

---

## 🛠️ DEVELOPMENT WORKFLOW

### Step 1: Write Component
```tsx
// Start with basic structure
export function ComponentName() {
  return (
    <div>
      {/* Build incrementally */}
    </div>
  );
}
```

### Step 2: Add State
```tsx
export function ComponentName() {
  const [state, setState] = useState(initialValue);
  
  return (
    <div>
      {/* Use state */}
    </div>
  );
}
```

### Step 3: Add Handlers
```tsx
export function ComponentName() {
  const [state, setState] = useState(initialValue);
  
  const handleAction = () => {
    setState(newValue);
  };
  
  return (
    <div>
      <button onClick={handleAction}>Click me</button>
    </div>
  );
}
```

### Step 4: Test Before Commit
```bash
# Always test locally
npm run dev

# Check for errors
npm run build
```

---

## 🚨 COMMON ERROR PATTERNS & SOLUTIONS

### Error: "Adjacent JSX elements must be wrapped"
```tsx
// ❌ CAUSE
return (
  <div>Element 1</div>
  <div>Element 2</div>
);

// ✅ SOLUTION
return (
  <>
    <div>Element 1</div>
    <div>Element 2</div>
  </>
);
```

### Error: "Unexpected token"
```tsx
// ❌ CAUSE
return (
  <div>Content</div>
);
}
<p>Orphaned element</p>

// ✅ SOLUTION
return (
  <>
    <div>Content</div>
    <p>Element inside return</p>
  </>
);
```

### Error: "Cannot find module"
```tsx
// ❌ CAUSE
import { Component } from "./Component";  // Component uses default export

// ✅ SOLUTION
import Component from "./Component";  // Match export type
```

---

## 📋 COMPONENT TEMPLATES

### Basic Component Template
```tsx
import { useState } from "react";

export default function ComponentName() {
  const [state, setState] = useState(initialValue);
  
  const handleAction = () => {
    // Handler logic
  };
  
  return (
    <div className="component-wrapper">
      <h2>Component Title</h2>
      {/* Component content */}
    </div>
  );
}
```

### Form Component Template
```tsx
import { useState } from "react";

export default function FormComponent() {
  const [formData, setFormData] = useState({
    field1: "",
    field2: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = () => {
    // Submit logic
  };
  
  return (
    <form className="form-wrapper">
      <input
        name="field1"
        value={formData.field1}
        onChange={handleChange}
      />
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}
```

---

## 🔧 TROUBLESHOOTING GUIDE

### If JSX Errors Occur:
1. **Check return statement** - Is all JSX inside?
2. **Check wrapper** - Single root element?
3. **Check imports** - Match export types?
4. **Check syntax** - No invalid characters?
5. **Check nesting** - All tags properly closed?

### Quick Fix Process:
```bash
# 1. Identify error location
npm run dev

# 2. Check component structure
# 3. Apply fixes from this guide
# 4. Test again
npm run dev
```

---

## ⚡ PERFORMANCE BEST PRACTICES

### Do:
- Use React.memo for expensive components
- Implement proper key props in lists
- Use useCallback for handlers
- Minimize re-renders

### Don't:
- Create functions in render (unless needed)
- Use indexes as keys (unless static)
- Over-optimize prematurely
- Ignore React DevTools warnings

---

## 🎯 FINAL REMINDER

**The #1 rule: ALL JSX MUST BE INSIDE RETURN()**

If you remember nothing else from this guide, remember this one rule. It prevents 90% of JSX errors.

---

## 📞 EMERGENCY CONTACT

If you encounter JSX errors that this guide doesn't cover:
1. Stop and review the basic rules
2. Check the component structure template
3. Simplify the component to basic form
4. Build incrementally from there

**Never commit broken JSX code.**
