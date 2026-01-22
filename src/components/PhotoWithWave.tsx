import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Sparkles, Heart, Coffee, Code2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PhotoWithWaveProps {
  photo: string
  name: string
}

const funFacts = [
  {
    icon: Coffee,
    title: '☕ Кофе-зависимость',
    text: 'Пью кофе только когда код не компилируется. Остальное время — чай!',
  },
  {
    icon: Code2,
    title: '💻 Любимый баг',
    text: 'Мой любимый баг — это фича, которую я забыл задокументировать.',
  },
  {
    icon: Heart,
    title: '❤️ Любимая технология',
    text: 'TypeScript — потому что ошибки лучше находить до продакшна!',
  },
  {
    icon: Sparkles,
    title: '✨ Секрет успеха',
    text: '99% вдохновения, 1% кофе, 0% сна перед дедлайном.',
  },
]

export function PhotoWithWave({ photo, name }: PhotoWithWaveProps) {
  const [isClicked, setIsClicked] = useState(false)
  const [clickCount, setClickCount] = useState(0)
  const [showDialog, setShowDialog] = useState(false)
  const [funFact, setFunFact] = useState(funFacts[0])

  const handleClick = () => {
    setIsClicked(true)
    setClickCount((prev) => prev + 1)

    // Выбираем случайный факт
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)]
    setFunFact(randomFact)

    // Показываем диалог после 3 клика
    if (clickCount >= 2) {
      setShowDialog(true)
      setClickCount(0)
    }

    // Сбрасываем анимацию через 600ms
    setTimeout(() => {
      setIsClicked(false)
    }, 600)
  }

  return (
    <>
      <div className="relative group">
        <div
          className={cn(
            'relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl cursor-pointer',
            'transition-[border-color,shadow,transform] duration-300 ease-out',
            'hover:border-primary/50 hover:shadow-2xl',
            isClicked && 'animate-bounce'
          )}
          onClick={handleClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleClick()
            }
          }}
          aria-label={`${name} - нажмите для сюрприза!`}
          style={{ willChange: 'transform' }}
        >
          {/* Анимация махания рукой - только при загрузке на мобильных */}
          <div className="absolute inset-0 pointer-events-none md:hidden">
            <div className="absolute inset-0 animate-welcome opacity-100">
              <div className="absolute top-0 right-0 w-8 h-8 bg-primary/30 rounded-full blur-sm" />
            </div>
          </div>

          {/* Анимация махания рукой - только при hover на десктопе */}
          <div className="absolute inset-0 pointer-events-none hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 animate-wave">
              <div className="absolute top-0 right-0 w-8 h-8 bg-primary/30 rounded-full blur-sm" />
            </div>
          </div>

          {/* Фото */}
          <img
            src={photo}
            alt={name}
            className={cn(
              'w-full h-full object-cover',
              'transition-transform duration-300 ease-out',
              'group-hover:scale-105',
              isClicked && 'animate-spin-slow'
            )}
            style={{ willChange: 'transform' }}
          />

          {/* Эффект при клике */}
          {isClicked && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full bg-primary/20 animate-ping rounded-full" />
            </div>
          )}

          {/* Подсказка */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded whitespace-nowrap">
              👆 Нажми меня!
            </div>
          </div>
        </div>

        {/* Эмодзи вокруг фото при hover */}
        <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none animate-bounce">
          👋
        </div>
      </div>

      {/* Модальное окно с интересным фактом */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {funFact.icon && (
                <funFact.icon className="h-5 w-5 text-primary" />
              )}
              {funFact.title}
            </DialogTitle>
            <DialogDescription className="pt-4 text-base">
              {funFact.text}
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <div className="text-4xl animate-bounce">🎉</div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

