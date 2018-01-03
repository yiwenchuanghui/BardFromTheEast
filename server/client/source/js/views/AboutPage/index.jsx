import React from 'react';
import Masonry from '../../components/Global/Masonry';
import ArtistCard from './ArtistCard';

import '../../../assets/images/Anthony_Kam.jpeg';
import '../../../assets/images/LokRay_Chan.jpg';
import '../../../assets/images/ben_chung.jpg';

const brakePoints = [350, 576, 769, 992, 1200];

const ARTISTS = [
  {
    name: 'Anthony Kam',
    img: '../../assets/images/Anthony_Kam.jpeg',
    about: 'My name is Anthony Kam, I am from China, Beijing',
  },
  {
    name: 'Lok Ray Chan',
    img: '../../assets/images/LokRay_Chan.jpg',
    about: 'My name is Lok Ray Chan, I am from China, Shanghai',
  },
  {
    name: 'Ben Chung',
    img: '../../assets/images/ben_chung.jpg',
    about: 'My name is Ben Chung, I am from China, Guangzhou',
  },
  {
    name: 'Lok Ray Chan',
    img: '../../assets/images/LokRay_Chan.jpg',
    about: 'My name is Lok Ray Chan, I am from China, Shanghai',
  },
  {
    name: 'Ben Chung',
    img: '../../assets/images/ben_chung.jpg',
    about: 'My name is Ben Chung, I am from China, Guangzhou',
  },
  {
    name: 'Anthony Kam',
    img: '../../assets/images/Anthony_Kam.jpeg',
    about: 'My name is Anthony Kam, I am from China, Beijing',
  },
];

const AboutPage = () => {
  return (
    <div className='about-page'>
      <h1 style={ { color: '#fff' } } className='title'>
        Artists
      </h1>
      <div style={ { width: '60%', margin: '0 auto' } }>
        <Masonry brakePoints={ brakePoints }>
          {ARTISTS.map((data, index) => (
            <ArtistCard key={ index } img={ data.img } name={ data.name } about={ data.about } />
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default AboutPage;
