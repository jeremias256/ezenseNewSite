import React from "react";
import ReactDOM from "react-dom/client";
/* -------------------------------------------- libs -------------------------------------------- */
import { createHashRouter, RouterProvider } from "react-router-dom";
import { EzenseProvider } from "context";
/* ----------------------------------------- components ----------------------------------------- */
import { Home, Proyecto, Root } from "routes";
import { ErrorPage } from "./error-page";
import "./index.css";
const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
    ],
  },
  { path: ":cliente", element: <Proyecto /> },
]
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <EzenseProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </EzenseProvider>,
);
