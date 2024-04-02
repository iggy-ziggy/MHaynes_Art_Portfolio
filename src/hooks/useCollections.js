import gallery from "../data/gallery";

const useCollections = () => {
  const data = gallery.map((collection) => collection.name);

  return data ? data : null;
};

export default useCollections;
