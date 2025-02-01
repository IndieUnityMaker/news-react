import { DirectionType, SkeletonType } from "../interfaces"
import Skeleton from "../ui/Skeleton/Skeleton"

export interface Props {
    isLoading: boolean;
    direction: DirectionType;
}

function widthSkeleton<P extends object> (Component: React.ComponentType<P>,direction: DirectionType, type?:SkeletonType, count?: number) {

    return function WidthSkeleton(props : Props & P){
        const {isLoading, ...restProps} = props
        if(isLoading){
            return <Skeleton count={count} type={type} direction={direction}/>
        }

        return <Component {...(restProps as P)}/>
    }
}

export default widthSkeleton