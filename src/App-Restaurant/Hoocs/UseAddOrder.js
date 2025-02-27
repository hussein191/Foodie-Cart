import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddOrderApi } from "../Server/AddItems";
import { useNavigate } from "react-router-dom";


function UseAddOrder(){
    const Navigate = useNavigate()
    const QueryClient = useQueryClient()
    const {mutate:AddOrder,isLoading} = useMutation({
        mutationFn:AddOrderApi,
        onSuccess:(order) => {
            QueryClient.invalidateQueries({queryKey:["Orders"]})
            Navigate("/Orders",{replace:true})
            return order
        }
    })
    return {AddOrder,isLoading}
}

export default UseAddOrder