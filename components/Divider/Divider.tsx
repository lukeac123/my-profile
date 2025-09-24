import { Divider as MantineDivider, DividerProps } from "@mantine/core";
import { clsx } from "clsx";
import styles from "./Divider.module.css";

export const Divider = ({ className, ...rest }: DividerProps) => {
  return (
    <MantineDivider
      className={clsx(styles.divider, className)}
      {...rest}
      // size="lg"
    />
  );
};
