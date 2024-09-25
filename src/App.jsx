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
   <footer id="footer"></footer>
  
    </>
  )
}

export default App
