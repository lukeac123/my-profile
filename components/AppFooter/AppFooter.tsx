import { Text } from "@mantine/core";
import { links } from "../../utils/db";
import styles from "./AppFooter.module.css";
import Link from "next/link";

export const AppFooter = () => {
  return (
    <footer className={styles.appFooter} role="contentinfo">
      {links.map((link) => (
        <div key={link.label} className={styles.appFooterLink}>
          {link.icon}
          <Text
            component={link.link && Link}
            href={link.link ? link.link : undefined}
          >
            {link.label}
          </Text>
        </div>
      ))}
    </footer>
  );
};
