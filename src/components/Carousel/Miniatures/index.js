import React from 'react'
import styles from './_miniatures.module.scss';
import MiniatureItem from './MiniatureItem';

const Miniatures = ({ images, selected, handleClick }) => {
    return (
        <div className={styles.wrapper}>
            <ul className={styles.list}>
                {
                    images.map((el, index) => {
                        return <MiniatureItem index={index} handleClick={handleClick} image={el} key={index} selected={index === selected} />
                    })
                }
            </ul>
        </div>
    )
}

export default Miniatures
