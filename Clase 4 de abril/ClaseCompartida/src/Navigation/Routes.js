import Login from "../Screen/Login";
import PerfilDetail from "../components/Producto/PerfilDetail";
import Home from "../Screen/Home";
import UserSelected from "../Screen/UserSelected";

export const routes = [
    {
      id: 1,
      path: "/home",
      Component: Home  
    },
    {
        id: 2,
        path: "/perfil-detail/",
        Component: PerfilDetail
    },
    {
      id: 3,
      path: "/users/:login",
      Component: UserSelected
  }
];

export {Login};