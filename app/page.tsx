import Link from "next/link";
import { Card, Title, Text, LineChart } from "../components";
import { makePrefixer } from "../utils";
import { homePageData } from "../utils/db";
import "./page.css";
import { IconClick } from "@tabler/icons-react";
import { Group } from "@mantine/core";

const withBaseName = makePrefixer("homePage");

const lineChartData = [
  {
    id: "frontEndDeveloper",
    label: "Front End Developer",
    values: [
      { x: 2021, y: 0 },
      { x: 2022, y: 25 },
      { x: 2023, y: 80 },
      { x: 2024, y: 100 },
      { x: 2025, y: 100 },
    ],
  },
  {
    id: "awsCloudDeveloper",
    label: "AWS Cloud Developer",
    values: [
      { x: 2021, y: 0 },
      { x: 2022, y: 100 },
      { x: 2023, y: 50 },
      { x: 2024, y: 30 },
      { x: 2025, y: 20 },
    ],
  },
  {
    id: "productManager",
    label: "Product Manager",
    values: [
      { x: 2019, y: 0 },
      { x: 2020, y: 100 },
      { x: 2021, y: 100 },
      { x: 2022, y: 30 },
      { x: 2023, y: 0 },
    ],
  },
  {
    id: "worldTraveller",
    label: "World Traveller",
    values: [
      { x: 2017, y: 20 },
      { x: 2018, y: 30 },
      { x: 2019, y: 40 },
      { x: 2020, y: 40 },
      { x: 2021, y: 40 },
      { x: 2022, y: 60 },
      { x: 2023, y: 70 },
      { x: 2024, y: 100 },
      { x: 2025, y: 100 },
    ],
  },
  {
    id: "mechanicalEngineer",
    label: "Mechanical Engineer",
    values: [
      { x: 2017, y: 100 },
      { x: 2018, y: 100 },
      { x: 2019, y: 100 },
      { x: 2020, y: 100 },
      { x: 2021, y: 0 },
    ],
  },
];

export default function BlogPage() {
  return (
    <div className={withBaseName()}>
      <LineChart data={lineChartData} className={withBaseName("lineGraph")} />
      {homePageData.map((item) => {
        return (
          <Card key={item.title} className={withBaseName("card")}>
            <div className={withBaseName("cardColumn1")}>
              <Title>{item.title}</Title>
              <div className={withBaseName("content")}>
                {Object.entries(item.column1).map((content) => {
                  return (
                    <div className={withBaseName("block")}>
                      <Text size="xl">
                        {/* Take the below into a function outside the reaction component  */}
                        {content[0].substring(0, 1).toUpperCase() +
                          content[0].substring(1).toLowerCase()}{" "}
                        {content[0] != "" ? ":" : ""} {content[1]}
                      </Text>
                    </div>
                  );
                })}
              </div>

              <Group className={withBaseName("link")}>
                <Text size="xl" underlined component={Link} href={item.link}>
                  Click Here to Explore Here
                </Text>
                <IconClick />
              </Group>
            </div>
            <div className={withBaseName("media")}>{item.media}</div>
          </Card>
        );
      })}
    </div>
  );
}
