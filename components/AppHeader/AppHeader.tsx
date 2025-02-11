"use client";
import { useState } from "react";
import { Group, Burger, Drawer, Stack } from "@mantine/core";
import { Text } from "../Text";
import { ColorSchemeToggle } from "./ColorSchemeToggle";
import { ColorModeToggle } from "./ColorModeToggle";
import { makePrefixer } from "../../utils/makePrefixer";
import Link from "next/link";
import "./AppHeader.component.css";
import { clsx } from "clsx";

const links = [
  { label: "Home", link: "./" },
  { label: "Photography", link: "./photography" },
  { label: "Audio", link: "./audio" },
  { label: "Travel", link: "./travel" },
  { label: "Career", link: "./career" },
  // { label: "Recipies", link: "./recipies" },
];

const withBaseName = makePrefixer("appHeader");

type AppHeaderProps = {
  fadedHeader?: boolean;
};

export const AppHeader = ({ fadedHeader }: AppHeaderProps) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => (open ? setOpen(false) : setOpen(true));

  return (
    <header
      className={clsx(withBaseName(), {
        [withBaseName("fadedHeader")]: fadedHeader,
      })}
    >
      <Group visibleFrom="sm" gap={"sm"} className={withBaseName("title")}>
        {links.map((link) => (
          <Text
            className={withBaseName("link")}
            key={link.label}
            href={link.link}
            component={Link}
          >
            {link.label}
          </Text>
        ))}
      </Group>
      <div className={withBaseName("burger")}>
        <Burger
          opened={open}
          onClick={toggleDrawer}
          hiddenFrom="sm"
          size="sm"
        />
      </div>
      <Drawer
        opened={open}
        onClose={() => setOpen(false)}
        className={withBaseName("drawer")}
      >
        <Stack gap={"sm"}>
          {links.map((link) => (
            <Text
              className={withBaseName("link")}
              key={link.label}
              href={link.link}
              component={Link}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Text>
          ))}
        </Stack>
      </Drawer>
      <Group>
        <ColorSchemeToggle />
        <ColorModeToggle />
      </Group>
    </header>
  );
};
