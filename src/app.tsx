import { ChakraProvider, Box, Flex, Text } from "@chakra-ui/react";
import { Link, Route, Router } from "wouter";
import { MotionFlex } from "./components/flex";
import { Dashboard } from "./pages/dash";
import { AnimatePresence } from "framer-motion";
import { transition } from "./lib/util";
import { Explorer } from "./components/explorer";

export const App = () => (
  <ChakraProvider>
    <Router>
      <Box color="white" bg="#111" w="full" h="full">
        <Dashboard>
          <Route path="/" key="/">
            <Flex
              justifyContent="center"
              alignItems="center"
              flexDir="column"
              bg="#222"
              h="100%"
              opacity="95%"
              w="100%"
              flexWrap="wrap"
              p="1.5em"
            >
              <Text>
                Welcome to Timdows. Open your application launcher in the
                taskbar to get started.
              </Text>
            </Flex>
          </Route>
          <Route path="/ie/:site" key="/ie/site">
            {(params: Record<string, never>) => <Explorer site={params.site} />}
          </Route>
          <Route path="/ie" key="/ie">
            <Explorer site="" />
          </Route>
        </Dashboard>
      </Box>
    </Router>
  </ChakraProvider>
);
