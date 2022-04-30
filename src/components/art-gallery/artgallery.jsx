import * as React from 'react';
import './artgallery.styles.css';
import artgallery_desktop from '../../assets/desktop/image-hero.jpg';
import artgallery_mobile from '../../assets/mobile/image-hero.jpg';
import artgallery_tablet from '../../assets/tablet/image-hero.jpg';
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
          <picture>
            <source media="(min-width: 800px)" srcset={artgallery_desktop}/>
            <source media="(max-width: 799px)" srcset={artgallery_tablet}/>
            <source media="(max-width: 400px)" srcset={artgallery_mobile}/>
            <img className="art-gallery-img" src={artgallery_desktop} alt="art-gallery"/> 
          </picture>
          
          </div>
        <div className="art-gallery-text">The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these pieces inspire you? Visit us and find out.</div>
        
        <div className="location" onMouseOver={activeLocation} onMouseOut={inactiveLocation} onClick={()=> navigate('/location')}>
          <div className="art-gallery-location" ref={locationRef}>OUR LOCATION</div>
          <img className="arrow" ref={locationImageRef} src={arrowRight} alt="arrow" />
        </div>
      </div>
      
  );
}
