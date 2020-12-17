const genderFromPesel = require('../gender-from-pesel');

describe('(5 punktów) Invalid PESEL - too short', () => {
    ['123', '12345', '6511051174'].map((givenPesel) => {
        test(`${givenPesel} is not valid pesel number`, () => {
            expect(() => majorityFromPesel(givenPesel)).toThrowError(`${givenPesel} is not valid PESEL number!`);
        });
    });
});
