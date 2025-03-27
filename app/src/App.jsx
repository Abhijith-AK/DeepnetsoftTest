import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Display from './components/Display'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ItemModal from './components/Modals/ItemModal'
import MenuModal from './components/Modals/MenuModal'

function App() {
  const [isItemOpen, setIsItemOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Header />
      <Hero />
      <Menu setIsMenuOpen={setIsMenuOpen} />
      <Display setIsItemOpen={setIsItemOpen} />
      <Contact />
      <Footer />
      <MenuModal isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <ItemModal isItemOpen={isItemOpen} setIsItemOpen={setIsItemOpen} />
    </>
  )
}

export default App
