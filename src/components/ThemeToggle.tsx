import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'

type Theme = 'dark' | 'light'

interface ThemeToggleProps {
  theme: Theme
  onThemeChange: (theme: Theme) => void
}

export function ThemeToggle({ theme, onThemeChange }: ThemeToggleProps) {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => onThemeChange(theme === 'dark' ? 'light' : 'dark')}
      aria-label={`Переключить на ${theme === 'dark' ? 'светлую' : 'тёмную'} тему`}
    >
      {theme === 'dark' ? (
        <>
          <Sun className="h-4 w-4 mr-2" />
          Светлая
        </>
      ) : (
        <>
          <Moon className="h-4 w-4 mr-2" />
          Тёмная
        </>
      )}
    </Button>
  )
}

