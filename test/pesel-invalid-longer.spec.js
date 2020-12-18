const dateOfBirthFromPesel = require('../dateofbirth-from-pesel');

describe('(5 punktów) Invalid PESEL - too long', () => {
    ['651105117434', '701125696491231231235123123'].map((givenPesel) => {
        test(`${givenPesel} is not valid pesel number`, () => {
            expect(() => dateOfBirthFromPesel(givenPesel)).toThrowError(`${givenPesel} is not valid PESEL number!`);
        });
    });
});
