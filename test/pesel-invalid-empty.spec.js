const majorityFromPesel = require('../gender-from-pesel');

describe('(5 punktów) Invalid PESEL - empty string', () => {
    ['', '     ', '           ', '             '].map((givenPesel) => {
        test(`empty string is not valid pesel number`, () => {
            expect(() => majorityFromPesel(givenPesel)).toThrowError(`${givenPesel} is not valid PESEL number!`);
        });
    });
});
