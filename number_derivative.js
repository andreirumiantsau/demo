function derivativeQ(m, n) {
    let mNum = filterInt(m);
    let nNum = filterInt(n);

    if (isNaN(mNum) || isNaN(nNum)) {
        return 'Введите целые числа.'
    }

    if (nNum === 0) {
        return 'Деление на ноль.';
    }

    return ((nNum * derivativeZ(mNum) - mNum * derivativeZ(nNum)) / (nNum * nNum));
}

function derivativeZ(number) {
    let numberNum = filterInt(number);

    if (isNaN(numberNum)) {
        return 'Введите целое число.'
    }

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

function numbersWithSameDerivative(derivativeString, minNumber, maxNumber) {
    let maxNum = filterInt(maxNumber);
    let minNum = filterInt(minNumber);
    let derivative = filterInt(derivativeString);

    if (!(minNum < maxNum)) {
        return 'Неправильный ввод.';
    }

    if ((maxNum - minNum) > 10000) {
        return 'Слишком большой диапозон.'
    }

    let numList = [];
    let num = minNum;

    while (num <= maxNum) {
        if (derivativeZ(num) === derivative) {
            numList.push(num);
        }

        num++;
    }

    if (derivative === 1) {
        document.getElementById('bottom').style.display = 'none';
    }

    return numList.join(', ');
}

function filterInt(value) {
    /*
        Stricter parseInt.
        Converts non-int numbers and string-likes (for example, 2заб2) to NaN.
    */

    if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value)) {
        return Number(value);
    }

    return NaN;
}
