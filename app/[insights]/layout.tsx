"use client";
import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript, Flex, Text } from "@mantine/core";
import Link from "next/link";
import { theme } from "../../theme";
import { AppShell } from "@mantine/core";

const links = [
  { id: "Home", link: "./" },
  { id: "Projects", link: "./projects" },
  { id: "About", link: "./about" },
  { id: "CV", link: "./cv" },
];

export default function InsightsLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <AppShell
            header={{ height: 40 }}
            padding="md"
            style={{ width: "100%" }}
          >
            <AppShell.Header>
              <Flex
                direction={"row"}
                gap={"lg"}
                justify={"flex-end"}
                align={"flex-end"}
                style={{ paddingRight: "10px" }}
              >
                {links.map((link) => {
                  return (
                    <Link href={link.link}>
                      <Text
                        size="l"
                        fw={300}
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        {link.id}
                      </Text>
                    </Link>
                  );
                })}
              </Flex>
            </AppShell.Header>
            <AppShell.Main>{children}</AppShell.Main>

            <AppShell.Footer> Hello from Footer </AppShell.Footer>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
