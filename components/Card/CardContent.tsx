import { ReactNode, HTMLAttributes } from "react";
import styles from "./CardContent.module.css";
import { clsx } from "clsx";

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export const CardContent = ({
  children,
  className,
  ...rest
}: CardContentProps) => {
  return (
    <div className={clsx(styles.cardContent, className)} {...rest}>
      {children}
    </div>
  );
};
