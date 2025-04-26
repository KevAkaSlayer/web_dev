import React from 'react';
import Cover from '../Components/Shared/Cover/Cover';
import shopImg from "../assets/shop/banner2.jpg"
import ChipTabs from '../Components/Shared/ChipTabs';
import Card from '../Components/Shared/Card';

const Order = () => {
    return (
        <div>
            <title>Shop</title>
            <Cover img={shopImg} title="Our Shop"></Cover>

            <ChipTabs></ChipTabs>

            <div className='grid md:grid-cols-3 gap-10 mx-10 my-5'>

                <Card></Card>
            </div>

        </div>


    );
};

export default Order;