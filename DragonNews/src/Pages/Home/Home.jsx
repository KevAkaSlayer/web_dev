import React from 'react';
import Header from '../Shared/Header/Header';
import NavBar from '../Shared/NavBar/NavBar';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const Home = () => {
    const  news = useLoaderData();
    return (
        <div>
            <Header/>
            <BreakingNews/>
            <NavBar />
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div>
                    <LeftSideNav />
                </div>
                <div className='md:col-span-2'>
                    <h2 className='text-4xl'>News Coming Soon</h2>
                    {
                        news.map((newsItem) => <NewsCard key={newsItem.id} newsItem={newsItem} />)
                    }
                </div>
                <div>
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default Home;