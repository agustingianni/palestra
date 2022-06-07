import axios from 'axios'

// Register user
const register = async (userData) => {
    const response = await axios.post("/api/users/register", userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Login user
const login = async (userData) => {
    const response = await axios.post("/api/users/login", userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Logout user
const logout = () => {
    localStorage.removeItem('user')
}

const AuthService = {
    register,
    logout,
    login,
}

export default AuthService