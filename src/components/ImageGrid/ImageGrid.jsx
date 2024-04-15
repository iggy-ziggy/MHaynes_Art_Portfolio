import { Flex, GridItem, Image, SimpleGrid, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./imageGrid.css";
import { useEffect, useState } from "react";

const ImageGrid = ({ data }) => {
  const images = data;
  const [loadingStatus, setLoadingStatus] = useState({})
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  useEffect(() => {
    const allLoaded = Object.values(loadingStatus).every(status => status === true)
    setAllImagesLoaded(allLoaded)
  }, [loadingStatus])

  const handleLoad = (imgId) => {
    setLoadingStatus(prevStatus => ({
      ...prevStatus,
      [imgId]: true
    }))
    // console.log(`Image with ID ${imgId} has finished loading`)
  }

  
    return (
      <Flex mt='4rem' justify="center">
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3 }}
          spacing={2}
          className="image_grid"
        >
          {allImagesLoaded ? images.map((img) => (
            <GridItem key={img.id} className="image_container">
              <Link to={`/images/${img.id}`}>
                <Image src={img.url} className="thumbnail" onLoad={() => handleLoad(img.id)} />
              </Link>
              <Text className="image_title">{img.title}</Text>
            </GridItem>
          )) : null}
        </SimpleGrid>
      </Flex>
    );
  
};

ImageGrid.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ImageGrid;
