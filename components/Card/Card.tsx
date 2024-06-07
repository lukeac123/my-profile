import { ReactNode, HTMLAttributes } from "react";
import { Card as MantineCard } from "@mantine/core";
import Link from "next/link";
import { clsx } from "clsx";
import { makePrefixer } from "../../utils/makePrefixer";
import "./Card.component.css";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  link?: string;
}

const withBaseName = makePrefixer("card");

export const Card = ({ children, link, className, ...rest }: CardProps) => {
  return (
    <MantineCard
      className={clsx(
        withBaseName(),
        { [withBaseName("link")]: link },
        className,
      )}
      withBorder
      shadow="sm"
      component={link ? Link : undefined}
      href={link}
      {...rest}
    >
      {children}
    </MantineCard>
  );
};
