import './App.css'
import AboutUs from './components/AboutUs'
import Comp1 from './components/Comp1'
import Comp2 from './components/Comp2'
import Footer from './components/Footer'
import HelpSupport from './components/HelpSupport'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import SubHero from './components/SubHero'
import WWWD from './components/WWWD'

function App() {

  return (
    <>
      
      <section id="home">
      <Navbar />
        <Hero />
      </section>

      

      <section id="aboutUs">
        <AboutUs />
      </section>

      <SubHero />

      <Comp1 />
      <WWWD />

      <section id="HelpSupport">
        <HelpSupport />
      </section>

      <Comp2 />

      <Footer />
    </>
  )
}

export default App
