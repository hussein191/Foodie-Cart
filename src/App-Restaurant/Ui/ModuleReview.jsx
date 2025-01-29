/* eslint-disable react/prop-types */
import { cloneElement, createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiMiniXMark } from "react-icons/hi2";

import UseGetUser from "../User/UseGetUser";
import { DivBodyModle, DivCloesModule, DivModule } from "../Style/Styley";


const ModuleContext = createContext()

function Module({children}){
    const [open,SetOpen] = useState("")
    const Cloes = () => SetOpen("")
    const Open = SetOpen
    return (
    <ModuleContext.Provider value={{Cloes,open,Open}}>
        {children}
    </ModuleContext.Provider>
    )
}

function OpenModule({NameOpen,children}){
    const {isAuthenticated} = UseGetUser()
    const Navigate = useNavigate()

    const {Open} = useContext(ModuleContext)
    return(cloneElement(children,{onClick:() => !isAuthenticated?Navigate("/Login",{replace:true}): Open(NameOpen)}) )
}

function WindowModule({NameWindow,children}){
    const {Cloes,open} = useContext(ModuleContext)
    if(open !== NameWindow) return null
    return(
        <DivModule>
            <DivBodyModle>
                <DivCloesModule onClick={Cloes}>
                    <HiMiniXMark size={"30px"} color="#666" cursor={"pointer"} />
                </DivCloesModule>
                {children}
            </DivBodyModle>
        </DivModule>
    )
}

Module.OpenModule = OpenModule;
Module.WindowModule = WindowModule;

export default Module