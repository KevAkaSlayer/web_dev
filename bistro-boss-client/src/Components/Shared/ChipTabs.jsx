import React, { useState } from "react";
import Card from "./Card";
const ChipTabs = ({items}) => {
  return (
    <div className='grid md:grid-cols-3 gap-10 mx-10 my-5'>
      {
        items.map(item => (
          <Card key={item._id} item={item}></Card>
        ))
      }
    </div>
  );
};


export default ChipTabs;