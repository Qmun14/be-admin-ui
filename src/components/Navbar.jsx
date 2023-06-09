import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authentications/authSlice";
import logo from "../logo.png";

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((store) => store.auth);

    const logout = () => {
        dispatch(LogOut());
        dispatch(reset());
        navigate('/login');
    }
    return (
        <div className="relative">
            <nav className="navbar bg-CDS_1 w-full flex items-center  fixed top-0 left-0 right-0 shadow-md">
                <div className="navbar-label flex ml-20 w-[400px]">
                    <NavLink to={"/"}>
                        <img
                            src={logo}
                            alt="title"
                            className="object-contain rounded-full"
                            width={112}
                            height={28}
                        />
                    </NavLink>
                </div>
                {/* <div className="flex w-[400px]">Home</div> */}
                <div className="flex w-full justify-end mr-10">
                    <button onClick={logout} className="bg-slate-100 hover:bg-CDS_2 px-2 py-2 rounded-md shadow-md w-[100px] justify-evenly flex items-center">
                        <IoLogOutOutline />
                        <span>Logout</span>
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
