import React from 'react';
import Cover from '../Components/Shared/Cover/Cover';
import MenuImg from "../assets/menu/banner3.jpg";
import MenuItem from '../Components/Shared/MenuItem/MenuItem';
import { useState, useEffect } from 'react';
import SectionTitle from '../Components/SectionTitle/SectionTitle';
import dessertImg from '../assets/menu/dessert-bg.jpeg';
import saladImg from '../assets/menu/salad-bg.jpg';
import pizzaImg from '../assets/menu/pizza-bg.jpg';
import soupImg from '../assets/menu/soup-bg.jpg';



const Menu = () => {
    const [offer, setOffer] = useState([]);
    const [dessert, setDessert] = useState([]);
    const [salad, setSalad] = useState([]);
    const [pizza, setPizza] = useState([]);
    const [soup, setSoup] = useState([]);
    useEffect(() => {
        fetch('menu.json')
          .then(res => res.json())
          .then(data => {
            setOffer   (data.filter(item => item.category === 'offered'));
            setDessert (data.filter(item => item.category === 'dessert'));
            setSalad   (data.filter(item => item.category === 'salad'));
            setPizza   (data.filter(item => item.category === 'pizza'));
            setSoup    (data.filter(item => item.category === 'soup'));
          })
          .catch(err => console.error('Failed to load menu:', err));
      }, []);


    return (
        <div>
            <title>Menu</title>
            <Cover img={MenuImg} title="Our Menu"></Cover>
            <SectionTitle
                heading={"Today's Offer"}
                SubHeading={"Don't miss"}
            >

            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-10 mx-10 my-5'>
                {
                    offer.map(item => (
                        <MenuItem key={item._id} item={item} ></MenuItem>

                    ))
                }

            </div>
            <div className='flex justify-center mb-2'>
                <button className='btn btn-outline border-0 border-b-4'>ORDER YOUR FAVORITE FOOD</button>
            </div>
            <Cover img={dessertImg} title="Desserts"></Cover>

            <div className='grid md:grid-cols-2 gap-10 mx-10 my-5'>
                {
                    dessert.map(item => (
                        <MenuItem key={item._id} item={item} ></MenuItem>

                    ))
                }

            </div>
            <div className='flex justify-center mb-2'>
                <button className='btn btn-outline border-0 border-b-4'>ORDER YOUR FAVORITE FOOD</button>
            </div>
            <Cover img={pizzaImg} title="Pizza"></Cover>

            <div className='grid md:grid-cols-2 gap-10 mx-10 my-5'>
                {
                    pizza.map(item => (
                        <MenuItem key={item._id} item={item} ></MenuItem>

                    ))
                }

            </div>
            <div className='flex justify-center mb-2'>
                <button className='btn btn-outline border-0 border-b-4'>ORDER YOUR FAVORITE FOOD</button>
            </div>
            <Cover img={saladImg} title="Salads"></Cover>

            <div className='grid md:grid-cols-2 gap-10 mx-10 my-5'>
                {
                    salad.map(item => (
                        <MenuItem key={item._id} item={item} ></MenuItem>

                    ))
                }

            </div>
            <div className='flex justify-center mb-2'>
                <button className='btn btn-outline border-0 border-b-4'>ORDER YOUR FAVORITE FOOD</button>
            </div>
            <Cover img={soupImg} title="Soups"></Cover>

            <div className='grid md:grid-cols-2 gap-10 mx-10 my-5'>
                {
                    soup.map(item => (
                        <MenuItem key={item._id} item={item} ></MenuItem>

                    ))
                }

            </div>
            <div className='flex justify-center mb-2'>
                <button className='btn btn-outline border-0 border-b-4'>ORDER YOUR FAVORITE FOOD</button>
            </div>

        </div>

    );
};

export default Menu;