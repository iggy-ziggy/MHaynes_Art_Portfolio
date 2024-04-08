import { Container, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import "./textContent.css";

const TextContent = ({ content }) => {
  return (
    <Container className="text_container">
      <Text className="text_content">{content}</Text>
    </Container>
  );
};

TextContent.propTypes = {
  content: PropTypes.string,
};

export default TextContent;
