# Party Menu Application

A responsive React food discovery app for browsing a curated party menu, filtering dishes, viewing recipe details, and saving favorite recipes locally.

## Tech Stack

- React 19
- React Router DOM 7
- Vite 6
- Plain CSS

## Features

- Sign in with the provided authentication API
- Protected main menu route
- Category, diet, and name search filters
- Responsive menu card grid
- Public dish detail pages
- Save and unsave recipes
- Saved recipes persisted in localStorage
- Public saved recipes page
- Logout flow
- Auth-aware 404 page

## Test Credentials

```txt
Email: admin@example.com
Password: admin123
```

## Local Storage Keys

- `party_menu_token`
- `party_menu_user`
- `party_menu_saved_recipes`

## Routes

- `/signin` - Sign in page
- `/` - Protected menu page
- `/menu/:id` - Dish detail page
- `/saved-recipes` - Saved recipes page
- `*` - Not found page

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Build

```bash
npm run build
```

## Deployment

This project can be deployed to Vercel or Netlify as a Vite React app.

Recommended Vercel settings:

- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
