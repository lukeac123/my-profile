import Link from "next/link";
import { Card, Title, Text, LineChart } from "../components";
import { makePrefixer } from "../utils";
import { homePageData, lineChartData } from "../utils/db";
import "./page.css";
import { IconClick } from "@tabler/icons-react";
import clsx from "clsx";

const withBaseName = makePrefixer("homePage");

export default function BlogPage() {
  return (
    <div className={withBaseName()}>
      <LineChart data={lineChartData} className={withBaseName("lineGraph")} />
      {/* TODO: Type the below item  */}
      {Object.entries(homePageData).map((item) => {
        const { cards, caption, media } = item[1];
        return (
          <Card className={withBaseName("content")}>
            <Title>{item[0]}</Title>
            <Text>{caption}</Text>
            {cards &&
              cards.map((card) => {
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
                    <Text colorMode>{title}</Text>
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
            <div>{media && media}</div>
          </Card>
        );
      })}
    </div>
  );
}
