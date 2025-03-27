import { useRoutes } from "react-router-dom";

import Home from "../pages/Home/Home";
import { Episodes } from "../pages/Episodes/Episodes";
import { Characters } from "../pages/Character/Characters";
import { Locations } from "../pages/Locations/Locations";

export const MainRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/episodes", element: <Episodes /> },
    { path: "/character", element: <Characters /> },
    { path: "/locations", element: <Locations /> },
  ]);
};
