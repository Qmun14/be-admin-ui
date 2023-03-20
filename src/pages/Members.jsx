import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MemberList from '../components/MemberList';
import { getMeApi } from '../features/authentications/authSlice';
import Layout from './Layout';

const Members = () => {
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
            <MemberList />
        </Layout>
    )
}

export default Members;