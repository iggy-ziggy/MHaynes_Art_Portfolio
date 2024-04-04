import gallery from "../data/gallery";

const useSomeImages = () => {
    const result = [];
  
    for (let i = gallery.length - 1; i >= 0; i--) {
      result.push(gallery[i].images[0], gallery[i].images[1]);
    }
    return result;
  };

export default useSomeImages;
