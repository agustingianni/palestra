import { Navigate } from "react-router";
import { useAuth } from "../hooks/auth"

function LogoutPage() {
    const auth = useAuth()

    auth.signout()

    return <Navigate to="/login" />
}

export default LogoutPage