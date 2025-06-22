import { useMemo } from "react";

const useStockStatus = (sold, stock) => {
  return useMemo(() => {
    const availablStock = stock - sold;
    const soldPercentage = stock > 0 ? (sold / stock) * 100 : 0;
    const roundPercentage = Math.round(soldPercentage);
    if (roundPercentage >= 100 || availablStock <= 0) {
      return {
        status: "Out of Stock",
        color: "red",
        percentage: 0,
      };
    } else if (roundPercentage >= 80) {
      return {
        status: "Limited Stock",
        color: "#FF624C",
        percentage: roundPercentage,
      };
    } else {
      return {
        status: `${availablStock} Available`,
        color: "#303030",
        percentage: roundPercentage,
      };
    }
  }, [sold, stock]);
};
export default useStockStatus;
