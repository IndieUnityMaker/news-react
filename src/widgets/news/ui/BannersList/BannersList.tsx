import { INews, NewsBanner } from '@/entities/news'
import widthSkeleton from '@/shared/hocks/withSkeleton'
import styles from './styles.module.css'

interface Props {
    banners?: INews[] | null
}

const BannersList = ({ banners } : Props) => {

    return(
            <ul className={styles.banners}>
                {banners?.map(banner => {
                    return(
                        <NewsBanner key={banner.id} item={banner} />
                    )
                })}
            </ul>
    )
}

const BannersListWidthSkeleton = widthSkeleton<Props>(BannersList,'row', 'banner', 12,)

export default BannersListWidthSkeleton