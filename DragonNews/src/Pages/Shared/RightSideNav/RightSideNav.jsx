import React from 'react';
import { FaGoogle, FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from 'react-icons/fa6';
import qZone1 from '../../../assets/swimming.png';
import qZone2 from '../../../assets/playground.png';
import qZone3 from '../../../assets/class.png';
const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3 mb-6'>
                <h2 className='text-2xl'>Login With</h2>
                <button className="btn btn-outline p-2 w-full">
                <FaGoogle className='ml-2' />
                 sign in with google
                </button>
                <button className="btn btn-outline p-2 w-full">
                <FaGithub className='ml-2' />
                 sign in with github
                </button>
            </div>
            <div className='p-4  mb-6'>
                <h2 className='text-3xl'>Find Us On</h2>
                <a href="" className='flex p-4 gap-2 items-center border rounded-t-lg'>
                    <FaFacebook className='ml-2' />
                    Facebook
                </a>
                <a href="" className='flex p-4 gap-2 items-center border-x'>
                    <FaTwitter className='ml-2' />
                    Twitter
                </a>
                <a href="" className='flex p-4 gap-2 items-center border rounded-b-lg'>
                    <FaInstagram className='ml-2' />
                    Instagram
                </a>
            </div>
            <div className='p-4 space-y-3 mb-6'>
                <h2 className='text-2xl'>Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;