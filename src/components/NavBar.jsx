import { Box, Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import React from "react";

const NavBar = () => {
  return (
    <HStack padding={5} flexWrap={"wrap"}>
      <Box flexGrow="5">
        <Text>Matthew Haynes</Text>
      </Box>
      <Flex flexGrow="1" justifyContent="space-evenly">
        <Text>Portfolio</Text>
        <Text>Contact</Text>
      </Flex>
    </HStack>
  );
};

export default NavBar;
