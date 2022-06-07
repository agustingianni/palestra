import React from "react"
import AuthService from "../service/auth"
import { useMutation } from "react-query"
import { Navigate } from "react-router";


function Login() {
    const [state, setState] = React.useState({
        username: '',
        password: '',
    })

    const mutation = useMutation((userData) =>
        AuthService.login(userData)
    )

    function handleChange(event) {
        setState((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        mutation.mutate(state)
    }

    if (AuthService.authenticated())
        return <Navigate to="/" />

    return (
        <div>
            <section className='heading'>
                <h1>Login</h1>
                <p>Login and start managing the gym</p>
            </section>

            <section className='form'>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <input type='text' className='form-control' id='username' name='username' value={state.username} placeholder='Username' onChange={handleChange} />
                    </div>

                    <div className='form-group'>
                        <input type='password' className='form-control' id='password' name='password' value={state.password} placeholder='Password' onChange={handleChange} />
                    </div>

                    <div className='form-group'>
                        <button type='submit' className='btn btn-block'>Submit</button>
                    </div>
                </form>
            </section>
            <section>
                {mutation.isError && <p>Error logging in.</p>}
                {mutation.isLoading && <p>Logging in ...</p>}
                {mutation.isSuccess && <Navigate to="/" />}

            </section>
        </div>
    )
}

export default Login