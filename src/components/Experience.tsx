import { Section } from "./Section"

const experiences = [
  {
    role: "Desenvolvedor Full Stack Júnior",
    company: "Faturepag",
    period: "05/2025 - Presente",
    description: "Atuação como Full Stack, desenvolvendo novas funcionalidades, mantendo e evoluindo sistemas existentes tanto no frontend quanto no backend.",
    techs: ["React", "TypeScript", "Node.js", "Express", "SQL"],
    responsibilities: [
      "Desenvolvimento de interfaces de usuário com React",
      "Criação e manutenção de APIs e serviços Node.js",
      "Integração entre sistemas e otimização de performance",
      "Colaboração em decisões de arquitetura e código"
    ],
    results: [
      "Entrega ágil de novas features para os usuários",
      "Melhoria na manutenibilidade da base de código"
    ]
  },
  {
    role: "Desenvolvedor Backend",
    company: "Faturepag",
    period: "01/2025 - 04/2025",
    description: "Atuação focada no desenvolvimento backend, criando APIs robustas e eficientes para suportar as regras de negócio da empresa.",
    techs: ["Node.js", "Express", "SQL", "APIs REST"],
    responsibilities: [
      "Desenvolvimento de APIs RESTful e integração com banco de dados",
      "Implementação de regras de negócio no servidor",
      "Otimização de consultas SQL e serviços de backend"
    ],
    results: [
      "Serviços backend mais estáveis e performáticos",
      "Suporte eficiente às demandas da equipe de frontend"
    ]
  }
]

export function Experience() {
  return (
    <Section id="experiencia">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-12">Experiência Profissional</h2>
        
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {experiences.map((exp, i) => (
            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-border bg-background shadow-sm hover:shadow-md transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                  <h3 className="font-bold text-lg">{exp.role}</h3>
                  <span className="text-xs font-medium px-2.5 py-1 bg-muted text-muted-foreground rounded-full w-fit">
                    {exp.period}
                  </span>
                </div>
                <div className="text-muted-foreground font-medium mb-4">{exp.company}</div>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-3 mb-4">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Responsabilidades</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      {exp.responsibilities.map((resp, j) => (
                        <li key={j}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Resultados</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      {exp.results.map((res, j) => (
                        <li key={j}>{res}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/50">
                  {exp.techs.map((tech, j) => (
                    <span key={j} className="text-xs font-medium text-foreground bg-muted px-2 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
