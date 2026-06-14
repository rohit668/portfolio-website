import './index.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import Skills from './sections/Skills/Skills'
import Projects from './sections/Projects/Projects'
import Experience from './sections/Experience/Experience'
import Contact from './sections/Contact/Contact'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer style={{ padding: '4rem 2rem', textAlign: 'center', color: 'var(--text-muted)', borderTop: '1px solid var(--glass-border)' }}>
        <p>&copy; {new Date().getFullYear()} Chetan Rohit. All rights reserved.</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>Built with React, TypeScript & Glassmorphism</p>
      </footer>
    </div>
  )
}

export default App
