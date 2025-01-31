import styles from './styles.module.css'
import LatestNews from '../../components/LatestNews/LatestNews'
import NewsByFilters from '../../components/NewsByFilters/NewsByFilters'
import { useTheme } from '../../context/themeContext'

const Main = () => {
    const {isDark} = useTheme()

    return (
    <main className={styles.main}>
        <LatestNews />
        <NewsByFilters />
    </main>
    )
}

export default Main