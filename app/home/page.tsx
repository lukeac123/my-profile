import Link from "next/link";
import { Card, Title, Text } from "../../components";
import { makePrefixer } from "../../utils";
import { homePageData } from "../../utils/db";
import "./page.css";
import { IconClick } from "@tabler/icons-react";
import { Group } from "@mantine/core";

const withBaseName = makePrefixer("homePage");

export default function BlogPage() {
  return (
    <div className={withBaseName()}>
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
