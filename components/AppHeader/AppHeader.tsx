"use client";
import { Flex, Text } from "@mantine/core";
import Link from "next/link";
import "./AppHeader.component.css";
import ModeToggle from "./ModeToggle";
import ColorSchemeToggle from "./ColorSchemeToggle";

const links = [
  { id: "Blog", link: "./" },
  { id: "CV", link: "./cv" },
];

export const AppHeader = () => {
  return (
    <Flex id="header" className={"appHeader-container"}>
      <Flex align="center" className={"appHeader-title"}>
        <Link href="./" style={{ textDecoration: "none" }}>
          <Text> Luke Atkinson-Coyle </Text>
        </Link>
      </Flex>

      <Flex align="center" direction="row" gap="lg">
        {links.map((link) => {
          return (
            <Link
              key={link.id}
              href={link.link}
              style={{ color: "pink", textDecoration: "none" }}
            >
              <Text className={"appHeader-nav"} size="l" fw={500}>
                {link.id}
              </Text>
            </Link>
          );
        })}
        {/* <ModeToggle /> */}
        <ColorSchemeToggle />
      </Flex>
    </Flex>
  );
};
