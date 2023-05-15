export type Answer = {
    id: string,
    elaboration: string,
    score: number,
    text: string
};

export type Principle = 'f' | 'a' | 'i' | 'r';

export type Question = {
    answers: Answer[],
    id: string,
    principle: Principle,
    text: string
};

export type Numbered = {
    index: number
};
