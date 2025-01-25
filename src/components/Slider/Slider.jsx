import React, { useRef } from 'react'
import styles from './styles.module.css'

const Slider = ({children, step = 150}) => {

    const sliderRef = useRef(null)

    const scrollLeft = () => {
        sliderRef.current.scrollBy({
            left: -step,
            top: 0,
            behavior: 'smooth'
        })
    }

    const scrollRight = () => {
        sliderRef.current.scrollBy({
            left: step,
            top: 0,
            behavior: 'smooth'
        })
    }

    return(
            <div className={styles.slider}>
                <button onClick={scrollLeft} className={styles.arrow}>{`<`}</button>
                {React.cloneElement(children, {ref: sliderRef})}
                <button onClick={scrollRight} className={styles.arrow}>{`>`}</button>
            </div>
    )
}

export default Slider