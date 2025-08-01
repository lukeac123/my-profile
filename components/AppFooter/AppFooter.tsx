import { Group } from "@mantine/core";
import { Text } from "../Text";
import {
  IconBrandInstagram,
  IconMail,
  IconBrandGithub,
} from "@tabler/icons-react";
import styles from "./AppFooter.module.css";

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
    <footer className={styles.appFooter}>
      <Group>
        {links.map((link) => (
          <>
            {link.icon}
            <Text key={link.label}>{link.label}</Text>
          </>
        ))}
      </Group>
    </footer>
  );
};
