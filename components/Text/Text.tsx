import { ReactNode } from "react";
import { makePrefixer } from "../../utils/makePrefixer";
import { Text as MantineText } from "@mantine/core";
import type { TextProps as MantineTextProps } from "@mantine/core";
import { clsx } from "clsx";
import styles from "./Text.module.css";

export interface TextProps extends MantineTextProps {
  children: ReactNode;
  className?: string;
  underlined?: boolean;
  padding?: boolean;
  title?: boolean;
  colorMode?: boolean;
}

export const Text = ({
  underlined,
  padding,
  children,
  className,
  title,
  colorMode,
  ...rest
}: TextProps) => {
  return (
    <MantineText
      className={clsx(
        styles.text,
        { [styles.colorMode]: colorMode },
        className
      )}
      {...rest}
    >
      {children}
    </MantineText>
  );
};
