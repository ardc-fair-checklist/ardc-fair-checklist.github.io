import { mount } from "@vue/test-utils";
import Question from './Question.vue'
import { describe, expect, test } from 'vitest'


describe('after mounting a Question component', () => {

    const props = {
        question: {
            answers: [{
                    id: "answer0",
                    score: 0,
                    text: "answer0 text"
                }, {
                    id: "answer1",
                    score: 1,
                    text: "answer1 text"
                }],
            guidance: "the guidance text",
            index: 0,
            text: "question0 text"
        }
    }
    const wrapper = mount(Question, { props });

    test('it has a property named question', () => {
        expect(wrapper.props('question')).toBeDefined()
        expect(wrapper.props('question')).toBeTypeOf('object')
    })

    test('it has the correct question answers array', () => {
        expect(wrapper.props('question').answers).toBeDefined()
        expect(wrapper.props('question').answers).toBeInstanceOf(Array)
        expect(wrapper.props('question').answers).toStrictEqual(props.question.answers)
    })

    test('it has the correct question guidance string', () => {
        expect(wrapper.props('question').guidance).toBeDefined()
        expect(wrapper.props('question').guidance).toBeTypeOf('string')
        expect(wrapper.props('question').guidance).toBe(props.question.guidance)
    })

    test('it has the correct question index', () => {
        expect(wrapper.props('question').index).toBeDefined()
        expect(wrapper.props('question').index).toBeTypeOf('number')
        expect(wrapper.props('question').index).toBe(props.question.index)
    })

    test('it has the correct question text', () => {
        expect(wrapper.props('question').text).toBeDefined()
        expect(wrapper.props('question').text).toBeTypeOf('string')
        expect(wrapper.props('question').text).toBe(props.question.text)
    })

})
