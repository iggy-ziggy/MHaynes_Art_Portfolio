import { Box, HStack, Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <HStack padding={5} flexWrap={"wrap"}>
        <Box flexGrow='1'>
            <Text className="bold">Matthew Haynes</Text>
        </Box>
        <HStack>
            <Text>Portfolio</Text>
            <Text>Contact</Text>
        </HStack>
    </HStack>
  );
};

export default NavBar;
