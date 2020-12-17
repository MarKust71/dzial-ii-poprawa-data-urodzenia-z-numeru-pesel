const majorityFromPesel = require('../majority-from-pesel');

describe("(10 punktów) Adult's PESEL", () => {
    ['89090132712', '96092842277', '01300846796', '83092964357'].map((givenPesel) => {
        test('pesel should belongs to ADULT', () => {
            expect(majorityFromPesel(givenPesel)).toBe('ADULT');
        });
    });
});
