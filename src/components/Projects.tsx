import { resume } from '@/resumeData'
import { Card, CardContent } from '@/components/ui/card'
import { ExternalLink } from 'lucide-react'

export function Projects() {
  return (
    <section id="projects" className="py-12" aria-label="Проекты">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Проекты</h2>
        <p className="mt-2 text-muted-foreground">
          Лучше 2–4 сильных, чем 10 "для галочки"
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {resume.projects.map((project) => (
          <Card key={project.title}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {project.stack.join(' · ')}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  Открыть <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

