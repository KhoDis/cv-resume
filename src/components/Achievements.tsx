import { resume } from '@/resumeData'
import { Card, CardContent } from '@/components/ui/card'
import { Trophy } from 'lucide-react'

export function Achievements() {
  if (!resume.achievements || resume.achievements.length === 0) return null

  return (
    <section id="achievements" className="py-12" aria-label="Достижения">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <Trophy className="h-8 w-8" />
          Достижения
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {resume.achievements.map((achievement, idx) => (
          <Card key={idx}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{achievement.title}</h3>
                  {achievement.description && (
                    <p className="mt-2 text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  )}
                </div>
                {achievement.year && (
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {achievement.year}
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

