import React from 'react';
import App from './App';
import ErrorPage from './components/ErrorPage';
import Home from './pages/Home';

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
]

export default routes;