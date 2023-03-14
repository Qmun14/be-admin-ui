import React, { useEffect } from 'react';
import ProductList from '../components/ProductList';
import Layout from './Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMeApi } from '../features/authentications/authSlice';


const Products = () => {
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
            <ProductList />
        </Layout>
    )
}

export default Products;