import Link from "next/link";
import { Card, LineChart } from "../components";
import { Text, Title } from "@mantine/core";
import { makePrefixer } from "../utils";
import { homePageData, lineChartData } from "../utils/db";
import styles from "./page.module.css";
import { IconClick } from "@tabler/icons-react";
import clsx from "clsx";

const withBaseName = makePrefixer("homePage");

export interface HomePageCardType {
  title: string;
  description: string;
  link: string;
  disabled?: boolean;
}

export default function BlogPage() {
  return (
    <div className={styles.homePage}>
      <LineChart data={lineChartData} />
      {Object.entries(homePageData).map((item) => {
        const { cards, caption } = item[1];
        return (
          <Card className={styles.homePageOuterCard} key={item[0]}>
            <div className={styles.homePageContent}>
              <Title>{item[0]}</Title>
              <Text>{caption}</Text>
              {cards &&
                cards.map((card: HomePageCardType) => {
                  const { title, description, link, disabled } = card;
                  return (
                    <Card
                      key={title}
                      className={styles.homePageCard}
                      component={!disabled && Link}
                      href={link}
                      disabled={disabled}
                      withBorder
                      hover
                      adornment={
                        disabled ? <Text>.....Coming Soon</Text> : <IconClick />
                      }
                    >
                      <Text>{title}</Text>
                      <Text>{description}</Text>
                    </Card>
                  );
                })}
            </div>
          </Card>
        );
      })}
    </div>
  );
}
