import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Home from "./pages/Home";
// import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Approuter />,
    children: [
      // {
      //   path: "",
      //   element: <Home />,
      // },
      // {
      //   path: "about",
      //   element: <About />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
