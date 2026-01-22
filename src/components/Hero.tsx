import { resume } from '@/resumeData'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, MessageCircle, Github, Globe } from 'lucide-react'
import { SectionWrapper } from './SectionWrapper'

export function Hero() {
  const contacts = [
    { 
      label: 'Email', 
      href: `mailto:${resume.contacts.email}`, 
      value: resume.contacts.email,
      icon: Mail 
    },
    ...(resume.contacts.telegram
      ? [{ 
          label: 'Telegram', 
          href: resume.contacts.telegram, 
          value: 't.me/feyyus',
          icon: MessageCircle 
        }]
      : []),
    ...(resume.contacts.github
      ? [{ 
          label: 'GitHub', 
          href: resume.contacts.github, 
          value: 'github.com/KhoDis',
          icon: Github 
        }]
      : []),
    ...(resume.contacts.website
      ? [{ 
          label: 'Site', 
          href: resume.contacts.website, 
          value: 'website',
          icon: Globe 
        }]
      : []),
  ]

  return (
    <section className="py-12 md:py-20" aria-label="Вступление">
      <SectionWrapper>
        <div className="grid gap-6 md:grid-cols-[1fr_300px]">
        <Card className="border-2 hover:shadow-lg transition-all duration-300 hover:border-primary/50 group">
          <CardContent className="p-6 md:p-8">
            <div className="relative">
              <div className="absolute -top-2 -left-2 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
              <h1 className="relative text-4xl font-bold tracking-tight md:text-5xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                {resume.role}
                <br />
                <span className="text-muted-foreground font-semibold">{resume.location}</span>
              </h1>
            </div>
            <p className="mt-4 text-lg text-muted-foreground whitespace-pre-line leading-relaxed">
              {resume.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-2" aria-label="Ключевые навыки">
              {resume.skills.slice(0, 8).map((skill, idx) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-full border bg-secondary/50 px-3 py-1 text-sm font-medium hover:bg-secondary hover:scale-105 transition-all duration-200 cursor-default"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6" aria-label="Контакты (кратко)">
            <div className="space-y-3">
              {contacts.map((contact) => {
                const Icon = contact.icon
                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-lg border p-3 transition-all duration-200 hover:bg-accent hover:border-primary/50 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="p-1.5 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-muted-foreground">{contact.label}</div>
                      <div className="font-semibold text-sm truncate">{contact.value}</div>
                    </div>
                  </a>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
      </SectionWrapper>
    </section>
  )
}

