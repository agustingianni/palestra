import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query";

import './index.css'
import Login from './pages/login'
import Logout from './pages/logout'
import DashBoard from './pages/dashboard'
import Header from './components/header'
import Footer from './components/footer'

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Router>
                <div className='container'>
                    <Header />
                    <Routes>
                        <Route path="/" element={<DashBoard />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/logout" element={<Logout />}></Route>
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </QueryClientProvider>
    </React.StrictMode>
)
