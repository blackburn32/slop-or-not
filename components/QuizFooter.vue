<template>
    <div class="flex flex-row w-full items-center justify-center border-t-2 border-[#C461B2] h-full">
        <QuizProgress :results="results" />
    </div>
</template>

<script setup lang="ts">
import type { QuizResults } from '~/types/QuizResults'

interface Props {
    results: QuizResults
}

defineProps<Props>()
</script>
