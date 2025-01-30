import React, { useRef } from 'react'
import styles from './styles.module.css'

interface Props {
    children: React.ReactElement;
    step?: undefined | number
}

const Slider = ({children, step = 150}: Props) => {

    const sliderRef = useRef<HTMLElement | null>(null)

    const scrollLeft = () => {
        if(!sliderRef.current) return;
        sliderRef.current.scrollBy({
            left: -step,
            top: 0,
            behavior: 'smooth'
        })
    }

    const scrollRight = () => {
        if(!sliderRef.current) return;
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