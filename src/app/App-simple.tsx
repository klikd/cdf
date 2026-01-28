// Simple test component without complex dependencies
console.log('App-simple.tsx: File loaded');

function App() {
  console.log('App-simple.tsx: Function called');
  
  try {
    return React.createElement('div', {
      style: {
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f0f8ff',
        border: '2px solid #007bff',
        borderRadius: '8px'
      }
    }, [
      React.createElement('h1', {
        key: 'title',
        style: { color: '#007bff', marginBottom: '16px' }
      }, 'Simple React Test'),
      
      React.createElement('p', {
        key: 'desc',
        style: { marginBottom: '16px' }
      }, 'If you see this, React.createElement works!'),
      
      React.createElement('div', {
        key: 'info',
        style: {
          backgroundColor: '#e9ecef',
          padding: '12px',
          borderRadius: '4px'
        }
      }, [
        React.createElement('p', { key: 'time' }, `Time: ${new Date().toLocaleString()}`),
        React.createElement('p', { key: 'location' }, `URL: ${typeof window !== 'undefined' ? window.location.href : 'SSR'}`),
        React.createElement('p', { key: 'react' }, `React version: ${React.version || 'unknown'}`)
      ]),
      
      React.createElement('button', {
        key: 'button',
        onClick: () => alert('Button clicked!'),
        style: {
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }
      }, 'Test Button')
    ]);
  } catch (error) {
    console.error('App-simple.tsx: Error in render:', error);
    return React.createElement('div', {
      style: { padding: '20px', color: 'red', border: '2px solid red' }
    }, `Error: ${error.message}`);
  }
}

console.log('App-simple.tsx: Component defined');
export default App;
