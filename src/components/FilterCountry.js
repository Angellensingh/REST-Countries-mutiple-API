import React from 'react';

const FilterCountry = ({ setRegion }) => {

    return (
        <div className='sm:pl-10'>
            <select className=" mt-6 mr-12 p-2 bg-light rounded-lg shadow  dark:bg-DarkModeElements dark:shadow dark:text-white" onChange={(e) => setRegion(e.target.value)}>
                <option value="">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    ) 
};

export default FilterCountry;