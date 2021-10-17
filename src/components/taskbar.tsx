import { Flex } from "@chakra-ui/react";
import { StartMenu } from "./startmenu";

export const Taskbar = () => (
  <Flex
    mt="auto"
    bg="#111"
    minH="12"
    w="full"
    justifyContent="start"
    alignItems="center"
    flexDir="row"
    p="2"
  >
    <StartMenu />
  </Flex>
);
