import { ReactNode } from "react";
import { makePrefixer } from "../../utils/makePrefixer";
import { clsx } from "clsx";

export type CardFooterProps = {
  children: ReactNode;
  className?: string;
};

const withBaseName = makePrefixer("cardFooter");

export const CardFooter = ({ children, className }: CardFooterProps) => {
  return <div className={clsx(withBaseName(), className)}>{children}</div>;
};
