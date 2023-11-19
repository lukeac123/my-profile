import { Flex, Text } from "@mantine/core";
import Link from "next/link";
import "./AppHeader.component.css";
import ToggleColorScheme from "./colorSchemeToggle";

//TODO: Create link component with color and text decoration overriden

const links = [
  { id: "Coding Projects", link: "./coding" },
  { id: "Photos", link: "./photos" },
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
              style={{ color: "black", textDecoration: "none" }}
            >
              <Text className={"appHeader-nav"} size="l" fw={500}>
                {link.id}
              </Text>
            </Link>
          );
        })}
        <ToggleColorScheme />
      </Flex>
    </Flex>
  );
};
