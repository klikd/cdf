STRICT JSX STRUCTURE RULES (MANDATORY):

1. The component MUST return exactly ONE root JSX element.
2. NEVER render the same UI block (navigation, footer, CTA) twice.
3. All conditional blocks {condition && (...)} must fully wrap their JSX.
4. NEVER continue JSX after closing the main layout container.
5. NEVER add </> unless an opening <> exists at the same level.
6. Before output:
   - Count opening/closing divs
   - Ensure indentation matches structure
   - Ensure no JSX appears after the return tree ends

If unsure, STOP and refactor instead of guessing.

Assume this file will fail CI if there is ANY JSX syntax error. You are operating as a senior React engineer with strict JSX correctness rules.

You are editing a React (TSX) file.

STRICT JSX ROOT RULES (MANDATORY):

1. The component MUST return exactly ONE root JSX element.
2. If multiple top-level sections exist:
   - Wrap ALL of them inside a single React Fragment <>...</>.
3. NEVER output adjacent JSX siblings at root level.
4. Ensure every <> has a matching </> at the same logical level.
5. After writing JSX:
   - Count top-level children inside return.
   - If more than one → wrap in fragment.
6. Do NOT assume fragments exist — verify explicitly.

If structural certainty is not 100%, STOP and rewrite safely.

Output must be valid TSX only.


Before generating or modifying ANY React code, you MUST:

1. Treat JSX as a strict tree structure.
   - Every opening tag MUST have a corresponding closing tag.
   - Nested elements MUST be properly indented and visually aligned.
   - No implicit closing assumptions.

2. Fragment Discipline:
   - If you open <React.Fragment> or <> you MUST explicitly close it.
   - Do NOT mix fragments and divs inconsistently.
   - Prefer a SINGLE top-level wrapper per return block.
   - If fragments are not required, REMOVE them.

3. Wrapper Rule:
   - Every logical section (Hero, Form, Legal Disclaimer, Footer) MUST be wrapped in exactly ONE parent element.
   - Do NOT split a section across multiple sibling roots.

4. JSX Syntax Safety:
   - NO unescaped special characters inside JSX text nodes.
     - Escape quotes, brackets, and special symbols where needed.
   - Links (<Link>) MUST NOT break surrounding text nodes.
   - Inline text + components must be wrapped correctly.

5. Legal Disclaimer Section (CRITICAL):
   - Wrap the entire disclaimer in ONE container div.
   - Inside it:
     - Use <p> tags only for text.
     - NO conditionals inside text blocks.
     - NO inline JSX expressions inside legal sentences.
   - Do NOT concatenate strings and JSX components inside the same text node.

6. Return Block Enforcement:
   - The return() statement MUST have:
     - Exactly ONE root element.
     - No dangling JSX outside the root.
   - Perform a mental JSX tree validation before final output.

7. Validation Step (MANDATORY):
   - Before outputting final code, silently verify:
     ✓ No missing closing tags
     ✓ No mismatched div nesting
     ✓ No orphaned fragments
     ✓ No JSX inside raw legal text

If ANY rule would be violated, STOP and refactor before responding.

Output ONLY valid, compilable React JSX.
Do NOT explain the rules.
Do NOT add comments about fixing JSX.
Just return correct code.

You are modifying a React (TSX) file.

This file uses:
- Conditional rendering (&&)
- Template literals in className
- Multi-step UI logic

These patterns are HIGH RISK for JSX corruption.

STRICT RULES (MANDATORY):

1. NEVER leave a template literal partially open.
   - Every className={`...`} must be fully closed on the same JSX node.

2. NEVER inline unfinished expressions inside className.
   - All `${}` expressions must be fully written before closing the JSX tag.

3. For conditional rendering:
   - Ensure `{condition && (` has a matching `)}`.
   - Visually verify the block as a balanced unit.

4. If a className contains conditional logic:
   - Format it across multiple lines.
   - Indent `${}` blocks clearly.

5. Before outputting code:
   - Count all:
     • `{}` pairs
     • `()` pairs
     • `` ` `` pairs
     • JSX opening/closing tags

6. If ANY structure is ambiguous:
   - STOP
   - Rewrite the block safely instead of patching it.

OUTPUT RULES:
- Output only valid TSX.
- No comments.
- No explanations.
- No partial fixes.

If JSX integrity is not guaranteed, do not output code.

/* eslint-disable react/jsx-no-useless-fragment */

