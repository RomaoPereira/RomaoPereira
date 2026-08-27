import { Section } from "./Section"
import { Layers, Zap, PenTool, TrendingUp, ShieldCheck, Sparkles, Database } from "lucide-react"

const principles = [
  {
    icon: Layers,
    title: "Arquitetura",
    description: "Aplicações organizadas, componentizadas e preparadas para evolução contínua sem acoplamento excessivo."
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Preocupação constante com carregamento, renderização eficiente, code splitting e otimização de recursos."
  },
  {
    icon: PenTool,
    title: "Manutenibilidade",
    description: "Escrita de código limpo, semântico, reutilizável e fácil de ser compreendido por outros desenvolvedores."
  },
  {
    icon: TrendingUp,
    title: "Escalabilidade",
    description: "Estruturas preparadas para o crescimento da aplicação, lidando bem com aumento de dados e tráfego."
  },
  {
    icon: ShieldCheck,
    title: "Segurança",
    description: "Implementação de autenticação robusta, autorização baseada em roles e proteção contra vulnerabilidades comuns."
  },
  {
    icon: Sparkles,
    title: "Experiência (UX)",
    description: "Interfaces intuitivas, consistentes, com feedbacks visuais claros e fluxos de navegação sem fricção."
  }
]

export function Architecture() {
  return (
    <Section id="arquitetura" className="bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Como eu penso software</h2>
            <p className="text-muted-foreground text-lg">
              O desenvolvimento vai muito além de escrever código. Envolve decisões arquiteturais, preocupação com o usuário e visão de longo prazo para o produto.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((item, i) => (
            <div 
              key={i} 
              className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all hover:shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-6 group-hover:bg-primary/5 transition-colors">
                <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Simple visual representation of Frontend -> API -> Services -> DB */}
        <div className="mt-20 p-8 rounded-2xl border border-border bg-background hidden md:block">
          <h3 className="text-center font-semibold text-muted-foreground mb-8 tracking-wider uppercase text-sm">Visão de Arquitetura Típica</h3>
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-blue-500" />
              </div>
              <span className="font-medium text-sm">Frontend (React)</span>
            </div>
            
            <div className="h-px bg-border flex-1 mx-4 relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-border transform rotate-45"></div>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                <Zap className="w-8 h-8 text-green-500" />
              </div>
              <span className="font-medium text-sm">API (Express)</span>
            </div>
            
            <div className="h-px bg-border flex-1 mx-4 relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-border transform rotate-45"></div>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                <Layers className="w-8 h-8 text-purple-500" />
              </div>
              <span className="font-medium text-sm">Services (Node.js)</span>
            </div>
            
            <div className="h-px bg-border flex-1 mx-4 relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-border transform rotate-45"></div>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                <Database className="w-8 h-8 text-orange-500" />
              </div>
              <span className="font-medium text-sm">Database (SQL)</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
