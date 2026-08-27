import { ThemeProvider } from "./components/ThemeProvider"
import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Experience } from "./components/Experience"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { Architecture } from "./components/Architecture"
import { Education } from "./components/Education"
import { GithubActivity } from "./components/GithubActivity"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background text-foreground flex flex-col font-sans overflow-x-hidden">
        <Navbar />
        
        <main className="flex-grow">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Architecture />
          <Education />
          <GithubActivity />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
