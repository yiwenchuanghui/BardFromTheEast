import React from 'react';

const AudioPlayer = props => {
  const Background = '/assets/images/ben_chung.jpg';
  return (
    <div>
      <article className='screen'>
        <input type='checkbox' value='None' id='magicButton' name='check' />
        <label className='main' htmlFor='magicButton' />

        <div
          className='coverImage'
          style={ {
            background: `url(${ Background }) no-repeat`,
            backgroundSize: 'cover',
          } }
        />
        <div className='bodyPlayer' />

        <table className='list'>
          <tr className='song'>
            <td className='nr'>
              <h5>1</h5>
            </td>
            <td className='title'>
              <h6>Heavydirtysoul</h6>
            </td>
            <td className='length'>
              <h5>3:54</h5>
            </td>
            <td>
              <input type='checkbox' id='heart' />
              <label className='zmr' htmlFor='heart' />
            </td>
          </tr>

          <tr className='song'>
            <td className='nr'>
              <h5>2</h5>
            </td>
            <td className='title'>
              <h6 style={ { color: '#ff564c' } }>StressedOut</h6>
            </td>
            <td className='length'>
              <h5>3:22</h5>
            </td>
            <td>
              <input type='checkbox' id='heart1' checked />
              <label className='zmr' htmlFor='heart1' />
            </td>
          </tr>
        </table>

        <div className='shadow' />

        <div className='bar' />

        <div className='info'>
          <h4>STRESSED OUT</h4>
          <h3>twenty one pilots - Blurryface</h3>
        </div>
        <audio preload='auto' id='audio' controls>
          <source src='http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3' />
          <source src='http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.ogg' />
        </audio>
        <table className='player'>
          <td>
            <input type='checkbox' id='backward' />
            <label className='backward' htmlFor='backward' />
          </td>
          <td>
            <input type='checkbox' id='play' title='Play' onClick='togglePlayPause()' />
            <label className='play' htmlFor='play' />
          </td>
          <td>
            <input type='checkbox' id='forward' />
            <label className='forward' htmlFor='forward' />
          </td>
        </table>

        <table className='footer'>
          <td>
            <input type='checkbox' id='love' checked />
            <label className='love' htmlFor='love' />
          </td>
          <td>
            <input type='checkbox' id='shuffle' />
            <label className='shuffle' htmlFor='shuffle' />
          </td>
          <td>
            <input type='checkbox' id='repeat' checked />
            <label className='repeat' htmlFor='repeat' />
          </td>
          <td>
            <input type='checkbox' id='options' />
            <label className='options' htmlFor='options' />
          </td>
        </table>

        <div className='current'>
          <h2>STRESSED OUT</h2>
        </div>
      </article>
    </div>
  );
};

export default AudioPlayer;
