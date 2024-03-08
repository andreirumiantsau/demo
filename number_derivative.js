function derivativeQ(m, n) {
    let mNum = parseInt(m);
    let nNum = parseInt(n);

    if (nNum === 0) {
        return 'Деление на ноль.';
    }

    return ((nNum * derivativeZ(mNum) - mNum * derivativeZ(nNum)) / (nNum * nNum));
}

function derivativeZ(number) {
    let numberNum = parseInt(number);

    if (numberNum < 0) {
        return (-1 * derivativeZ((-1 * numberNum)));
    }

    let numberFactors = factors(numberNum);

    if ((numberFactors[0] === 0) || (numberFactors[0] === 1)) {
        return 0;
    }

    let resultZ = 0;
    let i = 0;

    while (i < numberFactors.length)
    {
        resultZ = resultZ + (numberNum / numberFactors[i]);
        i++;
    }

    return resultZ;
}

function factors(number) {
    if ((number === 0) || (number === 1)) {
        return [number];
    }

    let i = 2;
    let numberFactors = [];

    while (i <= number) {
        if (number % i === 0) {
            numberFactors.push(i);
            number = number / i;
        }
        else {
            i++;
        }
    }

    return numberFactors;
}
