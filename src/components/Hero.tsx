import { resume } from '@/resumeData'
import { Card, CardContent } from '@/components/ui/card'

export function Hero() {
  const contacts = [
    { label: 'Email', href: `mailto:${resume.contacts.email}`, value: resume.contacts.email },
    ...(resume.contacts.telegram
      ? [{ label: 'Telegram', href: resume.contacts.telegram, value: 't.me' }]
      : []),
    ...(resume.contacts.github
      ? [{ label: 'GitHub', href: resume.contacts.github, value: 'github.com' }]
      : []),
    ...(resume.contacts.website
      ? [{ label: 'Site', href: resume.contacts.website, value: 'website' }]
      : []),
  ]

  return (
    <section className="py-12 md:py-20" aria-label="Вступление">
      <div className="grid gap-6 md:grid-cols-[1fr_300px]">
        <Card className="border-2">
          <CardContent className="p-6 md:p-8">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              {resume.role}
              <br />
              <span className="text-muted-foreground font-semibold">{resume.location}</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground whitespace-pre-line">{resume.summary}</p>

            <div className="mt-6 flex flex-wrap gap-2" aria-label="Ключевые навыки">
              {resume.skills.slice(0, 8).map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-full border bg-secondary px-3 py-1 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardContent className="p-6" aria-label="Контакты (кратко)">
            <div className="space-y-4">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-lg border p-3 transition-colors hover:bg-accent"
                >
                  <div className="text-xs text-muted-foreground">{contact.label}</div>
                  <div className="font-semibold">{contact.value}</div>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

