import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { ExternalLink, Image as ImageIcon, Video, Code2 } from 'lucide-react'

type Project = {
  title: string
  description: string
  stack: string[]
  link?: string
  details?: {
    fullDescription?: string
    images?: string[]
    video?: string
    achievements?: string[]
    challenges?: string[]
    results?: string[]
  }
}

interface ProjectDetailProps {
  project: Project | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProjectDetail({ project, open, onOpenChange }: ProjectDetailProps) {
  if (!project) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
          <DialogDescription className="flex flex-wrap gap-2 mt-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-md bg-secondary/50 px-2 py-1 text-xs font-medium border"
              >
                {tech}
              </span>
            ))}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Видео */}
          {project.details?.video && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Video className="h-4 w-4 text-primary" />
                Видео демонстрация
              </div>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden border bg-muted">
                <video
                  src={project.details.video}
                  controls
                  className="w-full h-full object-cover"
                >
                  Ваш браузер не поддерживает видео.
                </video>
              </div>
            </div>
          )}

          {/* Изображения */}
          {project.details?.images && project.details.images.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <ImageIcon className="h-4 w-4 text-primary" />
                Скриншоты проекта
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.details.images.map((image, idx) => (
                  <div
                    key={idx}
                    className="relative w-full aspect-video rounded-lg overflow-hidden border bg-muted group cursor-pointer"
                  >
                    <img
                      src={image}
                      alt={`${project.title} - скриншот ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Полное описание */}
          {project.details?.fullDescription && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Code2 className="h-4 w-4 text-primary" />
                Описание
              </div>
              <p className="text-sm leading-relaxed whitespace-pre-line">
                {project.details.fullDescription}
              </p>
            </div>
          )}

          {/* Достижения */}
          {project.details?.achievements && project.details.achievements.length > 0 && (
            <div className="space-y-2">
              <div className="text-sm font-semibold">Достижения</div>
              <ul className="space-y-2">
                {project.details.achievements.map((achievement, idx) => (
                  <li
                    key={idx}
                    className="text-sm leading-relaxed relative pl-5 before:content-['✓'] before:absolute before:left-0 before:text-primary before:font-bold"
                  >
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Вызовы */}
          {project.details?.challenges && project.details.challenges.length > 0 && (
            <div className="space-y-2">
              <div className="text-sm font-semibold">Вызовы и решения</div>
              <ul className="space-y-2">
                {project.details.challenges.map((challenge, idx) => (
                  <li
                    key={idx}
                    className="text-sm leading-relaxed relative pl-5 before:content-['💡'] before:absolute before:left-0"
                  >
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Результаты */}
          {project.details?.results && project.details.results.length > 0 && (
            <div className="space-y-2">
              <div className="text-sm font-semibold">Результаты</div>
              <ul className="space-y-2">
                {project.details.results.map((result, idx) => (
                  <li
                    key={idx}
                    className="text-sm leading-relaxed relative pl-5 before:content-['📊'] before:absolute before:left-0"
                  >
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Ссылка на проект */}
          {project.link && (
            <div className="pt-4 border-t">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
              >
                Открыть проект <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

