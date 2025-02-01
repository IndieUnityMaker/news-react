import { INews, NewsItem } from '@/entities/news'
import widthSkeleton from '@/shared/hocks/withSkeleton'
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

const NewsListWidthSkeleton = widthSkeleton<Props>(NewsList,'row', 'item', 10)

export default NewsListWidthSkeleton