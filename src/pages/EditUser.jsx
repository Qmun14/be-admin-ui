import React, { useEffect } from 'react'
import FormEditUser from '../components/FormEditUser';
import Layout from './Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMeApi } from '../features/authentications/authSlice';

const EditUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isError, user } = useSelector((store) => store.auth);

    useEffect(() => {
        dispatch(getMeApi());
    }, [dispatch]);

    useEffect(() => {
        if (isError) {
            navigate('/login');
        }
        if (user && user.role !== 'admin') {
            navigate('/')
        }
    }, [isError, navigate, user]);
    return (
        <Layout>
            <FormEditUser />
        </Layout>
    )
}

export default EditUser;