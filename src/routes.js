import React from 'react';
import App from './App';
import ErrorPage from './components/ErrorPage';
import Home from './pages/Home';
import Songs from './pages/Songs';
import Books from './pages/Books';
import TVMovies from './pages/TVMovies';
import AddNew from './pages/AddNew';

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                errorElement: <ErrorPage />
            },
            {
                path: '/songs',
                element: <Songs />,
                errorElement: <ErrorPage />
            },
            {
                path: '/books',
                element: <Books />,
                errorElement: <ErrorPage />
            },
            {
                path: '/tv-movies',
                element: <TVMovies />,
                errorElement: <ErrorPage />
            },
            {
                path: '/add-new',
                element: <AddNew />,
                errorElement: <ErrorPage />
            }
        ]
    }
]

export default routes;