import { ReactNode } from "react";
import { makePrefixer } from "../../utils/makePrefixer";
import { clsx } from "clsx";

export type CardTitleProps = {
  children: ReactNode;
  className?: string;
};

const withBaseName = makePrefixer("cardTitle");

export const CardTitle = ({ children, className }: CardTitleProps) => {
  return <div className={clsx(withBaseName(), className)}>{children}</div>;
};
