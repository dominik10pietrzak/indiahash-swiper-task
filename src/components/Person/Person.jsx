import React from 'react';
import './Person.scss';

import envelope from '../../assets/envelope.png';

const Person = ({ data, showSwiper }) => {
  return (
    <div className='person' key={data.id}>
      <div className='avatar-wrapper' onClick={() => showSwiper(data)}>
        <img className='avatar' src={data.avatar} alt='avatar' />
        <div className='envelope'>
          <img src={envelope} alt='' />
        </div>
      </div>
      <h3 className='name'>{data.name}</h3>
      <p className='position'>{data.position}</p>
      <p className='location'>{data.location}</p>
    </div>
  );
};

export default Person;
