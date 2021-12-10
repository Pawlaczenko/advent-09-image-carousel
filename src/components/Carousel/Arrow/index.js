import React from 'react'
import styles from './_arrow.module.scss';
import chevron from '../../../assets/images/chevron.svg';

const Arrow = ({ direction, handleClick }) => {
    let value = (direction === "right") ? 1 : -1;
    return (
        <button onClick={() => handleClick(value)} className={`${styles.button} ${styles[direction]}`}>
            <img src={chevron} className={styles.arrow} />
        </button>
    )
}

export default Arrow
