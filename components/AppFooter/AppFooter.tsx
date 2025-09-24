import { makePrefixer } from "../../utils/makePrefixer";
import { Text } from "../Text";
import "./AppFooter.component.css";
import { links } from "../../utils/db";

const withBaseName = makePrefixer("appFooter");

export const AppFooter = () => {
  return (
    <footer className={withBaseName()}>
      {links.map((link) => (
        <div key={link.label} className={withBaseName("link")}>
          {link.icon}
          <Text key={link.label}>{link.label}</Text>
        </div>
      ))}
    </footer>
  );
};
