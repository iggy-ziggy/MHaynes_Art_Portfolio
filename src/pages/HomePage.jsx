import Quote from "../components/Quote/Quote";
import TextContent from "../components/TextContent/TextContent";
import ImageGrid from "../components/ImageGrid/ImageGrid";
import aboutMe from "../data/about";
import useRandomImages from "../hooks/useRandomImages";

const HomePage = () => {
  const collection = useRandomImages();

  return (
    <>
      <Quote />
      <TextContent content={aboutMe}/>
      <ImageGrid data={collection}/>
    </>
  );
};

export default HomePage;
