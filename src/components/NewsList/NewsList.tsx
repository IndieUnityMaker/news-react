import widthSkeleton from '../../helpers/hocks/withSkeleton'
import { INews } from '../../helpers/interfaces'
import NewsItem from '../NewsItem/NewsItem'
import styles from './styles.module.css'

interface Props {
    news?: INews[]
}

const NewsList = ({ news }: Props) => {

    return(
            <ul className={styles.list}>
                {news?.map(item => {
                    return <NewsItem key={item.id} item={item} />
                })}
            </ul>
    )
}

const NewsListWidthSkeleton = widthSkeleton<Props>(NewsList, 'item', 10)

export default NewsListWidthSkeleton