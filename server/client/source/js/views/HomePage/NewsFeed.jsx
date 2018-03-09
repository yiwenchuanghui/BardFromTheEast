import React from 'react';
import ReactPlayer from "react-player";

const NewsFeed = ({ data }) => {
  return (
    <div className='news-feed'>
      <h1 className='home-title'>Latest News</h1>
      {data.map(({ title, date, text }, index) => (
        <div key={ index } className='news'>
          <div className="title-wrapper">
            <h3 className='news-title'>
              {title}
            </h3>
            <span style={ { color: '#fff' } } className='date'>
              {date}
            </span>
          </div>
          <p className='text'>{text}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;
