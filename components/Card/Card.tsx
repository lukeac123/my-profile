import { HTMLAttributes } from "react";
import { Card as MantineCard } from "@mantine/core";
import Link from "next/link";
import { clsx } from "clsx";
import styles from "./Card.module.css";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  link?: string;
}

export const Card = ({ children, link, className, ...rest }: CardProps) => {
  return (
    <MantineCard
      className={clsx(styles.card, className)}
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
