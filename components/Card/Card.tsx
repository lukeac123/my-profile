import { HTMLAttributes, ReactElement } from "react";
import {
  Card as MantineCard,
  CardProps as MantineCardProps,
} from "@mantine/core";
import Link from "next/link";
import { clsx } from "clsx";
import styles from "./Card.module.css";

export interface CardProps extends MantineCardProps {
  link?: string;
  disabled?: boolean;
  hover?: boolean;
  adornment?: ReactElement;
}

export const Card = ({
  children,
  link,
  className,
  disabled = false,
  hover = false,
  adornment,
  ...rest
}: CardProps) => {
  return (
    <MantineCard
      className={clsx(
        styles.card,
        {
          [`${styles.cardDisabled}`]: disabled,
          [`${styles.cardHover}`]: hover && !disabled,
        },
        className
      )}
      component={link && !disabled && Link}
      href={link && !disabled ? link : undefined}
      {...rest}
    >
      {children}
      <div className={styles.cardAdornment}>{adornment}</div>
    </MantineCard>
  );
};
