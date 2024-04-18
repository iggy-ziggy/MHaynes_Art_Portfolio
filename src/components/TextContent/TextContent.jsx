import { Box, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import "./textContent.css";

const TextContent = ({ content }) => {
  return (
    <Box className="text_container">
      {content.map((text, index) => {
        return (
          <>
            <Text key={index} className="text_content">
              {text}
            </Text>
            <br />
          </>
        );
      })}
    </Box>
  );
};

TextContent.propTypes = {
  content: PropTypes.array.isRequired,
};

export default TextContent;
