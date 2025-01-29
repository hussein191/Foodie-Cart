/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import toast from 'react-hot-toast';
import { useState } from "react"

import { DivCount, DivNumber, H2, P } from "../Style/Styley"
import ModuleReviews from "./BoxModuleReviews"
import { AddItem } from "../Redux/CartSlice"
import UseGetUser from "../User/UseGetUser"
import BoxType from "./BoxType"


const DivApp = styled.div`
    display:flex;
    justify-content: center;
    gap:12px 12px;
`
const DivImg = styled.div`
    width:40%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Div = styled.div`
    width:40%;
    display: flex;
    flex-direction: column;
    row-gap:12px;
`
const Img = styled.img`
    width:65%;
    height:47vh;
    border-radius: 6px;
    mix-blend-mode: darken;
    border-radius:60%;
    object-fit: cover;
`
const DiVCenter = styled.div`
    display: flex;
    column-gap: 20px;
    align-items: center;
    margin-top: 20px;
`
const Button = styled.button`
    height:35px;
    border:none;
    background-color: rgba(64,64,64,0.8);
    color:#FFFF;
    cursor: pointer;
    font-size: 18px;
    font-weight: 450;
    margin-top: 10px;
    transition: 0.3s ease;
    border-radius: 4px;
    &:hover{
        background-color: #84b74e;
        border:1px solid rgba(102,102,102,0.3);
    }
`

function BoxDetailsProduct({Product}){
    const {Name,image,Price,components,Categories,Size,Kitchens,Cuisines} = Product
    const [CountProduct,SetCount] = useState(1)
    const {isAuthenticated} = UseGetUser()
    const Navigate = useNavigate()
    const Dispatch = useDispatch()
    
    function handelAddItem(){
        if(!isAuthenticated){
            Navigate("/Login",{replace:true})
        }else{
            const Item = {
                id:new Date(),
                ...Product,
                CountItem:CountProduct,
                TotalPrice:CountProduct*Price
            }
            Dispatch(AddItem(Item))
            toast.success("Add in shopping cart")
        }
    }
    return(
        <DivApp>
            <DivImg>
                <Img src={image} alt={Name} />
            </DivImg>
            <Div>
                <H2 type="black">{Name}</H2>
                <P>{components}</P>
                <BoxType Categories={Categories} Size={Size} Kitchens={Kitchens} Cuisines={Cuisines}/>
                <DiVCenter>
                    <H2 type="black">Price</H2>
                    <H2 type="black">${Price}</H2>
                </DiVCenter>
                <DiVCenter>
                    <H2 type="black">Servies</H2>
                    <DivCount>
                        <DivNumber onClick={() => SetCount(1)} style={CountProduct === 1 ? {backgroundColor:"#84b74e"}:{}}>1</DivNumber>
                        <DivNumber onClick={() => SetCount(2)} style={CountProduct === 2 ? {backgroundColor:"#84b74e"}:{}}>2</DivNumber>
                        <DivNumber onClick={() => SetCount(3)} style={CountProduct === 3 ? {backgroundColor:"#84b74e"}:{}}>3</DivNumber>
                        <DivNumber onClick={() => SetCount(4)} style={CountProduct === 4 ? {backgroundColor:"#84b74e"}:{}}>4</DivNumber>
                    </DivCount>
                </DiVCenter>
                <ModuleReviews />
                <Button onClick={handelAddItem}>Add Item</Button>
            </Div>
        </DivApp>
    )
}

export default BoxDetailsProduct