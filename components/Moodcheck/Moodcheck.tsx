import {
  IconMoodAngry,
  IconMoodHappy,
  IconMoodSad,
  IconMoodSick,
  IconMoodAnnoyed,
} from "@tabler/icons-react";
import { Card } from "../Card";
import { Title } from "../Title";
import { Flex } from "@mantine/core";
import { makePrefixer } from "../../utils/makePrefixer";
import { clsx } from "clsx";

const iconSize = "sm";

const IconByEmotion = {
  happy: <IconMoodHappy size={iconSize} />,
  angry: <IconMoodAngry size={iconSize} />,
  sad: <IconMoodSad size={iconSize} />,
  sick: <IconMoodSick size={iconSize} />,
  annoyed: <IconMoodAnnoyed size={iconSize} />,
};

type MoodcheckProps = {
  emotion: "happy" | "angry" | "sad" | "sick" | "annoyed";
  className: string;
};

const withBaseName = makePrefixer("moodCheck");

export const Moodcheck = ({ emotion, className }: MoodcheckProps) => {
  return (
    <Card className={clsx(withBaseName(), className)}>
      <Flex direction={"row"} gap="xl">
        <Title> Moodcheck: </Title>
        <div style={{ width: "100px", flexGrow: 1 }}>
          {IconByEmotion[emotion]}
        </div>
      </Flex>
    </Card>
  );
};
