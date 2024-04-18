import Quote from "../components/Quote/Quote";
import TextContent from "../components/TextContent/TextContent";
import ImageGrid from "../components/ImageGrid/ImageGrid";
import aboutMe from "../data/about";
import useRandomImages from "../hooks/useRandomImages";
import { VStack } from "@chakra-ui/react";

const HomePage = () => {
  const collection = useRandomImages();
  console.log(collection);

  return (
    <>
      <Quote />
      <VStack>
        <TextContent content={aboutMe} />
        <ImageGrid data={collection} />
      </VStack>
    </>
  );
};

export default HomePage;
