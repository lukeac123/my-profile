import { Stack, Text, Title, Flex, Image } from "@mantine/core";
import { Card, CardTitle, CardContent } from "../../components";

const people = [
  {
    name: "Sophie",
    imgSrc: "/people/luke.jpg",
    content: {
      age: "24",
      nationality: "Dutch",
      location: "Bogota",
      duration:
        "2 weeks kjhfkjshkfjhsdkjfhkjashfkhsadkfjsahdkfjhaskhfkajshfdkjhakjh",
      description:
        "Hello my name is sophie, I'm 25 and from denmark kjaehfkjashfrkjsahfkjsahfkjhsdakjfhksajdhfksdjahfkjashdkfjhsakjfhksdjafhksadjhfksajdhfksajdhfkjsadhfksajhfk",
    },
  },
  {
    name: "Sophie",
    imgSrc: "/people/luke.jpg",
    content: {
      age: "24",
      nationality: "",
      location: "",
      duration: "",
      description: "Hello my name is sophie, I'm 25 and from denmark",
    },
  },
];

type Person = {
  name: string;
  age: string;
  description: string;
  imgSrc: string;
  nationality: string;
  location: string;
  duration: string;
};

export default function BlogPage() {
  return (
    <Stack>
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Title order={1} ta="left">
          Travel Buddies
        </Title>
      </div>

      <Flex
        gap={"lg"}
        justify={"center"}
        style={{
          width: "100%",
          flexWrap: "wrap",
          overflowY: "visible",
          display: "flex",
          background: "red",
        }}
      >
        {people.map((people) => {
          const { name, imgSrc, content } = people;
          return (
            <Card key={name} style={{ width: "600px" }}>
              <Image src={imgSrc} style={{ height: "50%" }} />
              <CardContent>
                <CardTitle>{name}</CardTitle>
                {Object.entries(content).map((content) => {
                  return (
                    <Flex gap={"lg"} key={content[1]}>
                      <Text size="lg" fw={700}>
                        {content[0]}:
                      </Text>
                      <Text size="lg">{content[1]}</Text>
                    </Flex>
                  );
                })}
              </CardContent>
            </Card>
          );
        })}
      </Flex>
    </Stack>
  );
}
