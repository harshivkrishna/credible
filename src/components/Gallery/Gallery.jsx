import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <div className="gallery-container">
        <div className='top-gallery-container'>
        <div className='img-container'>
            <img src="/assets/gallery/gallery6.jpeg" alt="" />
        </div>
        <div className='top-middle-container'>
            <img src="/assets/gallery/gallery4.jpeg" alt="" />
            <img src="/assets/gallery/gallery3.jpeg" alt="" />
        </div>
        <div className='img-container'>
            <img src="/assets/gallery/gallery5.jpeg" alt="" />
        </div>
        </div>
        <div className='bottom-gallery-container'>
            <img src="/assets/gallery/gallery1.jpeg" alt="" />
            <img src="/assets/gallery/gallery2.jpeg" alt="" />
        </div>
    </div>
  );
};

export default Gallery;
