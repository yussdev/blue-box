import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorPage from "./routes/error";
import Root, { loader as rootLoader } from "./routes/root";
import ReportPage from "./routes/report";
import SignInPage from "./routes/signin";
import HomePage, { loader as homeLoader } from "./routes/home";
import { routes } from "./contants";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: routes.Home,
        element: <HomePage />,
        loader: homeLoader,
      },
      {
        path: routes.SignIn,
        element: <SignInPage />,
      },
      {
        path: routes.Report,
        element: <ReportPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
