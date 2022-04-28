import * as React from 'react';
import './artgallery.styles.css';
import artgallery from '../../assets/desktop/image-hero.jpg';
import arrowRight from '../../assets/icon-arrow-right.svg';
import {useNavigate} from 'react-router-dom';


export default function ArtGallery () {

  const locationRef = React.useRef()
  const locationImageRef = React.useRef()
  const navigate = useNavigate();

  const activeLocation = () => {
    if(locationRef.current !== null && locationImageRef.current !== null) {
      locationRef.current.style.cssText += "background-color: var(--orange-color)"
      locationImageRef.current.style.cssText += "background-color: black"
    }
  }

  const inactiveLocation = () => {
    if(locationRef.current !== null && locationImageRef.current !== null) {
      locationRef.current.style.cssText += "background-color: var(--black-color)"
      locationImageRef.current.style.cssText += "background-color: var(--orange-color)"
    }
  }

return (
      <div className="art-gallery-container">
        <div className="art-gallery-left">
        </div>
        <div className="heading">MODERN <br/>ART GALLERY</div>
        <div className="art-gallery-img-div">
          <img className="art-gallery-img" src={artgallery} alt="art-gallery"/> 
          </div>
        <p className="art-gallery-text">The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these pieces inspire you? Visit us and find out.</p>
        
        <div className="location" onMouseOver={activeLocation} onMouseOut={inactiveLocation} onClick={()=> navigate('/location')}>
          <div className="art-gallery-location" ref={locationRef}>OUR LOCATION</div>
          <img className="arrow" ref={locationImageRef} src={arrowRight} alt="arrow" />
        </div>
      </div>
      
  );
}
