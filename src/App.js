import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Countries from './components/Countries';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OneCountry from './components/OneCountry';

import { useNavigate } from 'react-router-dom';

function App() {
  const API_URL_ALL = 'https://restcountries.com/v3.1/all';
  const API_URL_SEARCH = 'https://restcountries.com/v3.1/name/';
  const API_URL_FILTER = 'https://restcountries.com/v3.1/region/'
  
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState(''); 
  const [region, setRegion] = useState(''); 
  

  useEffect(() => {
    const fetchCountries = async () => {
      
    const url = searchTerm ? `${API_URL_SEARCH}${searchTerm}` : region ? `${API_URL_FILTER}${region}` : API_URL_ALL;

    try {
        const fetchResponse = await fetch(url);
        if (!fetchResponse.ok) throw new Error('Data not received');
        const data = await fetchResponse.json();
        setCountries(data);
        setError('');
    } catch (err) {
        setError(err.message);
        setCountries([]);
       
    }
    };
    fetchCountries();  
  }, [searchTerm,region]); 


  return (
    <div className='min-h-screen min-w-scren'>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Countries countries={countries} error={error} setRegion={setRegion} setSearchTerm={setSearchTerm}/>}/>
          <Route path='/:countryName' element={<OneCountry countries={countries}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
