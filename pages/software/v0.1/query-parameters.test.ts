import { describe } from 'vitest';
import { expect } from 'vitest';
import { test } from 'vitest';

describe('Query parameters', () => {
    describe('If a user supplies no query parameters,', () => {
        test.todo('the app should render with the first answer enabled on every question', () => {
            expect(true).toBe(true);
        });
        test.todo('the app should render with 0 progress on any of the FAIR aspects', () => {
            expect(true).toBe(true);
        });
    });
    describe('If a user supplies query parameters but not for all 4 aspects of FAIR,', () => {
        test.todo('the app should show a banner prompting the user to supply all 4 aspects, or no aspects at all', () => {
            expect(true).toBe(true);
        });
        test.todo('the app should render with the first answer enabled on every question', () => {
            expect(true).toBe(true);
        });
        test.todo('the app should render with 0 progress on any of the FAIR aspects', () => {
            expect(true).toBe(true);
        });
    });
    describe('If a user supplies query parameters for all 4 aspects of FAIR but one value has too many elements,', () => {
        test.todo('the app should show a banner telling the user how many elements are expected for the errorneous aspect', () => {
            expect(true).toBe(true);
        });
        test.todo('the app should render with the first answer enabled on every question', () => {
            expect(true).toBe(true);
        });
        test.todo('the app should render with 0 progress on any of the FAIR aspects', () => {
            expect(true).toBe(true);
        });
    });
    describe('If a user supplies query parameters for all 4 aspects of FAIR but one value has an out of range value (there aren\'t that many answers on the associated question),', () => {
        test.todo('the app should show a banner telling the user which element on which aspect is out of range', () => {
            expect(true).toBe(true);
        });
        test.todo('the app should render with the first answer enabled on every question', () => {
            expect(true).toBe(true);
        });
        test.todo('the app should render with 0 progress on any of the FAIR aspects', () => {
            expect(true).toBe(true);
        });
    });
    describe('If a user supplies query parameters for all 4 aspects of FAIR but one value has an unexpected character,', () => {
        test.todo('the app should show a banner telling the user which element on which aspect has an unexpected character', () => {
            expect(true).toBe(true);
        });
        test.todo('the app should render with the first answer enabled on every question', () => {
            expect(true).toBe(true);
        });
        test.todo('the app should render with 0 progress on any of the FAIR aspects', () => {
            expect(true).toBe(true);
        });
    });
    describe('If multiple errors TODO', () => {
        test.todo('the app should show a banner with all the error messages combined', () => {
            expect(true).toBe(true);
        });
        test.todo('the app should render with the first answer enabled on every question', () => {
            expect(true).toBe(true);
        });
        test.todo('the app should render with 0 progress on any of the FAIR aspects', () => {
            expect(true).toBe(true);
        });
    });
    describe('If a user supplies valid values for the FAIR query parameters but also supplies additional parameters,', () => {
        test.todo('TODO', () => {
            expect(true).toBe(true);
        });
    });
    describe('If a user supplies valid values for the FAIR query parameters but with repeated parameters,', () => {
        test.todo('TODO', () => {
            expect(true).toBe(true);
        });
    });
    describe('If a user supplies a valid set of query parameter values,', () => {
        test.todo('the app should render with the correct answers selected for each question', () => {
            expect(true).toBe(true);
        });
        test.todo('the app should render the correct progress values for each aspect', () => {
            expect(true).toBe(true);
        });
        test.todo('the overall compliance state should have the correct values', () => {
            expect(true).toBe(true);
        });
        test.todo('the app should remove the query parameters from the URL', () => {
            expect(true).toBe(true);
        });
    });
});
