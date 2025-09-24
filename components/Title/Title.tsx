import { ReactNode } from "react";
import { Title as MantineTitle } from "@mantine/core";
import type { TitleProps as MantineTitleProps } from "@mantine/core";
import { clsx } from "clsx";
import style from "./Title.module.css";

export interface TitleProps extends MantineTitleProps {
  children: ReactNode;
  className?: string;
  underlined?: boolean;
  colorMode?: boolean;
  padding?: boolean;
}

export const Title = ({
  underlined,
  children,
  className,
  colorMode,
  padding,
  ...rest
}: TitleProps) => {
  return (
    <MantineTitle
      className={clsx(
        style.title,
        { [style.titleColorMode]: colorMode },
        className
      )}
      {...rest}
    >
      {children}
    </MantineTitle>
  );
};
