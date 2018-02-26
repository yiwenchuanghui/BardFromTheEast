import React from 'react';
import ReactPlayer from "react-player";

const NewsFeed = ({ data }) => {
  return (
    <div className='news-feed'>
      <h1 className='lat-news'>Video</h1>
      <div className='video-content'>
        <ReactPlayer
          url="https://s3-ap-southeast-1.amazonaws.com/caci2017/video.mp4"
          controls
          width='100%'
          height='100%'
          style= {{
            margin: '0 auto',
          }}
        />
      </div>
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
