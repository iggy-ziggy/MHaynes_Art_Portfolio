import { Box } from "@chakra-ui/react";
import "./triangle.css";

const Triangle = () => {
  return (
    <Box p='1rem' className="triangle_container">
      {/* OG SVG */}
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        className="triangle"
        viewBox="0 0 200 200"
        style={{ width: "100%" }}
      >
        <polygon points="100,-20 200,170 0,170" className="triangle_outer" />

        <polygon points="100,20 160,140 40,140" className="triangle_middle" />

        <polygon points="100,50 150,135 50,135" className="triangle_inner" />
      </svg> */}
      {/* Less Blur SVG */}
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        className="triangle"
        viewBox="0 0 200 200"
        width='100%'
        overflow='visible'
        // height='100%'
      >
        <polygon
          points="100,0 200,162 0,162"
          fill="#ccd2d1"
          // filter="blur(10px)"
        />

        <polygon
          points="100,15 182,153 18,153"
          fill="#d6ddd6"
          filter="blur(3px)"
        />

        <polygon
          points="100,25 172,147 28,147"
          fill="#dfe6e4"
          filter="blur(3px)"
        />

        <polygon
          points="100,38 160,141 40,141"
          fill="#ebf2f1"
          filter="blur(3px)"
        />

        <polygon
          points="100,50 150,135 50,135"
          fill="#ffffff"
        />
      </svg> */}

      {/* No Blur SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="triangle"
        viewBox="0 0 200 200"
        width='100%'
        overflow='visible'
        // height='100%'
      >
        <polygon
          points="100,0 200,162 0,162"
          fill="#c6cccb"
        />

        <polygon
          points="100,15 182,153 18,153"
          fill="#d2d9d8"
        />

        <polygon
          points="100,25 172,147 28,147"
          fill="#dfe6e4"
        />

        <polygon
          points="100,38 160,141 40,141"
          fill="#ebf2f1"
        />

        <polygon
          points="100,50 150,135 50,135"
          fill="#ffffff"
        />
      </svg>
    </Box>
  );
};

export default Triangle;
