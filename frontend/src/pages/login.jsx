import React from "react"
import AuthService from "../service/auth"
import { toast } from "react-toastify"


function Login() {
    const [state, setState] = React.useState({
        username: '',
        password: '',
    })

    function handleChange(event) {
        setState((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }

    async function handleSubmit(event) {
        event.preventDefault()

        if (!state.username) {
            toast.error("Missing username")
            return
        }

        if (!state.password) {
            toast.error("Missing password")
            return
        }

        try {
            await AuthService.login(state)
        } catch (error) {
            console.log(error)
        }

        toast.info("logged in")
    }

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
        </div>
    )
}

export default Login