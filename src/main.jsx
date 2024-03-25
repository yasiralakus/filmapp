import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Movie from './Movie.jsx'
import Tvshow from './Tvshow.jsx'
import Pricing from './Pricing.jsx'
import Contact from './Components/Contact.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/movie',
        element: <Movie />
    },
    {
        path: '/tvshow',
        element: <Tvshow />
    },
    {
        path: '/pricing',
        element: <Pricing />
    },
    {
        path: '/contact',
        element: <Contact />
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
