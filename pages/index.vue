<template>
  <div>
    <NuxtParticles id="particles" :options="options" />
    <UPageHero
      description="The realm is overrun with enchanted forgeries. Master the secrets of Slop Spotting and claim your title as Truth Seer."
      :links="links"
      :ui="{
        description: 'text-secondary'
      }"
    >
      <template #title>
        <div class="flex flex-col gap-4">
          <div class="text-secondary text-9xl font-title">SLOP</div>
          <div class="text-secondary text-8xl font-title">OR NoT?</div>
        </div>
      </template>
    </UPageHero>
  </div>
</template>

<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'
import type { ISourceOptions } from '@tsparticles/engine'

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

const options: Ref<ISourceOptions> = ref({
  autoPlay: true,
  particles: {
    number: {
      value: 30,
    },
    shape: {
      type: 'star',
      // image: {
      //   src: '/star.svg',
      //   width: 32,
      //   height: 32,
      // }
    },
    color: {
      value: '#8B347C',
    },
    size: {
      value: { min: 4, max: 16 },
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: true,
      straight: false,
      outModes: {
        default: 'out',
      },
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        parallax: {
          enable: true,
          force: 60,
          smooth: 10,
        },
      },
    },
  },
  detectRetina: true,
})
</script>
