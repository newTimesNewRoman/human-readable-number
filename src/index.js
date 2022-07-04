module.exports = function toReadable (number) {
  const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const decimal = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const numberString = number.toString();
  // проверка для нуля
  if (number === 0) return 'zero';
  // проверка для чисел 1 - 19
  if (number < 20) return units[number];
  // проверка для двузначных чисел от 20 до 99
  if (numberString.length === 2 && number >= 20) {
    const resultForDecimal = decimal[numberString[0]] + ' ' + units[numberString[1]];
    return resultForDecimal.trim();
  }
  // проверка для трехзначных чисел
  if (numberString.length === 3) {
    // проверка для трехзначных чисел, кратным 100
    if (numberString[1] === '0' && numberString[2] === '0') return units[numberString[0]] + ' hundred';
    else {
      // проверка для трехзначных чисел, оканчивающихся на 01 - 19
      const decimalAndUnit = Number(numberString[1] + numberString[2]);
      if (decimalAndUnit < 20) return units[numberString[0]] + ' hundred' + ' ' + units[decimalAndUnit];
      else {
        // проверка для трехзначных чисел, оканчивающихся на 20 - 99
        const resultForHundred = units[numberString[0]] + ' hundred' + ' ' + decimal[numberString[1]] + ' ' + units[numberString[2]];
        return resultForHundred.trim();
      }
    }
  }
}