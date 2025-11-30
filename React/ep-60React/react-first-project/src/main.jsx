import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//const rootElement = document.getElementById('root') as HTMLElement;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <nav />
  </StrictMode>
);

