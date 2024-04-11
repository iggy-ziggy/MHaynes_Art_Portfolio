import { Box, Container, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import "./textContent.css";

const TextContent = ({ content }) => {
  return (
    <Container padding='3rem' className="text_container">
      {/* <Text className="text_content">{content}</Text> */}
      {content.map((text, index) => {
        return (
          <Box key={index}>
            <Text className="text_content">{text}</Text>
            <br />
          </Box>
        );
      })}
      {/* <Text align='center' fontSize='4xl' color='white'>. . .</Text> */}
    </Container>
  );
};

TextContent.propTypes = {
  content: PropTypes.array.isRequired,
};

export default TextContent;
