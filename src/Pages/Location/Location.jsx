import * as React from 'react';
import Footer from '../../components/footer/footer';
import Map from '../../components/map/map';
import LocationText from '../../components/location-text/location-text';
import './location.styles.css'


export default function Location () {
  const footerStyles = {
      backgroundColor: "var(--orange-color)",
      color:"var(--black-color)"
  };
  return (
    <div>
      <Map />
      <LocationText />
      <footer>
      <Footer footerStyles={footerStyles}/>
      </footer>
      
    </div>  
  );
}
