import React from "react";
import ReactDOM from "react-dom/client";
/* -------------------------------------------- libs -------------------------------------------- */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { EzenseProvider } from "context";
/* ----------------------------------------- components ----------------------------------------- */
import { Home, Proyecto, Root } from "routes";
import { ErrorPage } from "./error-page";
import "./index.css";

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },

    ],
  },
  { path: "/:cliente", element: <Proyecto /> },
],
  {
    basename: "/ezenseSite15",
  }

);

ReactDOM.createRoot(document.getElementById("root")).render(
  <EzenseProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </EzenseProvider>,
);
