import { resume } from '@/resumeData'
import { Card, CardContent } from '@/components/ui/card'
import { ExternalLink } from 'lucide-react'

export function Contacts() {
  const contacts = [
    { label: 'Email', href: `mailto:${resume.contacts.email}`, value: resume.contacts.email },
    ...(resume.contacts.phone
      ? [{ label: 'Телефон', href: `tel:${resume.contacts.phone.replace(/\s/g, '')}`, value: resume.contacts.phone }]
      : []),
    ...(resume.contacts.telegram
      ? [{ label: 'Telegram', href: resume.contacts.telegram, value: 't.me/feyyus' }]
      : []),
    ...(resume.contacts.github
      ? [{ label: 'GitHub', href: resume.contacts.github, value: 'github.com/KhoDis' }]
      : []),
    ...(resume.contacts.website
      ? [{ label: 'Site', href: resume.contacts.website, value: 'website' }]
      : []),
  ]

  return (
    <section id="contacts" className="py-12" aria-label="Контакты">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Контакты</h2>
        <p className="mt-2 text-muted-foreground">
          Сделаем так, чтобы рекрутеру было проще всего написать
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {contacts.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            <Card className="transition-colors hover:bg-accent">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{contact.label}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{contact.href}</div>
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  )
}

