<template>
    <div class="relative flex flex-col h-screen w-screen overflow-hidden">
        <!-- Main Content Area -->
        <div class="flex-1 flex items-center justify-center px-[24px]">
            <Transition name="fade" mode="out-in">
                <QuizIntro v-if="showIntro" key="intro" />
                <QuizImages
                    v-else-if="!quizCompleted"
                    key="images"
                    :show-results="showResults"
                    :selected-image="selectedImage"
                    :question-data="currentQuestion"
                    @image-selected="handleImageSelection"
                />
                <QuizResultsViewer v-else-if="quizCompleted" :results="results" />
            </Transition>
        </div>
        
        <!-- Footer Area -->
        <Transition name="slide-up">
            <div v-if="!showIntro" class="max-h-16">
                <QuizFooter
                    :can-proceed="canProceed"
                    :results="results"
                    @next="handleNext"
                />
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">

import type { QuizQuestion, QuizResults } from '~/types/QuizResults'

const showIntro = ref(true)
const showResults = ref(false)
const selectedImage = ref<string | null>(null)
const currentQuestionIndex = ref(0)
const quizCompleted = ref(false)
const results = ref<QuizResults>({ questions: [] })

// Mock question data
const questions = ref<QuizQuestion[]>([
    { id: 1, realImage: '/real/1.jpg', slopImage: '/slop/1.jpg' },
    { id: 2, realImage: '/real/2.jpg', slopImage: '/slop/2.jpg' },
    { id: 3, realImage: '/real/3.jpg', slopImage: '/slop/3.jpg' },
    { id: 4, realImage: '/real/4.jpg', slopImage: '/slop/4.jpg' },
    { id: 5, realImage: '/real/5.jpg', slopImage: '/slop/5.jpg' },
    { id: 6, realImage: '/real/6.jpg', slopImage: '/slop/6.jpg' },
    { id: 7, realImage: '/real/7.jpg', slopImage: '/slop/7.jpg' },
    { id: 8, realImage: '/real/8.jpg', slopImage: '/slop/8.jpg' },
    { id: 9, realImage: '/real/9.jpg', slopImage: '/slop/9.jpg' },
    { id: 10, realImage: '/real/10.jpg', slopImage: '/slop/10.jpg' },
])

const currentQuestion = computed(() => questions.value[currentQuestionIndex.value])
const canProceed = computed(() => selectedImage.value !== null)

const handleImageSelection = (imageId: string) => {
    if (showResults.value) return
    selectedImage.value = imageId
}

const handleNext = () => {
    if (!selectedImage.value || !currentQuestion.value) return
    
    // Show results first
    if (!showResults.value) {
        showResults.value = true
        
        // Determine if answer was correct
        const isCorrect = selectedImage.value === currentQuestion.value.slopImage
        
        questions.value[currentQuestionIndex.value].wasCorrect = isCorrect
        results.value.questions.push(questions.value[currentQuestionIndex.value])
        
        // Auto-advance to next question after showing results
        setTimeout(() => {
            moveToNextQuestion()
        }, 2000)
    }
}

const moveToNextQuestion = () => {
    if (currentQuestionIndex.value < questions.value.length - 1) {
        currentQuestionIndex.value++
        selectedImage.value = null
        showResults.value = false
    } else {
        // Quiz complete - you can add completion logic here
        quizCompleted.value = true
    }
}

onMounted(() => {
    // Wait 2 seconds then fade out intro
    setTimeout(() => {
        showIntro.value = false
    }, 2000)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active {
    transition-delay: 0.1s;
}

.slide-up-enter-active,
.slide-up-leave-active {
    transition: transform 0.5s ease-in-out;
}

.slide-up-enter-from,
.slide-up-leave-to {
    transform: translateY(100%);
}
</style>