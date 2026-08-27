import { motion } from "framer-motion"
import { Mail, ArrowRight } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Section } from "./Section"

export function Hero() {
  return (
    <Section id="home" className="min-h-[90vh] flex items-center pt-32 pb-20 md:py-0">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-sm font-medium mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Disponível para novas oportunidades
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
        >
          Olá, eu sou <span className="text-muted-foreground">Romão.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed"
        >
          Desenvolvedor Full Stack apaixonado por transformar problemas complexos em soluções digitais elegantes e escaláveis.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <a
            href="#projetos"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Ver projetos
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contato"
            className="inline-flex items-center justify-center gap-2 bg-transparent text-foreground border border-border px-6 py-3 rounded-md font-medium hover:bg-muted transition-colors"
          >
            Entrar em contato
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-6 text-muted-foreground"
        >
          <a href="https://github.com/romaopereira" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="GitHub">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="www.linkedin.com/in/romão-pereira-4b9453335" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="LinkedIn">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="contato.romaopereira@gmail.com" className="hover:text-foreground transition-colors" aria-label="E-mail">
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </Section>
  )
}
