import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

import Cursor  from './components/Cursor'
import Loader  from './components/Loader'
import Navbar  from './components/Navbar'
import Ticker  from './components/Ticker'
import Footer  from './components/Footer'

import Hero       from './sections/Hero'
import About      from './sections/About'
import Skills     from './sections/Skills'
import Work       from './sections/Work'
import Experience from './sections/Experience'
import Contact    from './sections/Contact'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {/* Custom cursor — always on top */}
      <Cursor />

      {/* Loader with exit animation */}
      <AnimatePresence>
        {loading && <Loader onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Main site — renders beneath loader */}
      <div style={{ visibility: loading ? 'hidden' : 'visible' }}>
        <Navbar />

        <main>
          <Hero />
          <Ticker />
          <About />
          <Skills />
          <Work />
          <Experience />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  )
}
