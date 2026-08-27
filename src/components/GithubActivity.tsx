import { useState, useEffect } from "react"
import { Section } from "./Section"
import { GitCommit, GitPullRequest, Code } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { GitHubCalendar } from "react-github-calendar"
import { useTheme } from "./ThemeProvider"
import { motion, AnimatePresence } from "framer-motion"

interface LangStat {
  name: string
  percent: string
  count: number
}

interface GithubStats {
  repos: number | string
  commits: number | string
  prs: number | string
  topLanguages: string
  detailedLangs: LangStat[]
}

export function GithubActivity() {
  const { theme } = useTheme()
  const username = "RomaoPereira"
  const [stats, setStats] = useState<GithubStats>({
    repos: "-",
    commits: "-",
    prs: "-",
    topLanguages: "Carregando...",
    detailedLangs: []
  })
  const [isLangModalOpen, setIsLangModalOpen] = useState(false)

  useEffect(() => {
    async function fetchGithubStats() {
      try {
        const userRes = await fetch(`https://api.github.com/users/${username}`)
        const userData = await userRes.json()
        const repos = userData.public_repos || 0

        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
        const reposData = await reposRes.json()
        
        let langs = new Map<string, number>()
        let totalLangs = 0
        if (Array.isArray(reposData)) {
          reposData.forEach(repo => {
            if (repo.language) {
              langs.set(repo.language, (langs.get(repo.language) || 0) + 1)
              totalLangs++
            }
          })
        }
        
        const sortedLangsArray = Array.from(langs.entries())
          .sort((a, b) => b[1] - a[1])
          
        const detailedLangs = sortedLangsArray.map(([name, count]) => ({
          name,
          count,
          percent: ((count / totalLangs) * 100).toFixed(1)
        }))

        const topLanguages = sortedLangsArray
          .map(entry => entry[0])
          .slice(0, 3)
          .join(" / ")

        let commits = "-"
        try {
          const commitsRes = await fetch(
            `https://api.github.com/search/commits?q=author:${username}`,
            { headers: { 'Accept': 'application/vnd.github.cloak-preview' } }
          )
          const commitsData = await commitsRes.json()
          if (commitsData.total_count !== undefined) {
            commits = commitsData.total_count.toString()
          }
        } catch (e) {
          console.error("Commits fetch error:", e)
        }

        let prs = "-"
        try {
          const prsRes = await fetch(
            `https://api.github.com/search/issues?q=author:${username}+type:pr`
          )
          const prsData = await prsRes.json()
          if (prsData.total_count !== undefined) {
            prs = prsData.total_count.toString()
          }
        } catch (e) {
          console.error("PRs fetch error:", e)
        }

        setStats({
          repos: repos.toString(),
          commits,
          prs,
          topLanguages: topLanguages || "N/A",
          detailedLangs
        })
      } catch (error) {
        console.error("Error fetching GitHub stats:", error)
        setStats(prev => ({ ...prev, topLanguages: "Indisponível", detailedLangs: [] }))
      }
    }

    fetchGithubStats()
  }, [])

  return (
    <Section id="github" className="bg-muted/30 relative">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Código fala por si.</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Uma visão geral da minha atividade de desenvolvimento e contribuições em projetos no GitHub.
            </p>
          </div>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 rounded-md font-medium hover:bg-foreground/90 transition-colors shrink-0"
          >
            <FaGithub className="w-4 h-4" />
            Visitar GitHub
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="p-6 rounded-2xl bg-background border border-border flex flex-col items-center justify-center text-center">
            <FaGithub className="w-8 h-8 text-muted-foreground mb-3" />
            <div className="text-3xl font-bold mb-1">{stats.repos}</div>
            <div className="text-sm text-muted-foreground">Repositórios</div>
          </div>
          <div className="p-6 rounded-2xl bg-background border border-border flex flex-col items-center justify-center text-center">
            <GitCommit className="w-8 h-8 text-muted-foreground mb-3" />
            <div className="text-3xl font-bold mb-1">{stats.commits}</div>
            <div className="text-sm text-muted-foreground">Commits anuais</div>
          </div>
          <div className="p-6 rounded-2xl bg-background border border-border flex flex-col items-center justify-center text-center">
            <GitPullRequest className="w-8 h-8 text-muted-foreground mb-3" />
            <div className="text-3xl font-bold mb-1">{stats.prs}</div>
            <div className="text-sm text-muted-foreground">Pull Requests</div>
          </div>
          <div 
            className="p-6 rounded-2xl bg-background border border-border flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary/50 transition-colors group"
            onClick={() => setIsLangModalOpen(true)}
          >
            <Code className="w-8 h-8 text-muted-foreground mb-3 group-hover:text-primary transition-colors" />
            <div className="text-lg font-bold mb-1 break-words w-full px-2" title={stats.topLanguages}>
              {stats.topLanguages.length > 18 ? stats.topLanguages.substring(0, 15) + "..." : stats.topLanguages}
            </div>
            <div className="text-sm text-muted-foreground">Linguagens (Ver todas)</div>
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-background border border-border overflow-hidden flex flex-col items-center">
          <div className="w-full flex items-center justify-between mb-8">
            <h3 className="font-semibold">Atividade de Contribuição</h3>
            <span className="text-xs text-muted-foreground px-2 py-1 bg-muted rounded-md border border-border">Último ano</span>
          </div>
          
          <div className="w-full overflow-x-auto pb-4 custom-scrollbar flex justify-center">
            <div className="min-w-max">
              <GitHubCalendar 
                username={username} 
                colorScheme={theme === "dark" ? "dark" : "light"}
                blockSize={12}
                blockMargin={4}
                fontSize={12}
              />
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isLangModalOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
              onClick={() => setIsLangModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="fixed inset-x-4 top-[10%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:max-w-md w-full max-h-[80vh] overflow-y-auto bg-background border border-border rounded-2xl shadow-2xl z-50 p-6 custom-scrollbar"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold">Linguagens no GitHub</h3>
                  <p className="text-sm text-muted-foreground mt-1">Baseado nos repositórios públicos</p>
                </div>
                <button 
                  onClick={() => setIsLangModalOpen(false)}
                  className="p-2 bg-muted hover:bg-muted/80 rounded-full transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                {stats.detailedLangs.length > 0 ? (
                  stats.detailedLangs.map(lang => (
                    <div key={lang.name} className="flex flex-col gap-2">
                      <div className="flex justify-between text-sm font-medium">
                        <span>{lang.name}</span>
                        <span className="text-muted-foreground">{lang.percent}% ({lang.count} {lang.count === 1 ? 'repo' : 'repos'})</span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${lang.percent}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-primary"
                        />
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-muted-foreground py-4">Nenhum dado encontrado.</p>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Section>
  )
}
