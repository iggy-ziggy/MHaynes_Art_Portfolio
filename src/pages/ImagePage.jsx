import { Container } from "@chakra-ui/react";
import ImageDetails from "../components/ImageDetails/ImageDetails";
import SingleImage from "../components/SingleImage/SingleImage";
import useImage from "../hooks/useImage";

const ImagePage = () => {
  const image = useImage(18);

  return (
    <Container w='90%'>
      <SingleImage url={image.url} />
      <ImageDetails
        title={image.title}
        media={image.media}
        date={image.year_completed}
      />
    </Container>
  );
};

export default ImagePage;
