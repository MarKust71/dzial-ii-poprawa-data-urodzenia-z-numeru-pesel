const fullYearOfBirthFromPesel = require('../fullyearofbirth-from-pesel');

describe('(15 punktów) Year of birth from PESEL', () => {
  [
    { givenPesel: '89090132712', returnedYearOfBirth: '1989' },
    { givenPesel: '96892842277', returnedYearOfBirth: '1896' },
    { givenPesel: '01300846796', returnedYearOfBirth: '2001' },
    { givenPesel: '83092964357', returnedYearOfBirth: '1983' },
    { givenPesel: '04310511743', returnedYearOfBirth: '2004' },
    { givenPesel: '16512569649', returnedYearOfBirth: '2116' },
    { givenPesel: '18230374667', returnedYearOfBirth: '2018' },
    { givenPesel: '03701791241', returnedYearOfBirth: '2203' },
  ].map((testData) => {
    test(`full year of birth ${testData.returnedYearOfBirth} correctly extracted from PESEL ${testData.givenPesel}`, () => {
      expect(fullYearOfBirthFromPesel(testData.givenPesel)).toBe(testData.returnedYearOfBirth);
    });
  });
});
