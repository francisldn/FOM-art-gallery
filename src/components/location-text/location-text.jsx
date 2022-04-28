import * as React from 'react';
import './location-text.styles.css';

export default function LocationText () {
  return (
    <div className="location-container">
      <div className="location-title">
        <h1>OUR LOCATION</h1>
      </div>
      <div className="address-title">
        <h2>99 KING STREET</h2>
        <div className="address">
          <p>
            Newport <br />
            RI 02840 <br />
            United States of America <br />
          </p>
        </div>
        <div className="address-text">
          <p>
            Our newly opened gallery is location near the Edward King House on 99 King Street, the Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm.
          </p>
        </div>
      </div>
  </div>
    
  );
}
