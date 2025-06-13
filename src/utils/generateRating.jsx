import { PiStar, PiStarFill, PiStarHalfFill } from "react-icons/pi";

export const getStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 >= 0.25 && rating % 1 < 0.75;
  const emptyStars = 5 - fullStars - (halfStars ? 1 : 0);
  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <span key={`full-${i}`} className="text-yellow">
        <PiStarFill />
      </span>
    );
  }
  if (halfStars) {
    stars.push(
      <span key={`half`} className="text-yellow">
        <PiStarHalfFill />
      </span>
    );
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <span key={`empty-${i}`} className="text-yellow">
        <PiStar />
      </span>
    );
  }
  return <div className="flex gap-x-1 items-center mt-[10px]">{stars}</div>;
};
