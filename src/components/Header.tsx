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

        <nav className="flex items-center gap-3 flex-wrap" aria-label="Навигация">
          <a
            href="#skills"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Навыки
          </a>
          <a
            href="#projects"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Проекты
          </a>
          <a
            href="#experience"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Опыт
          </a>
          <a
            href="#education"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Образование
          </a>
          <a
            href="#achievements"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Достижения
          </a>
          <a
            href="#contacts"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Контакты
          </a>
          <ThemeToggle theme={theme} onThemeChange={onThemeChange} />
        </nav>
      </div>
    </header>
  )
}

