"use client";
import { useState } from "react";
import { Text, Title, Group, Burger, Drawer, Stack } from "@mantine/core";
import { ColorSchemeToggle } from "./ColorSchemeToggle";
import { ColorModeToggle } from "./ColorModeToggle";
import { makePrefixer } from "../../utils/makePrefixer";
import Link from "next/link";
import "./AppHeader.component.css";

const links = [
  { label: "Home", link: "./" },
  { label: "Photography", link: "./photography" },
  { label: "Audio", link: "./audio" },
  { label: "Travel", link: "./travel" },
  // { label: "Recipies", link: "./recipies" },
];

const withBaseName = makePrefixer("appHeader");

export const AppHeader = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => (open ? setOpen(false) : setOpen(true));

  return (
    <header className={withBaseName()}>
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
          // Would using css media queries be faster than using the below ?
          hiddenFrom="sm"
          size="sm"
        />
      </div>

      <Drawer
        opened={open}
        onClose={() => setOpen(false)}
        title="Luke Atkinson-Coyle"
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
