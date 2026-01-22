import { useState } from 'react'
import { resume } from '@/resumeData'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Code2, Eye } from 'lucide-react'
import { SectionWrapper } from './SectionWrapper'
import { ProjectDetail } from './ProjectDetail'

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof resume.projects[0] | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleOpenDetail = (project: typeof resume.projects[0]) => {
    setSelectedProject(project)
    setIsDialogOpen(true)
  }

  return (
    <>
      <section id="projects" className="py-12" aria-label="Проекты">
        <SectionWrapper>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <Code2 className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight">Проекты</h2>
            </div>
            <p className="mt-2 text-muted-foreground">
              Лучше 2–4 сильных, чем 10 "для галочки"
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {resume.projects.map((project, idx) => (
              <Card
                key={project.title}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center rounded-md bg-secondary/50 px-2 py-0.5 text-xs font-medium border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="mt-4 flex items-center gap-3 flex-wrap">
                    {(project.details || project.link) && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleOpenDetail(project)}
                        className="group/btn"
                      >
                        <Eye className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Подробнее
                      </Button>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all group/link"
                      >
                        Открыть{' '}
                        <ExternalLink className="h-4 w-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionWrapper>
      </section>

      <ProjectDetail
        project={selectedProject}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </>
  )
}

