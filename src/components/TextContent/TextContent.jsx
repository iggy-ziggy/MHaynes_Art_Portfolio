import { Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import "./textContent.css";

const TextContent = ({ content }) => {
  return (
    <div className="text_container">
      <Text className="text_content">{content}</Text>
    </div>
  );
};

TextContent.propTypes = {
  content: PropTypes.string,
};

export default TextContent;
