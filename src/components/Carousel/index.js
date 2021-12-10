import React, { useState, useEffect } from 'react';
import Arrow from './Arrow';
import Miniatures from './Miniatures';
import styles from './_carousel.module.scss';
import images from '../../assets/images/images.js';
import ImageScreen from './ImageScreen';

const Carousel = () => {
    const [selectedPicture, setSelectedPicture] = useState(0);

    const handleArrowClick = (value) => {
        let imageIndex = selectedPicture + value;
        if (imageIndex < 0) imageIndex = images.length - 1;
        if (imageIndex > images.length - 1) imageIndex = 0;
        setSelectedPicture(imageIndex);
    }

    const handleImageClick = (imageIndex) => {
        setSelectedPicture(imageIndex);
    }

    return (
        <div className={styles.wrapper}>
            <Arrow direction="left" handleClick={handleArrowClick} />
            <ImageScreen current={selectedPicture} />
            <Miniatures images={images} selected={selectedPicture} handleClick={handleImageClick} />
            <Arrow direction="right" handleClick={handleArrowClick} />
        </div>
    )
}


export default Carousel
