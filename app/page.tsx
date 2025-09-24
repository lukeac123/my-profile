import Link from "next/link";
import { Card, LineChart } from "../components";
import { Text, Title } from "@mantine/core";
import { makePrefixer } from "../utils";
import { homePageData, lineChartData } from "../utils/db";
import "./page.css";
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
    <div className={withBaseName()}>
      <LineChart data={lineChartData} className={withBaseName("lineGraph")} />
      {Object.entries(homePageData).map((item) => {
        const { cards, caption } = item[1];
        return (
          <Card className={withBaseName("outerCard")} key={item[0]}>
            <div className={withBaseName("content")}>
              <Title>{item[0]}</Title>
              <Text>{caption}</Text>
              {cards &&
                cards.map((card: HomePageCardType) => {
                  const { title, description, link, disabled } = card;
                  return (
                    <Card
                      key={title}
                      className={clsx(withBaseName("card"), {
                        [withBaseName("cardDisabled")]: disabled,
                      })}
                      component={!disabled && Link}
                      href={link}
                      disabled={disabled}
                    >
                      <Text>{title}</Text>
                      <Text>{description}</Text>
                      {!disabled && (
                        <IconClick className={withBaseName("clickIcon")} />
                      )}
                      {disabled && (
                        <Text className={withBaseName("clickIcon")}>
                          .....Coming Soon
                        </Text>
                      )}
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
