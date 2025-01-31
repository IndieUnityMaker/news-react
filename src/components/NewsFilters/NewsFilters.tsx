import { getCategories } from '../../api/apiNews'
import { useTheme } from '../../context/themeContext'
import { useFetch } from '../../helpers/hooks/useFetch'
import { CategoriesApiResponse, IFilters } from '../../helpers/interfaces'
import Categories from '../Categories/Categories'
import Search from '../Search/Search'
import Slider from '../Slider/Slider'
import styles from './styles.module.css'

interface Props {
    filters: IFilters;
    changeFilter: (key: string, value: string | null | number) => void;
}

const NewsFilters = ({filters, changeFilter}: Props) => {

    const {data: dataCategories} = useFetch<CategoriesApiResponse, null>(getCategories)
    const {isDark} = useTheme()

    return(
        <div className={styles.filters}>
            {dataCategories ? (<Slider isDark={isDark}>
                <Categories categories={dataCategories.categories} 
                selectedCategory={filters.category} 
                setSelectedCategory={(category) => changeFilter('category', category)} />
            </Slider>)  : null}

            <Search keywords={filters.keywords} setKeyWords={(keywords) => changeFilter('keywords', keywords)} />
        </div>
    )
}

export default NewsFilters