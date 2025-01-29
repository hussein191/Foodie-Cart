import { useSelector } from "react-redux"
import styled from "styled-components"

import { H2 } from "../Style/Styley"
import { Link } from "react-router-dom"


const DivInfo = styled.div`
    width:30%;
    border:black;
`
const DivTotelPrice = styled.div`
    border-radius: 6px;
    background-color: rgba(102,102,102,0.3);
    box-shadow: 0 35px 35px -15px rgba(0,0,0,0.3);
    padding:12px;
    margin-top: 12px;
    margin-bottom: 12px;
`
const DivPrice = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    border-top:1px solid #666;
    padding-top:10px;
    margin-top: 10px;
`
const Button = styled.button`
    height:35px;
    color:#FFFF;
    background-color: #1d1d1d;
    cursor: pointer;
    border-radius: 3px;
    border:none;
    width:100%;
    margin-top: 10px;
    font-size:17px;
    transition: 0.3s ease;
    &:hover{
        background-color: #84b74e;
    }
`

function InfoCart(){
    const Items = useSelector((state) => state.Cart.ShopingCart)
    const TotalPrice = Items.reduce((a,b) => a+b.TotalPrice,0)
    
    return(
        <DivInfo>
            <DivTotelPrice>
                <H2 type="black">Order Summary</H2>
                <DivPrice>
                    <H2 type="black">Total</H2>
                    <H2 type="black">${TotalPrice}</H2>
                </DivPrice>
            </DivTotelPrice>
            <DivTotelPrice>
                <H2 type="black">Payment</H2>
                <Button >
                    <Link to={"/Order"}>Check Out</Link>
                </Button>
            </DivTotelPrice>
        </DivInfo>
    )
}

export default InfoCart