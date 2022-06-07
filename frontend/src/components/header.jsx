import { FaSignInAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header() {
    // TODO(goose):
    //   - If logged in, show the user.
    //   - If logged out, show login link
    // This means we need user information from somewhere.
    return (
        <header className='header'>
            <div className='logo'>
                <Link to='/'>Gym Management</Link>
            </div>
            <ul>
                <>
                    <li>
                        <Link to='/login'>
                            <FaSignInAlt /> Login
                        </Link>
                    </li>
                </>
            </ul>
        </header>
    )
}

export default Header
