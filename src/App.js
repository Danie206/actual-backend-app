import React from 'react';
import './App.css';
// Import firebase for initialization
import './firebase';

function App() {
  return (
    <div className="App" style={{ 
      backgroundColor: 'black', 
      color: 'lime',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '20px',
      fontFamily: 'monospace'
    }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>
        THIS IS MY CUSTOM APP
      </h1>
      <h2 style={{ color: 'yellow' }}>
        Not the default Firebase page!
      </h2>
      <p style={{ marginTop: '40px' }}>
        If you're seeing this, your React app deployment is working!
      </p>
      <p style={{ fontSize: '12px', marginTop: '40px' }}>
        Timestamp: {new Date().toLocaleString()}
      </p>
    </div>
  );
}

export default App;