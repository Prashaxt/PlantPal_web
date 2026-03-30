import './App.css'
import AboutUs from './components/AboutUs'
import AppSection from './components/AppSection'
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

      <WWWD />

      <AppSection />

      <section id="HelpSupport">
        <HelpSupport />
      </section>

      <Comp2 />

      <Footer />
    </>
  )
}

export default App
