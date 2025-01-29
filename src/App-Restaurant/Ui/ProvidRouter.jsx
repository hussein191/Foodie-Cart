/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import UseGetUser from "../User/UseGetUser"
import { useEffect } from "react"



function ProvidRouter({children}){
    const {user,isAuthenticated,isLoading} = UseGetUser()
    const Navigate = useNavigate()

    useEffect(() => {
        console.log(isAuthenticated)
        if(user !== "Not User" && isAuthenticated){
            Navigate("/")
        }
    },[isAuthenticated,user,Navigate,isLoading])

    if(isLoading) return null
    return children
}

export default ProvidRouter