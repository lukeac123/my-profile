import { makePrefixer } from "../../utils/makePrefixer";
import { Group, Text } from "@mantine/core";
import {
  IconBrandInstagram,
  IconMail,
  IconBrandGithub,
} from "@tabler/icons-react";
import "./AppFooter.component.css";

const withBaseName = makePrefixer("appFooter");

const links = [
  {
    icon: <IconBrandInstagram />,
    label: "@ac_the_third",
  },
  {
    icon: <IconMail />,
    label: "luke.atkinson-coyle@outlook.com",
  },
  {
    icon: <IconBrandGithub />,
    label: "https://github.com/lukeac123",
  },
];

export const AppFooter = () => {
  return (
    <footer className={withBaseName()}>
      <Group visibleFrom="sm" gap={"sm"} className={withBaseName("title")}>
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
