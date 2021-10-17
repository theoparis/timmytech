import { Flex, FlexProps } from "@chakra-ui/react";
import { motion, HTMLMotionProps } from "framer-motion";
import { FC } from "preact/compat";
import { Merge } from "../lib/util";

export type MotionFlexProps = Merge<FlexProps, HTMLMotionProps<"div">>;

export const MotionFlex: FC<MotionFlexProps> = motion(Flex);
