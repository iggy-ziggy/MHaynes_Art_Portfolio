import {
  Box,
  Button,
  Card,
  CardBody,
  Collapse,
  Heading,
  Text,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import "./CollectionDetails.css";
import { useState } from "react";

const CollectionDetails = ({ title, description, years }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Box className="detail_container">
      <Heading p="3rem" size="3xl">
        {title}
      </Heading>
      <Box className="detail_column">
        <Collapse in={isExpanded} animateOpacity className="description_container">
          <Card className="detail_description">
            <CardBody>
              <Text mb="1rem" className="lightGrey">
                {description}
              </Text>
            </CardBody>
          </Card>
        </Collapse>
        <Button onClick={handleClick} mb="1rem">
          {isExpanded ? "Hide Description" : "Show Description"}
        </Button>
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
