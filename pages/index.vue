<template>
  <UPageHero 
    description="The realm is overrun with enchanted forgeries. Master the secrets of Slop Spotting and claim your title as Truth Seer." 
    headline="Coming Soon" 
    :links="links" 
    :ui="{
      description: 'text-secondary',
      root: 'overflow-hidden',
      container: 'overflow-hidden'
    }"
  >
    <template #title>
      <div class="flex flex-col gap-4">
        <div class="text-secondary text-9xl font-title">SLOP</div>
        <div class="text-secondary text-8xl font-title">OR NoT?</div>
      </div>
    </template>
  </UPageHero>
</template>

<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const links: Ref<ButtonProps[]> = ref([
  {
    label: 'Enter the Trial',
    to: '/quiz',
    size: 'xl',
    ui: {
      base: 'h-12',
      label: 'text-neutral font-medium text-lg font-button'
    }
  }
])

useSeoMeta({
  title: 'Slop or Not?',
  description: 'The realm is overrun with enchanted forgeries. Master the secrets of Slop Spotting and claim your title as Truth Seer.',
  ogTitle: 'Slop or Not?',
  ogDescription: 'The realm is overrun with enchanted forgeries. Master the secrets of Slop Spotting and claim your title as Truth Seer.',
  titleTemplate: `%s`,
})
</script>