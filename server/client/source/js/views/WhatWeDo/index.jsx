import React from 'react';
import Masonry from '../../components/Global/Masonry';
import WWDcard from './WWDcard';

import '../../../assets/images/wwd.jpeg';
import '../../../assets/images/camera.jpeg';
import '../../../assets/images/sm.jpeg';

const brakePoints = [350, 576, 769, 992, 1200];

const WWD = [
  {
    title: 'Artistic Development',
    img: '../../assets/images/wwd.jpeg',
    content:
      'In publishing and graphic design, lorem ipsum is a filler text or greeking commonly used to demonstrate the textual elements of a graphic document or visual presentation. Replacing meaningful content with placeholder text allows designers to design the form of the content before the content itself has been produced.',
  },
  {
    title: 'Publicity',
    img: '../../assets/images/camera.jpeg',
    content:
      'In publishing and graphic design, lorem ipsum is a filler text or greeking commonly used to demonstrate the textual elements of a graphic document or visual presentation. Replacing meaningful content with placeholder text allows designers to design the form of the content before the content itself has been produced.',
  },
  {
    title: 'Social Media Management',
    img: '../../assets/images/sm.jpeg',
    content:
      'In publishing and graphic design, lorem ipsum is a filler text or greeking commonly used to demonstrate the textual elements of a graphic document or visual presentation. Replacing meaningful content with placeholder text allows th placeholder text allows designers to design the form of the content before the conte designers to design the form of the content before the content itself has been produced.',
  },
];

const WhatWeDo = () => {
  return (
    <div className='wwd-page'>
      <h1 className='title'>What we do</h1>
      <div style={ { width: '60%', margin: '0 auto' } }>
        <Masonry brakePoints={ brakePoints }>
          {WWD.map(({ title, img, content }, index) => (
            <WWDcard key={ index } title={ title } img={ img } content={ content } />
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default WhatWeDo;
