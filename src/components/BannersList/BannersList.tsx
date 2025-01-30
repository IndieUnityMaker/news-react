import widthSkeleton from "../../helpers/hocks/withSkeleton"
import { INews } from "../../helpers/interfaces"
import NewsBanner from "../NewsBanner/NewsBanner"
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

const BannersListWidthSkeleton = widthSkeleton<Props>(BannersList, 'banner', 12, 'row')

export default BannersListWidthSkeleton