import { Flex, GridItem, Image, SimpleGrid, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import "./imageGrid.css";
import { Link } from "react-router-dom";

const ImageGrid = ({ data }) => {
  const collection = data;

  return (
    <Flex mt='4rem' justify="center">
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        spacing={10}
        className="image_grid"
      >
        {collection.map((img) => (
          <GridItem key={img.title} className="image_container">
            <Link to={`/images/${img.id}`}>
              <Image src={img.url} />
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
