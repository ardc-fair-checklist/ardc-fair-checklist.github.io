export type Answer = {
    id: string,
    score: number,
    text: string
};

export type Principle = 'f' | 'a' | 'i' | 'r';

export type Question = {
    answers: Answer[],
    guidance: string,
    id: string,
    principle: Principle,
    text: string
};
