import gallery from "../data/gallery";

const useCollection = (id) => {
  const result = gallery.find((collections) => collections.id === id);

  if (result && result.images) {
    result.images.sort((a, b) => a.id - b.id);
  }

  return result ? result : null;
};

export default useCollection;
