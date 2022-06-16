import { Navigate } from "react-router";

import AuthService from "../service/auth"

function LogoutPage() {
    AuthService.logout()

    return <Navigate to="/login" />
}

export default LogoutPage