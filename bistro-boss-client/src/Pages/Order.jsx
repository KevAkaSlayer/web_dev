import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Cover from '../Components/Shared/Cover/Cover';
import shopImg from "../assets/shop/banner2.jpg";
import ChipTabs from '../Components/Shared/ChipTabs';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

const Order = () => {
  const categories = ['offered', 'salad', 'pizza', 'soup', 'dessert', 'drinks'];
  const { category } = useParams();

  // Controlled mode: update tabIndex whenever URL param changes
  const [tabIndex, setTabIndex] = useState(0);
  useEffect(() => {
    const idx = categories.indexOf(category);
    setTabIndex(idx >= 0 ? idx : 0);
  }, [category]);

  const [menuData, setMenuData] = useState({});
  useEffect(() => {
    fetch('http://localhost:3000/menu')
      .then(res => res.json())
      .then(data => {
        const grouped = data.reduce((acc, item) => {
          acc[item.category] = acc[item.category] || [];
          acc[item.category].push(item);
          return acc;
        }, {});
        setMenuData(grouped);
      })
      .catch(console.error);
  }, []);

  const activeCategory = categories[tabIndex];
  const items = menuData[activeCategory] || [];

  return (
    <div>
      <title>Shop</title>
      <Cover img={shopImg} title="Our Shop" />

      <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
        <TabList className="flex justify-center space-x-4 border-b mb-6">
          {categories.map(cat => (
            <Tab
              key={cat}
              className="px-4 py-2 text-lg cursor-pointer transition-opacity hover:opacity-80"
              selectedClassName="border-b-4 border-primary font-semibold"
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </Tab>
          ))}
        </TabList>

        {categories.map((_, idx) => (
          <TabPanel key={idx} className="outline-none">
            <ChipTabs items={items} />
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default Order;