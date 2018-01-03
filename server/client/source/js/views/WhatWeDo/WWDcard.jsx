import React from 'react';

const WWDcard = ({title, img, content}) => {
  return (
    <div className='wwd-card'>
      <div className='wwd-card-img'>
        <img src={ img } alt='wwd' />
        <h1>{title}</h1>
      </div>
      <div className='wwd-card-content'>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default WWDcard;
