
import React, { useState, useEffect } from 'react';

function Header() {
  const [darkmode, setDarkmode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    darkmode ? root.classList.add('dark') : root.classList.remove('dark');
  }, [darkmode]);

  return (
    <header className="flex justify-between items-center p-6 bg-white shadow dark:bg-DarkModeElements dark:shadow dark:text-white">
      <h1 className="text-xl font-bold ml-4">Where in the world?</h1>
      <button onClick={() => setDarkmode(!darkmode)} className="flex items-center text-sm font-bold mr-5 shadow">
        {darkmode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
}

export default Header;
