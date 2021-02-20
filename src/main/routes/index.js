import React from 'react';

// Views
const Weather = React.lazy(() => import("../../modules/weather/Weather"));
const Favorites = React.lazy(() => import("../../modules/favorites/Favorites"));

// Declaring Routes
export const routers = [
    {
        path: "/",
        name: "weather",
        exact: true,
        component: Weather,
    },
    {
        path: "/favorites",
        name: "favorites",
        exact: true,
        component: Favorites
    }
];