import { useTheme } from '@/app/providers/ThemeProvider';
import { IFilters } from '@/shared/interfaces';
import { useDispatch } from 'react-redux';
import styles from './styles.module.css'
import { useGetCategoriesQuery } from '@/entities/category/api/categoriesApi';
import { setFilters } from '@/entities/news/model/news-slice';
import { Categories } from '@/features/category';
import { Search } from '@/features/search';
import withSliderRef from "@/features/slider/ui/Slider/with-slider-ref";

const CategoriesWithSlider = withSliderRef(Categories);

interface NewsFiltersProps {
    filters: IFilters;
}

const NewsFilters = ({filters}: NewsFiltersProps) => {
    const { data } = useGetCategoriesQuery(null)
    const dispatch = useDispatch()
    const { isDark } = useTheme()

    return(
        <div className={styles.filters}>
            {data ? <CategoriesWithSlider
                isDark={isDark}
                categories={data.categories}
                selectedCategory={filters.category}
                setSelectedCategory={(category) => dispatch(setFilters({key: 'category', value: category}))}
            /> : null}

            <Search keywords={filters.keywords} setKeyWords={(keywords) => dispatch(setFilters({key: 'keywords', value: keywords}))} />
        </div>
    )
}

export default NewsFilters