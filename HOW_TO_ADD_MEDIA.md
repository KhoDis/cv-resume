# Как добавить изображения и видео в резюме

## Структура папок

Создайте папки для медиафайлов в `public/`:

```
public/
  projects/
    pixel-art-1.png
    pixel-art-2.png
    pixel-art-demo.mp4
  experience/
    yandex-1.jpg
    yandex-2.jpg
```

## Добавление изображений и видео в проекты

В файле `src/resumeData.ts` в секции `projects`, добавьте поле `details`:

```typescript
{
  title: 'Название проекта',
  description: 'Краткое описание',
  stack: ['React', 'TypeScript'],
  details: {
    // Полное описание проекта
    fullDescription: 'Подробное описание проекта...',
    
    // Массив путей к изображениям (относительно public/)
    images: [
      '/projects/project-1.png',
      '/projects/project-2.png'
    ],
    
    // Путь к видео (относительно public/)
    video: '/projects/project-demo.mp4',
    
    // Достижения
    achievements: [
      'Достижение 1',
      'Достижение 2'
    ],
    
    // Вызовы и решения
    challenges: [
      'Проблема: ... Решение: ...'
    ],
    
    // Результаты
    results: [
      'Результат 1',
      'Результат 2'
    ]
  }
}
```

## Добавление изображений и видео в опыт работы

В файле `src/resumeData.ts` в секции `experience`, добавьте поле `details`:

```typescript
{
  company: 'Название компании',
  title: 'Должность',
  period: 'Период работы',
  bullets: ['Задача 1', 'Задача 2'],
  details: {
    // Полное описание
    fullDescription: 'Подробное описание работы...',
    
    // Массив путей к изображениям
    images: [
      '/experience/work-1.jpg',
      '/experience/work-2.jpg'
    ],
    
    // Путь к видео
    video: '/experience/work-demo.mp4',
    
    // Достижения
    achievements: [
      'Достижение 1',
      'Достижение 2'
    ],
    
    // Использованные технологии
    technologies: [
      'React',
      'TypeScript',
      'Node.js'
    ],
    
    // Размер команды
    teamSize: 'Команда из 10 разработчиков'
  }
}
```

## Форматы файлов

- **Изображения**: PNG, JPG, JPEG, WebP
- **Видео**: MP4, WebM

## Рекомендации

- Оптимизируйте изображения перед загрузкой (используйте инструменты типа TinyPNG)
- Для видео используйте сжатые форматы (MP4 с H.264)
- Рекомендуемый размер изображений: до 1920px по ширине
- Рекомендуемый размер видео: до 10MB

## Пример использования

1. Поместите файлы в `public/projects/` или `public/experience/`
2. Обновите `resumeData.ts` с путями к файлам
3. Кнопка "Подробнее" появится автоматически, если есть поле `details`
4. При клике откроется модальное окно с детальной информацией

