import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
// import App from "./App.jsx";
import "./index.css";
import router from './routes'

// const colors = {
//   brand: {
//     900: '', // hex color
//     800: '',
//     700: '',
//   }
// }

// const theme = extendTheme({colors});
// once we've made changes to the theme, pass it as a prop to ChakraProvider:
// `theme={theme}`

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router}></RouterProvider>
    </ChakraProvider>
  </React.StrictMode>
);
