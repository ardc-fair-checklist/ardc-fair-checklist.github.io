import { assert } from 'vitest';
import { describe } from 'vitest';
import { test } from 'vitest';

describe('BannerParams', () => {
    describe('If a user supplies no search parameters,', () => {
        test.todo('the app should render with the first answer enabled on every question', () => {
            assert(true, 'apparently not true');
        });
        test.todo('the app should render with 0 progress on any of the FAIR aspects', () => {
            assert(true, 'apparently not true');
        });
    });
    describe('If a user supplies search parameters but not for all 4 aspects of FAIR,', () => {
        test.todo('the app should show a banner prompting the user to supply all 4 aspects, or no aspects at all', () => {
            assert(true, 'apparently not true');
        });
        test.todo('the app should render with the first answer enabled on every question', () => {
            assert(true, 'apparently not true');
        });
        test.todo('the app should render with 0 progress on any of the FAIR aspects', () => {
            assert(true, 'apparently not true');
        });
    });
    describe('If a user supplies search parameters for all 4 aspects of FAIR but one value has too many elements,', () => {
        test.todo('the app should show a banner telling the user how many elements are expected for the errorneous aspect', () => {
            assert(true, 'apparently not true');
        });
        test.todo('the app should render with the first answer enabled on every question', () => {
            assert(true, 'apparently not true');
        });
        test.todo('the app should render with 0 progress on any of the FAIR aspects', () => {
            assert(true, 'apparently not true');
        });
    });
    describe('If a user supplies search parameters for all 4 aspects of FAIR but one value has an out of range value (there aren\'t that many answers on the associated question),', () => {
        test.todo('the app should show a banner telling the user which element on which aspect is out of range', () => {
            assert(true, 'apparently not true');
        });
        test.todo('the app should render with the first answer enabled on every question', () => {
            assert(true, 'apparently not true');
        });
        test.todo('the app should render with 0 progress on any of the FAIR aspects', () => {
            assert(true, 'apparently not true');
        });
    });
    describe('If a user supplies search parameters for all 4 aspects of FAIR but one value has an unexpected character,', () => {
        test.todo('the app should show a banner telling the user which element on which aspect has an unexpected character', () => {
            assert(true, 'apparently not true');
        });
        test.todo('the app should render with the first answer enabled on every question', () => {
            assert(true, 'apparently not true');
        });
        test.todo('the app should render with 0 progress on any of the FAIR aspects', () => {
            assert(true, 'apparently not true');
        });
    });
    describe('If multiple errors TODO', () => {
        test.todo('the app should show a banner with all the error messages combined', () => {
            assert(true, 'apparently not true');
        });
        test.todo('the app should render with the first answer enabled on every question', () => {
            assert(true, 'apparently not true');
        });
        test.todo('the app should render with 0 progress on any of the FAIR aspects', () => {
            assert(true, 'apparently not true');
        });
    });
    describe('If a user supplies valid values for the FAIR search parameters but also supplies additional parameters,', () => {
        test.todo('TODO', () => {
            assert(true, 'apparently not true');
        });
    });
    describe('If a user supplies valid values for the FAIR search parameters but with repeated parameters,', () => {
        test.todo('TODO', () => {
            assert(true, 'apparently not true');
        });
    });
    describe('If a user supplies a valid set of search parameter values,', () => {
        test.todo('the app should render with the correct answers selected for each question', () => {
            assert(true, 'apparently not true');
        });
        test.todo('the app should render the correct progress values for each aspect', () => {
            assert(true, 'apparently not true');
        });
        test.todo('the overall compliance state should have the correct values', () => {
            assert(true, 'apparently not true');
        });
        test.todo('the app should remove the search parameters from the URL', () => {
            assert(true, 'apparently not true');
        });
    });
});
