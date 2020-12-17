function majorityFromPesel(pesel) {
    if (pesel.trim().length !== 11) {
        throw `${pesel} is not valid PESEL number!`;
    }

    const monthOfBirth = pesel.trim().substr(2, 2) % 20;

    let yearOfBirth = Number(pesel.trim().substr(0, 2));

    if ((pesel.trim().substr(2, 2) - monthOfBirth) / 20 === 4) {
        yearOfBirth = 1800 + Number(yearOfBirth);
    } else {
        yearOfBirth = 100 * (19 + Number((pesel.trim().substr(2, 2) - monthOfBirth) / 20)) + yearOfBirth;
    }
    const thresholdDate = new Date(`${yearOfBirth + 18}-${monthOfBirth}-${pesel.trim().substr(4, 2)}`);
    const dateOfBirth = new Date(`${yearOfBirth}-${monthOfBirth}-${pesel.trim().substr(4, 2)}`);

    return Date.now() >= thresholdDate ? 'ADULT' : 'NONADULT';
}

module.exports = majorityFromPesel;
