import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { GetReviewsApi } from "../Server/GetItems";



function UseGetRivews(){
    const {IDProduct} = useParams()
    const {data:Reviews,isLoading} = useQuery({
        queryKey:["Reviews",IDProduct],
        queryFn:() => GetReviewsApi(IDProduct)
    })
    return {Reviews,isLoading}
}

export default UseGetRivews