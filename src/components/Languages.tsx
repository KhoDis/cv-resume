import { resume } from '@/resumeData'
import { Card, CardContent } from '@/components/ui/card'
import { Languages as LanguagesIcon } from 'lucide-react'

export function Languages() {
  if (!resume.languages || resume.languages.length === 0) return null

  return (
    <section id="languages" className="py-12" aria-label="Языки">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <LanguagesIcon className="h-8 w-8" />
          Языки
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {resume.languages.map((lang, idx) => (
          <Card key={idx}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <span className="font-semibold">{lang.name}</span>
                <span className="text-sm text-muted-foreground">{lang.level}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

