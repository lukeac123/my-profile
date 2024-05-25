import { Text, Divider, Paper, Stack } from "@mantine/core";
import Link from "next/link";
import "./AppHeader.component.css";
import { ColorSchemeToggle } from "./ColorSchemeToggle";
import { ColorModeToggle } from "./ColorModeToggle";

const links = [
  { id: "Home", link: "./" },
  { id: "People", link: "./people" },
  { id: "Places", link: "./places" },
  { id: "Insights", link: "./insights" },
];

export const AppHeader = () => {
  return (
    <Paper className="appHeader-container">
      <Stack align="center">
        <ColorSchemeToggle />
        <ColorModeToggle />
        <Divider orientation="horizontal">Hi</Divider>
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
      </Stack>
    </Paper>
  );
};
