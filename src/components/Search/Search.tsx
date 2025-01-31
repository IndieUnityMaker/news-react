import { useTheme } from '../../context/themeContext';
import styles from './styles.module.css'

interface Props {
    keywords: string;
    setKeyWords: (keywords: string) => void;
}

const Search = ({keywords, setKeyWords}: Props) => {
    const {isDark} = useTheme()

    return(
            <div className={`${styles.search} ${isDark ? styles.dark : styles.light} `}>
                <input type="text" 
                value={keywords} 
                className={styles.input} 
                onChange={(evt) => setKeyWords(evt.target.value)}
                placeholder='JavaScript'
                />
            </div>
    )
}

export default Search