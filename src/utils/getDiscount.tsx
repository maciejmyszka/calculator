export const getDiscount = (
  oldPrice: string | number,
  newPrice: string | number,
) => {
  const discount =
    -((Number(oldPrice) - Number(newPrice)) / Number(oldPrice)) * 100;
  return discount.toFixed(0) + '%';
};
