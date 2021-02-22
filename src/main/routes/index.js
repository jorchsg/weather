import React from 'react';

// Views
const Weather = React.lazy(() => import("../../modules/weather/Weather"));
const FavoritesList = React.lazy(() => import("../../modules/favorites/FavoritesList"));

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
        component: FavoritesList
    }
];