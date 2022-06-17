import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from '@chakra-ui/react'

import AppRoutes from './routes'

const routes =
    <Router>
        <Routes>
            {
                AppRoutes.map((route) =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                )
            }
        </Routes>
    </Router>

const root = ReactDOM.createRoot(document.getElementById("root"))

const queryClient = new QueryClient();

root.render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <ChakraProvider>
                {routes}
            </ChakraProvider>
        </QueryClientProvider>
    </StrictMode>
)
