import { Box } from "@chakra-ui/react";
import './triangle.css';

const color1 = '#c6cccb';
const color2 = '#e0dfd5';
const color2alt = '#dfe6e5';
const color3 = '#fcfbf0';
const color4 = '#e4e4e4';
const color5 = '#eeeeee';
const color6 = '#ffffff';



const Triangle = () => {
    
  return (
    <Box className="triangle">
        <svg
          className="triangle"
          viewBox="0 0 200 200"
          style={{ width: "100%", height: "auto" }}
        >
          {/* Outer triangle */}
          <polygon points="100,10 200,190 0,190" style={{ fill: color1, filter: 'blur(35px)' }} />
          {/* Middle triangle */}
          <polygon points="100,50 160,160 40,160" style={{ fill: color2alt,  filter: 'blur(4px)' }} />
          {/* Inner triangle */}
          <polygon points="100,90 130,145 70,145" style={{ fill: color6 }} />
        </svg>
    </Box>
  );
};

export default Triangle;
