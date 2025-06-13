export const getDiscountPrice = (price, discount) => {
  if (!discount || discount <= 0) return price;
  return price - (price * discount) / 100;
};
