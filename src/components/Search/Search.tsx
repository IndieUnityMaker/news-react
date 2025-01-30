import styles from './styles.module.css'

interface Props {
    keywords: string;
    setKeyWords: (keywords: string) => void
}

const Search = ({keywords, setKeyWords}: Props) => {

    return(
            <div className={styles.search}>
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