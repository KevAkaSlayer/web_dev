import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Cover from '../Components/Shared/Cover/Cover';
import MenuItem from '../Components/Shared/MenuItem/MenuItem';
import SectionTitle from '../Components/SectionTitle/SectionTitle';
import MenuImg from "../assets/menu/banner3.jpg";
import dessertImg from '../assets/menu/dessert-bg.jpeg';
import saladImg from '../assets/menu/salad-bg.jpg';
import pizzaImg from '../assets/menu/pizza-bg.jpg';
import soupImg from '../assets/menu/soup-bg.jpg';

// Define category list
const categories = [
  { key: 'offered', title: "Today's Offer", img: MenuImg },
  { key: 'dessert', title: 'Desserts', img: dessertImg },
  { key: 'pizza', title: 'Pizza', img: pizzaImg },
  { key: 'salad', title: 'Salads', img: saladImg },
  { key: 'soup', title: 'Soups', img: soupImg }
];

const Menu = () => {
  const [menuData, setMenuData] = useState({});
  const { category } = useParams();

  useEffect(() => {
    fetch('http://localhost:3000/menu')
      .then(res => res.json())
      .then(data => {
        // group items by category
        const grouped = data.reduce((acc, item) => {
          const cat = item.category;
          if (!acc[cat]) acc[cat] = [];
          acc[cat].push(item);
          return acc;
        }, {});
        setMenuData(grouped);
      })
      .catch(err => console.error('Failed to load menu:', err));
  }, []);

  // Determine which categories to display (all on menu page, or single on order page)
  const displayCategories = category
    ? categories.filter(c => c.key === category)
    : categories;

  return (
    <div>
      <title>Menu</title>

      {displayCategories.map(cat => (
        <section key={cat.key} className="mb-12">
          <Cover img={cat.img} title={cat.title} />
          <SectionTitle
            heading={cat.title}
            SubHeading={category ? `Enjoy our delicious ${cat.key}` : "Don't miss"}
          />

          <div className='grid md:grid-cols-2 gap-10 mx-10 my-5'>
            {menuData[cat.key]?.map(item => (
              <MenuItem key={item._id} item={item} />
            ))}
          </div>

          <div className='flex justify-center mb-2'>
            <Link 
              to={`/order/${cat.key}`} 
              state={{ category: cat.key }}
              className='btn btn-outline border-0 border-b-4'
            >
              ORDER YOUR FAVORITE {cat.title.toUpperCase()}
            </Link>
          </div>
        </section>
      ))}

      {/* Navigation tabs for menu view */}
      
    </div>
  );
};

export default Menu;
