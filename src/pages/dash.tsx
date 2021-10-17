import { Flex } from "@chakra-ui/react";
import { transition } from "../lib/util";
import { MotionFlex } from "../components/flex";
import { Taskbar } from "../components/taskbar";
import timdowsBg from "../assets/timdows-bg.webp";
import { FC } from "preact/compat";

export const Dashboard: FC<Record<string, unknown>> = ({ children }) => (
  <MotionFlex
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ default: transition }}
  >
    <Flex
      w="100vw"
      h="100vh"
      flexDir="column"
      bgImage={timdowsBg}
      bgPos="center"
      bgSize="cover"
    >
      {children}
      <Taskbar />
    </Flex>
  </MotionFlex>
);
