import React from 'react'
import AboutMe from './pages/AboutMe'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Playground from './pages/Playground'

import Login from './pages/Login'
import Register from './pages/Register'
import Session from './pages/Session'


const routes = [
    { path: '/', name: 'About Me', element: <AboutMe />, },
    { path: '/experience', name: 'Experience', element: <Experience />, },
    { path: '/projects', name: 'Projects', element: <Projects/>, },
    { path: '/playground', name: 'Playground', element: < Playground/>, },
    { path: '/login', name: 'Login', element: <Login />, },
    { path: '/register', name: 'Register', element: <Register />, },
    { path: '/session', name: 'Session', element: <Session />, },
]

export default routes
