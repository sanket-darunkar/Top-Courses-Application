import React from 'react';

const Filter = (props) => {
  let filterData =props.filterData;
  return (
    <div className='w-11/12 flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center'>
      {filterData.map((data) => (
        <button className={''} 
        key={data.id}>{data.title}</button>
      ))}
    </div>
  );
};

export default Filter;
 