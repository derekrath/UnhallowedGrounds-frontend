import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import AppProvider from './AppContext';

ReactDOM.render(
  <AppProvider>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </AppProvider>,
  document.getElementById('root')
);

reportWebVitals();
