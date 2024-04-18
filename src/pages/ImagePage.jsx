import { useParams } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import ImageDetails from "../components/ImageDetails/ImageDetails";
import SingleImage from "../components/SingleImage/SingleImage";
import useImage from "../hooks/useImage";

const ImagePage = () => {
  let { id } = useParams();
  const image = useImage(parseInt(id));

  return (
    <Container mt='3rem' mb='3rem'>
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
