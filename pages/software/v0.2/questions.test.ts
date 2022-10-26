import { describe, expect, test } from 'vitest'
import Ajv from "ajv"

import schema from './schema.json'
import { questions, version } from './questions.json'

const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}

const validate = ajv.compile(schema)

describe('the software questions data', () => {

    test('should validate against the schema', () => {
        const valid = validate({questions, version})
        expect(valid).toBe(true)
    })

    test('each answer set should have at least one zero-points option', () => {
        const scoresIncludeZero = questions.map(q => q.answers.map(a => a.score).includes(0))
        expect(scoresIncludeZero.every(elem => elem === true)).toBe(true)
    })

    test('each answer set should have the answers in increasing order of points', () => {
        const isIncreasing = (arr: number[]) => {
            return (
                arr.every((v:number, i:number) => i === 0 || v >= arr[i - 1])
            )
        }
        const scoreArrays = questions.map(q => q.answers.map(a => a.score))
        expect(scoreArrays.map(scoreArray => isIncreasing(scoreArray)).every(elem => elem)).toBe(true)
    })

    test('the questions should be ordered by aspect and appear in FAIR order', () => {
        const stringified = questions.map(q => q.aspect).join('')
        const re = /^F+A+I+R+$/
        expect(re.test(stringified)).toBe(true)
    })

    test('there should be 6 questions with aspect F', () => {
        expect(questions.filter(q => q.aspect === 'F').length).toBe(6)
    })

    test('there should be 4 questions with aspect A', () => {
        expect(questions.filter(q => q.aspect === 'A').length).toBe(4)
    })

    test('there should be 2 questions with aspect I', () => {
        expect(questions.filter(q => q.aspect === 'I').length).toBe(2)
    })

    test('there should be 6 questions with aspect R', () => {
        expect(questions.filter(q => q.aspect === 'R').length).toBe(6)
    })

    test('there should be 18 questions in total', () => {
        expect(questions.length).toBe(18)
    })

})
