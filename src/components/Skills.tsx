import { resume } from '@/resumeData'
import { Card, CardContent } from '@/components/ui/card'

export function Skills() {
  return (
    <section id="skills" className="py-12" aria-label="Навыки">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Навыки</h2>
        <p className="mt-2 text-muted-foreground">
          Технологии и инструменты, с которыми работаю
        </p>
      </div>
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-2">
            {resume.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-md border bg-secondary/50 px-3 py-1.5 text-sm font-medium transition-colors hover:bg-secondary"
              >
                {skill}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
