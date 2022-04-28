import {useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import mapImg from '../../assets/desktop/image-map.png';
import arrowLeft from '../../assets/icon-arrow-left.svg';
import "./map.styles.css";

export default function Map () {
  const locationRef = useRef()
  const locationImgRef = useRef()
  const navigate = useNavigate();

  const activeLocation = () => {
    if(locationRef.current !== null && locationImgRef.current !== null) {
      locationRef.current.style.cssText += "background-color: var(--orange-color)"
      locationImgRef.current.style.cssText += "background-color: black"
    }
  }

  const inactiveLocation = () => {
    if(locationRef.current !== null && locationImgRef.current !== null) {
      locationRef.current.style.cssText += "background-color: var(--black-color)"
      locationImgRef.current.style.cssText += "background-color: var(--orange-color)"
    }
  }

  return (
    <div className="map-container">
      <img className="map-img" src={mapImg} alt="location-map" />
      <div className="location-back" onMouseOver={activeLocation} onMouseOut={inactiveLocation} onClick={()=> navigate('/')}>
        <img className="arrow" ref={locationImgRef} src={arrowLeft} alt="arrow" />
        <div className="art-gallery-location-back" ref={locationRef}>BACK TO HOME</div>
      </div>
    </div>
  );
}
