import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { FunctionReInit } from "./pages/FunctionReInit";
import { List } from "./pages/List";
import { MapRenderTest } from "./pages/MapRenderTest/MapRenderTest";
import { Modal } from "./pages/Test/Modal";
import { NewPage } from "./pages/Test/NewPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "test",
        element: <List />,
      },
      {
        path: "map-render-test",
        element: <MapRenderTest />,
      },
      {
        path: "function-re-init",
        element: <FunctionReInit />,
      },
      {
        path: "modalTest",
        element: <NewPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
