import { useState } from "react"
import { Section } from "./Section"
import { CheckCircle2 } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"

export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle")
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")
    
    setTimeout(() => {
      setStatus("success")
      
      const text = `Olá, meu nome é ${formData.name}.%0AEmail: ${formData.email}%0AAssunto: ${formData.subject}%0A%0A${formData.message}`
      const url = `https://wa.me/5587988568826?text=${text}`
      window.open(url, "_blank")
      
      setTimeout(() => {
        setStatus("idle")
        setFormData({ name: "", email: "", subject: "", message: "" })
      }, 3000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  return (
    <Section id="contato">
      <div className="max-w-xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight mb-4">Vamos construir algo incrível?</h2>
        <p className="text-muted-foreground text-lg mb-4">
          Tem um projeto, oportunidade ou desafio em mente? Entre em contato comigo diretamente pelo WhatsApp!
        </p>
        <div className="flex items-center justify-center gap-2 text-primary font-medium">
          <FaWhatsapp className="w-5 h-5 text-green-500" />
          <span>(87) 98856-8826</span>
        </div>
      </div>

      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-foreground">Nome</label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              placeholder="Seu nome"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-foreground">E-mail</label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              placeholder="seu@email.com"
            />
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-1.5 text-foreground">Assunto</label>
            <input
              type="text"
              id="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              placeholder="Sobre o que vamos conversar?"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-foreground">Mensagem</label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
              placeholder="Conte mais sobre o seu projeto..."
            />
          </div>
          
          <button
            type="submit"
            disabled={status !== "idle"}
            className="w-full relative flex items-center justify-center h-12 bg-[#25D366] text-white rounded-lg font-medium hover:bg-[#25D366]/90 transition-colors disabled:opacity-80 disabled:cursor-not-allowed"
          >
            <AnimatePresence mode="wait">
              {status === "idle" && (
                <motion.div key="idle" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex items-center gap-2">
                  <FaWhatsapp className="w-5 h-5" />
                  Enviar via WhatsApp
                </motion.div>
              )}
              {status === "submitting" && (
                <motion.div key="submitting" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Preparando...
                </motion.div>
              )}
              {status === "success" && (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Redirecionando!
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </form>
      </div>
    </Section>
  )
}
