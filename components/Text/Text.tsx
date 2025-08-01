import { ReactNode } from "react";
import { makePrefixer } from "../../utils/makePrefixer";
import { Text as MantineText } from "@mantine/core";
import type { TextProps as MantineTextProps } from "@mantine/core";
import { clsx } from "clsx";
import "./Text.component.css";

export interface TextProps extends MantineTextProps {
  children: ReactNode;
  className?: string;
  underlined?: boolean;
  padding?: boolean;
  title?: boolean;
  colorMode?: boolean;
}

const withBaseName = makePrefixer("text");

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
        withBaseName(),
        { [withBaseName("colorMode")]: colorMode },
        className,
      )}
      {...rest}
    >
      {children}
    </MantineText>
  );
};
