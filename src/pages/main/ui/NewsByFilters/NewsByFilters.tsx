import { useAppDispatch, useAppSelector } from '@/app/appStore'
import PaginationWrapper from '@/features/pagination/ui/Pagination/Pagination'
import { TOTAL_PAGES } from '@/shared/constants/constants'
import { useDebounce } from '@/shared/hooks/useDebounce'
import { useGetNewsQuery } from '@/entities/news/api/newsApi'
import styles from './styles.module.css'
import { setFilters } from '@/entities/news/model/news-slice'
import { NewsList } from '@/widgets/news/ui'
import NewsFilters from '../NewsFilters/NewsFilters'

const NewsByFilters = () => {

    const dispatch = useAppDispatch()
    const filters = useAppSelector(state => state.news.filters)
    const news = useAppSelector(state => state.news.news)
    const debouncedKeywords = useDebounce(filters.keywords,1500)

    const { isLoading } = useGetNewsQuery({
        ...filters,
        keywords: debouncedKeywords
    })

    const handleNextPage = () => {
        if(filters.page_number < TOTAL_PAGES){
            dispatch(setFilters({key: 'page_number', value: filters.page_number + 1}))
        }
    }

    const handlePreviousPage = () => {
        if(filters.page_number > 1){
            dispatch(setFilters({key: 'page_number', value: filters.page_number - 1}))
        }
    }

    const handlePageClick = (pageNumber: number) => {
        dispatch(setFilters({key: 'page_number', value: pageNumber}))
    }

    return(
        <section className={styles.section}>
        <NewsFilters filters={filters} />

        <PaginationWrapper top={true} bottom={true} 
        handleNextPage={handleNextPage} 
        handlePreviousPage={handlePreviousPage} 
        handlePageClick={handlePageClick} 
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
        >
        <NewsList isLoading={isLoading} direction='row' news={news}/>
        </PaginationWrapper>
        </section>
    )
}

export default NewsByFilters