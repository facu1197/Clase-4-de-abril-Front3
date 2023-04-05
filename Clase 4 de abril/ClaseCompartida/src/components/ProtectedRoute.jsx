import { Navigate, Outlet } from 'react-router'
import { useContext } from 'react';
import { NewContext } from '../context/Context';

export const ProtectedRoutes = () => {

    const {isLogged} = useContext(NewContext);
    return isLogged ? <Outlet /> : <Navigate to="/login"/>;
};