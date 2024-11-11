import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
const Header = () => {
    let time = moment().format("dddd, MMMM D YYYY");
    return (
        <div className='flex flex-col mt-5 gap-3 justify-center items-center'>
            <img src={logo} alt="" />
            <p>Journalism Without Fear or Favor</p>
            <p className='text-xl'>{time}</p>
        </div>
    );
};

export default Header;