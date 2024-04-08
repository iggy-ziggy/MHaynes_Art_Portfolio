import { Flex, GridItem, Image, SimpleGrid, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import "./imageGrid.css";

const ImageGrid = ({ action }) => {
  const data = action();

  return (
    <Flex justify="center">
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        spacing={10}
        className="home_grid"
      >
        {data.map((img) => (
          <GridItem key={img.title} className="image_container">
            <Image src={img.url} />
            <Text className="image_title">{img.title}</Text>
          </GridItem>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

ImageGrid.propTypes = {
  action: PropTypes.func.isRequired,
};

export default ImageGrid;
