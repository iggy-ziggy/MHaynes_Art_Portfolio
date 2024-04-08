import { Heading } from "@chakra-ui/react";
import useCollection from "../hooks/useCollection";
import ImageGrid from "../components/ImageGrid/ImageGrid";
import TextContent from "../components/TextContent/TextContent";

const Collection = () => {
  const collection = useCollection("Embryonic");
  const images = collection.images;

  return (
    <>
      <Heading>{collection.name}</Heading>
      <TextContent content={collection.description} />
      <ImageGrid data={images} />
    </>
  );
};

export default Collection;
