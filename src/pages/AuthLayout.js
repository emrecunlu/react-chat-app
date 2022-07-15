import { Outlet, Navigate } from 'react-router-dom'
import {useSite} from "../context/SiteContext";

function AuthLayout () {

    const { user } = useSite()

    return (
        user ? <Outlet /> : <Navigate to="/register" replace={true} />
    )
}

export default AuthLayout