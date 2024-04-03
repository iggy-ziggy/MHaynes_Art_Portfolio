import { Box, Flex } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box padding={5} align='center'>
        <Flex justifyContent='space-around' w='50%'>
            <Box className="bold">O</Box>
            <Box className="bold">O</Box>
            <Box className="bold">O</Box>
        </Flex>
    </Box>
  )
}

export default Footer