import React from "react"
import useAuth from "../hooks/useAuth"
import { Navigate, useLocation } from "react-router-dom"

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useAuth()

    if (loading) return <progress className="progress w-56"></progress>
    if (user) return children

    return <Navigate state={{ from: location }} to={"/login"} replace></Navigate>
}
export default PrivateRoute
