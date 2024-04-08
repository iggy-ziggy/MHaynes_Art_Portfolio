import Quote from "../components/Quote/Quote";
import TextContent from "../components/TextContent/TextContent";
import ImageGrid from "../components/ImageGrid/ImageGrid";
import aboutMe from "../data/about";
import useRandomImages from "../hooks/useRandomImages";

const HomePage = () => {
  return (
    <>
      <Quote />
      <TextContent content={aboutMe}/>
      <ImageGrid action={useRandomImages}/>
    </>
  );
};

export default HomePage;
