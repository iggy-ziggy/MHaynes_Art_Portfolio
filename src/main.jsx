import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
// import Triangle from "./components/Triangle/Triangle.jsx";

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
      <NavBar />
      {/* <Triangle /> */}
      {/* <App /> */}
      <HomePage />
      <Footer />
    </ChakraProvider>
  </React.StrictMode>
);
