export type Aspect = 'f' | 'a' | 'i' | 'r';

export type Answer = {
    id: string,
    score: number,
    text: string
};

export type Question = {
    answers: Answer[],
    aspect: Aspect,
    guidance: string,
    id: string,
    principle: string,
    text: string
};
