import Title from "../components/Title/Title";
import ImageGrid from "../components/ImageGrid/ImageGrid";
import TextContent from "../components/TextContent/TextContent";
import useCollection from "../hooks/useCollection";

const Collection = () => {
  const collection = useCollection("Embryonic");
  const images = collection.images;

  return (
    <>
      <Title title={collection.name} size='3xl' justify='center'/>
      <TextContent content={collection.description} />
      <ImageGrid data={images} />
    </>
  );
};

export default Collection;
