import React, { Component } from 'react';
import AudioPlayer from '../../components/Global/AudioPlayer';
import Player from './Player';

class MediaPage extends Component {
  render() {
    return (
      <div className='media-page'>
        <Player />
      </div>
    );
  }
}

export default MediaPage;
