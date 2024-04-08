import CollectionTitle from "../components/CollectionTitle/CollectionTitle";
import ImageGrid from "../components/ImageGrid/ImageGrid";
import TextContent from "../components/TextContent/TextContent";
import useCollection from "../hooks/useCollection";

const Collection = () => {
  const collection = useCollection("Embryonic");
  const images = collection.images;

  return (
    <>
      <CollectionTitle title={collection.name} />
      <TextContent content={collection.description} />
      <ImageGrid data={images} />
    </>
  );
};

export default Collection;
