import { Box, Heading, List, ListItem } from "@chakra-ui/react";
import PropTypes from "prop-types";

const ImageDetails = ({ title, media, date }) => {
  return (
    <Box w='90%'>
      <Heading p='1rem' size='md'>{title}</Heading>
      <List p='1rem'>
        <ListItem>{media}</ListItem>
        <ListItem>{date}</ListItem>
      </List>
    </Box>
  );
};

ImageDetails.propTypes = {
  title: PropTypes.string,
  media: PropTypes.string,
  date: PropTypes.number,
};

export default ImageDetails;
