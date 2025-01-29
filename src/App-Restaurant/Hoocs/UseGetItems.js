import { useQuery } from "@tanstack/react-query"


function UseGetItems(FnApi,key){
    const {data,isLoading} = useQuery({
        queryKey:[`${key}`],
        queryFn:FnApi
    })
    return {data,isLoading}
}

export default UseGetItems