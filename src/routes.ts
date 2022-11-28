import { lazy } from "react";

const routes = [
  {
    path: "/",
    element: lazy(() => import("./pages/Home")),
  },
  {
    path: "about",
    element: lazy(() => import("./pages/About")),
  },
  {
    path: "locations",
    element: lazy(() => import("./pages/Locations")),
  },
  {
    path: "contact",
    element: lazy(() => import("./pages/Contact")),
  },
];

export default routes;
