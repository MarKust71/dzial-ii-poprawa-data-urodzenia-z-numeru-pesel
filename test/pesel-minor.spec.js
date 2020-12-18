const dateOfBirthFromPesel = require('../dateofbirth-from-pesel');

describe("(10 punktów) Nonadult' PESEL", () => {
    ['04310511743', '16312569649', '18230374667', '03301791241'].map((givenPesel) => {
        test('pesel should belongs to NONADULT', () => {
            expect(dateOfBirthFromPesel(givenPesel)).toBe('NONADULT');
        });
    });
});
