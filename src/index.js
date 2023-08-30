module.exports = function toReadable(number) {
    const num1 = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const num10 = [
        "zero",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const num11 = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    if (number < 10) {
        return num1[number];
    }

    if (number >= 10 && number < 20) {
        return `${num11[number.toString()[1]]}`;
    }

    if (number >= 20 && number < 100) {
        if (number % 10 === 0) {
            return num10[number / 10];
        } else
            return `${num10[number.toString()[0]]} ${
                num1[number.toString()[1]]
            }`;
    }

    if (number >= 100 && number < 1000) {
        if (number % 100 === 0) {
            return `${num1[number.toString()[0]]} hundred`;
        }
        if (number % 10 === 0) {
            return `${num1[number.toString()[0]]} hundred ${
                num10[number.toString()[1]]
            }`;
        }

        if (number.toString()[1] == 0) {
            return `${num1[number.toString()[0]]} hundred ${
                num1[number.toString()[2]]
            }`;
        }

        if (number.toString()[1] == 1) {
            return `${num1[number.toString()[0]]} hundred ${
                num11[number.toString()[2]]
            }`;
        } else
            return `${num1[number.toString()[0]]} hundred ${
                num10[number.toString()[1]]
            } ${num1[number.toString()[2]]}`;
    }
};
