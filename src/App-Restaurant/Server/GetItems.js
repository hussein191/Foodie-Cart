import { supabase } from "./Supabase"

import { Size_page } from "../Ui/Size_page"


//Get Categories from Api
export async function GetCategoriesApi(){
    const {data,error} =  await supabase
        .from("Categories")
        .select("Name_Billoard")
    if(error){
        console.error(error)
    }
    return data
}

// Get Size from Api 
export async function GetSizeApi(){
    const {data,error} = await supabase
        .from("Size")
        .select("Name,Value")
    if(error){
        console.error(error)
    }
    return data
}

// Get Kitchens from Api 
export async function GetKitchensApi(){
    const {data,error} = await supabase
        .from("Kitchens")
        .select("Name,Value")
    if(error){
        console.error(error)
    }
    return data
}

// Get Cuisines from Api
export async function GetCuisinesApi(){
    const {data,error} = await supabase
        .from("Cuisines")
        .select("Name,Value")
    if(error){
        console.error(error)
    }
    return data
}

//Get Products from Api 
export async function GetProductsApi(Page,Categories,Size,Kitchens,Cuisines){
    
    let query = supabase
        .from("Products")
        .select("*",{count:"exact"})
    
    if(Page){
        const from = (Page-1) * Size_page
        const to = from + Size_page-1
        query = query.range(from,to)
    }
    if(Categories){
        query = query.eq("Categories",Categories)
    }

    if(Size){
        query = query.eq("Size",Size)
    }

    if(Kitchens){
        query = query.eq("Kitchens",Kitchens)
    }

    if(Cuisines){
        query = query.eq("Cuisines",Cuisines)
    }

    const {data,count,error} = await query
    if(error){
        console.error(error)
    }
    
    return {data,count}
}

// Get product By ID from Api
export async function GetProductByIDApi(IDProduct){
    const {data,error} = await supabase
        .from("Products")
        .select(`*`)
        .eq("id",IDProduct)
    if(error){
        console.error(error)
    }
    return data
}

//Get product by Categories from Api
export async function GetProductByCategories(Categories,IDProduct){
    const {data,error} = await supabase
        .from("Products")
        .select("*")
        .eq("Categories",Categories)
        .neq("id",IDProduct)
    if(error){
        console.error(error)
    }
    return data
}

// Get Revirews by Name Product from Api 
export async function GetReviewsApi(IDProduct){
    const {data,error} = await supabase
        .from('Reviews')
        .select("ImageUser,NameUser,Data,CountReview,Clarification,id")
        .eq("IDProduct",IDProduct)
    if(error){
        console.error(error)
    }
    return data
}

// Get Orders form Api
export async function GetOrdersApi(userId,Page,Paid,OrderStatus){
    let query =  supabase
        .from("Orders")
        .select("*",{count:"exact"})

    if(userId){
        query = query.eq("UserID",userId)
    }
    if(Page){
        const from = (Page-1) * Size_page
        const to = from + Size_page-1
        query = query.range(from,to)
    }
    if(Paid){
        query = query.eq("Paid",Paid)
    }
    if(OrderStatus){
        query = query.eq("OrderStatus",OrderStatus)
    }
    
    const {data,count,error} = await query
    if(error){
        console.error(error)
    }
    return {data,count}
}

