"use client";
import { useState } from "react";
import { Group, Burger, Drawer, Stack, Text, Divider } from "@mantine/core";
import { ColorSchemeToggle } from "./ColorSchemeToggle";
import { ColorModeToggle } from "./ColorModeToggle";
import { makePrefixer } from "../../utils/makePrefixer";
import Link from "next/link";
import { clsx } from "clsx";
import "./AppHeader.component.css";

const links = [
  { label: "CV", link: "/cv" },
  { label: "Travel Blog", link: "/travel" },
  { label: "Photos", link: "/photography" },
  { label: "Audio Clips", link: "/audio" },
];

const withBaseName = makePrefixer("appHeader");

export const AppHeader = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => (open ? setOpen(false) : setOpen(true));

  return (
    <header className={clsx(withBaseName())}>
      <div className={withBaseName("burger")}>
        <Burger
          opened={open}
          onClick={toggleDrawer}
          hiddenFrom="sm"
          size="sm"
        />
        <Text size="xl" component={Link} href={"./"}>
          Luke Atkinson
        </Text>
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
              size="xl"
            >
              {link.label}
            </Text>
          ))}
        </Stack>
      </Drawer>
      <Group>
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
        <Divider orientation="vertical" visibleFrom="sm" />
        <ColorSchemeToggle />
        <ColorModeToggle />
      </Group>
    </header>
  );
};
