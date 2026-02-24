# RH México — Sitio de Conocimiento

Sitio estático de documentación (Next.js + Nextra) listo para desplegar en **Vercel**.

## Despliegue rápido en Vercel
1) Crea un repositorio en GitHub y sube estos archivos.
2) Ve a https://vercel.com/import y conecta el repo.
3) Presiona **Deploy** (Vercel detecta Next.js automáticamente).

## Desarrollo local
```bash
npm install
npm run dev
```

## Estructura
- `pages/` — cada archivo `.mdx` es una sección del manual.
- `theme.config.jsx` — Branding básico del sitio.

## Notas
- Puedes añadir más páginas `.mdx` y organizar el menú en `pages/_meta.json`.
- Si algún enlace es interno (SharePoint/Power Apps) asegúrate de estar autenticado.