export default {
  logo: <span>RH México • Halliburton</span>,
  project: { link: 'https://vercel.com' },
  footer: { text: 'Recursos Humanos México — Halliburton' },
  useNextSeoProps() {
    return { titleTemplate: '%s – RH México' }
  },
  i18n: [{ locale: 'es', text: 'Español' }]
}