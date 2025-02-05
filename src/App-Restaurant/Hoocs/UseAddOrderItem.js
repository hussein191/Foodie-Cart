import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddOrderItemApi } from "../Server/AddItems";


function UseAddOrderItem(){
    const QueryClient = useQueryClient()
    const {mutate:AddOrderItem} = useMutation({
        mutationFn:AddOrderItemApi,
        onSuccess:() => {
            QueryClient.invalidateQueries({queryKey:["BestProducts"]})
        },
        onError:(err) => {
            console.error(err)
        }
    })
    return {AddOrderItem}
}

export default UseAddOrderItem