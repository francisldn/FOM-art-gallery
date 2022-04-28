import * as React from 'react';
import ArtGallery from '../../components/art-gallery/artgallery';
import DayGallery from '../../components/day-at-gallery/daygallery';
import Footer from '../../components/footer/footer';

export default function Home () {
  const footerStyles = {
    backgroundColor: "var(--black-color)",
    color: "white",
  };

  return (
    <div className="hero">
      <ArtGallery />
      <DayGallery />
      <Footer footerStyles ={footerStyles}/>
    </div>
  );
}
