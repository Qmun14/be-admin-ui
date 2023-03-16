import React, { useState, useEffect } from 'react';
import { IoPencilOutline, IoTrash } from 'react-icons/io5';
import { Link } from 'react-router-dom'
import { deleteUser, getUsers } from '../api/users';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsersAPI();
    }, []);

    const getAllUsersAPI = async () => {
        const response = await getUsers();
        setUsers(response.data);
    };

    const deleteUserAPI = async (userId) => {
        await deleteUser(userId);
        getAllUsersAPI();
    };
    return (
        <div className=' mx-5'>
            <h1 className='font-bold text-3xl'>Users</h1>
            <h2 className='text-xl mb-3'>List of Users</h2>
            <Link to={"/users/add"} className="bg-CDS_1 p-2 rounded-md font-bold shadow-lg">
                Add New
            </Link>
            <table className="table-auto w-full mx-auto border-slate-800 border-collapse mt-4 shadow-md">
                <thead>
                    <tr className="bg-CDS_N-3 text-gray-600 text-base leading-normal">
                        <th className='py-3 px-6 text-center border-[2px] border-CDS_1 bg-white w-8'>No</th>
                        <th className='py-3 px-6 text-center border-[2px] border-CDS_1 bg-white'>Name</th>
                        <th className='py-3 px-6 text-center border-[2px] border-CDS_1 bg-white'>Email</th>
                        <th className='py-3 px-6 text-center border-[2px] border-CDS_1 bg-white'>Role</th>
                        <th className='py-3 px-6 text-center border-[2px] border-CDS_1 bg-white w-32'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index} className="bg-CDS_2 border">
                            <td className="py-3 px-6 text-left">{index + 1}</td>
                            <td className="py-3 px-6 text-left">{user.name}</td>
                            <td className="py-3 px-6 text-left">{user.email}</td>
                            <td className="py-3 px-6 text-left">{user.role}</td>
                            <td>
                                <div className="flex flex-row justify-evenly">
                                    <Link
                                        to={`/users/edit/${user.uuid}`}
                                        className="bg-blue-300 p-2 rounded-md"
                                        title="Edit ?"
                                    >
                                        <IoPencilOutline />
                                    </Link>
                                    <button
                                        onClick={() =>
                                            deleteUserAPI(user.uuid)
                                        }
                                        className="bg-red-500 p-2 rounded-md"
                                        title="wanna delete ?"
                                    >
                                        <IoTrash />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserList;