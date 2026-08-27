import { Section } from "./Section"
import { cn } from "../lib/utils"

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "MUI", "Tailwind CSS", "Redux", "Vite", "Storybook", "React Leaflet"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "Sequelize", "PostgreSQL", "MySQL", "SQL"],
  },
  {
    title: "Ferramentas & Ecossistema",
    skills: ["Git", "GitHub", "NPM", "ESLint", "Prettier", "Swagger", "Keycloak"],
  },
  {
    title: "Conceitos",
    skills: ["Arquitetura de software", "Autenticação", "Gerenciamento de estado", "Modelagem de dados", "Clean Code", "UX/UI"],
  }
]

export function Skills() {
  return (
    <Section id="skills">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Stack Tecnológica</h2>
          <p className="text-muted-foreground text-lg">
            As principais tecnologias e ferramentas que utilizo no meu dia a dia para construir aplicações.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, i) => (
            <div 
              key={i} 
              className={cn(
                "p-8 rounded-2xl border border-border bg-background",
                i === 0 || i === 3 ? "md:col-span-1" : "md:col-span-1" 
              )}
            >
              <h3 className="text-xl font-bold mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 rounded-lg text-sm font-medium transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
