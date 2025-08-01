import type { QuizQuestion } from '~/types/QuizResults'
import { getRandomImage, Images  } from '~/utils/Images'
import type {ImageCategory} from '~/utils/Images';

export const generateQuestions = (numberOfQuestions: number = 10): QuizQuestion[] => {
    const questions: QuizQuestion[] = []
    const images: string[] = []
    const categories: ImageCategory[] = Object.keys(Images.real) as ImageCategory[]
    for (let i = 0; i < numberOfQuestions; i++) {
        const category = categories[i % categories.length]
        const realImage = getRandomImage(category, true, images)
        const fakeImage = getRandomImage(category, false, images)
        questions.push({ id: questions.length + 1, realImage, slopImage: fakeImage })
        images.push(realImage, fakeImage)
    }
    return questions
}

