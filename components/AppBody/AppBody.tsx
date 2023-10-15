import { Flex } from "@mantine/core";
import "./AppBody.component.css";

export const AppBody = ({ children }: any) => {
  return (
    <Flex className={"appBody-container"} align={"center"} justify={"center"}>
      {children}
    </Flex>
  );
};
