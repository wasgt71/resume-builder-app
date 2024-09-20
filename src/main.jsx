import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Contact from './components/contactForm.jsx'
import Education from './components/educationForm.jsx'
import Experience from './components/practicalExperience.jsx'
import './styles/contact.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contact />
   <Education />
   <Experience />
  </StrictMode>
)
