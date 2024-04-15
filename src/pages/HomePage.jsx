import Quote from "../components/Quote/Quote";
import TextContent from "../components/TextContent/TextContent";
import ImageGrid from "../components/ImageGrid/ImageGrid";
import aboutMe from "../data/about";
import useRandomImages from "../hooks/useRandomImages";
import { Box } from "@chakra-ui/react";

const HomePage = () => {
  const collection = useRandomImages();

  return (
    <Box>
      <Quote />
      <TextContent content={aboutMe} />
      <ImageGrid data={collection} />
    </Box>
  );
};

export default HomePage;
