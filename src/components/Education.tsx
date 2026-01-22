import { resume } from '@/resumeData'
import { Card, CardContent } from '@/components/ui/card'
import { GraduationCap } from 'lucide-react'
import { SectionWrapper } from './SectionWrapper'

export function Education() {
  if (!resume.education || resume.education.length === 0) return null

  return (
    <section id="education" className="py-12" aria-label="Образование">
      <SectionWrapper>
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">Образование</h2>
          </div>
        </div>
        <div className="grid gap-4">
          {resume.education.map((edu, idx) => (
            <Card 
              key={idx}
              className="hover:shadow-lg transition-all duration-300 hover:border-primary/50 group"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {edu.institution}
                    </h3>
                    <p className="mt-1 text-muted-foreground">{edu.degree}</p>
                    {edu.details && (
                      <p className="mt-1 text-sm text-muted-foreground">{edu.details}</p>
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap bg-secondary/50 px-3 py-1 rounded-md font-medium">
                    {edu.period}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>
    </section>
  )
}

