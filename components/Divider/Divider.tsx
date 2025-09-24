import { Divider as MantineDivider, DividerProps } from "@mantine/core";
import { clsx } from "clsx";
import { makePrefixer } from "../../utils/makePrefixer";
import styles from "./Divider.module.css";

const withBaseName = makePrefixer("divider");

export const Divider = ({ className, ...rest }: DividerProps) => {
  return (
    <MantineDivider className={clsx(styles.divider, className)} {...rest} />
  );
};
