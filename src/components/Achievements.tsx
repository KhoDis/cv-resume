import { resume } from '@/resumeData'
import { Card, CardContent } from '@/components/ui/card'
import { Trophy } from 'lucide-react'
import { SectionWrapper } from './SectionWrapper'

export function Achievements() {
  if (!resume.achievements || resume.achievements.length === 0) return null

  return (
    <section id="achievements" className="py-12" aria-label="Достижения">
      <SectionWrapper>
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Trophy className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">Достижения</h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {resume.achievements.map((achievement, idx) => (
            <Card 
              key={idx}
              className="hover:shadow-lg transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
              <CardContent className="p-6 relative">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Trophy className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h3>
                    </div>
                    {achievement.description && (
                      <p className="mt-2 text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    )}
                  </div>
                  {achievement.year && (
                    <span className="text-sm text-muted-foreground whitespace-nowrap bg-secondary/50 px-3 py-1 rounded-md font-medium">
                      {achievement.year}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>
    </section>
  )
}

