const fullYearOfBirthFromPesel = require('../fullyearofbirth-from-pesel');

describe('(5 punktów) Invalid PESEL - wrong month', () => {
  [
    '89990132712',
    '96792842277',
    '01330846796',
    '83592964357',
    '04360511743',
    '16352569649',
    '18200374667',
    '03371791241',
  ].map((givenPesel) => {
    test(`An invalid month in PESEL: ${givenPesel}`, () => {
      expect(() => fullYearOfBirthFromPesel(givenPesel)).toThrowError(
        `There is an invalid month in PESEL: ${givenPesel}`,
      );
    });
  });
});
