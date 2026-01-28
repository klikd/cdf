// Pure HTML test - no React at all
document.getElementById('root')!.innerHTML = `
  <div style="padding: 20px; font-family: Arial, sans-serif;">
    <h1 style="color: blue; font-size: 24px;">Pure HTML Test</h1>
    <p>If you see this, the basic HTML structure works!</p>
    <p style="background: #f0f0f0; padding: 10px; margin: 10px 0;">
      Current time: ${new Date().toLocaleString()}
    </p>
    <div style="border: 2px solid green; padding: 10px;">
      <p><strong>Diagnosis Status:</strong></p>
      <ul>
        <li>✅ HTML loads</li>
        <li>✅ JavaScript executes</li>
        <li>❓ React issue?</li>
      </ul>
    </div>
  </div>
`;
