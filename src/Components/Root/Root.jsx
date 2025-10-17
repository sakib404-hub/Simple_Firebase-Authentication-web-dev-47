import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <div className='p-4 bg-base-200 shadow-md'>
                <h1 className='text-2xl font-semibold text-center'>Simple Firebase Authentication</h1>
            </div>
            <Header></Header>
            <div className='border min-h-screen'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;