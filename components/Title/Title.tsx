import { ReactNode } from "react";
import { makePrefixer } from "../../utils/makePrefixer";
import { Title as MantineTitle } from "@mantine/core";
import type { TitleProps as MantineTitleProps } from "@mantine/core";
import { clsx } from "clsx";
import "./Title.component.css";

export interface TitleProps extends MantineTitleProps {
  children: ReactNode;
  className?: string;
  underlined?: boolean;
  padding?: boolean;
}

const withBaseName = makePrefixer("title");

export const Title = ({
  underlined,
  padding,
  children,
  className,
  ...rest
}: TitleProps) => {
  return (
    <MantineTitle
      order={3}
      className={clsx(
        withBaseName(),
        { [withBaseName("underlined")]: underlined },
        { [withBaseName("padding")]: padding },
        className,
      )}
      {...rest}
    >
      {children}
    </MantineTitle>
  );
};
