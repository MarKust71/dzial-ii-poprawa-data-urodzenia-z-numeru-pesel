function dateOfBirthFromPesel(pesel) {
    if (pesel.length !== 11) {
        throw `${pesel} is not valid PESEL number!`;
    }

    const _pesel = pesel.trim();
    if (_pesel.length !== 11) {
        throw `${pesel} is not valid PESEL number!`;
    }

    let monthOfBirth = _pesel.substr(2, 2) % 20;
    if (monthOfBirth.toString(10).length < 2) monthOfBirth = '0' + monthOfBirth;

    if (monthOfBirth < 1 || monthOfBirth > 12) throw `There is an invalid month in PESEL: ${pesel}`;

    let yearOfBirth = Number(_pesel.substr(0, 2));
    if ((_pesel.substr(2, 2) - monthOfBirth) / 20 === 4) {
        yearOfBirth = '18' + yearOfBirth;
    } else {
        yearOfBirth = 100 * (19 + Number((_pesel.substr(2, 2) - monthOfBirth) / 20)) + yearOfBirth;
    }
    return `${yearOfBirth}-${monthOfBirth}-${_pesel.substr(4, 2)}`;
}

module.exports = dateOfBirthFromPesel;
