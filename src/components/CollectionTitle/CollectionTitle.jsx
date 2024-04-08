import { Box, Heading } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import './CollectionTitle.css'

const CollectionTitle = ({title}) => {
  return (
    <Box className='container' display='flex' justifyContent='center'>
        <Heading as='h2' size='3xl'>{title}</Heading>
    </Box>
  )
}

CollectionTitle.propTypes = {
    title: PropTypes.string,
}

export default CollectionTitle