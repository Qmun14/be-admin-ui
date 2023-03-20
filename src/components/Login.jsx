import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authentications/authSlice";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isLoading, isError, isSuccess, message } = useSelector(state => state.auth);

    useEffect(() => {
        if (user || isSuccess) {
            navigate('/');
        }
        dispatch(reset());
    }, [user, isSuccess, dispatch, navigate]);

    const Auth = (e) => {
        e.preventDefault()
        dispatch(LoginUser({ email, password }));
    }

    return (
        <div className="bg-gradient-to-br from-orange-600 to-amber-900 via-orange-200  w-full h-screen">
            <div className="container flex max-w-full justify-center items-center h-full">
                <div className="bg-transparent font-roboto py-5 px-3 rounded-xl  shadow-xl  opacity-75 hover:opacity-100 transition-opacity">
                    <div className="flex-col relative">
                        <form
                            onSubmit={Auth}
                            action=""
                            className="my-8 mx-8"
                        >
                            {isError && <p className="text-center text-red-400 text-sm mt-1 font-semibold mb-5">{message}</p>}
                            <div className="flex-1 my-3 justify-start font-semibold">
                                <label htmlFor="user">Email</label>
                            </div>
                            <div className="mt-3 mb-5">
                                <input
                                    type="text"
                                    id="user"
                                    placeholder="username atau email.."
                                    className="h-12 text-lg w-[300px] px-4 rounded-md outline-blue-500"
                                    autoFocus
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="flex-1 my-3 justify-start font-semibold">
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="mt-3 mb-5">
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="******"
                                    className=" h-12 text-lg w-[300px] px-4 rounded-md outline-blue-500"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                            <button className="bg-green-400 py-3 px-24 mt-5 w-[300px] rounded-md justify-items-center font-bold hover:bg-opacity-70 text-xl" type="submit">
                                {isLoading ? 'Loading...' : 'Login'}
                            </button>
                        </form>
                    </div>
                    {/* <div className="flex mt-0 px-7 justify-center items-center text-base">
                        <NavLink
                            to={"register"}
                            className="hover:text-blue-500"
                        >
                            Daftar
                        </NavLink>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Login;