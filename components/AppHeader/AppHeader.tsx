import { Flex, Text, Button, useComputedColorScheme } from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
import Link from "next/link";
import "./AppHeader.component.css";

const links = [
  { id: "Home", link: "./" },
  { id: "Projects", link: "./projects" },
  { id: "About", link: "./about" },
  { id: "CV", link: "./cv" },
];

export const AppHeader = () => {
  // const mode = useComputedColorScheme()
  const mode = "light";
  return (
    <Flex id="header" className={"appHeader-container"}>
      <Flex align="center" direction="row" gap="lg" className={"appHeader-nav"}>
        {links.map((link) => {
          return (
            <Link
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
      <Flex justify="end" direction="row">
        <Button>{mode === "dark" ? <IconSun /> : <IconMoon />}</Button>
      </Flex>
    </Flex>
  );
};
