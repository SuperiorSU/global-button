import React, { useState, useEffect } from 'react';
import bg from './assets/world.png';
import logo from './assets/logo.png';

const App = () => {
  const [buttonText, setButtonText] = useState('LAUNCH');

  const handleLaunch = () => {
    setButtonText('Launching...');
    setTimeout(() => {
      setButtonText('Launched!');
    }, 1500);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space') {
        handleLaunch();
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className='h-screen bg-gradient-to-b relative from-[#024e68] via-[#01394b] to-[#071b21] flex justify-center items-center'>
      <div className='w-3/4 px-6 py-4 absolute bg-white flex justify-center shadow-md shadow-slate-300 items-center rounded-b-full top-0 z-10'>
        <img src={logo} className='w-44 object-contain object-center' alt='' />
      </div>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className='w-full h-full absolute z-0 opacity-10'
      ></div>
      <div className='w-3/4 h-3/4 rounded-3xl text-white flex flex-col justify-center items-center z-10'>
        <h1 className='text-4xl opacity-90 font-bold text-center animate-pulse'>
          Welcome to Global Futures Summit 2.0
        </h1>
        <button
          onClick={handleLaunch}
          className='w-[144px] mt-10 h-[144px] rounded-full border-2 shadow-md shadow-slate-300 border-slate-400 text-center flex items-center justify-center bg-[#9de1f77d]'
        >
          <span className='text-2xl text-slate-100'>{buttonText}</span>
        </button>
      </div>
    </div>
  );
};

export default App;