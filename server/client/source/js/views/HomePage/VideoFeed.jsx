import React from 'react';
import ReactPlayer from "react-player";

const VideoFeed = ({ data }) => {
  return (
    <div className='video-feed'>
      <h1>Video</h1>
      <div className="columns">
        <div className="column">
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
        </div>
        <div className="column">
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
        </div>
      </div>
    </div>
  );
};

export default VideoFeed;
