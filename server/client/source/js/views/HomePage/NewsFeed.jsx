import React from 'react';

const NewsFeed = ({ data }) => {
  return (
    <div className='news-feed'>
      <h1 className='lat-news'>Latest News</h1>
      {data.map(({ title, date, text }, index) => (
        <div key={ index } className='news'>
          <div>
            <h2 style={ { color: '#333333' } } className='date'>
              {date}
            </h2>
            <h2 style={ { color: '#411D0C' } } className='title'>
              {title}
            </h2>
          </div>
          <p className='text'>{text}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;
