import { Box } from "@chakra-ui/react";

const Triangle = () => {
  return (
    // <svg viewBox="0 0 200 200" style={{ width: '100%', height: 'auto' }}>
    //   <polygon points="100,10 200,190 0,190" style={{ fill: '#000' }} />
    // </svg>
    <svg viewBox="0 0 200 200" style={{ width: '100%', height: 'auto' }}>
    {/* Outer triangle */}
    <polygon points="100,10 200,190 0,190" style={{ fill: '#e4e4e4' }} />
    
    {/* Middle triangle */}
    <polygon points="100,50 160,160 40,160" style={{ fill: '#eeeeee' }} />
    
    {/* Inner triangle */}
    <polygon points="100,80 130,135 70,135" style={{ fill: '#f4f6f5' }} />
  </svg>
  );
};

export default Triangle;
