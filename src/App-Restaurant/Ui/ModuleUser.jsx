/* eslint-disable react/prop-types */
import { cloneElement, createContext, useContext, useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";

import { DivBodyModle, DivCloesModule, DivModule } from "../Style/Styley";


const ModuleContext = createContext()

function Module({children}){
    const [open,SetOpen] = useState("")
    const Open = SetOpen;
    const Cloes = () => SetOpen("")
    return (
        <ModuleContext.Provider value={{Open,Cloes,open}}>
            {children}
        </ModuleContext.Provider>
    )
}

function OpenModuel({NameOpen,children}){
    const {Open} = useContext(ModuleContext)
    return (cloneElement(children,{onClick:() => Open(NameOpen)}))
}


function WindowModule({NameWindow,children}){
    const {Cloes,open} = useContext(ModuleContext)
    if(open !== NameWindow) return null
    return(
        <DivModule>
            <DivBodyModle type="User">
                <DivCloesModule onClick={Cloes}>
                    <HiMiniXMark size={"30px"} color="#666" cursor={"pointer"} />
                </DivCloesModule>
                {children}
            </DivBodyModle>
        </DivModule>
    )
}

Module.OpenModuel = OpenModuel;
Module.WindowModule = WindowModule;

export default Module