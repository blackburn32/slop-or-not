<template>
  <NuxtParticles id="particles" :options="options" />
</template>

<script setup lang="ts">
import type { ISourceOptions } from '@tsparticles/engine'

const options: Ref<ISourceOptions> = ref({
  autoPlay: true,
  particles: {
    number: {
      value: 30,
    },
    shape: {
      type: 'star',
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
