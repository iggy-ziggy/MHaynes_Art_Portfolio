import { Box, Heading, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import "./CollectionDetails.css";

const CollectionDetails = ({ title, description, years }) => {
  return (
    <Box className="detail_container">
      <Heading p="3rem" size="3xl">
        {title}
      </Heading>
      <Box className="detail_column">
        <Text mb='1rem'>{description}</Text>
        <Text>{years}</Text>
      </Box>
    </Box>
  );
};

CollectionDetails.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  years: PropTypes.string,
};

export default CollectionDetails;
