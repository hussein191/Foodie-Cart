import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { loginUserApi } from "./GetUserApi";


function UseLoginUser(){
    const QueryClient = useQueryClient()
    const Navigate = useNavigate()
    const {mutate:Login,isLoading} = useMutation({
        mutationFn:loginUserApi,
        onSuccess:() => {
            Navigate("/",{replace:true});
            QueryClient.invalidateQueries({queryKey:["User"]})
        }
    })
    return {Login,isLoading}
}

export default UseLoginUser