import { Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-12 bg-muted/20">
      <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="text-lg font-bold tracking-tight mb-1">
            Romão Pereira de Araújo
          </div>
          <div className="text-sm text-muted-foreground">
            Desenvolvendo soluções, aprendendo continuamente.
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/romaopereira" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com/in/romaopereira" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a 
            href="mailto:contato@romao.dev" 
            className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            aria-label="E-mail"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      <div className="container mx-auto px-6 max-w-5xl mt-8 pt-8 border-t border-border/50 text-center text-xs text-muted-foreground">
        © {currentYear} Romão Pereira de Araújo. Todos os direitos reservados.
      </div>
    </footer>
  )
}
