import React from 'react';
import ReactPlayer from "react-player";

const NewsFeed = ({ data }) => {
  return (
    <div className='news-feed'>
      <h1 className='lat-news'>Latest News</h1>
      {data.map(({ title, date, text }, index) => (
        <div key={ index } className='news'>
          <div className="title-wrapper">
            <h3 style={ { color: '#411D0C' } } className='title'>
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
