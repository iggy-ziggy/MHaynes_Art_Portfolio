import gallery from "../data/gallery";

const useImages = () => {
  const result = gallery.flatMap((obj) =>
    obj.images.map((image) => ({ title: image.title, url: image.url }))
  );

  return result ? result : null;
};

export default useImages;
