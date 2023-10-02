import { Flex, Text } from "@mantine/core";
import Image from "next/image";

const Card = () => {
  return (
    <Flex direction={"row"} style={{ width: "50%" }}>
      <Flex direction={"column"}>
        <Image
          src={
            "https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
          }
          width={300}
          height={300}
          alt="Picture of the author"
        />
        <Text> This is an Image </Text>
      </Flex>

      <Flex direction={"column"} align={"center"} justify={"center"}>
        <Text>
          This is a really long description of the Image describing what i have
          done in the project. It should entice people in so that they click on
          it.
        </Text>
      </Flex>
    </Flex>
  );
};

export default Card;
