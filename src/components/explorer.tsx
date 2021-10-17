import { transition } from "../lib/util";
import { MotionFlex } from "../components/flex";
import { Flex, Heading, Button, Text, Input } from "@chakra-ui/react";
import { FC } from "preact/compat";
import { useLocation } from "wouter";
import { useState } from "preact/hooks";
import { XCircle } from "preact-feather";

export const Explorer: FC<{ site: string }> = (props) => {
  const [site, setSite] = useState<string | undefined>(props.site);
  const [, setLoc] = useLocation();

  const doSearch = (evt: Event & { target: HTMLInputElement }) => {
    const searchText = evt.target.value; // this is the search text
    setSite(searchText);
  };

  return (
    <Flex
      justifyContent="start"
      alignItems="center"
      flexDir="column"
      bg="#222"
      h="100%"
      opacity="99%"
      w="100%"
      flexWrap="wrap"
    >
      <Flex bg="#333" w="full" flexDir="row" mb="2.5em" p="0.25em">
        <Flex
          flexDir="row"
          justifyContent="start"
          alignItems="center"
          w="50%"
          bg="#444"
        >
          <Input
            fontSize="xl"
            w="full"
            placeholder={site}
            onKeyUp={(e: Event & { target: HTMLInputElement }) => doSearch(e)}
          />
        </Flex>
        <Flex
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          mr="0.5em"
          ml="auto"
        >
          <XCircle color="#e32020" size={30} onClick={() => setLoc("/")} />
        </Flex>
      </Flex>
      {site?.toLowerCase() === "download" && (
        <Flex flexDir="column" p="1.5em">
          <Heading as="h3" fontSize="xl">
            Download Timdows
          </Heading>
          <Text>
            As of now, there is no released version of Timdows. However, stay
            tuned for more updates as we continue to develop the full installer
            for Timdows.
          </Text>
        </Flex>
      )}
      {(site?.toLowerCase() === "blank" ||
        site === "" ||
        site === undefined) && (
        <Flex flexDir="column" p="1.5em">
          <Text>
            Welcome to Timternet Explorer. Navigate to <i>download</i> in the
            search bar above to download Timdows.
          </Text>
        </Flex>
      )}
    </Flex>
  );
};
