import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import DonationDetails from "./components/DonationDetails/DonationDetails";
import Donation from "./components/Donation/Donation";
import Statistics from "./components/Statistics/Statistics";
import Error from "./components/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/donation",
        loader: () => fetch("/donation.json"),
        element: <Donation />,
      },
      {
        path: "/donation-details/:categoryId",
        loader: () => fetch("/donation.json"),
        element: <DonationDetails />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
