/* eslint-disable react/prop-types */
import { cloneElement, createContext, useContext, useState } from "react"
import { HiOutlineXMark } from "react-icons/hi2";
import styled from "styled-components"

import {DivBodyModle, DivModule } from "../Style/Styley"

const DivTitel = styled.div`
    display:flex;
    justify-content: flex-end;
    width:100%;
    position: relative;
`
const Button = styled.button`
    width:35px;
    height:35px;
    border:none;
    border-radius: 50%;
    background: #FFFF;
    color:#1d1d1d;
    transition: 0.3s ease;
    position: absolute;
    right:35px;
    top:-30px;
    text-align: center;
    &:hover{
        color:#666;
    }
`

const CreateMap = createContext()

function ModuleMap({children}){
    const [IsOpen,SetOpen] = useState("")
    const Open = SetOpen
    const Cloes = () => SetOpen("")
    return(
        <CreateMap.Provider value={{IsOpen,Open,Cloes}}>
            {children}
        </CreateMap.Provider>
    )
}

function OpenModule({NameOpen,children}){
    const {Open} = useContext(CreateMap)
    return(cloneElement(children,{onClick:() => Open(NameOpen)}))
}

function WindowModule({NameWindow,children}){
    const {Cloes,IsOpen} = useContext(CreateMap)
    if(IsOpen !== NameWindow) return null
    const StyleMap = {height:"100%",width:"100%"}
    return(
        <DivModule type="Map">
            <DivTitel>
                <Button type="button">
                    <HiOutlineXMark onClick={Cloes} size="25px" cursor="pointer" />
                </Button>
            </DivTitel>
            <DivBodyModle type="Map">
                {cloneElement(children,{onStyleMap:StyleMap})}
            </DivBodyModle>
        </DivModule>
    )
}


ModuleMap.WindowModule = WindowModule;
ModuleMap.OpenModule = OpenModule;

export default ModuleMap