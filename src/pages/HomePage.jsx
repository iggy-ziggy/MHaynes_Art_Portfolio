import Quote from "../components/Quote/Quote";
import TextContent from "../components/TextContent/TextContent";
import ImageGrid from "../components/ImageGrid/ImageGrid";
import aboutMe from "../data/about";

const HomePage = () => {
  return (
    <>
      <Quote />
      <TextContent content={aboutMe}/>
      <ImageGrid />
    </>
  );
};

export default HomePage;
