import nextra from 'nextra'
const withDocs = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
})

export default withDocs({
  reactStrictMode: true
})