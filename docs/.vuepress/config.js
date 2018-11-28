module.exports = {
  title: 'JianQiang blog',
  description: '种一棵树，最好的时间是十年前，其次是现在。',
  port: 1996,
  // base: '/starry/',
  dest: 'starry',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/icons/favicon.ico'
      }
    ],
    ['meta', { name: 'theme-color', content: '#1296db' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/icons/msapplication-icon-144x144.png'
      }
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#333' }]
  ],
  themeConfig: {
    nav: [
      {
        text: 'web',
        items: [
          {
            text: 'Javascript',
            link: '/javascript/es6'
          },
          {
            text: 'Angular',
            link: '/angular/angular-cli'
          },
          {
            text: 'Vue',
            link: '/vue/vue-cli'
          },
          {
            text: 'Webpack',
            link: '/other/webpack'
          },
          {
            text: 'Css',
            link: '/other/css'
          }
        ]
      },
      {
        text: 'Python3',
        link: '/other/python3'
      },
      {
        text: 'Sql',
        link: '/other/sql'
      },
      {
        text: 'Command',
        link: '/other/bash'
      },
      {
        text: 'Git',
        link: '/other/git'
      },
      {
        text: 'Github',
        link: 'https://www.github.com/djq1996/djq1996.github.io'
      }
    ],
    sidebar: {
      '/javascript/': [
        {
          title: 'Javascript',
          collapsable: false,
          children: ['es6', 'js']
        },
        {
          title: 'Snippets',
          collapsable: false,
          children: ['snippet']
        }
      ],
      '/angular/': [
        {
          title: 'Angular',
          collapsable: false,
          children: ['angular-cli', 'angular', 'angular-docs', 'angular-faq']
        }
      ],
      '/vue/': [
        {
          title: 'Vue',
          collapsable: false,
          children: ['vue-cli', 'vue']
        }
      ]
    },
    sidebarDepth: 2,
    lastUpdated: 'Last Updated'
  }
};
