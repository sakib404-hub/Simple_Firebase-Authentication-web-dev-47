import { createBrowserRouter } from "react-router";
import Root from "../Components/Root/Root";
import Header from "../Components/Header/Header";
import Home from "../Components/Home/Home";
import { Component } from "react";
import Login from "../Components/Login/Login";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'login',
                Component: Login
            }
        ]
    }
])