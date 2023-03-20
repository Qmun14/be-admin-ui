import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { IoPerson, IoPricetag, IoHome, IoLogOut, IoPeople, IoCard } from 'react-icons/io5';
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authentications/authSlice";

const SideBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((store) => store.auth);

    const logout = () => {
        dispatch(LogOut());
        dispatch(reset());
        navigate('/login');
    }

    return (
        <div className="fixed flex flex-col top-[89px] left-0 w-64 bg-CDS_2 h-full border-r font-roboto">
            {/* <div className="flex items-center justify-center h-14 border-b">
                    <div>Sidebar Navigation By Qmun14</div>
                </div> */}
            <div className="overflow-y-auto overflow-x-hidden flex-grow">
                <ul className="flex flex-col py-4 space-y-1">
                    <li className="px-5">
                        <div className="flex flex-row items-center h-8">
                            <div className="text-sm font-light tracking-wide text-CDS_N-2">General</div>
                        </div>
                    </li>
                    <li>
                        <NavLink to={'/'} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                            <span className="inline-flex justify-center items-center ml-4">
                                <IoHome />
                            </span>
                            <span className="ml-2 text-sm tracking-wide truncate">Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/products'} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                            <span className="inline-flex justify-center items-center ml-4">
                                <IoPricetag />
                            </span>
                            <span className="ml-2 text-sm tracking-wide truncate">Product</span>
                            {/* <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">New</span> */}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/customers'} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                            <span className="inline-flex justify-center items-center ml-4">
                                <IoPeople />
                            </span>
                            <span className="ml-2 text-sm tracking-wide truncate">Customer</span>
                            {/* <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">New</span> */}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/members'} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                            <span className="inline-flex justify-center items-center ml-4">
                                <IoCard />
                            </span>
                            <span className="ml-2 text-sm tracking-wide truncate">Members</span>
                            {/* <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">New</span> */}
                        </NavLink>
                    </li>
                    {user && user.role === 'admin' && (
                        <div>
                            <li className="px-5  ">
                                <div className="flex flex-row items-center h-8">
                                    <div className="text-sm font-light tracking-wide text-CDS_N-2">Admin</div>
                                </div>
                            </li>
                            <li>
                                <NavLink to={'/users'} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                    <span className="inline-flex justify-center items-center ml-4">
                                        <IoPerson />
                                    </span>
                                    <span className="ml-2 text-sm tracking-wide truncate">User</span>
                                </NavLink>
                            </li>
                        </div>
                    )}
                    <li className="px-5">
                        <div className="flex flex-row items-center h-8">
                            <div className="text-sm font-light tracking-wide text-CDS_N-2">Setting</div>
                        </div>
                    </li>
                    <li>
                        <div onClick={logout} className="relative flex flex-row cursor-pointer items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                            <span className="inline-flex justify-center items-center ml-4">
                                <IoLogOut />
                            </span>
                            <span className="ml-2 text-sm tracking-wide truncate">Logout</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar;