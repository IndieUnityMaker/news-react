import styles from './styles.module.css'

const Search = ({keywords, setKeyWords}) => {

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