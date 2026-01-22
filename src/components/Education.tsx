import { resume } from '@/resumeData'
import { Card, CardContent } from '@/components/ui/card'
import { GraduationCap } from 'lucide-react'

export function Education() {
  if (!resume.education || resume.education.length === 0) return null

  return (
    <section id="education" className="py-12" aria-label="Образование">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <GraduationCap className="h-8 w-8" />
          Образование
        </h2>
      </div>
      <div className="grid gap-4">
        {resume.education.map((edu, idx) => (
          <Card key={idx}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{edu.institution}</h3>
                  <p className="mt-1 text-muted-foreground">{edu.degree}</p>
                  {edu.details && (
                    <p className="mt-1 text-sm text-muted-foreground">{edu.details}</p>
                  )}
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {edu.period}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

