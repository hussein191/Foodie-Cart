import { useQuery } from "@tanstack/react-query";
import { GetProductsApi } from "../Server/GetItems";
import UseSearchParams from "../Ui/UseSearchParams";


function UseGetProducts(){
    const {Page,Categories,Size,Kitchens,Cuisines} = UseSearchParams()
    const {data:{data:Items,count}={},isLoading} = useQuery({
        queryKey:["Products",Page,Categories,Size,Kitchens,Cuisines],
        queryFn:() => GetProductsApi(Page,Categories,Size,Kitchens,Cuisines)
    })
    return {Items,count,isLoading}
}

export default UseGetProducts