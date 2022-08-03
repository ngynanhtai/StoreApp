export function formatPrice(number: number) {
  number = number / 1000;
  return `${number.toLocaleString()}K`;
}

export function formatLongString(string?: any) {
  var newString;
  if (string.length > 40) {
    newString = string.substr(0, 25) + " ...";
    return newString;
  }
  return string;
}
