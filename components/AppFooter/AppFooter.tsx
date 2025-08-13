import { makePrefixer } from "../../utils/makePrefixer";
import { Group, Text } from "@mantine/core";
import "./AppFooter.component.css";
import { links } from "../../utils/db";

const withBaseName = makePrefixer("appFooter");

export const AppFooter = () => {
  return (
    <footer className={withBaseName()}>
      <Group className={withBaseName("title")}>
        {links.map((link) => (
          <>
            {link.icon}
            <Text className={withBaseName("link")} key={link.label}>
              {link.label}
            </Text>
          </>
        ))}
      </Group>
    </footer>
  );
};
