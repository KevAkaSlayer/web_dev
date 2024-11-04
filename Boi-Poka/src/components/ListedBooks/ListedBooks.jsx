import React, { useEffect,useState } from 'react';
import {Tab,Tabs,TabList,TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { getStoredReadList } from '../../utility/addtoDb';
import { useLoaderData } from 'react-router-dom';
import Book from '../Book/Book';
const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const allBooks = useLoaderData();
    useEffect(() => {
        const storedReadList = getStoredReadList();
        const intId  = storedReadList.map(id => parseInt(id));
        const readBookList = allBooks.filter(book => intId.includes(book.bookId));
        console.log(readBookList);
        setReadList(readBookList);

    },[]);
    return (
        <div>
            <h3 className='text-3xl'>Listed Books : </h3>
            <Tabs>
                
                    <TabList>
                        <Tab>Read List</Tab>
                        <Tab>Wish List</Tab>
                    </TabList>
                
                    <TabPanel>
                        <div className='grid grid-cols-2 gap-5'>
                            {
                                readList.map(book => <Book key={book.bookId} book={book} />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <p>Wish List</p>
                    </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;