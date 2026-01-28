console.log('App-debug.tsx: Component starting');

export default function App() {
  console.log('App-debug.tsx: Render function called');
  
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: 'blue', fontSize: '24px' }}>Debug Page</h1>
      <p>If you can see this, React is working!</p>
      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0' }}>
        <p>Current time: {new Date().toLocaleString()}</p>
        <p>Window location: {typeof window !== 'undefined' ? window.location.href : 'SSR'}</p>
      </div>
    </div>
  );
}
