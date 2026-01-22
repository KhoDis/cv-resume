import { resume } from '@/resumeData'
import { Card, CardContent } from '@/components/ui/card'
import { Briefcase, Code2, Calendar, Award } from 'lucide-react'
import { SectionWrapper } from './SectionWrapper'
import { useCounter } from '@/hooks/useCounter'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

function StatCard({
  icon: Icon,
  label,
  value,
  suffix = '',
  delay = 0,
}: {
  icon: React.ElementType
  label: string
  value: number
  suffix?: string
  delay?: number
}) {
  const { ref, isVisible } = useScrollAnimation()
  const count = useCounter(value, 2000, isVisible)

  return (
    <Card
      ref={ref}
      className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 group relative overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
      <CardContent className="p-6 relative">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <div className="text-3xl font-bold group-hover:text-primary transition-colors">
              {count}
              {suffix}
            </div>
            <div className="text-sm text-muted-foreground mt-1">{label}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function Stats() {
  // Вычисляем статистику
  const yearsOfExperience = new Date().getFullYear() - 2023 // Начало карьеры
  const projectsCount = resume.projects.length
  const skillsCount = resume.skills.length
  const experienceCount = resume.experience.length

  return (
    <section id="stats" className="py-12" aria-label="Статистика">
      <SectionWrapper>
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Статистика</h2>
          <p className="mt-2 text-muted-foreground">
            Цифры, которые говорят сами за себя
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard
            icon={Calendar}
            label="Лет опыта"
            value={yearsOfExperience}
            suffix="+"
            delay={0}
          />
          <StatCard
            icon={Code2}
            label="Проектов"
            value={projectsCount}
            delay={100}
          />
          <StatCard
            icon={Briefcase}
            label="Мест работы"
            value={experienceCount}
            delay={200}
          />
          <StatCard
            icon={Award}
            label="Технологий"
            value={skillsCount}
            delay={300}
          />
        </div>
      </SectionWrapper>
    </section>
  )
}

