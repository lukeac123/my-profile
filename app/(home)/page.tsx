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
import { it } from "node:test";

const withBaseName = makePrefixer("homePage");

export default function BlogPage() {
  return (
    <div className={withBaseName()}>
      {homePageData.map((item) => {
        return (
          <Card key={"change"} className={withBaseName("card")}>
            <div className={withBaseName("cardColumn1")}>
              <Title colorMode>{item.title}</Title>
              <div>{item.column1}</div>

              <ul>
                <Group>
                  <Text
                    className={withBaseName("link")}
                    underlined
                    component={Link}
                    href={item.link}
                  >
                    Click Here to Explore Here
                  </Text>
                  <IconClick />
                </Group>
              </ul>
            </div>
            <div className={withBaseName("media")}>{item.media}</div>
          </Card>
        );
      })}
    </div>
  );
}
