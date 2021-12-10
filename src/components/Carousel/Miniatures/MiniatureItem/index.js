import React, { useRef, useEffect } from 'react'
import styles from './_miniatureItem.module.scss';

const MiniatureItem = ({ image, selected, handleClick, index }) => {
    let miniatureClass = (selected) ? "wrapper__current" : "";
    let imageRef = useRef(null);

    useEffect(() => {
        if (selected) imageRef.current?.scrollIntoView({ inline: "center" });
    });

    return (
        <li onClick={() => { handleClick(index) }} className={`${styles.wrapper} ${styles[miniatureClass]}`} ref={imageRef}>
            <img className={styles.item} src={image} alt="Mountains" />
        </li>
    )
}

export default MiniatureItem
