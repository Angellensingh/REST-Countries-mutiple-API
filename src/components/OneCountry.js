import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const OneCountry = ({ countries }) => {
  const { countryName } = useParams();
  const navigate = useNavigate();

  const country = countries.find(
    (c) => c.name.common.toLowerCase() === countryName.toLowerCase()
  );

  if (!country) {
    return <div className="text-center">Country not found</div>;
  }

  return (
    <div className="p-6 dark:bg-DarkModeBackground dark:text-white h-fit">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 px-4 py-2 bg-white text-black rounded-lg shadow dark:bg-DarkModeElements  dark:shadow dark:text-white"
        >
          &larr; Back
        </button>

        <br />
        <div className="bg-white rounded-lg shadow p-20 flex flex-col justify-center sm:flex-col md:flex-row xl:flex-row  dark:bg-DarkModeBackground h-screen">
          
              <div> 
                    <img
                      src={country.flags.png}
                      alt={`Flag of ${country.name.common}`}
                      className="h-80  object-cover rounded-lg sm:h-10 sm:w-11 xl:h-64 xl:w-full md:h-56 md:w-full"
                    />
              </div>
              

              
                  <div className="text-slate-700 ml-14">
                    <h2 className="ml-50 font-bold text-gray-900 text-2xl lg:text-4xl dark:text-light">
                      {country.name.common}
                    </h2>
                    <p className="mt-4 dark:text-light">
                      <strong>Native Name:</strong> {country.name.nativeName[Object.keys(country.name.nativeName)[0]].common}
                    </p>
                    <p className="dark:text-light">
                      <strong>Population:</strong> {country.population?.toLocaleString() || 'N/A'}
                    </p>
                    <p className="dark:text-light">
                      <strong>Region:</strong> {country.region || 'N/A'}
                    </p>
                    <p className="dark:text-light">
                      <strong>Subregion:</strong> {country.subregion || 'N/A'}
                    </p>
                    <p className="dark:text-light">
                      <strong>Capital:</strong> {country.capital || 'N/A'}
                    </p>
                    <p className="dark:text-light mt-4 inline-flex" ><strong>Border Countries:</strong> 
                    {country.borders && country.borders.length > 0 ? (
                    <div className='absolute'>
                      {country.borders.map((border, index) => (
                      <p key={index} className='inline-flex text-light bg-gray-600 border border-black relative left-32 bottom-2 m-2 p-1 px-2 mt-2 text-xs dark:text-white'>{border}  </p> 
                      ))}
                    </div>
                      ) : (
                        <p>No borders available</p> 
                      )} </p>
              </div>
                  
              <div className="mt-14 text-slate-700 ml-16 sm:ml-14 " >
                    <p className="dark:text-light">
                      <strong>Top Level Domain:</strong> {country.tld[0]}
                    </p>
                    <p className="dark:text-light">
                      <strong>Currencies:</strong> {country.currencies[Object.keys(country.currencies)[0]].name}- {Object.keys(country.currencies)[0]}       
                    </p>
                    
                    <p className="dark:text-light">
                      <strong>Languages:</strong>{Object.values(country.languages).join(',')}
                    </p>
              </div>
             
            </div>
            {/* <div className=''>
                  <p>Border Countries: </p>
                  {country.borders && country.borders.length > 0 ? (
                  <div>
                    {country.borders.map((border, index) => (
                    <span key={index} className='bg-gray-600 border border-black m-2 p-1 px-2 mt-2'>{border}  </span>                       ))}
                  </div>
                    ) : (
                      <p>No borders available</p> 
                    )}
              </div> */}
        </div>
  );
};

export default OneCountry;
