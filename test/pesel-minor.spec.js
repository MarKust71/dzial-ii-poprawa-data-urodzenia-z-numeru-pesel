const majorityFromPesel = require('../majority-from-pesel');

describe('(10 punktów) Female PESEL', () => {
    ['04310511743', '16312569649', '18230374667', '03301791241'].map((givenPesel) => {
        test('pesel should belongs to FEMALE', () => {
            expect(majorityFromPesel(givenPesel)).toBe('MINOR');
        });
    });
});
