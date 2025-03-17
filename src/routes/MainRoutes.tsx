import { useRoutes } from "react-router-dom";
import Home from "../pages/Home/Home";
import { Character } from "../pages/Character/Character";
import { Locations } from "../pages/Locations/Locations";

export const MainRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/character", element: <Character /> },
    { path: "/locations", element: <Locations /> },
  ]);
};
