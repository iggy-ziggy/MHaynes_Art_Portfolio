import { Box, Heading } from "@chakra-ui/react";
import PropTypes from "prop-types";
import "./Title.css";

const Title = ({ title, size, justify }) => {
  return (
    <Box  display="flex" justifyContent={justify}>
      <Heading as="h2" size={size}>
        {title}
      </Heading>
    </Box>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  size: PropTypes.string,
  justify: PropTypes.string,
};

export default Title;
