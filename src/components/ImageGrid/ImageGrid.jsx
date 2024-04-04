import { Flex, GridItem, Image, SimpleGrid, Text } from "@chakra-ui/react";
import useRandomImages from "../../hooks/useRandomImages";
import "./imageGrid.css";

const ImageGrid = () => {
  const data = useRandomImages();

  return (
    <Flex justify='center'>
      <SimpleGrid columns={{sm: 1, md: 2, lg: 3}} spacing={10} className="home_grid">
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

export default ImageGrid;
