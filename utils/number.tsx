export const formatPrice = (number: any) => {
  number = number / 1000;
  return `${number.toLocaleString()}K`;
};
