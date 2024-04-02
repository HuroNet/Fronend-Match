import { useState } from 'react';
import './matchCard.css';
import { dataImages } from './dataPhotos.json';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGratipay } from '@fortawesome/free-brands-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

// cambiar los puntos para que funcionen como la imagenes

// const loveIconSvg = 'src/assets/icons/chat.svg'

export const Card = () => {
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    setSlide(slide === dataImages.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? dataImages.length - 1 : slide - 1);
  };

  return (
    <div className="card">
      <div className="container-top">
        <BsArrowLeft onClick={prevSlide} className="arrow left-arrow" />

        <div className="container-images">
          <img src={dataImages[slide].imgUrl} className="slide-image" />
        </div>
        <BsArrowRight onClick={nextSlide} className="arrow right-arrow" />
      </div>
      <div className="interaction-button">
        <FontAwesomeIcon icon={faCircleXmark} className="x-button" />

        <p className="photo-name">{dataImages[slide].namefoto}</p>
        <FontAwesomeIcon icon={faGratipay} className="love-button" />
      </div>

      <div className="div-photo-description">
        <p className="photo-description">{dataImages[slide].description}</p>
      </div>

      <div className="indicators">
        {dataImages.map((_, idx) => {
          return (
            <button
              key={idx}
              onClick={() => setSlide(idx)}
              className={slide === idx ? 'indicator' : 'indicator indicator-inactive'}></button>
          );
        })}
      </div>
    </div>
  );
};
export default Card;
