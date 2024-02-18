"use client";
import { ReactNode, useState } from "react";
import { makePrefixer } from "../../utils/makePrefixer";
import { clsx } from "clsx";

export type CardContentProps = {
  children: ReactNode;
  className?: string;
};

const withBaseName = makePrefixer("cardContent");

export const CardContent = ({ children, className }: CardContentProps) => {
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
    >
      {children}
    </div>
  );
};
