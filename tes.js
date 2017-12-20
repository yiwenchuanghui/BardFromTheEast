var player = $('.player'),
    audio = player.find('audio'),
    duration = $('.duration'),
    currentTime = $('.current-time'),
    progressBar = $('.progress span'),
    mouseDown = false,
    rewind, showCurrentTime;

function secsToMins(time) {
  var int = Math.floor(time),
      mins = Math.floor(int / 60),
      secs = int % 60,
      newTime = mins + ':' + ('0' + secs).slice(-2);

  return newTime;
}

function getCurrentTime() {
  var currentTimeFormatted = secsToMins(audio[0].currentTime),
      currentTimePercentage = audio[0].currentTime / audio[0].duration * 100;

  currentTime.text(currentTimeFormatted);
  progressBar.css('width', currentTimePercentage + '%');

  if (player.hasClass('playing')) {
    showCurrentTime = requestAnimationFrame(getCurrentTime);
  } else {
    cancelAnimationFrame(showCurrentTime);
  }
}

audio.on('loadedmetadata', function() {
  var durationFormatted = secsToMins(audio[0].duration);
  duration.text(durationFormatted);
}).on('ended', function() {
  if ($('.repeat').hasClass('active')) {
    audio[0].currentTime = 0;
    audio[0].play();
  } else {
    player.removeClass('playing').addClass('paused');
    audio[0].currentTime = 0;
  }
});

$('button').on('click', function() {
  var self = $(this);

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
}).on('mousedown', function() {
  var self = $(this);

  if (self.hasClass('ff')) {
    player.addClass('ffing');
    audio[0].playbackRate = 2;
  }

  if (self.hasClass('rw')) {
    player.addClass('rwing');
    rewind = setInterval(function() { audio[0].currentTime -= .3; }, 100);
  }
}).on('mouseup', function() {
  var self = $(this);

  if (self.hasClass('ff')) {
    player.removeClass('ffing');
    audio[0].playbackRate = 1;
  }

  if (self.hasClass('rw')) {
    player.removeClass('rwing');
    clearInterval(rewind);
  }
});

player.on('mousedown mouseup', function() {
  mouseDown = !mouseDown;
});

progressBar.parent().on('click mousemove', function(e) {
  var self = $(this),
      totalWidth = self.width(),
      offsetX = e.offsetX,
      offsetPercentage = offsetX / totalWidth;

  if (mouseDown || e.type === 'click') {
    audio[0].currentTime = audio[0].duration * offsetPercentage;
    if (player.hasClass('paused')) {
      progressBar.css('width', offsetPercentage * 100 + '%');
    }
  }
});



timeCount() {
  let duration;
  let minutes;
  let seconds;
  let timeLeft;
  this.audio.addEventListener('loadeddata', () => {
    duration = this.audio.duration;
    minutes = Math.floor(duration / 60);
    seconds = Math.floor(duration - minutes * 60);
    timeLeft = `${ minutes }:${ seconds }`;
  });
  this.timer = setInterval(() => {
    duration -= 1;
    minutes = Math.floor(duration / 60);
    seconds = Math.floor(duration - minutes * 60);
    if (seconds < 10) {
      seconds = `0${ seconds }`;
    }
    timeLeft = `${ minutes }:${ seconds }`;
    this.updateElement('.time', timeLeft);

    if (timeLeft === '0:00' && this.index !== this.songs.length - 1) {
      this.next();
    } else if (timeLeft === '0:00' && this.index === this.songs.length - 1) {
      clearInterval(this.timer);
    }
  }, 1000);
  console.log('duration', timeLeft);
}





//asdfkasodkfaskdfosakdfmlksadmflaskdmflkmadsf

componentDidMount() {
  const $player = $('.audio-player');
  console.log($player);
  $player.on('play', e => {
    e.preventDefault();
    this.playLocation();
  });

  $player.on('pause', e => {
    e.preventDefault();
    this.pause();
  });

  $player.on('ended', e => {
    e.preventDefault();
    this.ended();
  });

  $(document).on('keydown', e => {
    // Move currentTime forward and backward via arrow keys and play/pause via spacebar.
    if (e.keyCode === 39) {
      this.state.player.currentTime += 1;
    } else if (e.keyCode === 37) {
      this.state.player.currentTime -= 1;
    } else if (e.keyCode === 32 && this.state.player.paused === true) {
      e.preventDefault();
      this.state.player.play();
    } else if (e.keyCode === 32 && this.state.player.paused === false) {
      e.preventDefault();
      this.state.player.pause();
    }
  });

  $player.on('wheel', e => {
    e.preventDefault();
    e.stopPropagation();
    if (e.originalEvent.wheelDelta > 0) {
      this.state.player.currentTime += 1;
    } else {
      this.state.player.currentTime -= 1;
    }
  });
}


audioFunc() {

}


componentWillUnmount() {
  const $player = $(`#${ this.props.id }`);
  $player.off('play');
  $player.off('pause');
  $(document).off('keydown');
  $player.off('wheel');
}

getPlaybackTime = time => {
  const hours = Math.floor(time / 3600);
  let minutes = Math.floor(time / 60);
  if (minutes > 59) {
    minutes = Math.floor(time / 60) - 60;
  }

  let seconds = Math.round(time - minutes * 60);
  if (seconds > 3599) {
    seconds = Math.round(time - minutes * 60) - 3600;
  }

  return time;
};

playLocation() {
  this.setState({ player: $('.audio-player')[0] }, function () {
    const playbackTime = this.getPlaybackTime(this.state.player.currentTime);

    if (playbackTime !== null) {
      this.state.player.currentTime = playbackTime;
    }
    this.state.player.play();
  });
}

pause() {
  const playbackTime = this.getPlaybackTime(this.state.player.currentTime);
}

ended() {
  // Set playback_time to 0.
}
