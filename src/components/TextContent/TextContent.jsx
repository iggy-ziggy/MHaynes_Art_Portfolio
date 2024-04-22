import { Box, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import "./textContent.css";

const TextContent = ({ content }) => {
  const paragraphs = content.split("\n").map((paragraph, index) => (
    <>
      <Text key={index} className="text_content">
        {paragraph}
      </Text>
      <br />
    </>
  ));
  return <Box className="text_container">{paragraphs}</Box>;
  // return (
  //   <Box className="text_container">
  //     {content.map((text, index) => {
  //       return (
  //         <>
  //           <Text key={index} className="text_content">
  //             {text}
  //           </Text>
  //           <br />
  //         </>
  //       );
  //     })}
  //   </Box>
  // );
};

TextContent.propTypes = {
  content: PropTypes.string,
};

export default TextContent;
