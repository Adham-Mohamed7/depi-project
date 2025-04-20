import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import ContactUs from './src/contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ContactUs />
  </StrictMode>,
)
