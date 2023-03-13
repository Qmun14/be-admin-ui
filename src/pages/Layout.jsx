import React from 'react'
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Navbar />
            <div className="mt-[89px] flex flex-row font-roboto">
                <SideBar />
                <div className="flex flex-col bg-CDS_N-3 min-h-screen ml-[256px] pl-2 w-full">
                    <main>{children}</main>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Layout;