import { Flex, Text, Image } from "@mantine/core";
// import Image from "next/image";

export const Card = () => {
  return (
    <Flex direction={"row"} justify={"center"} align={"center"}>
      <Image
        src={
          "https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
        }
        height={300}
        alt="Picture of the author"
      />
      <div
        style={{
          width: "30%",
          right: 0,
          bottom: 0,
          position: "relative",
          display: "flex",
          zIndex: 1,
        }}
      >
        <Text>
          This is a really long description of the Image describing what i have
          done in the project. It should entice people in so that they click on
          it.
        </Text>
      </div>
    </Flex>
  );
};
