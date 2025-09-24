import { Text } from "@mantine/core";
import { links } from "../../utils/db";
import styles from "./AppFooter.module.css";

export const AppFooter = () => {
  return (
    <footer className={styles.appFooter}>
      {links.map((link) => (
        <div key={link.label} className={styles.appFooterLink}>
          {link.icon}
          <Text key={link.label}>{link.label}</Text>
        </div>
      ))}
    </footer>
  );
};
