import { List, ListItem } from "@chakra-ui/react";
import useCollections from "../hooks/useCollections";

const AllCollectionsPage = () => {
  const data = useCollections();

  return (
    <>
      <List>
        {data.map((collections) => {
          return <ListItem key={collections.id}>{collections.title}</ListItem>
        })}
      </List>
    </>
  );
};

export default AllCollectionsPage;
