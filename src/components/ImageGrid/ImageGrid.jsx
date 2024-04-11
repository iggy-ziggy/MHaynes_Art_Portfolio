import { Flex, GridItem, Image, SimpleGrid, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./imageGrid.css";

const ImageGrid = ({ data }) => {
  const collection = data;

  return (
    <Flex mt='4rem' justify="center">
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        spacing={2}
        className="image_grid"
      >
        {collection.map((img) => (
          <GridItem key={img.id} className="image_container">
            <Link to={`/images/${img.id}`}>
              <Image src={img.url} className="thumbnail" />
            </Link>
            <Text className="image_title">{img.title}</Text>
          </GridItem>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

ImageGrid.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ImageGrid;
