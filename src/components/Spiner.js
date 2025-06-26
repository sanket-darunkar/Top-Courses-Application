import React from 'react'
import './Spiner.css';

 const Spiner = () => {
  return (
    <div className='flex flex-col items-center space-y-2'>
        <div className='loader'></div>
        <p className='text-bgDark text-lg font-semibold'>Loading...</p>
    </div>
  )
}
export default Spiner;
