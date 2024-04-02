import { Box, Flex } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box padding={5} align='center'>
        <Flex justifyContent='space-around' w='50%' bg='black'>
            <Box bg='black' color='white'>ICON</Box>
            <Box bg='black' color='white'>ICON</Box>
            <Box bg='black' color='white'>ICON</Box>
        </Flex>
    </Box>
  )
}

export default Footer