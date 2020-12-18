const dateOfBirthFromPesel = require('../dateofbirth-from-pesel');

describe('(15 punktów) Date of birth from PESEL', () => {
    [
        '89090132712',
        '96092842277',
        '01300846796',
        '83092964357',
        '04310511743',
        '16312569649',
        '18230374667',
        '03301791241',
    ].map((givenPesel) => {
        test('date of birth extracted pesel', () => {
            expect(dateOfBirthFromPesel(givenPesel)).toMatch(
                /1989-09-01|1996-09-28|2001-10-08|1983-09-29|2004-11-05|2016-11-25|2018-03-03|2003-10-17/
            );
        });
    });
});
