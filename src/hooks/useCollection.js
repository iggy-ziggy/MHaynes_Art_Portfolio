import gallery from "../data/gallery";

const useCollection = (id) => {
  const result = gallery.find((collections) => collections.id === id);

  return result ? result : null;
};

export default useCollection;
