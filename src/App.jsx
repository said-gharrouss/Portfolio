import { useSelector } from 'react-redux'
import './App.css'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import NavBar from './components/Navbar/NavBar'
import Skills from './components/Skills/Skills'
import Portfolio from './components/Portfolio/Portfolio'
import About from './components/About/About'

function App() {
  const state = useSelector(state => state)

  return (
    <div className={`${state === "night" ? "bg-primary_dark text-white" : ""} `}>
        <NavBar/>
        <Hero/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App
