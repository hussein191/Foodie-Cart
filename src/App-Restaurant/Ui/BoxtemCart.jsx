/* eslint-disable react/prop-types */
import { HiArchiveBox } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import styled from "styled-components"

import { DeletItem, UpdeteCount } from "../Redux/CartSlice";
import { DivCount, DivNumber, H2 } from "../Style/Styley"
import BoxType from "./BoxType"


const DivApp = styled.div`
    padding:3px;
    border:1px solid rgba(102,102,102,0.3);
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
`
const DivImg = styled.div`
    display:flex;
    column-gap: 15px;
`
const Img = styled.img`
    width:60px;
    height:60px;
`
const ButtonIcon = styled.button`
    background: transparent;
    cursor: pointer;
    transition: 0.3s ease;
    border:none;
    &:hover{
        color:#666;
    }
`

function BoxtemCart({Item}){
    const {image,Name,Categories,Size,Kitchens,Cuisines,TotalPrice,CountItem,id} = Item
    const Dispatch = useDispatch()
    return(
        <DivApp>
            <DivImg>
                <Img src={image} alt={Name} />
                <div>
                    <H2 type="black">{Name}</H2>
                    <BoxType Categories={Categories} Size={Size} Kitchens={Kitchens} Cuisines={Cuisines}/>
                </div>
            </DivImg>
            <DivCount>
                <DivNumber onClick={() => Dispatch(UpdeteCount({id:id,Count:1}))} style={CountItem === 1 ? {background:"#84b74e"}:{}} >1</DivNumber>
                <DivNumber onClick={() => Dispatch(UpdeteCount({id:id,Count:2}))} style={CountItem === 2 ? {background:"#84b74e"}:{}}>2</DivNumber>
                <DivNumber onClick={() => Dispatch(UpdeteCount({id:id,Count:3}))} style={CountItem === 3 ? {background:"#84b74e"}:{}}>3</DivNumber>
                <DivNumber onClick={() => Dispatch(UpdeteCount({id:id,Count:4}))} style={CountItem === 4 ? {background:"#84b74e"}:{}}>4</DivNumber>
            </DivCount>
            <H2 type="black">${TotalPrice}</H2>
            <ButtonIcon>
                <HiArchiveBox onClick={() => Dispatch(DeletItem(id))} size={"22px"} />
            </ButtonIcon>
        </DivApp>
    )
}

export default BoxtemCart