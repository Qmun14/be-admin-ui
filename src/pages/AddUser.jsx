import React, { useEffect } from 'react'
import FormAddUser from '../components/FormAddUser';
import Layout from './Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMeApi } from '../features/authentications/authSlice';

const AddUser = () => {
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
            <FormAddUser />
        </Layout>
    )
}

export default AddUser;