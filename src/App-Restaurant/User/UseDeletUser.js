import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeletUserApi } from "./GetUserApi";
import { useNavigate } from "react-router-dom";


function UseDeletUser(){
    const Navigate = useNavigate()
    const QueryClient = useQueryClient()
    const {mutate:DeletUser,isLoading} = useMutation({
        mutationFn:DeletUserApi,
        onSuccess:() => {
            QueryClient.invalidateQueries({queryKey:["User"]})
            Navigate("/",{replace:true})
        },
        onError:(err) => {
            console.error(err)
        }
    })
    return {DeletUser,isLoading}
}

export default UseDeletUser