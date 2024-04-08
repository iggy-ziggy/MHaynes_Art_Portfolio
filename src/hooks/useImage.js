import gallery from "../data/gallery";

const useImage = (id) => {
  const foundImage = gallery.find((obj) =>
    obj.images.some((image) => image.id === id)
  );

  return foundImage
    ? foundImage.images.find((image) => image.id === id)
    : null;
};

export default useImage;
