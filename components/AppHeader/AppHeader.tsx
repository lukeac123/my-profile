"use client";
import { useState } from "react";
import { Group, Burger, Drawer, Stack } from "@mantine/core";
import { Text } from "../Text";
import { Divider } from "../Divider";
import { ColorSchemeToggle } from "./ColorSchemeToggle";
import { ColorModeToggle } from "./ColorModeToggle";
import { makePrefixer } from "../../utils/makePrefixer";
import Link from "next/link";
import { clsx } from "clsx";
import styles from "./AppHeader.module.css";

const links = [{ label: "Check Me Out!", link: "./cv" }];

type AppHeaderProps = {
  fadedHeader?: boolean;
};

export const AppHeader = ({ fadedHeader }: AppHeaderProps) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => (open ? setOpen(false) : setOpen(true));

  return (
    <header
      className={clsx(styles.appHeader, {
        [styles.fadedHeader]: fadedHeader,
      })}
    >
      <div className={styles.burger}>
        <Burger
          opened={open}
          onClick={toggleDrawer}
          hiddenFrom="sm"
          size="sm"
        />
        <Text size="xl" component={Link} href={"./"}>
          Luke Atkinson-Coyle
        </Text>
      </div>
      <Drawer
        opened={open}
        onClose={() => setOpen(false)}
        className={styles.drawer}
      >
        <Stack gap={"sm"}>
          {links.map((link) => (
            <Text
              className={styles.link}
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
        <Group visibleFrom="sm" gap={"sm"} className={styles.title}>
          {links.map((link) => (
            <Text
              className={styles.link}
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
