"use client";
import { ReactNode, useState, HTMLAttributes } from "react";
import { clsx } from "clsx";
import styles from "./Card.module.css";

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export const CardContent = ({
  children,
  className,
  ...rest
}: CardContentProps) => {
  const [scrollTop, setScrollTop] = useState(0);

  function useScrollTop(event: React.UIEvent<HTMLElement>) {
    setScrollTop(event.currentTarget.scrollTop);
    return [scrollTop];
  }

  return (
    <div
      style={{ borderTop: scrollTop > 0 ? "solid 1px" : "" }}
      onScroll={useScrollTop}
      className={clsx(styles.cardContent, className)}
      {...rest}
    >
      {children}
    </div>
  );
};
