import Link from "next/link";
import { Card, Title, Text, LineChart } from "../components";
import { makePrefixer } from "../utils";
import { homePageData, lineChartData } from "../utils/db";
import "./page.css";
import { IconClick } from "@tabler/icons-react";
import { Group } from "@mantine/core";

const withBaseName = makePrefixer("homePage");

export default function BlogPage() {
  return (
    <div className={withBaseName()}>
      <LineChart data={lineChartData} className={withBaseName("lineGraph")} />
      {homePageData.map((item) => {
        const { title, caption, media, link } = item;
        return (
          <Card key={item.title} className={withBaseName("card")}>
            <div className={withBaseName("content")}>
              <Title>{title}</Title>
              <Text>{caption}</Text>
              <Group className={withBaseName("link")}>
                <Text size="xl" underlined component={Link} href={link}>
                  Click Here to Explore
                </Text>
                <IconClick />
              </Group>
              <div>{media}</div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
