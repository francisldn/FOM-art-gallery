import * as React from 'react';
import './footer.styles.css'
import facebookIcon from '../../assets/icon-facebook.svg';
import instagramIcon from '../../assets/icon-instagram.svg';
import twitterIcon from '../../assets/icon-twitter.svg';

export default function Footer (props) {
  
  return (
    <div className="footer-container" style={props.footerStyles}>
      <div className="footer-text-container">
        <div className="footer-title">
          <h1>MODERN ART GALLERY</h1>
        </div>
        <div className="footer-para">
          <p>The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.</p>
        </div>
        <div className="social-media-icons">
          <img className="facebook-icon" src={facebookIcon} alt="facebook-icon" />
          <img className="instagram-icon" src={instagramIcon} alt="instagram-icon" />
          <img className="twitter-icon" src={twitterIcon} alt="twitter-icon" />
        </div>
      </div>
    </div>
  );
}
