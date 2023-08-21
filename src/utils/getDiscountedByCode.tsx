export const getDiscountedByCode = (
  price: number,
  amount: number,
  unit: string,
) => {
  switch (unit) {
    case '%':
      return (price * (100 - amount)) / 100;
    default:
      return price;
  }
};
