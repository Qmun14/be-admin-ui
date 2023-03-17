import React, { useEffect } from 'react'
import CustomersList from '../components/CustomersList';
import Layout from './Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMeApi } from '../features/authentications/authSlice';

const Customers = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isError } = useSelector((store) => store.auth);

    useEffect(() => {
        dispatch(getMeApi());
    }, [dispatch]);

    useEffect(() => {
        if (isError) {
            navigate('/login');
        }
    }, [isError, navigate]);

    return (
        <Layout>
            <CustomersList />
        </Layout>
    )
}

export default Customers;