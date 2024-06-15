import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { EzenseProvider } from "./context/ezenseProvider";
import Root from "./routes/root";
import Home from "./routes/home";
import Fiat from "./routes/fiat";
import ErrorPage from "./error-page";
import "./index.css";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },

    ],
  },
  { path: "/:cliente", element: <Fiat /> },
],
  {
    basename: "/ezenseSite12",
  }

);

ReactDOM.createRoot(document.getElementById("root")).render(
  <EzenseProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </EzenseProvider>,
);
