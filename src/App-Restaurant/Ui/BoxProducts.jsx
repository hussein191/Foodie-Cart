/* eslint-disable react/prop-types */
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { HiArchiveBox } from "react-icons/hi2";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom"
import styled from "styled-components"
import toast from 'react-hot-toast';

import { AddItemFav } from "../Redux/FavoritesSlice";
import { AddItem } from "../Redux/CartSlice";
import { useDispatch } from "react-redux";
import { H2, P } from "../Style/Styley";
import BoxType from "./BoxType";


const DivBox = styled.div`
    width:22.7%;
    background-color: white;
    padding:5px;
    padding-bottom: 15px;
    transition: 0.3s ease;
    &:hover{
        box-shadow: 0 35px 35px -15px rgba(0,0,0,0.3);
        transform: scale(1.1);
    }
`
const BoxTitel = styled.div`
    height:7vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Img = styled.img`
    width:110px;
    height:110px;
    border-radius: 50%;
    outline: 4px solid #84b74e;
    transform: translateY(-20%);
    object-fit:cover;
`
const Button = styled.button`
    cursor: pointer;
    background: transparent;
    border:none;
    transition: 0.3s ease;
    &:hover{
        color: #84b74e;
    }
`
const DivInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 6px;
    margin-top:25px;
`
const DivFloot = styled.div`
    display:flex;
    justify-content: space-between;
    margin-top: 10px;
`
const ButtonFloot = styled.button`
    width:50px;
    height:30px;
    border:1px solid rgba(64,64,64,0.8);
    background-color: transparent;
    border-radius: 10rem;
    cursor: pointer;
    ${(prop) => prop.type === "Firest" &&`
        width:110px;
        border:none;
        color:white;
        background-color:#84b74e
    `}
`
const LinkStyle = styled(Link)`
    text-decoration: none;
    color:#FFFF;
    font-size: 17px;
    font-weight: 500;
    transition: 0.3s ease;
    &:hover{
        color:#1d1d1d;
    }
`

function BoxProducts({Product,Type}){
    const {id,Name,image,Price,components,Categories,Size,Kitchens,Cuisines} = Product
    const Dispatch = useDispatch()
    const ProductCart = {
        ...Product,
        CountItem:1,
        TotalPrice:1*Price
    }
    return(
        <DivBox>
            <BoxTitel>
                <Button>
                    {
                        Type === "menu" ? 
                            <MdOutlineFavoriteBorder onClick={() =>{
                                toast.success("Add in Favorites  page")
                                Dispatch(AddItemFav(Product))}
                            } size={"25px"}/> 
                            : 
                            <HiArchiveBox size={"25px"}/>
                    }
                </Button>
                <Img src={image} alt="ImageProducts" />
                <Button>
                    <FiShoppingCart onClick={() => {
                        toast.success("Add in shopping cart")
                        Dispatch(AddItem(ProductCart))}
                        }
                        size={"25px"}
                    />
                </Button>
            </BoxTitel>
            <DivInfo>
                <H2>{Name}</H2>
                <BoxType Categories={Categories} Size={Size} Kitchens={Kitchens} Cuisines={Cuisines}/>
                <>
                    <P>{components?`${components.slice(0,50)}...`:""}</P>
                </>
            </DivInfo>
            <DivFloot>
                <ButtonFloot>${Price}</ButtonFloot>
                <ButtonFloot type="Firest">
                    <LinkStyle to={`/Menu/${id}/${Categories}`}>
                        Bay Now
                    </LinkStyle>
                </ButtonFloot>
            </DivFloot>
        </DivBox>
    )
}

export default BoxProducts