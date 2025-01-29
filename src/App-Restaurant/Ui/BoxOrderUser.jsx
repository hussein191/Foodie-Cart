/* eslint-disable react/prop-types */
import styled from "styled-components"

import { H2 } from "../Style/Styley"

const DivOrder = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:7px;
    border:1px solid rgba(102,102,102,0.3);
    border-radius: 4px;
    margin-top: 15px;
`
const BoxItem = styled.div`
    width:30%;
    display:flex;
    flex-wrap: wrap;
    gap:5px 5px;
`
const Img = styled.img`
    width:60px;
    height:60px;
    object-fit: cover;
`
const DivBut = styled.div`
    width:10%;
`
const Button = styled.button`
    width:120px;
    height:35px;
    border-radius: 3px;
    color:#FFFF;
    background: transparent;
    border-radius: 3px;
    border:1px solid rgba(102,102,102,0.4);
    ${(prop) => prop.type === "Processing" && `
        background: rgba(64,64,64,0.8);
    `}
    ${(prop) => prop.type === "In preparation" && `
        background: red;
    `}
    ${(prop) => prop.type === "Delivered" && `
        background: #84b74e;
    `}
`

function BoxOrderUser({Order}){
    const {image,Products,Total,Paid,OrderStatus} = Order
    return(
        <DivOrder>
            <BoxItem>
                {image.map((e,i) => <Img key={i} src={e} alt="ImageProduct" />)}
            </BoxItem>
            <BoxItem>
                {Products.map((e,i) => <H2 key={i}>{e},</H2>)}
            </BoxItem>
            <DivBut>
                <H2>${Total}</H2>
            </DivBut>
            <DivBut>
                <Button style={Paid === "Not Paid"? {backgroundColor:"red"}:{backgroundColor:"#84b74e"}}>{Paid}</Button>
            </DivBut>
            <DivBut>
                <Button  type={`${OrderStatus === "Processing" ? "Processing" : OrderStatus === "In preparation" ? "In preparation" :"Delivered" }`} >{OrderStatus}</Button>
            </DivBut>
        </DivOrder>
    )
}

export default BoxOrderUser