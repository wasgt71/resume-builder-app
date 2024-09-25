import { useState } from 'react'
import Contact from './components/contactForm.jsx'
import Education from './components/educationForm.jsx'
import Experience from './components/practicalExperience.jsx'
import './App.css';

function App() {
  

  return (
    <>
   <div>
    <Contact></Contact>
   </div>
   <div>
    <Education></Education>
   </div>
   <div>
    <Experience></Experience>
   </div>
   <footer id="footer">
   <div id="div-p">
      <p id="p">&copy; 2024 By Tristan Wassilyn. Made with tenacity.</p>
  </div>
   </footer>
  
    </>
  )
}

export default App
