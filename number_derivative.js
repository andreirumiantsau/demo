function derivativeQ(m, n) {
    return ((n * derivativeZ(m) - m * derivativeZ(n)) / (n * n));
}

function derivativeZ(number) {
    let resultZ = 0;
    let numberFactors = factors(number);

    if (number < 0) {
        return (-1 * derivativeZ((-1 * number)));
    }

    if ((number === 0) || (number === 1)) {
        return 0;
    }

    if ((numberFactors[0] === number) && (numberFactors.length === 1)) {
        return 1;
    }

    let i = 0;
    while (i < numberFactors.length)
    {
        resultZ = resultZ + (number / numberFactors[i]);
        i++;
    }

    return resultZ;
}

function factors(number) {
    if ((number === 0) || (number === 1)) {
        return number;
    }

    let i = 2, j = 0;
    let numberFactors = [];

    while (i <= number) {
        if (number % i === 0) {
            numberFactors[j] = i;
            j++;
            number = number / i;
        }
        else {
            i++;
        }
    }

    return numberFactors;
}
