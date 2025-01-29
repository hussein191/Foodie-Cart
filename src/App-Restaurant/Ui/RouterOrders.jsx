/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect } from "react"
import UseGetUser from "../User/UseGetUser"
import { useNavigate } from "react-router-dom"
import Spiner from "./Spiner"



function RouterOrder({children}){
    const  {isAuthenticated,isLoading} = UseGetUser()
    const navigate = useNavigate()

    useEffect(() => {
        if(!isAuthenticated && !isLoading ){
            navigate("/Login",{replace:true})
        }
    },[isAuthenticated,isLoading])

    if(isLoading) return <Spiner>Loadding...</Spiner>
    if(isAuthenticated) return children 
}

export default RouterOrder