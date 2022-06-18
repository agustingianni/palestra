import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/auth"

function LogoutPage() {
    const auth = useAuth()

    auth.signout()

    return <Navigate to="/login" />
}

export default LogoutPage