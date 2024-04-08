import { Box, Image } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import './SingleImage.css'

const SingleImage = ({url}) => { 
  return (
    <Box display='flex' justifyContent='center' className='single_image_container'>
        <Image w='90%' src={url}/>
    </Box>
  )
}

SingleImage.propTypes = {
    url: PropTypes.string,
}

export default SingleImage