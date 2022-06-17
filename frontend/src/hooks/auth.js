import { useQuery, useQueryClient } from 'react-query'
import axios from 'axios'

function getStoredUser() {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null
}

function setStoredUser(user) {
    localStorage.setItem('user', JSON.stringify(user))
}

function clearStoredUser() {
    localStorage.removeItem('user')
}

function updateStoredUser(user) {
    user ? setStoredUser(user) : clearStoredUser()
}

// User hook that exposes information about the currently logged in user and stays in sync with the server.
export function useUser() {
    const queryClient = useQueryClient()

    function updateUser(user) {
        queryClient.setQueryData('user', user)
    }

    function clearUser() {
        queryClient.setQueryData('user', null)
    }

    // Requests user info in case things have changed server side.
    async function details(user) {
        if (!user)
            return null

        const response = await axios.get(`/api/users/info/${user._id}`)
        if (response.data)
            updateUser(response.data)

        return response.data
    }

    const { data: user } = useQuery(
        'user',
        () => details(user),
        {
            // Initially from the `localStorage`.
            initialData: getStoredUser,

            // Update on successfull login or logout.
            onSuccess: updateStoredUser
        }
    )

    return { user, updateUser, clearUser }
}

// Authentication hook that exposes login, logout, and register.
export function useAuth() {
    const { updateUser, clearUser } = useUser()

    async function signin(username, password) {
        const response = await axios.post('/api/users/login', {
            username,
            password
        })

        if (response.data)
            updateUser(response.data)

        return response.data
    }

    async function signup(data) {
        const response = await axios.post('/api/users/register', data)
        if (response.data)
            updateUser(response.data)

        return response.data
    }

    function signout() {
        clearUser()
    }

    return { signin, signup, signout }
}
