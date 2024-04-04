import gallery from "../data/gallery";

const useRandomImages = () => {
  const result = [];
  const numberOfImages = 1;

  gallery.forEach(collection => {
    const images = collection.images;

    for (let i = images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [images[i], images[j]] = [images[j], images[i]];
    }

    const selectedImages = images.slice(0, numberOfImages);

    result.unshift(...selectedImages);
  });
  return result;
};

export default useRandomImages;
