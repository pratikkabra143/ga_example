import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GA4React from 'ga-4-react';

const ga4react = new GA4React('G-MKX07C4XSN'); 

(async () => {
  await ga4react.initialize()
    .then(() => console.log('GA4 initialized successfully'))
    .catch((err) => console.log('GA4 initialization failed', err))
    .finally(() => {
      ReactDOM.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>,
        document.getElementById('root')
      );
    });
})();
