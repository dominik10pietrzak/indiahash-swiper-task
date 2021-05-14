import React, { useEffect, useState } from 'react';
import './App.scss';

import { data } from './assets/employees';
import Person from './components/Person/Person';
import SwiperBox from './components/SwiperBox/SwiperBox';

// https://source.unsplash.com/random/200x200
// https://swiperjs.com/

const App = () => {
  const [isSwiperVisible, setSwiperVisibility] = useState(false);
  const [currentPerson, setCurrentPerson] = useState(data[0]);

  const showSwiper = (person) => {
    setSwiperVisibility(true);
    setCurrentPerson(person);
  };

  const contentFadeIn = () => {
    document.querySelector('.App').classList.remove('hidden-content');
  };

  useEffect(() => {
    const people = [...document.querySelectorAll('.person')];
    console.log(people);
    people.forEach((person, idx) => {
      person.style.transition = `all 0.3s ease ${0.3 + idx * 0.02}s`;
    });
  }, []);

  return (
    <div className='App hidden-content' onLoad={contentFadeIn}>
      <div className='background'></div>
      <h1 className='page-heading'>Meet our team</h1>
      <div className='team-container'>
        {data.map((person) => (
          <Person
            className='person'
            key={person.id}
            data={person}
            showSwiper={showSwiper}
          />
        ))}
      </div>
      <SwiperBox
        isSwiperVisible={isSwiperVisible}
        currentPerson={currentPerson}
        setSwiperVisibility={setSwiperVisibility}
      />
    </div>
  );
};

export default App;
