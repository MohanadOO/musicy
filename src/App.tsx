import Nav from './components/Nav'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Services from './components/Services'
import Community from './components/Community'
import Formats from './components/Formats/Formats'

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <Formats />
        <Services />
        <Community />
      </main>
      <Footer />
    </>
  )
}

export default App
