import Header from './Components/Hero'
import FloatingCanvas from './Components/FloatingCanvas'
import Navbar from './Components/Navbar'
import React from 'react'
import AboutMe from './Components/Aboutme'
import Skills  from './Components/Skills'
import Projects from './Components/Project'
import ContactMe from './Components/ContactMe'
import Fotter from './Components/Fotter'
import Experience from './Components/Experience'

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <Header />
      <FloatingCanvas />
      <AboutMe />
      <Skills />
      <Experience/>
      <Projects />
      <ContactMe />
      <Fotter />
    </div>
  )
}

export default App
