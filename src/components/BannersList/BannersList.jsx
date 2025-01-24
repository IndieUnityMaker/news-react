import widthSkeleton from "../../helpers/hocks/withSkeleton"
import NewsBanner from "../NewsBanner/NewsBanner"
import styles from './styles.module.css'

const BannersList = ({ banners }) => {

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

const BannersListWidthSkeleton = widthSkeleton(BannersList, 'banner', 12, 'row')

export default BannersListWidthSkeleton