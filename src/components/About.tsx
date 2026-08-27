import { Section } from "./Section"
import { Code2, Server, Database, Layout, Layers, MonitorSmartphone } from "lucide-react"

const expertise = [
  { icon: Layout, label: "Frontend", desc: "React, TypeScript, Interfaces modernas" },
  { icon: Server, label: "Backend", desc: "Node.js, APIs RESTful, Arquitetura" },
  { icon: Database, label: "Database", desc: "SQL, PostgreSQL, Modelagem de dados" },
  { icon: MonitorSmartphone, label: "UI/UX", desc: "Design System, Responsividade" },
  { icon: Code2, label: "APIs", desc: "Integração, Segurança, Performance" },
  { icon: Layers, label: "Arquitetura", desc: "Clean Code, Escalabilidade, Padrões" },
]

export function About() {
  return (
    <Section id="sobre" className="bg-muted/30">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-6">Sobre mim</h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              Sou desenvolvedor de software com atuação no desenvolvimento de aplicações web, trabalhando na construção de interfaces modernas, APIs, integrações e soluções orientadas a problemas reais.
            </p>
            <p>
              Tenho experiência com tecnologias do ecossistema JavaScript/TypeScript, atuando no frontend e backend e buscando sempre escrever código organizado, reutilizável e de fácil manutenção.
            </p>
            <p>
              Minha abordagem combina visão técnica, atenção à experiência do usuário e preocupação com a qualidade da solução como um todo.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {expertise.map((item, i) => (
            <div key={i} className="p-4 rounded-xl border border-border bg-background shadow-sm hover:shadow-md transition-shadow">
              <item.icon className="w-8 h-8 mb-3 text-muted-foreground" />
              <h3 className="font-semibold mb-1">{item.label}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
