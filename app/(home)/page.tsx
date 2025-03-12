import Link from "next/link";
import { Card, Title, Text } from "../../components";
import { makePrefixer } from "../../utils";
import { homePageData } from "../../utils/db";
import "./page.css";
import {
  IconArrowBackUp,
  IconHandFinger,
  IconClick,
} from "@tabler/icons-react";
import { Group } from "@mantine/core";

const withBaseName = makePrefixer("homePage");

export default function BlogPage() {
  return (
    <div className={withBaseName()}>
      {homePageData.map((item) => {
        return (
          <Card key={"change"} className={withBaseName("card")}>
            <div className={withBaseName("cardColumn1")}>
              <Title colorMode>{item.title}</Title>
              <div className={withBaseName("content")}>
                {Object.entries(item.column1).map((content) => {
                  return (
                    <div className={withBaseName("block")}>
                      <Text className={withBaseName("headings")} fw={700}>
                        {`${
                          content[0].substring(0, 1).toUpperCase() +
                          content[0].substring(1).toLowerCase()
                        }:`}
                      </Text>
                      <Text className={withBaseName("answers")}>
                        {content[1]}
                      </Text>
                    </div>
                  );
                })}
              </div>

              <Group className={withBaseName("link")}>
                <Text underlined component={Link} href={item.link}>
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
