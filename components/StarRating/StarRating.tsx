import { HTMLAttributes } from "react";
import { IconStar } from "@tabler/icons-react";

export interface StarRating extends HTMLAttributes<HTMLDivElement> {
  stars: number;
}

export const StarRating = ({ className, stars = 5 }: StarRating) => {
  const noStars = Array.from(Array(stars).keys());
  return (
    <>
      {noStars.map(() => {
        return <IconStar />;
      })}
    </>
  );
};
