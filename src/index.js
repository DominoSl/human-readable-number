module.exports = function toReadable (number) {
  if (number === 0) {
    return 'zero';
  }

  let result = '';
  const easyNumbers = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  };
  const numberAsString = number + '';

  if (numberAsString.length === 3) {
    result += `${easyNumbers[numberAsString[0]]} hundred`;
  }

  let tens = number % 100;

  if (tens in easyNumbers) {
    result += ` ${easyNumbers[tens]}`;
  } else {
    tens = Math.floor(tens / 10) * 10;
    const ones = number % 10;
    result += ` ${easyNumbers[tens]} ${easyNumbers[ones]}`;
  }

  return result.trim();
}
