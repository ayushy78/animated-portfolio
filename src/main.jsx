import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Assuming this is where your CSS file is located
import App from './App';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="custom-cursor">
      <App />
    </div>
  </React.StrictMode>
);
