import HomePage from './home'
import ClientsPage from './clients'
import HelpPage from './help'
import LoginPage from './login'
import LogoutPage from './logout'
import SettingsPage from './settings'
import NotFound from './notfound'

const AppRoutes = [
    {
        path: '/',
        element: <HomePage />,
        isPrivate: true,
    },
    {
        path: '/clients',
        element: <ClientsPage />,
        isPrivate: true,
    },
    {
        path: '/help',
        element: <HelpPage />,
        isPrivate: true,
    },
    {
        path: '/login',
        element: <LoginPage />,
        isPrivate: false,
    },
    {
        path: '/logout',
        element: <LogoutPage />,
        isPrivate: true,
    },
    {
        path: '/settings',
        element: <SettingsPage />,
        isPrivate: true,
    },
    {
        path: '/*',
        element: <NotFound />,
        isPrivate: true,
    },

];

export default AppRoutes;
