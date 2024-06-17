"use client";
import { ReactNode, useState, HTMLAttributes } from "react";
import { makePrefixer } from "../../utils/makePrefixer";
import { clsx } from "clsx";

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const withBaseName = makePrefixer("cardContent");

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
      className={clsx(withBaseName(), className)}
      {...rest}
    >
      {children}
    </div>
  );
};
