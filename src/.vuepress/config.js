module.exports = {
  base: '/Curriculum-Vitae/',

  title: "takoba's Curriculum Vitae",
  description: '職務経歴書',

  locales: {
    '/': {
      lang: 'ja',
    },
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  head: [
    [ 'link', { rel: 'icon', href: '/favicon.ico' } ],
  ],

  dest: './docs',
}
