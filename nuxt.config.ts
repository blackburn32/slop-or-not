import tailwindcss from "@tailwindcss/vite";
import { defineOrganization } from 'nuxt-schema-org/schema'


export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  app: {
    pageTransition: {
      name: 'slide-up',
      mode: 'out-in',
      enterActiveClass: 'transition-all duration-400 ease-out',
      enterFromClass: 'transform translate-y-full',
      enterToClass: 'transform translate-y-0',
      leaveActiveClass: 'transition-all duration-0 ease-in',
      leaveFromClass: 'transform translate-y-0',
      leaveToClass: 'transform translate-y-full',
    },
    rootAttrs: {
      class: 'overflow-hidden'
    }
  },

  site: {
    name: 'Slop or Not?',
    url: 'https://slop-or-not.info',
    description: 'Can you tell slop from not? Test your skills detecting AI generated slop.',
    defaultLocale: 'en',
    lang: 'en',
    timezone: 'UTC',
    domain: 'slop-or-not.info',
  },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui-pro',
    '@nuxtjs/seo',
  ],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  content: {
    build: {
      markdown: {
        toc: {
          searchDepth: 1,
        }
      }
    }
  },

  schemaOrg: {
    identity: defineOrganization({
      name: 'Slop or Not?',
      logo: '/logo.png',
      url: 'https://slop-or-not.info',
      sameAs: [
        'https://github.com/blackburn32/slop-or-not',
      ]
    })
  }
})