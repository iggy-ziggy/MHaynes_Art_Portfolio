import { Box, Text } from '@chakra-ui/react'
import './footer.css'

const Footer = () => {
  return (
    <Box className='footer' padding={5}>
            <Text className="bold" style={{color: 'var(--paleGrey)', fontSize: '1rem'}}>&copy; Matthew Haynes 2024</Text>
    </Box>
  )
}

export default Footer