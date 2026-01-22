import { resume } from '@/resumeData'
import { Card, CardContent } from '@/components/ui/card'
import { Sparkles } from 'lucide-react'
import { SectionWrapper } from './SectionWrapper'

export function Skills() {
  return (
    <section id="skills" className="py-12" aria-label="Навыки">
      <SectionWrapper>
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">Навыки</h2>
          </div>
          <p className="mt-2 text-muted-foreground">
            Технологии и инструменты, с которыми работаю
          </p>
        </div>
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-2">
              {resume.skills.map((skill, idx) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-md border bg-secondary/50 px-3 py-1.5 text-sm font-medium transition-all duration-200 hover:bg-secondary hover:scale-105 hover:border-primary/50 hover:shadow-sm cursor-default"
                  style={{ animationDelay: `${idx * 30}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </SectionWrapper>
    </section>
  )
}
