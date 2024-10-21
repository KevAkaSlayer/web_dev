import React, { useState } from 'react';
import './Country.css';
const Country = ({country,handleVisitedCountry,handleVisitedFlags}) => {
    console.log(country);
    const {name ,flags,population,area,cca3} = country;
    
    const [visited,setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }
    const passWithParam = () => {
        handleVisitedCountry(country);
    }

    return (
        <div  className={visited?'visited':'country'}>
            <h3>Name :{name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area : {area} Sq KM</p>
            <p><small>Code : {cca3}</small></p>
            <button onClick={passWithParam}>Mark Visited</button>
            <br />
            <button onClick={()=>handleVisitedFlags(flags.png)}>Add Flags</button>
            <br />
            <button onClick={handleVisited}>{visited?'visited':'going'}</button>
            {visited?' I have visited this country' : ' I want to visit this country'}
        </div>
    );
};

export default Country;