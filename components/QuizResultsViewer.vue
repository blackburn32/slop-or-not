<template>
    <div class="flex flex-col items-center justify-center h-full w-full md:max-w-md">
        <div class="text-4xl font-title text-secondary">You're {{ title }}</div>
        <div class="text-secondary">You scored {{ scoreText }}. {{ description }}</div>
        <div class="flex flex-row gap-4 mt-4">
            <UButton to="/tips">Learn the tricks</UButton>
            <UButton variant="ghost" @click="resetQuiz">Try Again</UButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import { UButton } from '#components';
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

const resetQuiz = () => {
    window.location.reload()
}
</script>