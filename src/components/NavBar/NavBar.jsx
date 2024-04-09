import { Box, Button, ListItem, List, HStack, Text } from "@chakra-ui/react";
import useCollections from "../../hooks/useCollections";
import { Link } from "react-router-dom";
import "./navBar.css";
import { useState } from "react";

const NavBar = () => {
  const data = useCollections();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <HStack padding={5} flexWrap={"wrap"}>
      <Box flexGrow="1">
        <Text className="bold">Matthew Haynes</Text>
      </Box>
      <HStack>
        <Box className="nav_element">
          <button onClick={() => setIsVisible(!isVisible)}>
            Portfolio
            {isVisible && (
              <List className="dropdown_menu">
                {data.map((collections) => (
                  <ListItem key={collections.id} className="dropdown_content">
                    <Link to={`/collections/${collections.id}`}>
                      {collections.title}
                    </Link>
                  </ListItem>
                ))}
              </List>
            )}
          </button>
        </Box>
        <Link to="/contact" className="nav_element">Contact</Link>
      </HStack>
    </HStack>
  );
};

export default NavBar;
