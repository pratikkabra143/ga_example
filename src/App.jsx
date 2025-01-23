import React from 'react';
import GA4React from 'ga-4-react';

const ga4react = new GA4React('G-MKX07C4XSN'); // Replace with your Measurement ID

function App() {
  const handleClick = () => {
    ga4react.gtag('event', 'button_click', {
      event_category: 'engagement',
      event_label: 'Click Me Button',
    });
    alert('Button clicked!');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to My Simple React App</h1>
      <p>This is a one-page app with Google Analytics 4 tracking.</p>
      <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Click Me
      </button>
    </div>
  );
}

export default App;
