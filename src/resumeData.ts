export type Resume = {
  name: string
  role: string
  location: string
  photo?: string
  contacts: {
    email: string
    phone?: string
    telegram?: string
    github?: string
    website?: string
  }
  summary: string
  skills: string[]
  projects: Array<{
    title: string
    description: string
    stack: string[]
    link?: string
    details?: {
      fullDescription?: string
      images?: string[]
      video?: string
      achievements?: string[]
      challenges?: string[]
      results?: string[]
    }
  }>
  experience: Array<{
    company: string
    title: string
    period: string
    bullets: string[]
    details?: {
      fullDescription?: string
      images?: string[]
      video?: string
      achievements?: string[]
      technologies?: string[]
      teamSize?: string
    }
  }>
  education?: Array<{
    institution: string
    degree: string
    period: string
    details?: string
  }>
  achievements?: Array<{
    title: string
    description?: string
    year?: string
  }>
  languages?: Array<{
    name: string
    level: string
  }>
}

export const resume: Resume = {
  name: 'Адис Ходжаяров',
  role: 'Frontend / Fullstack Developer',
  location: 'Москва, Россия',
  photo: '/photo.jpg', // Поместите ваше фото в public/photo.jpg
  contacts: {
    email: 'khodzhayarov.a@gmail.com',
    phone: '+7 (932) 054-12-08',
    telegram: 'https://t.me/feyyus',
    github: 'https://github.com/KhoDis',
  },
  summary:
    'Frontend / Fullstack Developer с 2+ годами опыта в разработке сложных продуктовых интерфейсов на React, TypeScript и Next.js.\nРаботал с высоконагруженными продакшн-системами (Яндекс Директ) и коммерческими SaaS, разрабатывал real-time интерфейсы, Canvas- и графические редакторы, e2e-покрытие.\nПроектирую архитектуру фронтенда, уделяю внимание качеству UI/UX и создаю решения для реальных пользователей и бизнеса.',
  skills: [
    'React',
    'TypeScript',
    'Next.js',
    'TailwindCSS',
    'MUI',
    'Node.js',
    'NestJS',
    'Express',
    'PostgreSQL',
    'Prisma',
    'WebSocket',
    'Canvas',
    'Jest',
    'Vitest',
    'E2E',
    'Storybook',
    'Docker',
    'GitHub Actions',
    'CI/CD',
    'GraphQL',
    'REST API',
  ],
  projects: [
    {
      title: 'Generative Pixel Art',
      description:
        'Веб-приложение для генерации Pixel Art-ассетов. Работа с графикой с Canvas (Konva.js), React Flow, Redux. Тестирование ключевых функций через Jest/Vitest.',
      stack: ['React', 'TypeScript', 'Konva.js', 'React Flow', 'Redux', 'Jest', 'Vitest'],
      details: {
        fullDescription:
          'Полнофункциональное веб-приложение для создания и генерации Pixel Art-ассетов. Приложение позволяет пользователям создавать пиксельную графику с помощью интерактивного Canvas-редактора, использовать алгоритмы генерации на основе паттернов, и экспортировать результаты в различных форматах.\n\nОсновной фокус был на производительности рендеринга больших холстов и плавности работы с графикой в браузере.',
        achievements: [
          'Реализован высокопроизводительный рендеринг Canvas с поддержкой до 2048x2048 пикселей',
          'Создана система слоёв с возможностью группировки и трансформации',
          'Интегрированы алгоритмы генерации паттернов на основе математических функций',
          'Достигнуто покрытие тестами ключевых функций на 85%',
        ],
        challenges: [
          'Оптимизация производительности при работе с большими холстами - использовал виртуализацию и батчинг операций',
          'Синхронизация состояния между Canvas и React Flow - создал кастомный middleware для Redux',
          'Реализация undo/redo для сложных графических операций - разработал систему команд с паттерном Command',
        ],
        results: [
          'Время отклика интерфейса < 16ms даже при работе с большими холстами',
          'Успешная генерация более 10,000 уникальных ассетов пользователями',
          'Положительные отзывы от сообщества pixel art художников',
        ],
        // Примеры путей к изображениям (можно заменить на реальные)
        // images: ['/projects/pixel-art-1.png', '/projects/pixel-art-2.png'],
        // video: '/projects/pixel-art-demo.mp4',
      },
    },
    {
      title: 'BSChat Bot',
      description:
        'Telegram-бот для комьюнити с игровыми механиками, real-time логикой. Игровые сессии, рейтинги, состояния игр, роли и права доступа. Интеграция с внешними API (Minecraft, LLM), PostgreSQL + Prisma.',
      stack: ['Node.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Telegram API'],
    },
    {
      title: 'Puzzle Online Game',
      description:
        'SPA на Vite с MUI для совместной real-time игры. Игровой интерфейс на React 18 и Pixi.js, WebSocket-синхронизация состояния. Drag-and-drop для пазлов, визуализация курсоров игроков.',
      stack: ['React', 'TypeScript', 'Vite', 'Pixi.js', 'WebSocket', 'MUI'],
    },
  ],
  experience: [
    {
      company: 'Яндекс Директ',
      title: 'Frontend Developer Intern',
      period: 'Сентябрь 2025 — Декабрь 2025',
      bullets: [
        'Внедрил новый тип рекламной кампании под A/B-тестируемой фичой в продакшн-коде',
        'Разработал и внедрил кастомное ESLint-правило через AST, предотвращающее некорректный условный рендеринг числовых значений',
        'Участвовал в разборе продакшн-инцидента (SPI), подготовил и выкатил фикс',
        'Участвовал в code review и поддержке легаси-кода',
      ],
      details: {
        fullDescription:
          'Стажировка в команде Яндекс Директ, работа над высоконагруженной продакшн-системой с миллионами пользователей. Основной фокус на разработке новых фич, поддержке существующего кода и улучшении качества кодовой базы.\n\nРаботал в команде из 15+ разработчиков, участвовал в ежедневных стендапах, планировании спринтов и ретроспективах. Тесно взаимодействовал с дизайнерами, бэкенд-разработчиками и QA-инженерами.',
        achievements: [
          'Успешно внедрил новый тип рекламной кампании, который прошёл A/B-тест и был запущен в продакшн',
          'Создал ESLint-правило, которое предотвратило несколько потенциальных багов в коде',
          'Быстро разобрался в сложной легаси-кодовой базе и начал вносить значимый вклад уже через 2 недели',
          'Получил положительные отзывы от ментора и команды за качество кода и коммуникацию',
        ],
        technologies: [
          'TypeScript',
          'React',
          'Redux Toolkit',
          'GraphQL',
          'VCS',
          'E2E Testing',
          'Storybook',
          'ESLint',
        ],
        teamSize: 'Команда из 15+ разработчиков',
        // Примеры путей к изображениям (можно заменить на реальные)
        // images: ['/experience/yandex-1.jpg', '/experience/yandex-2.jpg'],
      },
    },
    {
      company: 'Яндекс, Школа разработки интерфейсов (ШРИ)',
      title: 'Учебная программа',
      period: 'Июнь 2025 — Август 2025',
      bullets: [
        'Разработка архитектуры личного кабинета e-com портала для Яндекс Маркета',
        'Работа в команде, защита проекта на хакатоне',
      ],
    },
    {
      company: 'Purple Music (SaaS)',
      title: 'Fullstack Developer (коммерческий проект)',
      period: 'Август 2024 — Май 2025',
      bullets: [
        'Разработал и поднял SaaS-платформу для бронирования студий с нуля с бэкендом на своем сервере (Next.js + NestJS + DevOps + Figma)',
        'Авторизация на JWT, Oauth (Telegram, Яндекс ID). Внедрение i18n',
        'Настроил CI/CD с Docker Compose и GitHub Actions, сократив время деплоя с ~1 часа до минут',
      ],
    },
    {
      company: 'ООО "Судо" (Санкт-Петербург)',
      title: 'Frontend Developer (коммерческий проект)',
      period: 'Сентябрь 2023 — Июль 2024',
      bullets: [
        'Разработал архитектуру undo/redo для графического редактора на Canvas, позволившую поддерживать до N операций без потери FPS',
        'Создавал кастомные инструменты рисования и взаимодействия с объектами',
      ],
    },
  ],
  education: [
    {
      institution: 'ИТМО — Санкт-Петербург',
      degree: 'Бакалавр "Прикладная математика и информатика" (ПМИ)',
      period: '2020 — 2024',
      details: 'ФИТиП',
    },
  ],
  achievements: [
    {
      title: '1 место на конкурсе ВКонтакте среди студенческих приложений',
      description: 'Проект Curo App',
      year: '2023',
    },
  ],
  languages: [
    {
      name: 'Русский',
      level: 'родной',
    },
    {
      name: 'Английский',
      level: 'C1 (свободное чтение и общение)',
    },
  ],
}
