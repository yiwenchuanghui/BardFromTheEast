import React from 'react';


export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = { play: false };
  }

  componentWillReceiveProps() {
    this.setState({ play: true });
  }

  componentDidMount() {
    this.audio.addEventListener('timeupdate', () => {
      const ratio = this.audio.currentTime / this.audio.duration;
      const position = this.timeline.offsetWidth * ratio;
      this.positionHandle(position);
    });
  }

  positionHandle = position => {
    const timelineWidth = this.timeline.offsetWidth - this.handle.offsetWidth;
    const handleLeft = position - this.timeline.offsetLeft;
    if (handleLeft >= 0 && handleLeft <= timelineWidth) {
      this.handle.style.marginLeft = `${ handleLeft }px`;
    }
    if (handleLeft < 0) {
      this.handle.style.marginLeft = '0px';
    }
    if (handleLeft > timelineWidth) {
      this.handle.style.marginLeft = `${ timelineWidth }px`;
    }
  };

  mouseMove = e => {
    this.positionHandle(e.pageX);
    this.audio.currentTime = e.pageX / this.timeline.offsetWidth * this.audio.duration;
  };

  mouseUp = e => {
    window.removeEventListener('mousemove', this.mouseMove);
    window.removeEventListener('mouseup', this.mouseUp);
  };

  mouseDown = e => {
    window.addEventListener('mousemove', this.mouseMove);
    window.addEventListener('mouseup', this.mouseUp);
  };

  play = () => {
    if (this.state.play) {
      this.setState({ play: false });
      this.audio.pause();
    } else {
      this.setState({ play: true });
      this.audio.play();
    }
  };

  render() {
    return (
      <div>
        <audio
          src={ this.props.audio }
          ref={ audio => {
            this.audio = audio;
          } }
          autoPlay
        />
        <div
          onClick={ this.play }
          className={ !this.state.play ? 'icon ion-play' : 'icon ion-pause' }
        />
        <div
          id='timeline'
          onClick={ this.mouseMove }
          ref={ timeline => {
            this.timeline = timeline;
          } }
        >
          <div
            id='handle'
            onMouseDown={ this.mouseDown }
            ref={ handle => {
              this.handle = handle;
            } }
          />
        </div>
      </div>
    );
  }
}
