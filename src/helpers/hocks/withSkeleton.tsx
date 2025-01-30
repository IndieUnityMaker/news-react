import Skeleton from "../../components/Skeleton/Skeleton"
import { DirectionType, SkeletonType } from "../interfaces"

interface Props {
    isLoading: boolean
}

function widthSkeleton<P extends object> (Component: React.ComponentType<P>, type?:SkeletonType, count?: number, direction?: DirectionType) {

    return function WidthSkeleton(props : Props & P){
        const {isLoading, ...restProps} = props
        if(isLoading){
            return <Skeleton count={count} type={type} direction={direction}/>
        }

        return <Component {...(restProps as P)}/>
    }
}

export default widthSkeleton