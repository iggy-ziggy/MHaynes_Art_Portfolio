import { Box, HStack, List, ListItem, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useCollections from "../../hooks/useCollections";
import "./navBar.css";

const NavBar = () => {
  const data = useCollections();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <HStack mb='5rem' padding={5} flexWrap={"wrap"} className="nav_bar">
      <Box flexGrow="1">
        <Link to="/" className="bold">
          Matthew Haynes
        </Link>
      </Box>
      <HStack>
        <Box className="nav_element">
          <Link to="/home">About</Link>
        </Box>
        <Box className="nav_element">
          <button onClick={() => setIsVisible(!isVisible)}>
            Portfolio
            {isVisible && (
              <List className="dropdown_menu">
                {data.reverse().map((collections) => (
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
        <Link to="/contact" className="nav_element">
          Contact
        </Link>
      </HStack>
    </HStack>
  );
};

export default NavBar;
