import React from 'react';

const ArtistCard = ({ name, img, about }) => {
  return (
    <div className='artist-card'>
      <div className='artist-card-img'>
        <img src={ img } alt='artist' />
      </div>
      <div className='artist-card-content'>
        <h2>{name}</h2>
        <p>{about}</p>
      </div>
    </div>
  );
};

export default ArtistCard;
