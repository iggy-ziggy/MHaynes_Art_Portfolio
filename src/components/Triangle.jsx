import { Box } from "@chakra-ui/react";

const Triangle = () => {
    
  return (
    <Box className="triangle">
        <svg
          className="triangle"
          viewBox="0 0 200 200"
          style={{ width: "100%", height: "auto" }}
        >
          {/* Outer triangle */}
          <polygon points="100,10 200,190 0,190" style={{ fill: "#e4e4e4", filter: 'blur(20px)' }} />
          {/* Middle triangle */}
          <polygon points="100,50 160,160 40,160" style={{ fill: "#eeeeee",  filter: 'blur(8px)' }} />
          {/* Inner triangle */}
          <polygon points="100,80 130,135 70,135" style={{ fill: "#ffffff" }} />
        </svg>
    </Box>
  );
};

export default Triangle;
