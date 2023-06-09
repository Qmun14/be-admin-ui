import React, { useEffect } from 'react';
import Welcome from '../components/Welcome';
import Layout from './Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMeApi } from '../features/authentications/authSlice';
import Loading from '../components/Loading';

const Dashboard = () => {
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
        <>
            {isError ? <Loading /> : <Layout>
                <Welcome />
            </Layout>}
        </>

    )
}

export default Dashboard;