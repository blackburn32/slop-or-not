export interface QuizQuestion {
    id: number
    slopImage: string
    realImage: string
    wasCorrect?: boolean | undefined
}

export interface QuizResults {
    questions: QuizQuestion[]
}