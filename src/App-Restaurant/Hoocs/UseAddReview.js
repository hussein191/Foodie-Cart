import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddReviewApi } from "../Server/AddItems";


function UseAddReview(){
    const QueryClient = useQueryClient()
    const {mutate:AddReview,isLoading} = useMutation({
        mutationFn:AddReviewApi,
        onSuccess:() => {
            QueryClient.invalidateQueries({queryKey:["Reviews"]})
        },
        onError:(err) => {
            console.error(err)
        }
    })
    return {AddReview,isLoading}
}

export default UseAddReview