import { useEffect, useState } from 'react'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Skills } from '@/components/Skills'
import { Projects } from '@/components/Projects'
import { Experience } from '@/components/Experience'
import { Education } from '@/components/Education'
import { Achievements } from '@/components/Achievements'
import { Languages } from '@/components/Languages'
import { Contacts } from '@/components/Contacts'
import { Footer } from '@/components/Footer'

type Theme = 'dark' | 'light'

function App() {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  return (
    <div className="min-h-screen">
      <Header theme={theme} onThemeChange={setTheme} />
      <main className="container mx-auto max-w-5xl px-4 py-8">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Languages />
        <Contacts />
      </main>
      <Footer />
    </div>
  )
}

export default App
