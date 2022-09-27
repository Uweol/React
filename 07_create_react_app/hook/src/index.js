import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //App이라는 친구를 불러줌.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
