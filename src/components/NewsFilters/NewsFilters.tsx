import { useDispatch } from 'react-redux'
import { useTheme } from '../../context/ThemeContext'
import { IFilters } from '../../helpers/interfaces'
import { useGetCategoriesQuery } from '../../store/services/newsApi'
import Categories from '../Categories/Categories'
import Search from '../Search/Search'
import Slider from '../Slider/Slider'
import styles from './styles.module.css'
import { setFilters } from '../../store/slices/news-slice'

interface Props {
    filters: IFilters;
}

const NewsFilters = ({filters}: Props) => {
    const {data} = useGetCategoriesQuery(null)
    const dispatch = useDispatch()
    const {isDark} = useTheme()

    return(
        <div className={styles.filters}>
            {data ? (<Slider isDark={isDark}>
                <Categories categories={data.categories} 
                selectedCategory={filters.category} 
                setSelectedCategory={(category) => dispatch(setFilters({key: 'category', value: category}))
                } />
            </Slider>)  : null}

            <Search keywords={filters.keywords} setKeyWords={(keywords) => dispatch(setFilters({key: 'keywords', value: keywords}))} />
        </div>
    )
}

export default NewsFilters