import { Box } from "@chakra-ui/react";
import "./triangle.css";

const Triangle = () => {
  return (
    <Box className="triangle_container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="triangle"
        viewBox="0 0 200 200"
        style={{ width: "100%" }}
      >
        <polygon points="100,-20 200,170 0,170" className="triangle_outer" />

        <polygon points="100,20 160,140 40,140" className="triangle_middle" />

        <polygon points="100,50 150,135 50,135" className="triangle_inner" />
      </svg>
    </Box>
  );
};

export default Triangle;
