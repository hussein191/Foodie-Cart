import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { GetProductByIDApi } from "../Server/GetItems";



function UseGetProductByID(){
    const {IDProduct} = useParams()
    
    const {data,isLoading} = useQuery({
        queryKey:["Product",IDProduct],
        queryFn : () => GetProductByIDApi(IDProduct)
    })
    return {data,isLoading}
}

export default UseGetProductByID