import { resume } from '@/resumeData'
import { Card, CardContent } from '@/components/ui/card'

export function Experience() {
  return (
    <section id="experience" className="py-12" aria-label="Опыт">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Опыт</h2>
        <p className="mt-2 text-muted-foreground">
          Формат: роль + результат + цифры (если есть)
        </p>
      </div>
      <div className="grid gap-4">
        {resume.experience.map((exp) => (
          <Card key={`${exp.company}-${exp.period}`}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">
                    {exp.title} · {exp.company}
                  </h3>
                </div>
                <span className="text-sm text-muted-foreground">{exp.period}</span>
              </div>
              <ul className="mt-4 space-y-2 list-disc list-inside text-sm">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

