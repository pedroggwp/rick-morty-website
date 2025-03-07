import { useRoutes } from "react-router-dom"
import Home from "../pages/Home/Home"
// import { Character } from "../pages/Character/Character";

export const MainRoutes = () => {
    return useRoutes([
      { path: "/", element: <Home /> },
      // { path: "/character", element: <Character /> },
    ]);
}