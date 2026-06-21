# Grant Tahsil

Адаптивный двуязычный сайт образовательной компании Grant Tahsil.

## Возможности

- Русская и таджикская локализация с сохранением выбранного языка.
- Адаптивная статичная композиция в китайской архитектурной эстетике.
- Программы, специальности, города, проживание, услуги, этапы и FAQ.
- Форма с проверкой возраста, HSK и выбором максимум пяти городов.
- Серверный API с явным WhatsApp-fallback без секретов во frontend.
- Доступное мобильное меню и клавиатурная навигация.

## Запуск

```bash
npm start
```

Откройте `http://127.0.0.1:4173`.

Статическую версию можно открыть через Live Server, но серверное сохранение в этом режиме недоступно.

## Проверка и production

```bash
npm run check
npm run build
npm run check:local
```

`npm run check` проверяет файлы, отправляемые на Vercel. `npm run check:local` дополнительно проверяет локальный `server.js`.

Проект не требует сборщика и внешних frontend-зависимостей. Локальный запуск использует `server.js`, а Vercel — функцию `api/applications.js`.

## Google Sheets

Задайте переменные окружения на сервере или скопируйте `.env.example` в локальный `.env`:

- `GOOGLE_APPS_SCRIPT_URL` — URL опубликованного Google Apps Script Web App.
- `GOOGLE_APPS_SCRIPT_SECRET` — общий секрет из Script Properties (`API_SECRET`).
- `PORT` — порт сервера, по умолчанию `4173`.

Не добавляйте service-account private key во frontend или репозиторий. При пустом `GOOGLE_APPS_SCRIPT_URL` API возвращает явный fallback-режим, после чего заявка открывается в WhatsApp на номере `992889908833`.

## Деплой на Vercel

1. Загрузите проект в GitHub и импортируйте репозиторий в Vercel.
2. Framework Preset оставьте `Other`.
3. Build Command можно оставить пустой или указать `npm run build`.
4. Output Directory оставьте пустой.
5. В Vercel → Project Settings → Environment Variables добавьте:

   - `GOOGLE_APPS_SCRIPT_URL`
   - `GOOGLE_APPS_SCRIPT_SECRET`

6. Добавьте переменные для Production, Preview и Development либо только для нужных окружений.
7. Выполните Redeploy после добавления или изменения переменных.

Форма обращается к `/api/applications`. На Vercel этот адрес автоматически обслуживает serverless-функция из `api/applications.js`. Локальный `.env` не загружается в GitHub или Vercel.
