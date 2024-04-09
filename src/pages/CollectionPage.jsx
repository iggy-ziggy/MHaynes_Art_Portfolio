import { Box, Heading } from "@chakra-ui/react";
import ImageGrid from "../components/ImageGrid/ImageGrid";
import TextContent from "../components/TextContent/TextContent";
import useCollection from "../hooks/useCollection";
import { useParams } from "react-router-dom";

const CollectionPage = () => {
  let { id } = useParams(); 
  const collection = useCollection(parseInt(id));
  const images = collection.images;

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Heading p="3rem" size="3xl">
        {collection.name}
      </Heading>
      <TextContent content={collection.description} />
      <ImageGrid data={images} />
    </Box>
  );
};

export default CollectionPage;
