import { Flex, GridItem, Image, SimpleGrid, Text } from "@chakra-ui/react";
import useSomeImages from "../../hooks/useSomeImages";
import "./imageGrid.css";

const ImageGrid = () => {
  const data = useSomeImages();

  return (
    <Flex justify='center'>
      <SimpleGrid columns={3} spacing={10}>
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
