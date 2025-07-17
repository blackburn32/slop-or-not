export default defineAppConfig({
    ui: {
      colors: {
        primary: 'acapulco',
        secondary: 'atomic-tangerine',
        neutral: 'loulou',
        success: 'las-palmas',
        error: 'vermilion',
      },
    },
    uiPro: {
      footer: {
        slots: {
          root: 'border-t border-default',
          left: 'text-sm text-muted'
        }
      }
    },
    seo: {
      siteName: 'Slop or Not?'
    },
    header: {
      title: 'Slop or Not?',
      to: '/',
      logo: {
        alt: '',
        light: '',
        dark: ''
      },
      search: false,
      colorMode: true,
      links: [{
        'icon': 'i-simple-icons-github',
        'to': 'https://github.com/blackburn32/slop-or-not',
        'target': '_blank',
        'aria-label': 'GitHub'
      }]
    },
    footer: {
      credits: `Published under the MIT License`,
      colorMode: false,
      links: [{
        'icon': 'i-simple-icons-github',
        'to': 'https://github.com/blackburn32/slop-or-not',
        'target': '_blank',
        'aria-label': 'GitHub'
      }]
    },
    toc: {
      title: 'Table of Contents',
      bottom: {
        title: 'Code',
        edit: 'https://github.com/blackburn32/slop-or-not/edit/main/content',
        links: [{
          icon: 'i-lucide-star',
          label: 'Star on GitHub',
          to: 'https://github.com/blackburn32/slop-or-not',
          target: '_blank'
        }]
      }
    }
  })