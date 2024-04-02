import { ListItem, Text, UnorderedList } from "@chakra-ui/react";
import useCollections from "./hooks/useCollections";
import useCollection from "./hooks/useCollection";
import useImages from "./hooks/useImages";
import useImage from "./hooks/useImage";
import "./App.css";

function App() {
  return (
    <Text>There will be content here...</Text>
  )
}

export default App;

// const data = useCollections();
//   return (
//     <UnorderedList>
//       {data.map((collection) => (
//         <ListItem key={collection}>{collection}</ListItem>
//       ))}
//     </UnorderedList>
//   )

// const name = "Embryonic";
//   const data = useCollection(name);

//   return (
//     <>
//       <Text>{data.name}</Text>
//       <Text>{data.description}</Text>
//     </>
//   );

// const data = useImages();

//   return (
//     <UnorderedList>
//       {data.map((image) => <ListItem key={image.title}>{image.title}</ListItem>)}
//     </UnorderedList>
//   )

// const name = 'The Price of Wisdom';
//   const data = useImage(name);

//   return (
//     <Text>{data.title}</Text>
//   )