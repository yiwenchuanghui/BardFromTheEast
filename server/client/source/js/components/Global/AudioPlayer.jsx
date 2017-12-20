import React, { Component } from 'react';
import $ from 'jquery';

function secsToMins(time) {
  const int = Math.floor(time);
  const mins = Math.floor(int / 60);
  const secs = int % 60;
  const newTime = `${ mins }:${ `0${ secs }`.slice(-2) }`;

  return newTime;
}

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: false,
    };
  }

  componentDidMount() {
    this.audioFunc();
    console.log(this.audio);
  }

  audioFunc() {
    const player = $('.player');
    const audio = $(this.audio);
    const duration = $('.duration');
    const currentTime = $('.current-time');
    const progressBar = $('.progress span');
    let mouseDown = false;
    let rewind,
      showCurrentTime;
    function getCurrentTime() {
      const currentTimeFormatted = secsToMins(audio[0].currentTime);
      const currentTimePercentage = audio[0].currentTime / audio[0].duration * 100;
      currentTime.text(currentTimeFormatted);
      progressBar.css('width', `${ currentTimePercentage }%`);
      if (player.hasClass('playing')) {
        showCurrentTime = requestAnimationFrame(getCurrentTime);
      } else {
        cancelAnimationFrame(showCurrentTime);
      }
    }

    audio
      .on('loadedmetadata', () => {
        const durationFormatted = secsToMins(audio[0].duration);
        duration.text(durationFormatted);
      })
      .on('ended', () => {
        if ($('.repeat').hasClass('active')) {
          audio[0].currentTime = 0;
          audio[0].play();
        } else {
          audio[0].currentTime = 0;
        }
      });

    $('button')
      .on('click', function () {
        const self = $(this);

        if (self.hasClass('play-pause') && player.hasClass('paused')) {
          player.removeClass('paused').addClass('playing');
          audio[0].play();
          getCurrentTime();
        } else if (self.hasClass('play-pause') && player.hasClass('playing')) {
          player.removeClass('playing').addClass('paused');
          audio[0].pause();
        }

        if (self.hasClass('shuffle') || self.hasClass('repeat')) {
          self.toggleClass('active');
        }
      })
      .on('mousedown', function () {
        const self = $(this);

        if (self.hasClass('ff')) {
          player.addClass('ffing');
          audio[0].playbackRate = 2;
        }

        if (self.hasClass('rw')) {
          player.addClass('rwing');
          rewind = setInterval(() => {
            audio[0].currentTime -= 0.3;
          }, 100);
        }
      })
      .on('mouseup', function () {
        const self = $(this);

        if (self.hasClass('ff')) {
          player.removeClass('ffing');
          audio[0].playbackRate = 1;
        }

        if (self.hasClass('rw')) {
          player.removeClass('rwing');
          clearInterval(rewind);
        }
      });

    player.on('mousedown mouseup', () => {
      mouseDown = !mouseDown;
    });

    progressBar.parent().on('click mousemove', function (e) {
      let self = $(this),
        totalWidth = self.width(),
        offsetX = e.offsetX,
        offsetPercentage = offsetX / totalWidth;

      if (mouseDown || e.type === 'click') {
        audio[0].currentTime = audio[0].duration * offsetPercentage;
        if (player.hasClass('paused')) {
          progressBar.css('width', `${ offsetPercentage * 100 }%`);
        }
      }
    });
  }

  render() {

    return (
      <div className='player paused'>
        <div className='album'>
          <div className='cover'>
            <div>
              <img
                src='../../../assets/images/Bardlogo.jpg'
                alt='3rdburglar by Wordburglar'
              />
            </div>
          </div>
        </div>

        <div className='info'>
          <div className='time'>
            <span className='current-time'>0:00</span>
            <span className='progress'>
              <span />
            </span>
            <span className='duration'>0:00</span>
          </div>

          <h1>Little Angle</h1>
          <h2>东方诗人</h2>
        </div>

        <div className='actions'>
          <button className='shuffle'>
            <div className='arrow' />
            <div className='arrow' />
          </button>
          <button className='button rw'>
            <div className='arrow' />
            <div className='arrow' />
          </button>
          <button className='button play-pause'>
            <div className='arrow' />
          </button>
          <button className='button ff'>
            <div className='arrow' />
            <div className='arrow' />
          </button>
          <button className='repeat' />
        </div>

        <audio ref={ audio => (this.audio = audio) } src='../../../assets/audio/Little_Angle.mp3' />
      </div>
    );
  }
}

export default AudioPlayer;
