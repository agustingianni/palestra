import { Navigate } from "react-router";

import AuthService from "../service/auth"

function Logout() {
    AuthService.logout()

    return <Navigate to="/login" />
}

export default Logout