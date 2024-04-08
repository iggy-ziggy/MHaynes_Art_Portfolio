import SingleImage from "../components/SingleImage/SingleImage";
import Title from "../components/Title/Title";
import useImage from "../hooks/useImage";

const ImagePage = () => {
  const image = useImage("What We Give Away");

  return (
    <>
      <SingleImage url={image.url}/>
      <Title title={image.title} size='md' />
    </>
  );
};

export default ImagePage;
