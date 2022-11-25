export type AnswerType = {
    id: string,
    score: number,
    text: string
}

export type Aspect = 'f' | 'a' | 'i' | 'r';

export type QuestionType = {
    answers: AnswerType[],
    aspect: Aspect,
    guidance: string,
    id: string,
    principle: string,
    text: string
}
