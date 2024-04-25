import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Home from "./routes/home";
import ErrorPage from "./error-page";
import { EzenseProvider } from "./context/ezenseProvider";
import Landing from "./routes/landing1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/landing",
        element: <Landing />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <EzenseProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </EzenseProvider>,
);
