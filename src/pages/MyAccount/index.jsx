import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNavBar from './SideNavBar';

const AccountLayout = () => {
    return (
        <div className="flex flex-col md:flex-row m-20">
            <SideNavBar />
            <div className="flex-1  mt-20 md:mt-0 ml-0 md:ml-10">
                <Outlet />
            </div>
        </div>
    );
};

export default AccountLayout;
