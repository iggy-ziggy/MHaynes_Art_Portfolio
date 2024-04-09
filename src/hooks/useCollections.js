import gallery from "../data/gallery";

const useCollections = () => {
  const data = gallery.map((collection) => {
    return {
      id: collection.id,
      title: collection.name,
    }
  });

  return data ? data : null;
};

export default useCollections;
