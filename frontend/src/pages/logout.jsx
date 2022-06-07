import AuthService from "../service/auth"

function Logout() {
    // TODO(goose): If user is not logged in redirect to login.
    try {
        AuthService.logout()
    } catch (error) {
        console.log(error)
    }

    return (
        <div>
            <section className='heading'>
                <h1>Logout</h1>
                <p>Logged out of the application</p>
            </section>

            <section className='content'>
            </section>
        </div>
    )
}

export default Logout