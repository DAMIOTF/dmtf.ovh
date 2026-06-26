import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const kontener = document.getElementById('root');

createRoot(kontener).render(
  <StrictMode>
    <App />
  </StrictMode>
);
