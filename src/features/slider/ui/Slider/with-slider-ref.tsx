import {
    useRef,
    ForwardRefExoticComponent,
    RefAttributes,
} from 'react';
import styles from './styles.module.css';
import {CategoriesProps} from "@/features/category/ui/Categories/Categories";

interface WithSliderRefProps extends CategoriesProps {
    step?: number;
    isDark: boolean;
}

export default function WithSliderRef(
    Component: ForwardRefExoticComponent<CategoriesProps & RefAttributes<HTMLDivElement>>
) {
    const WithSliderRef = (props: WithSliderRefProps) => {
        const { step = 150, isDark, ...restProps } = props;
        const sliderRef = useRef<HTMLDivElement | null>(null);

        const scrollLeft = () => {
            if (!sliderRef.current) return;
            sliderRef.current.scrollBy({ left: -step, top: 0, behavior: 'smooth' });
        };

        const scrollRight = () => {
            if (!sliderRef.current) return;
            sliderRef.current.scrollBy({ left: step, top: 0, behavior: 'smooth' });
        };

        return (
            <div className={`${styles.slider} ${isDark ? styles.dark : styles.light}`}>
                <button onClick={scrollLeft} className={styles.arrow}>
                    {"<"}
                </button>
                <Component ref={sliderRef} {...restProps} />
                <button onClick={scrollRight} className={styles.arrow}>
                    {">"}
                </button>
            </div>
        );
    };

    return WithSliderRef;
};