import Skeleton from "../../components/Skeleton/Skeleton"

function widthSkeleton (Component, type, count) {

    return function WidthSkeleton(props){
        const {isLoading, ...restProps} = props
        if(isLoading){
            return <Skeleton count={count} type={type} />
        }

        return <Component {...restProps}/>
    }
}

export default widthSkeleton