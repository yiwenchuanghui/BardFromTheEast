import React, { Component } from 'react';
import Mailer from '../../components/Global/Mailer';
import ContactInfo from '../../components/Global/ContactInfo';

class ContactPage extends Component {
  render() {
    return (
      <div className='contact-page'>
        <h1>Contact</h1>

        <h3>Please contact us if you have any questions</h3>
        <span>We'd ♡ to help</span>
        <hr />
        <div className='columns'>
          <div className='column'>
            <Mailer />
          </div>
          <div className='column contact-info'>
            <ContactInfo />
          </div>
        </div>

      </div>
    );
  }
}

export default ContactPage;
