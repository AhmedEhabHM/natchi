import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createBrowserRouter, RouterProvider } from "react-router";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import AllBook from "./Booking/AllBook.jsx";
import AllmemberShip from "./Membership/AllmemberShip.jsx";
import AllContact from "./Contact/AllContact.jsx";
import AllAbout from "./About/AllAbout.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "booking",
    element: <AllBook></AllBook>,
  },
  {
    path: "memberShip",
    element: <AllmemberShip></AllmemberShip>,
  },
  {
    path: "about",
    element: <AllAbout></AllAbout>,
  },
  {
    path: "contact",
    element: <AllContact></AllContact>,
  },
]);
createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
