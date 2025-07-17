<template>
    <div class="flex flex-row w-full items-center justify-between border-t-2 border-[#C461B2] h-full">
        <QuizProgress :results="results" />
        <UButton
                :disabled="!canProceed"
                color="primary"
                variant="solid"
                size="md"
                class="rounded-none h-full py-5 px-4 flex items-center justify-center cursor-pointer font-medium text-[16px]"
                @click="handleNext"
            >
                Next
        </UButton>
    </div>
</template>

<script setup lang="ts">
import type { QuizResults } from '~/types/QuizResults'

interface Props {
    canProceed: boolean
    results: QuizResults
}

defineProps<Props>()

const emit = defineEmits<{
    next: []
}>()

const handleNext = () => {
    emit('next')
}
</script>