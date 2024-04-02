import gallery from "../data/gallery";

const useImage = (title) => {
  const foundImage = gallery.find((obj) =>
    obj.images.some((image) => image.title === title)
  );

  return foundImage
    ? foundImage.images.find((image) => image.title === title)
    : null;
};

export default useImage;
