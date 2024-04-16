import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import CollectionDetails from "../components/CollectionDetails/CollectionDetails";
import ImageGrid from "../components/ImageGrid/ImageGrid";
import useCollection from "../hooks/useCollection";

const CollectionPage = () => {
  let { id } = useParams();
  const collection = useCollection(parseInt(id));
  const images = collection.images;

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <CollectionDetails
        title={collection.name}
        description={collection.description}
        years={collection.years_in_progress}
      />
      <ImageGrid data={images} />
    </Box>
  );
};

export default CollectionPage;
