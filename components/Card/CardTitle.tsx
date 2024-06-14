import { ReactNode } from "react";
import { makePrefixer } from "../../utils/makePrefixer";
import { Title } from "@mantine/core";
import { clsx } from "clsx";

export type CardTitleProps = {
  children: ReactNode;
  className?: string;
};

const withBaseName = makePrefixer("cardTitle");

export const CardTitle = ({ children, className, ...rest }: CardTitleProps) => {
  return (
    <Title order={3} className={clsx(withBaseName(), className)} {...rest}>
      {children}
    </Title>
  );
};
