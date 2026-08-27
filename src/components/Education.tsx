import { Section } from "./Section"
import { GraduationCap, Award, BookOpen } from "lucide-react"

export function Education() {
  return (
    <Section id="formacao">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-12">Formação & Aprendizado</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-muted rounded-lg">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Acadêmico</h3>
            </div>
            
            <div className="relative pl-6 border-l-2 border-muted space-y-8">
              <div className="relative">
                <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary"></div>
                <h4 className="font-bold text-lg">Licenciatura em Computação</h4>
                <div className="text-muted-foreground mb-2">[Instituição de Ensino]</div>
                <div className="text-xs font-medium px-2.5 py-1 bg-muted text-muted-foreground rounded-full w-fit mb-3">
                  [Ano Início] - [Ano Conclusão]
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Formação sólida na área de Computação, com destaque para conhecimentos adquiridos em programação, desenvolvimento de software, lógica de programação, tecnologia da informação, educação e projetos acadêmicos aplicados.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-muted rounded-lg">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Certificações e Cursos</h3>
            </div>
            
            <div className="space-y-4">
              {/* Placeholders for courses/certifications */}
              <div className="p-5 rounded-xl border border-border bg-background hover:shadow-sm transition-shadow">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-foreground">[Nome da Certificação/Curso]</h4>
                    <p className="text-sm text-muted-foreground mt-1">[Instituição Emissora]</p>
                  </div>
                  <BookOpen className="w-5 h-5 text-muted-foreground shrink-0" />
                </div>
              </div>
              
              <div className="p-5 rounded-xl border border-border bg-background hover:shadow-sm transition-shadow">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-foreground">[Nome de Outro Curso Relevante]</h4>
                    <p className="text-sm text-muted-foreground mt-1">[Plataforma de Ensino]</p>
                  </div>
                  <BookOpen className="w-5 h-5 text-muted-foreground shrink-0" />
                </div>
              </div>
              
              <div className="p-5 rounded-xl border border-border bg-muted/50 border-dashed flex items-center justify-center text-muted-foreground text-sm">
                Estudos contínuos em [Tecnologia/Área de Estudo Atual]
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
