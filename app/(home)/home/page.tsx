import { Card, Text } from "../../../components";
import { makePrefixer } from "../../../utils";
import { homePageData } from "../../../utils/db";
import "./page.css";

const withBaseName = makePrefixer("homePage");

export default function BlogPage() {
  return (
    <div className={withBaseName()}>
      {homePageData.map((item) => {
        return (
          <Card key={"change"} className={withBaseName("card")}>
            <div className={withBaseName("cardContent")}>
              <div className={withBaseName("cardColumn1")}>
                <Text td="underline" colorMode>
                  {item.title}
                </Text>
                <div>{item.caption}</div>
              </div>
              <div className={withBaseName("media")}>{item.media}</div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
