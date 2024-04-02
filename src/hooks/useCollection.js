import gallery from "../data/gallery";

const useCollection = (name) => {
  const result = gallery.find((collections) => collections.name === name);

  return result ? result : null;
};

export default useCollection;
