import { resume } from '@/resumeData'
import { ThemeToggle } from './ThemeToggle'

type Theme = 'dark' | 'light'

interface HeaderProps {
  theme: Theme
  onThemeChange: (theme: Theme) => void
}

export function Header({ theme, onThemeChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-5xl flex h-16 items-center justify-between px-4">
        <div className="flex flex-col">
          <span className="font-semibold">{resume.name}</span>
          <span className="text-sm text-muted-foreground">{resume.role}</span>
        </div>

        <nav className="flex items-center gap-2 flex-wrap" aria-label="Навигация">
          <a
            href="#stats"
            className="text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 px-2 py-1 rounded-md hover:bg-accent/50"
          >
            Статистика
          </a>
          <a
            href="#skills"
            className="text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 px-2 py-1 rounded-md hover:bg-accent/50"
          >
            Навыки
          </a>
          <a
            href="#projects"
            className="text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 px-2 py-1 rounded-md hover:bg-accent/50"
          >
            Проекты
          </a>
          <a
            href="#experience"
            className="text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 px-2 py-1 rounded-md hover:bg-accent/50"
          >
            Опыт
          </a>
          <a
            href="#education"
            className="text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 px-2 py-1 rounded-md hover:bg-accent/50"
          >
            Образование
          </a>
          <a
            href="#achievements"
            className="text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 px-2 py-1 rounded-md hover:bg-accent/50"
          >
            Достижения
          </a>
          <a
            href="#contacts"
            className="text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 px-2 py-1 rounded-md hover:bg-accent/50"
          >
            Контакты
          </a>
          <ThemeToggle theme={theme} onThemeChange={onThemeChange} />
        </nav>
      </div>
    </header>
  )
}

