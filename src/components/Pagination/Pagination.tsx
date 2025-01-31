import { useTheme } from '../../context/themeContext'
import { IPaginationProps } from '../../helpers/interfaces'
import styles from './styles.module.css'

const Pagination = ({totalPages, handleNextPage, handlePreviousPage, handlePageClick, currentPage}: IPaginationProps) => {
    const {isDark} = useTheme()
    return(
            <div className={`${styles.pagination} ${isDark ? styles.dark : styles.light} `}>
                <button disabled ={currentPage <= 1} onClick={handlePreviousPage} className={styles.arrow}>{'<'}</button>
                <div className={styles.list}>
                    {[...Array(totalPages)].map((_, index) => {
                        return <button
                            disabled ={index + 1 === currentPage}
                            onClick={() => handlePageClick(index + 1)} className={styles.pageNumber} key={index}>{index + 1}</button>
                    })}

                </div>
                <button disabled ={currentPage >= totalPages} onClick={handleNextPage} className={styles.arrow}>{'>'}</button>
            </div>
    )
}

export default Pagination