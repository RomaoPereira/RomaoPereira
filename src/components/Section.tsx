import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "../lib/utils"

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
  delay?: number
}

export function Section({ id, children, className, delay = 0 }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={cn("py-20 md:py-32", className)}
    >
      <div className="container mx-auto px-6 max-w-5xl">
        {children}
      </div>
    </motion.section>
  )
}
