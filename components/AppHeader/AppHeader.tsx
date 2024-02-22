import { Flex, Text, Divider } from "@mantine/core";
import Link from "next/link";
import "./AppHeader.component.css";
import { ColorSchemeToggle } from "./ColorSchemeToggle";
import { ColorModeToggle } from "./ColorModeToggle";

const links = [
  { id: "Blog", link: "/" },
  { id: "CV", link: "./cv" },
];

export const AppHeader = () => {
  return (
    <Flex id="header" className="appHeader-container">
      <Flex align="center" className="appHeader-title">
        <Text href={"./"} component={Link}>
          Luke Atkinson-Coyle
        </Text>
      </Flex>

      <Flex align="center" direction="row" gap="lg">
        {links.map((link) => {
          return (
            <Text
              key={link.id}
              className={"appHeader-nav"}
              size="l"
              fw={500}
              href={link.link}
              component={Link}
            >
              {link.id}
            </Text>
          );
        })}
        <Divider orientation="vertical" />
        <ColorModeToggle />
        <ColorSchemeToggle />
      </Flex>
    </Flex>
  );
};
