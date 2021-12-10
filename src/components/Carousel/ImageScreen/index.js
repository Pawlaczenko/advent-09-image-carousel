import React, { useState, useEffect } from 'react'
import styles from './_imageScreen.module.scss';

const ImageScreen = ({ current }) => {
    const [loaded, setLoaded] = useState(false);
    const [image, setImage] = useState(current);

    useEffect(() => {
        setImage(`./images/${current + 1}.jpg`);
    });

    useEffect(() => {
        setLoaded(false);
    }, [image])

    const handleLoad = () => {
        setLoaded(true);
    }

    let wait = (loaded) ? "" : "wrapper__wait";
    return (
        <div className={`${styles.wrapper} ${styles[wait]}`}>
            <img onLoad={handleLoad} src={image} alt={current} className={styles.image} />
        </div>
    )
}

export default ImageScreen
