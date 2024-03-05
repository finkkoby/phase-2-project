import React from 'react';
import App from './App';
import ErrorPage from './components/ErrorPage';
import Home from './pages/Home';
import Songs from './pages/Songs';
import Books from './pages/Books';
import TVMovies from './pages/TVMovies';

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/songs',
                element: <Songs />
            },
            {
                path: '/books',
                element: <Books />
            },
            {
                path: '/tv-movies',
                element: <TVMovies />
            }
        ]
    }
]

export default routes;