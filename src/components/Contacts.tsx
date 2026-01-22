import { resume } from '@/resumeData'
import { Card, CardContent } from '@/components/ui/card'
import { ExternalLink, Mail, Phone, MessageCircle, Github, Globe } from 'lucide-react'
import { SectionWrapper } from './SectionWrapper'

export function Contacts() {
  const contactIcons = {
    Email: Mail,
    Телефон: Phone,
    Telegram: MessageCircle,
    GitHub: Github,
    Site: Globe,
  }

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
      <SectionWrapper>
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Mail className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">Контакты</h2>
          </div>
          <p className="mt-2 text-muted-foreground">
            Сделаем так, чтобы рекрутеру было проще всего написать
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {contacts.map((contact) => {
            const Icon = contactIcons[contact.label as keyof typeof contactIcons] || Mail
            return (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noreferrer"
                className="block group"
              >
                <Card className="transition-all duration-300 hover:bg-accent hover:shadow-lg hover:-translate-y-1 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold group-hover:text-primary transition-colors">
                            {contact.label}
                          </div>
                          <div className="mt-1 text-sm text-muted-foreground truncate max-w-[200px]">
                            {contact.value}
                          </div>
                        </div>
                      </div>
                      <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            )
          })}
        </div>
      </SectionWrapper>
    </section>
  )
}

