import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addUser } from '../api/users';


const FormAddUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [role, setRole] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const saveUserAPI = async (e) => {
        e.preventDefault();
        const payload = {
            name: name, email: email, password: password, confPassword: confPassword, role: role
        }
        try {
            await addUser(payload);
            navigate('/users');
        } catch (err) {
            if (err.response) {
                setMessage(err.response.data.message);
            }
        }
    }

    return (
        <div className="bg-CDS_N-2 w-full h-screen flex items-center">
            <div className="container flex max-w-full items-center h-full justify-center">
                <div className="bg-CDS_2  py-5 px-3 rounded-xl shadow-lg font-roboto w-3/4 flex flex-col items-center justify-center " >
                    <h1 className='font-bold text-3xl'>User</h1>
                    <h2 className='text-xl mb-1'>Add New User</h2>
                    <div className="flex-col relative flex  w-full">
                        <form onSubmit={saveUserAPI} className="mb-8 mt-3  mx-8">
                            <p className="text-center text-red-400 text-sm mt-1 font-semibold mb-5">{message}</p>
                            <div className="flex-1 my-3 justify-start font-semibold">
                                <label htmlFor="name">
                                    Name
                                </label>
                            </div>
                            <div className="mt-3 mb-5">
                                <input type="text" id="user" placeholder="name" className="h-12 text-lg w-full   px-4 rounded-md outline-blue-500" autoFocus
                                    value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="flex-1 my-3 justify-start font-semibold">
                                <label htmlFor="email">
                                    Email
                                </label>
                            </div>
                            <div className="mt-3 mb-5">
                                <input type="email" id="email" placeholder="Email" className="h-12 text-lg w-full   px-4 rounded-md outline-blue-500"
                                    value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="flex-1 my-3 justify-start font-semibold">
                                <label htmlFor="password">
                                    Password
                                </label>
                            </div>
                            <div className="mt-3 mb-5 ">
                                <input type="password" id="password" placeholder="******" className=" h-12 text-lg w-full   px-4 rounded-md outline-blue-500"
                                    value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="flex-1 my-3 justify-start font-semibold">
                                <label htmlFor="confirm_password">
                                    Confirm Password
                                </label>
                            </div>
                            <div className="mt-3 mb-5">
                                <input type="password" id="confirm_password" placeholder="******" className=" h-12 text-lg w-full   px-4 rounded-md outline-blue-500"
                                    value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                            </div>
                            <div className="flex-1 my-3 justify-start font-semibold">
                                <label htmlFor="role">
                                    Role
                                </label>
                            </div>
                            <div className="mt-3 mb-5">
                                <select className='w-full h-12 text-lg px-4 rounded-md' value={role} onChange={(e) => setRole(e.target.value)}>
                                    <option value="admin" className='h-10'>Admin</option>
                                    <option value="user" className='h-10'>User</option>
                                </select>
                            </div>
                            <div className='flex justify-center'>
                                <button type='submit' className="bg-green-400 py-3 px-24 mt-5 w-1/2 rounded-md justify-items-center font-bold hover:bg-opacity-70">Save</button>
                            </div>
                        </form>
                    </div>
                    {/* <div className="flex mt-0 px-7 justify-center items-center text-base">
                        <NavLink to={''} className="hover:text-blue-500">Kembali</NavLink>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default FormAddUser;