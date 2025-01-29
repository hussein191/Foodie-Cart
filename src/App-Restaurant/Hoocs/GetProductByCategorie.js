import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { GetProductByCategories } from "../Server/GetItems";


function UseGetProductByCategorie(){
    const {IDProduct} = useParams()
    const {CategorieProduct} = useParams()

    const {data,isLoading} = useQuery({
        queryKey:["CategorieProduct",CategorieProduct,IDProduct],
        queryFn:() => GetProductByCategories(CategorieProduct,IDProduct),
    })
    return {data,isLoading}
}

export default UseGetProductByCategorie