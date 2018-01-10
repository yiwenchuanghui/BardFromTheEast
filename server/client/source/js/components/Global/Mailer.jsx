import React, { Component } from 'react';

class Mailer extends Component {
  render() {
    return (
      <div className="mailer">
        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Name" />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Email" />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <textarea className="textarea" placeholder="Textarea" />
          </div>
        </div>
        <button className="button is-primary">  Send  </button>
      </div>
    );
  }
}

export default Mailer;
