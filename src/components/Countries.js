import SearchCountry from './SearchCountry';
import FilterCountry from './FilterCountry';
import {Link } from 'react-router-dom';

const Countries = ({countries,error,setRegion,setSearchTerm}) => {

  return (
    <div className='dark:bg-DarkModeBackground min-h-screen'>

        <div class='flex flex-row justify-between sm:flex-col md:flex-row  xl:flex-row lg:flex-row '>
          <SearchCountry setSearchTerm={setSearchTerm} /> 
          <FilterCountry setRegion={setRegion}/>
        </div>
             
        <div  className="h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 mt-6 px-10 dark:bg-DarkModeBackground dark:text-white">
            {error && <div className="font-semibold text-3xl">{error}</div>}
            
            {countries.map((country) => (
              <Link to={`/${country.name.common}`} >
                <div key={country.name.common} className=" max-h-screen bg-white rounded-lg shadow dark:bg-DarkModeElements dark:shadow dark:text-light">
                  <img
                      src={country.flags.svg}
                      alt={country.name.common}
                      className="w-full h-40 object-cover rounded shadow xl:h-36 sm:h-[240px]"
                  />
                 <div className='p-3'>
                    <p><strong>{country.name.common}</strong></p>
                    <p>Population: {country.population}</p>
                    <p>Region: {country.region}</p>
                    <p>Capital: {country.capital}</p>
                  </div>
                </div>
              </Link>
            ))
           }
        </div>
       
    </div>
  )
}
export default Countries;

