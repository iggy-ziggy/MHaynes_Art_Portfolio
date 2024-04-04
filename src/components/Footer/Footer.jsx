import { Box, Flex } from '@chakra-ui/react'
import './footer.css'

const Footer = () => {
  return (
    <Box className='footer' padding={5} align='center'>
        <Flex justifyContent='space-around' w='50%'>
            <Box className="bold">O</Box>
            <Box className="bold">O</Box>
            <Box className="bold">O</Box>
        </Flex>
    </Box>
  )
}

export default Footer