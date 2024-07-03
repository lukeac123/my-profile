"use client";
import { useState } from "react";
import {
  Text,
  Title,
  Container,
  Group,
  Burger,
  Drawer,
  Stack,
} from "@mantine/core";
import { ColorSchemeToggle } from "./ColorSchemeToggle";
import { ColorModeToggle } from "./ColorModeToggle";
import { makePrefixer } from "../../utils/makePrefixer";
import Link from "next/link";
import "./AppHeader.component.css";

const links = [
  { label: "Home", link: "./" },
  { label: "Places", link: "./places" },
  { label: "People", link: "./people" },
  { label: "Food", link: "./food" },
  { label: "Audio", link: "./audio" },
  { label: "Gallery", link: "./gallery" },
];

const withBaseName = makePrefixer("appHeader");

export const AppHeader = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => (open ? setOpen(false) : setOpen(true));

  return (
    <header className={withBaseName()}>
      <Burger opened={open} onClick={toggleDrawer} hiddenFrom="sm" size="sm" />
      <Container className={withBaseName("title")}>
        <Title visibleFrom="sm">Queer Abroad</Title>
        <Group visibleFrom="sm" gap={"sm"} justify="center">
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

        <Drawer
          opened={open}
          onClose={() => setOpen(false)}
          title="Queer Abroad"
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

        <div className={withBaseName("buttonbar")}>
          <ColorSchemeToggle />
          <ColorModeToggle />
        </div>
      </Container>
    </header>
  );
};
