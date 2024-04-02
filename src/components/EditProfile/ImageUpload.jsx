import React, { useState, useRef } from 'react';
import './profile.css';
import pencilIcon from '/@assets/icons/lapiz.svg';

export const ImageUpload = ({ onImageChange }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
        onImageChange(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick} className="buton-pencil-icon">
        <img src={pencilIcon} alt="pencil-icon" className="pencil-icon" />
      </button>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default ImageUpload;
