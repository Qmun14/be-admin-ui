import React from 'react';
import { useSelector } from 'react-redux';

const Welcome = () => {
    const { user } = useSelector((store) => store.auth);
    return (
        <div>
            <h1 className='font-bold text-xl'>Dashboard</h1>
            <h2 className='text-2xl'>Welcome Back <strong>{user && user.name}</strong></h2>
        </div>
    )
}

export default Welcome;