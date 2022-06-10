import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query";

import { ChakraProvider } from '@chakra-ui/react'

import './index.css'
import Login from './pages/login'
import Logout from './pages/logout'
import DashBoard from './pages/dashboard'

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ChakraProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<DashBoard />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/logout" element={<Logout />}></Route>
                    </Routes>
                </Router>
            </ChakraProvider>
        </QueryClientProvider>
    </React.StrictMode>
)
