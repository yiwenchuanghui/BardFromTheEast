import React, { Component } from 'react';
import Mailer from '../../components/Global/Mailer';
import ContactInfo from '../../components/Global/ContactInfo';

class ContactPage extends Component {
  render() {
    return (
      <div className='contact-page'>
      <div className="top-wrapper">
        <h1 className='title'>Contact</h1>
        <h3>Please contact us if you have any questions</h3>
        <span>We'd ♡ to help</span>
      </div>
      <Mailer />
      <div className='contact-info'>
          <ContactInfo />
      </div>
      </div>
    );
  }
}

export default ContactPage;
