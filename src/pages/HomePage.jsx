import Quote from "../components/Quote/Quote";
import TextContent from "../components/TextContent/TextContent";
import ImageGrid from "../components/ImageGrid/ImageGrid";
// import aboutMe from "../data/about";
import AboutMe from "../components/AboutMe/AboutMe";
import useRandomImages from "../hooks/useRandomImages";
import { Text, VStack } from "@chakra-ui/react";

const HomePage = () => {
  const collection = useRandomImages();
  console.log(collection);

  return (
    <>
      <Quote />
      <VStack>
        <AboutMe />
        <Text
          mt="8rem"
          fontSize="1.2rem"
          fontWeight="600"
        >{`Random Selections`}</Text>
        <Text>{`(click to view image)`}</Text>
        <ImageGrid data={collection} />
      </VStack>
    </>
  );
};

export default HomePage;
