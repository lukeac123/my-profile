import { Flex, Text } from "@mantine/core";
import Link from "next/link";
import "./AppHeader.component.css";
import ToggleColorScheme from "./colorSchemeToggle";

const links = [
  { id: "Home", link: "./" },
  { id: "Projects", link: "./projects" },
  { id: "About", link: "./about" },
  { id: "CV", link: "./cv" },
];

export const AppHeader = () => {
  return (
    <Flex id="header" className={"appHeader-container"}>
      <Flex align="center" direction="row" gap="lg" className={"appHeader-nav"}>
        {links.map((link) => {
          return (
            <Link
              key={link.id}
              href={link.link}
              style={{ color: "black", textDecoration: "none" }}
            >
              <Text className={"appHeader-text"} size="l" fw={500}>
                {link.id}
              </Text>
            </Link>
          );
        })}
      </Flex>
      <ToggleColorScheme />
    </Flex>
  );
};
