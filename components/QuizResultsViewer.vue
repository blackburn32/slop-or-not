<template>
    <div class="flex flex-col items-center justify-center h-full w-full">
        <div class="text-2xl font-title">You're {{ title }}</div>
        <div>You scored {{ scoreText }}. {{ description }}</div>
    </div>
</template>

<script setup lang="ts">
import type { QuizResults } from '@/types/QuizResults'

const props = defineProps<{
    results: QuizResults
}>()

const totalQuestions = computed(() => props.results.questions.length)
const correctQuestions = computed(() => props.results.questions.filter(q => q.wasCorrect).length)

const score = computed(() => {
    return Math.round((correctQuestions.value / totalQuestions.value) * 100)
})

const scoreText = computed(() => {
    return `${correctQuestions.value}/${totalQuestions.value}`
})

const slopLevel = computed(() => {
    return getSlopLevel(score.value)
})

const title = computed(() => {
    return slopLevel.value?.name
})

const description = computed(() => {
    return slopLevel.value?.description
})
</script>