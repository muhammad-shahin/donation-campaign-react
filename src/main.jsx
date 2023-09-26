import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import DonationDetails from "./components/DonationDetails/DonationDetails";
import Donation from "./components/Donation/Donation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/donation",
        loader: () => fetch("../public/donation.json"),
        element: <Donation />,
      },
      {
        path: "/donation-details/:categoryId",
        loader: () => fetch("../public/donation.json"),
        element: <DonationDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
