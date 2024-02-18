"use client";
import { ReactNode, useState } from "react";
import { Card as MantineCard } from "@mantine/core";
import { useColorSchemeContext } from "../../app/Providers";
import Link from "next/link";
import { clsx } from "clsx";
import { makePrefixer } from "../../utils/makePrefixer";
import "./Card.component.css";

export type CardProps = {
  children: ReactNode;
  link?: string;
  className?: string;
};

const withBaseName = makePrefixer("card");

export const Card = ({ children, link, className, ...rest }: CardProps) => {
  const { colorScheme } = useColorSchemeContext();

  return (
    <MantineCard
      className={clsx(
        withBaseName(),
        { [withBaseName("link")]: link },
        className
      )}
      style={{
        borderColor: `${colorScheme}`,
      }}
      withBorder
      shadow="sm"
      //TODO: Need to fix the typing
      component={link ? Link : undefined}
      href={link}
      {...rest}
    >
      {children}
    </MantineCard>
  );
};
