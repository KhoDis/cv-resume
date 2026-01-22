import { resume } from '@/resumeData'
import { Card, CardContent } from '@/components/ui/card'
import { Languages as LanguagesIcon } from 'lucide-react'
import { SectionWrapper } from './SectionWrapper'

export function Languages() {
  if (!resume.languages || resume.languages.length === 0) return null

  return (
    <section id="languages" className="py-12" aria-label="Языки">
      <SectionWrapper>
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <LanguagesIcon className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">Языки</h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {resume.languages.map((lang, idx) => (
            <Card 
              key={idx}
              className="hover:shadow-lg transition-all duration-300 hover:border-primary/50 group"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <span className="font-semibold group-hover:text-primary transition-colors">
                    {lang.name}
                  </span>
                  <span className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-md">
                    {lang.level}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>
    </section>
  )
}

