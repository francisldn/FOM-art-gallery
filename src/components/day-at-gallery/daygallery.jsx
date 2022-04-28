import * as React from 'react';
import imgGrid1 from '../../assets/desktop/image-grid-1.jpg';
import imgGrid2 from '../../assets/desktop/image-grid-2.jpg';
import imgGrid3 from '../../assets/desktop/image-grid-3.jpg';
import './daygallery.styles.css'


export default function DayGallery () {
  return (
    <div className="day-gallery-container">
      <div className="day-heading">
          <h1>YOUR DAY AT THE GALLERY</h1>
      </div>
      <div className="day-text">
        <p>Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process.</p>
        </div>
      <div className="gallery-1-div">
          <img className="gallery-1" src={imgGrid1} alt="gallery-1" />
      </div>
      <div className="gallery-2-div">
        <img className="gallery-2" src={imgGrid2} alt="gallery-2"/>
      </div>
      <div className="gallery-3-div">
        <img className="gallery-3" src={imgGrid3} alt="gallery-3"/>
      </div>
      <div className="day-text-bottom">
        <h1>{"COME & BE INSPIRED"}</h1>
        <p>We're excited to welcome you to our gallery and see how our collections influence you.</p>
      </div>
    </div>
  );
}
