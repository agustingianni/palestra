import { FaSignInAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import AuthService from '../service/auth'

function Header() {
    return (
        <header className='header'>
            <div className='logo'>
                <Link to='/'>Gym Management</Link>
            </div>
            <ul>
                <li>
                    {
                        AuthService.authenticated() ?
                            <Link to='/logout'><FaSignInAlt /> Logout</Link> :
                            <Link to='/login'><FaSignInAlt /> Login</Link>
                    }
                </li>
            </ul>
        </header>
    )
}

export default Header
