import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import LandingPage from "./pages/LandingPage";
import CollectionPage from "./pages/CollectionPage";
import ImagePage from "./pages/ImagePage";
import HomePage from "./pages/HomePage";
import AllCollectionsPage from "./pages/AllCollectionsPage";
import ContactPage from "./pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      // { index: true, element: <LandingPage /> },
      { path: "/home", element: <HomePage /> },
      { path: "collections", element: <AllCollectionsPage /> },
      { path: "collections/:id", element: <CollectionPage /> },
      { path: "images/:id", element: <ImagePage /> },
      {path: "contact", element: <ContactPage />}
    ],
  },
]);

export default router;
