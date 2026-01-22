import { useState } from 'react'
import { resume } from '@/resumeData'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Briefcase, Eye } from 'lucide-react'
import { SectionWrapper } from './SectionWrapper'
import { ExperienceDetail } from './ExperienceDetail'

export function Experience() {
  const [selectedExperience, setSelectedExperience] = useState<
    typeof resume.experience[0] | null
  >(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleOpenDetail = (exp: typeof resume.experience[0]) => {
    setSelectedExperience(exp)
    setIsDialogOpen(true)
  }

  return (
    <>
      <section id="experience" className="py-12" aria-label="Опыт">
        <SectionWrapper>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <Briefcase className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight">Опыт</h2>
            </div>
            <p className="mt-2 text-muted-foreground">
              Формат: роль + результат + цифры (если есть)
            </p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-6">
              {resume.experience.map((exp) => (
                <div key={`${exp.company}-${exp.period}`} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block z-10" />

                  <Card className="md:ml-16 hover:shadow-xl transition-all duration-300 hover:border-primary/50 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <CardContent className="p-6 relative">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-sm font-medium text-muted-foreground mt-1">
                            {exp.company}
                          </p>
                        </div>
                        <span className="text-sm text-muted-foreground font-medium bg-secondary/50 px-3 py-1 rounded-md inline-block">
                          {exp.period}
                        </span>
                      </div>
                      <ul className="mt-4 space-y-2.5">
                        {exp.bullets.map((bullet, bulletIdx) => (
                          <li
                            key={bulletIdx}
                            className="text-sm leading-relaxed relative pl-5 before:content-['▸'] before:absolute before:left-0 before:text-primary before:font-bold"
                          >
                            {bullet}
                          </li>
                        ))}
                      </ul>
                      {exp.details && (
                        <div className="mt-4 pt-4 border-t">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleOpenDetail(exp)}
                            className="group/btn"
                          >
                            <Eye className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                            Подробнее
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </section>

      <ExperienceDetail
        experience={selectedExperience}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </>
  )
}

