import { CategoryType } from '@/entities/category';
import { forwardRef, ForwardedRef } from 'react';
import styles from './styles.module.css'

export interface CategoriesProps {
    categories: CategoryType[];
    setSelectedCategory(category: CategoryType | null): void;
    selectedCategory: CategoryType | null
}

/**
 * This component expects to be wrapped in a slider HOC, which will pas a slider ref to it.
 */

const Categories = forwardRef<HTMLDivElement, CategoriesProps>(({categories, setSelectedCategory, selectedCategory}: CategoriesProps, ref: ForwardedRef<HTMLDivElement>) => {
    return(
        <div ref={ref} className={styles.categories}>
            <button onClick={() => setSelectedCategory(null)} className={!selectedCategory ? styles.active : styles.item}>
                All
            </button>
            {categories.map(category => {
                return(
                    <button onClick={() => setSelectedCategory(category)} className={selectedCategory === category ? styles.active : styles.item} key={category}>
                        {category}
                    </button>
                )
            })}
        </div>
    )
})

Categories.displayName = 'Categories'

export default Categories;