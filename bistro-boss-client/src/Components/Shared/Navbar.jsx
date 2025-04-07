import React from 'react';

const Navbar = () => {
    return (
        <>
            <div class="navbar fixed z-10 bg-opacity-30 max-w-screen-xl mx-auto bg-black text-white ">
                <div class="flex-1">
                    <a class="btn btn-ghost text-xl">Bistro Boss</a>
                </div>
                <div class="flex space-x-4 mx-2">
                    <p>Home</p>
                    <p>Contact Us</p>
                    <p>DashBoard</p>
                    <p>OurMenu</p>
                    <p>OurShop</p>
                </div>
                <div class="flex-none">
                    <div class="dropdown dropdown-end">
                        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                            <div class="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabindex="0"
                            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a class="justify-between">
                                    Profile
                                    <span class="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;