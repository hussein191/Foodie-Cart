import { supabase, supabaseUrl } from "../Server/Supabase";

import ImageUser from "../Ui/ImageUser";


// for Singin user 
export async function SinginUserApi(Data){
    const Image = "Sample_User_Icon.png"
    const file = await ImageUser(Image)

    const NameIamge = `${Math.random()}-${file.name}`.replaceAll("/","")
    const UrlImage = `${supabaseUrl}/storage/v1/object/public/image-user/${NameIamge}`
    
    const {Name,Email,Phone,Password,Adress} = Data

    const {data,error} = await supabase.auth.signUp({
        email:Email,
        password:Password,
        phone:Phone,
        options:{
            data:{
                Name:Name,
                adress:Adress,
                imageUser :UrlImage,
            }
        }
    })
    if(error){
        console.error(error)
    }
    // for save image in storage in Api
    const {error:StorageError} = await supabase.storage
        .from("image-user")
        .upload(NameIamge,file)
    if(StorageError){
        console.error(error)
    }
    return data
}

// for Login user 
export async function loginUserApi(Data){
    const {Email,Password} = Data
    const {data,error} = await supabase.auth.signInWithPassword({
        email: Email,
        password: Password
    })
    if(error){
        console.error(error)
    }
    return data
}

// for Get User
export async function GetUserApi(){
    const {data:Session} = await supabase.auth.getSession()
    if(Session.session){
        const {data,error} = await supabase.auth.getUser()
        if(error){
            console.error(error)
        }
        return data
    }
    return {data:"Not User"}
}

// for delet user 
export async function DeletUserApi(){
    const { error } = await supabase.auth.signOut()
    if(error){
        console.error(error)
    }
}