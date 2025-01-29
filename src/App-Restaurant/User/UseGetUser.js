import { useQuery } from "@tanstack/react-query";
import { GetUserApi } from "./GetUserApi";


function UseGetUser(){
    const {data:user,isLoading} = useQuery({
        queryKey:["User"],
        queryFn:GetUserApi,
    })
    return {user,isAuthenticated:user?.user?.role === "authenticated",isLoading}
    
}

export default UseGetUser