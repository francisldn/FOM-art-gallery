import * as React from 'react';
import imgGrid1_desktop from '../../assets/desktop/image-grid-1.jpg';
import imgGrid2_desktop from '../../assets/desktop/image-grid-2.jpg';
import imgGrid3_desktop from '../../assets/desktop/image-grid-3.jpg';
import imgGrid1_tablet from '../../assets/tablet/image-grid-1.jpg';
import imgGrid2_tablet from '../../assets/tablet/image-grid-2.jpg';
import imgGrid3_tablet from '../../assets/tablet/image-grid-3.jpg';
import imgGrid1_mobile from '../../assets/mobile/image-grid-1.jpg';
import imgGrid2_mobile from '../../assets/mobile/image-grid-2.jpg';
import imgGrid3_mobile from '../../assets/mobile/image-grid-3.jpg';
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
        <picture>
          <source media="(min-width: 800px)"srcset={imgGrid1_desktop}/>
          <source media="(max-width: 799px)"srcset={imgGrid1_tablet}/>
          <source media="(max-width: 400px)"srcset={imgGrid1_mobile}/>
          <img className="gallery-1" src={imgGrid1_desktop} alt="gallery-1" />
        </picture>
          
      </div>
      <div className="gallery-2-div">
        <picture>
          <source media="(min-width: 800px)"srcset={imgGrid2_desktop}/>
          <source media="(max-width: 799px)"srcset={imgGrid2_tablet}/>
          <source media="(max-width: 400px)"srcset={imgGrid2_mobile}/>
          <img className="gallery-2" src={imgGrid2_desktop} alt="gallery-2"/>
        </picture>
        
      </div>
      <div className="gallery-3-div">
        <picture>
          <source media="(min-width: 800px)"srcset={imgGrid3_desktop}/>
          <source media="(max-width: 799px)"srcset={imgGrid3_tablet}/>
          <source media="(max-width: 400px)"srcset={imgGrid3_mobile}/>
          <img className="gallery-3" src={imgGrid3_desktop} alt="gallery-3"/>
        </picture>
       
      </div>
      <div className="day-text-bottom">
        <h1>{"COME & BE INSPIRED"}</h1>
        <p>We're excited to welcome you to our gallery and see how our collections influence you.</p>
      </div>
    </div>
  );
}
