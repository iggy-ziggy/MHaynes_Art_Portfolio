import { useParams } from "react-router-dom";
import { Button, Container } from "@chakra-ui/react";
import ImageDetails from "../components/ImageDetails/ImageDetails";
import SingleImage from "../components/SingleImage/SingleImage";
import useImage from "../hooks/useImage";

const ImagePage = () => {
  let { id } = useParams();
  const image = useImage(parseInt(id));

  return (
    <Container mt="3rem" mb="3rem">
      <SingleImage url={image.url} />
      <ImageDetails
        title={image.title}
        media={image.media}
        date={image.year_completed}
      />
      {image.prints_available && (
        <Button className="gold_btn">
          <a
            href={image.prints_available}
            target="_blank"
            rel="noopener noreferrer"
          >
            Prints Available
          </a>
        </Button>
      )}
    </Container>
  );
};

export default ImagePage;
