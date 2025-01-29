import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { SinginUserApi } from "./GetUserApi";


function UseSingUser(){
    const Navigate = useNavigate()
    const {mutate:Singin,isLoading} = useMutation({
        mutationFn:SinginUserApi,
        onSuccess:() => {
            Navigate("/Login",{replace:true})
        }
    })
    return {Singin,isLoading}
}

export default UseSingUser