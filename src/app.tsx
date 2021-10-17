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
      <Box bg="#055864" w="full" h="full">
        <Dashboard>
          <AnimatePresence initial={false} exitBeforeEnter>
            <Route path="/" key="/">
              <MotionFlex
                initial={{ scale: "99%" }}
                animate={{ scale: "100%" }}
                exit={{ scale: "99%" }}
                transition={{ default: transition }}
                h="full"
                w="full"
              >
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  flexDir="column"
                  bg="#222"
                  mt="25%"
                  h="50%"
                  w="100%"
                  flexWrap="wrap"
                >
                  <Text w="75%">
                    Welcome to Timdows. Open your application launcher in the
                    taskbar to get started.
                  </Text>
                </Flex>
              </MotionFlex>
            </Route>
            <Route path="/ie/:site" key="/ie/site">
              {(params: Record<string, never>) => (
                <Explorer site={params.site} />
              )}
            </Route>
            <Route path="/ie" key="/ie">
              <Explorer site="" />
            </Route>
          </AnimatePresence>
        </Dashboard>
      </Box>
    </Router>
  </ChakraProvider>
);
