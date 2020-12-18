const dateOfBirthFromPesel = require('../dateofbirth-from-pesel');

describe('(15 punktów) Date of birth from PESEL', () => {
    [
        { givenPesel: '89090132712', returnedDateOfBirth: '1989-09-01' },
        { givenPesel: '96092842277', returnedDateOfBirth: '1996-09-28' },
        { givenPesel: '01300846796', returnedDateOfBirth: '2001-10-08' },
        { givenPesel: '83092964357', returnedDateOfBirth: '1983-09-29' },
        { givenPesel: '04310511743', returnedDateOfBirth: '2004-11-05' },
        { givenPesel: '16312569649', returnedDateOfBirth: '2016-11-25' },
        { givenPesel: '18230374667', returnedDateOfBirth: '2018-03-03' },
        { givenPesel: '03301791241', returnedDateOfBirth: '2003-10-17' },
    ].map((testData) => {
        test('date of birth extracted from pesel', () => {
            expect(dateOfBirthFromPesel(testData.givenPesel)).toBe(testData.returnedDateOfBirth);
        });
    });
});
