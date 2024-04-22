import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Measure from "react-measure";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import "./imageGrid.css";

const ImageGrid = ({ data }) => {
  const images = data;
  // console.log(images);
  // const [loadedCount, setLoadedCount] = useState(0);

  // const handleImageLoad = () => {
  //   setLoadedCount((prevCount) => prevCount + 1);
  // };

  return (
    <div className="image_grid">
      <ResponsiveMasonry columnsCountBreakPoints={{ 500: 1, 700: 2, 900: 3 }}>
        <Masonry columnsCount={3} gutter="0.5rem">
          {images.map((image, index) => (
            <Measure key={index}>
              {({ measureRef }) => (
                <div className="grid_item">
                  <Link to={`/images/${image.id}`}>
                    <img
                      src={image.url}
                      ref={measureRef}
                      // onLoad={handleImageLoad}
                      // style={{
                      //   display: loadedCount > index ? "inline-block" : "none",
                      // }}
                    />
                  </Link>
                  <Text className="image_title">{image.title}</Text>
                </div>
              )}
            </Measure>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

ImageGrid.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ImageGrid;

// return (
//   <Flex mt='4rem' justify="center">
//     <SimpleGrid
//       columns={{ sm: 1, md: 2, lg: 3 }}
//       spacing={2}
//       className="image_grid"
//     >
//       { images.map((img) => (
//         <GridItem key={img.id} className="image_container">
//           <Link to={`/images/${img.id}`}>
//             <Image src={img.url} className="thumbnail"  />
//           </Link>
//           <Text className="image_title">{img.title}</Text>
//         </GridItem>
//       )) : null}
//     </SimpleGrid>
//   </Flex>
// );
