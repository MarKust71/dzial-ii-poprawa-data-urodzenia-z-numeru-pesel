function fullYearOfBirthFromPesel(pesel) {
  if (pesel.trim().length !== 11) {
    throw `${pesel} is not valid PESEL number!`;
  }

  const encodedMonthOfBirth = pesel.trim().substr(2, 2);

  if (encodedMonthOfBirth >= 1 && encodedMonthOfBirth <= 12) return `19${pesel.trim().substr(0, 2)}`;

  if (encodedMonthOfBirth >= 21 && encodedMonthOfBirth <= 32) return `20${pesel.trim().substr(0, 2)}`;

  if (encodedMonthOfBirth >= 41 && encodedMonthOfBirth <= 52) return `21${pesel.trim().substr(0, 2)}`;

  if (encodedMonthOfBirth >= 61 && encodedMonthOfBirth <= 72) return `22${pesel.trim().substr(0, 2)}`;

  if (encodedMonthOfBirth >= 81 && encodedMonthOfBirth <= 92) return `18${pesel.trim().substr(0, 2)}`;

  throw `There is an invalid month in PESEL: ${pesel}`;
}

module.exports = fullYearOfBirthFromPesel;
