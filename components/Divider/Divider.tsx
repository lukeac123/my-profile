import { Divider as MantineDivider, DividerProps } from "@mantine/core";
import { clsx } from "clsx";
import { makePrefixer } from "../../utils/makePrefixer";
import "./Divider.module.css";

const withBaseName = makePrefixer("divider");

export const Divider = ({ className, ...rest }: DividerProps) => {
  return (
    <MantineDivider className={clsx(withBaseName(), className)} {...rest} />
  );
};
