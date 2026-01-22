import { resume } from '@/resumeData'

export function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="container mx-auto max-w-5xl flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <span className="text-sm text-muted-foreground">
          {resume.name} · {new Date().getFullYear()}
        </span>
        <span className="text-sm text-muted-foreground">Сделано на React + Vite</span>
      </div>
    </footer>
  )
}

