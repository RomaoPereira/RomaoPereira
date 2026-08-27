import { useState } from "react"
import { Section } from "./Section"
import { ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "../lib/utils"

const filters = ["Todos", "Frontend", "Backend", "Full Stack"]

const projects = [
  {
    title: "Sistema PIBITI",
    description: "Sistema de Otimização desenvolvido para o projeto PIBITI, visando resolver gargalos e melhorar a eficiência de processos.",
    category: "Full Stack",
    techs: ["React", "TypeScript", "Node.js", "Express", "Vercel"],
    problem: "Necessidade de uma plataforma para gerenciar e otimizar dados de forma eficiente para o projeto de pesquisa.",
    solution: "Desenvolvimento de um sistema completo com interface intuitiva para cadastro e visualização de dados e backend robusto para processamento.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/RomaoPereira/SistemaOtimizacao",
    demo: "https://sistema-otimizacao-phi.vercel.app/login"
  },
  {
    title: "Site de Casamento",
    description: "Plataforma interativa desenvolvida para gerenciar informações, lista de presentes e confirmação de presença do casamento.",
    category: "Frontend",
    techs: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    problem: "Centralizar todas as informações do evento e facilitar a confirmação de presença dos convidados de forma elegante.",
    solution: "Criação de uma interface responsiva, com design premium, animações suaves e formulário interativo para os convidados.",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/RomaoPereira/Casamento",
    demo: "https://casamento-delta-six.vercel.app/"
  }
]

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("Todos")
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects = projects.filter(
    (p) => activeFilter === "Todos" || p.category === activeFilter
  )

  return (
    <Section id="projetos" className="bg-muted/30">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-4">Projetos em destaque</h2>
          <p className="text-muted-foreground max-w-2xl">
            Uma seleção de projetos que demonstram minha capacidade de resolver problemas e construir soluções escaláveis.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-background border border-border hover:bg-muted text-foreground"
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.title}
              className="group flex flex-col bg-background border border-border rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-all hover:border-primary/50"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <div className="absolute inset-0 bg-foreground/10 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techs.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-muted rounded-md font-medium">
                      {tech}
                    </span>
                  ))}
                  {project.techs.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-muted rounded-md font-medium">
                      +{project.techs.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal / Dialog for project details could be added here */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="fixed inset-x-4 top-[10%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:max-w-2xl w-full max-h-[80vh] overflow-y-auto bg-background border border-border rounded-2xl shadow-2xl z-50 p-6 md:p-8 custom-scrollbar"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">{selectedProject.category}</div>
                  <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 bg-muted hover:bg-muted/80 rounded-full transition-colors"
                >
                  ✕
                </button>
              </div>

              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-48 md:h-64 object-cover rounded-xl mb-8 border border-border"
              />

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">O Problema</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedProject.problem}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">A Solução</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedProject.solution}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3">Tecnologias</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techs.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-muted rounded-md text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8 pt-6 border-t border-border">
                <a 
                  href={selectedProject.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-muted hover:bg-muted/80 text-foreground py-3 rounded-xl font-medium transition-colors"
                >
                  <FaGithub className="w-5 h-5" />
                  Repositório
                </a>
                <a 
                  href={selectedProject.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-xl font-medium transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Section>
  )
}
