import { ReactNode } from "react";
import { makePrefixer } from "../../utils/makePrefixer";
import { clsx } from "clsx";
import styles from "./Card.module.css";

export type CardFooterProps = {
  children: ReactNode;
  className?: string;
};

export const CardFooter = ({ children, className }: CardFooterProps) => {
  return <div className={clsx(styles.cardFooter, className)}>{children}</div>;
};
