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

// Get Order items form Api
export async function GetOrdersApi(userId,Page,Paid,OrderStatus){
    let query =  supabase
        .from("Order_item")
        .select(`quantity,OrderID!inner(*),ProductID!inner(*)`,{count:"exact"})

    if(userId){
        query = query.eq('OrderID.UserID',userId)
    }
    if(Page){
        const from = (Page-1) * Size_page
        const to = from + Size_page-1
        query = query.range(from,to)
    }
    if(Paid){
        query = query.eq("OrderID.Paid",Paid)
    }
    if(OrderStatus){
        query = query.eq("OrderID.OrderState",OrderStatus)
    }
    
    const {data,count,error} = await query
    if(error){
        console.error(error)
    }
    
    if(data){
        const OrdersUser = {}
        data.forEach(item => {
            const idOrder = item.OrderID.id
            if(!OrdersUser[idOrder]){
                OrdersUser[idOrder] = {
                    DataOrder : item.OrderID,
                    Products : []
                }
            }
            OrdersUser[idOrder].Products.push(item.ProductID)
    })
        const Order_itemsUser = Object.values(OrdersUser)
        return {Order_itemsUser,count}
    }
    return 
}

// Get best-selling products from Api 
export async function GetBestProductApi(){
    const { data,error } = await supabase
        .from("Order_item")
        .select(`quantity,ProductID(*)`)
    if(error){
        console.error(error)
    }

    if(data){
        const Products = {}
        data.forEach(item => {
            const id = item.ProductID.id
            if(!Products[id]){
                Products[id] = {
                    ...item.ProductID,
                    totalSold :0
                }
            }
            Products[id].totalSold += item.quantity
        })
        const mostSoldProducts = Object.values(Products).sort((a, b) => b.totalSold - a.totalSold).slice(0,4);
        return mostSoldProducts;
    }
    return 
}
