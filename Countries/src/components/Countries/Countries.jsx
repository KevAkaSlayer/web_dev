import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = () => {
    const [countries,setCountries] = useState([]);
    const [visitedCountries,setVisitedCountries] = useState([]);
    const [visitedFlags,setVisitedFlags] = useState([]);
    
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    const handleVisitedCountry = (country) => {
        console.log('clicked',country);
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = (flag) => {
        const newVisitedFlags = [...visitedFlags,flag];
        setVisitedFlags(newVisitedFlags);
    }


    return (
        <>
            <h3>Countries : {countries.length}</h3>
            <div>
                <h4>Visited Countries : {visitedCountries.length}</h4>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca2}>{country.name.common}</li>)
                    }
                </ul>   
            </div> 
            <div className="flag-container">
                {
                    visitedFlags.map((flag,idx) => <img key={idx}  src={flag}></img>)
                }
            </div>
            <div className="country-container">
                {
                    countries.map(country => <Country 
                        key={country.cca2}
                        handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlags={handleVisitedFlags}
                        country={country}></Country>)
                }
            </div>
        </>
    );
};

export default Countries;