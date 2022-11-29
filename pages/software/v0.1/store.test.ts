import { assert } from 'vitest';
import { beforeEach } from 'vitest';
import { describe } from 'vitest';
import { expect } from 'vitest';
import { test } from 'vitest';
import { compliance } from './store';
import { fairQueryParams } from './store';
import { nAnswers } from './store';
import { progress } from './store';
import { questions } from './store';
import { setCompliance } from './store';
import { setQuestions } from './store';
import { type Question } from './types';
import { questions as data } from './questions.test.json';

beforeEach(() => {
    setQuestions(data as Question[]);
});

describe('store', () => {
    describe('initial state', () => {
        test('verify the data is the test set', () => {
            const actual = questions.value[0].text;
            const expected = 'questions text for aspect f, question 0';
            assert(actual === expected, 'not using the test data set.');
        });
        test('verify the initial compliance is zeroes', () => {
            const actual = compliance.value;
            const expected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            expect(actual, 'initial compliance should be all zeroes.').to.have.ordered.members(expected);
        });
        test('verify the initial progress is all zeroes', () => {
            const actual = {
                f: progress.value.f,
                a: progress.value.a,
                i: progress.value.i,
                r: progress.value.r,
                overall: progress.value.overall
            };
            assert(actual.f === '0%', 'initial progress on aspect f should be 0%.');
            assert(actual.a === '0%', 'initial progress on aspect a should be 0%.');
            assert(actual.i === '0%', 'initial progress on aspect i should be 0%.');
            assert(actual.r === '0%', 'initial progress on aspect r should be 0%.');
            assert(actual.overall === '0%', 'initial progress overall should be 0%.');
        });
        test('verify the fair query parameters are correct', () => {
            const actual = fairQueryParams.value;
            const expected = 'f=00&a=00&i=00&r=0000';
            assert(actual === expected, 'initial fair query parameters should be all zeroes.');
        });
        test('verify the number of answers on each question', () => {
            const actual = nAnswers.value;
            const expected = {
                f: [3, 3],
                a: [3, 3],
                i: [3, 3],
                r: [3, 3, 3, 3]
            };
            expect(actual, 'number of answers should be 3 for all questions.').to.deep.equal(expected);
        });
    });
    describe('if one element of the compliance state is incremented from code,', () => {
        beforeEach(() => {
            const newCompliance = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            setCompliance(newCompliance);
        });
        test('the progress percentage for the corresponding aspect should go up', () => {
            const actual = parseFloat(progress.value.f.slice(0, -1));
            assert(actual > 0, 'progress for aspect f should be greater than 0');
        });
        test('the progress percentage for the corresponding aspect should go up by the correct amount', () => {
            const actual = parseFloat(progress.value.f.slice(0, -1));
            const expected = 5;
            assert(actual === expected, 'progress for aspect f should be 5%');
        });
        test('the overall progress percentage should go up', () => {
            const actual = parseFloat(progress.value.overall.slice(0, -1));
            assert(actual > 0, 'overall progress should be greater than 0');
        });
        test('the overall progress percentage should go up by the correct amount', () => {
            const actual = parseFloat(progress.value.overall.slice(0, -1));
            const expected = 1;
            assert(actual === expected, 'overall progress should be 1%');
        });
        test.todo('the newly selected answer on the incremented question should get the \'selected\' state', () => {
            assert(true, 'apparently not true');
        });
        test.todo('all other answers to that question should not have the \'selected\' state', () => {
            assert(true, 'apparently not true');
        });
        test('fair query params are updated', () => {
            const actual = fairQueryParams.value;
            const expected = 'f=10&a=00&i=00&r=0000';
            assert(actual === expected, 'the first element of search parameter f should be 1.');
        });
    });
});
