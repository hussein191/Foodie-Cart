import { supabase } from "./Supabase";

// User adds a review on the product
export async function AddReviewApi(Review){
    const {data,error} = await supabase
        .from("Reviews")
        .insert([Review])
        .select()
    if(error){
        console.error(error)
    }
    return data
}

// Add Order by user
export async function AddOrderApi(Order){
    const {data,error} = await supabase
        .from("Orders")
        .insert([Order])
    if(error){
        console.error(error)
    }
    return data
}