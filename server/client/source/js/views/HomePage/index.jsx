import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import AudioPlayer from '../../components/Global/AudioPlayer';
import NewsFeed from './NewsFeed';

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className='video-container'>
          <ReactPlayer className='video' url='assets/video/video.mp4' controls />
        </div>
        <div className='columns'>
          <div className='column is-three-quarters'>
            <NewsFeed />
          </div>
          <div className='column' style={{position: 'relative'}}>
            <h1>Music</h1>
            <AudioPlayer />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
