import { useQuery } from "@tanstack/react-query";
import { GetOrdersApi } from "../Server/GetItems";
import { useSearchParams } from "react-router-dom";
import UseSearchParams from "../Ui/UseSearchParams";


function UseGetOrders(userId){
    const [SearchParams] = useSearchParams()
    const {Page} = UseSearchParams()
    const Paid = !SearchParams.get("Paid") ? null : SearchParams.get("Paid") 
    const OrderStatus = !SearchParams.get("OrderStatus") ? null : SearchParams.get("OrderStatus")
    
    const {data:{data:Orders,count}={},isLoading} = useQuery({
        queryKey:["Orders",userId,Page,Paid,OrderStatus],
        queryFn:() => GetOrdersApi(userId,Page,Paid,OrderStatus)
    })
    return {Orders,count,isLoading}
}

export default UseGetOrders