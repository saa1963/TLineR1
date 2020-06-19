export function romanize(num: number): string {
  if (!+num) {
    throw Error();
  }
  const digits: string[] = String(+num).split('');
  const key = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM',
    '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC',
    '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  let roman = '';
  let i = 3;
  while (i--) {
    const dp = digits.pop();
    if (dp)
      roman = (key[+dp + (i * 10)] || '') + roman;
    else
      throw Error();
  }
  return Array(+digits.join('') + 1).join('M') + roman;
}
