import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Image as ImageIcon, Video, Briefcase, Users } from 'lucide-react'

type Experience = {
  company: string
  title: string
  period: string
  bullets: string[]
  details?: {
    fullDescription?: string
    images?: string[]
    video?: string
    achievements?: string[]
    technologies?: string[]
    teamSize?: string
  }
}

interface ExperienceDetailProps {
  experience: Experience | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ExperienceDetail({
  experience,
  open,
  onOpenChange,
}: ExperienceDetailProps) {
  if (!experience) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {experience.title} · {experience.company}
          </DialogTitle>
          <DialogDescription className="flex items-center gap-4 mt-2">
            <span className="text-sm font-medium bg-secondary/50 px-3 py-1 rounded-md">
              {experience.period}
            </span>
            {experience.details?.teamSize && (
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Users className="h-4 w-4" />
                {experience.details.teamSize}
              </span>
            )}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Видео */}
          {experience.details?.video && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Video className="h-4 w-4 text-primary" />
                Видео
              </div>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden border bg-muted">
                <video
                  src={experience.details.video}
                  controls
                  className="w-full h-full object-cover"
                >
                  Ваш браузер не поддерживает видео.
                </video>
              </div>
            </div>
          )}

          {/* Изображения */}
          {experience.details?.images && experience.details.images.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <ImageIcon className="h-4 w-4 text-primary" />
                Фото с работы
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {experience.details.images.map((image, idx) => (
                  <div
                    key={idx}
                    className="relative w-full aspect-video rounded-lg overflow-hidden border bg-muted group cursor-pointer"
                  >
                    <img
                      src={image}
                      alt={`${experience.company} - фото ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Полное описание */}
          {experience.details?.fullDescription && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Briefcase className="h-4 w-4 text-primary" />
                Описание
              </div>
              <p className="text-sm leading-relaxed whitespace-pre-line">
                {experience.details.fullDescription}
              </p>
            </div>
          )}

          {/* Основные задачи */}
          <div className="space-y-2">
            <div className="text-sm font-semibold">Основные задачи</div>
            <ul className="space-y-2">
              {experience.bullets.map((bullet, idx) => (
                <li
                  key={idx}
                  className="text-sm leading-relaxed relative pl-5 before:content-['▸'] before:absolute before:left-0 before:text-primary before:font-bold"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          {/* Достижения */}
          {experience.details?.achievements && experience.details.achievements.length > 0 && (
            <div className="space-y-2">
              <div className="text-sm font-semibold">Ключевые достижения</div>
              <ul className="space-y-2">
                {experience.details.achievements.map((achievement, idx) => (
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

          {/* Технологии */}
          {experience.details?.technologies && experience.details.technologies.length > 0 && (
            <div className="space-y-2">
              <div className="text-sm font-semibold">Использованные технологии</div>
              <div className="flex flex-wrap gap-2">
                {experience.details.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-md bg-secondary/50 px-2 py-1 text-xs font-medium border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

