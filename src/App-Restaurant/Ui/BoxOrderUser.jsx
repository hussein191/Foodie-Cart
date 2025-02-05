/* eslint-disable react/prop-types */
import styled from "styled-components"

import BoxProducts from "./BoxProducts"
import { H2, Span } from "../Style/Styley"
import Module from "./ModuleUser"


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
    display: flex;
    flex-direction: column;
    row-gap:7px;
`
const Button = styled.button`
    width:120px;
    height:35px;
    border-radius: 3px;
    color:#FFFF;
    background: transparent;
    border-radius: 3px;
    font-size:14px;
    font-weight: 400;
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
    ${(prop) => prop.type === "Producs" &&`
        cursor: pointer;
        color:rgba(64,64,64,0.8);
        transition: 0.3s ease;
        &:hover{
            color:#1d1d1d;
            border:1px solid #1d1d1d;
        }
    `}
`
const DivMin = styled.div`
    display:flex;
    flex-wrap: wrap;
    overflow-y: auto;
    margin-top: 12px;
    padding:20px;
    padding-top:85px;
    gap:21px 21px;
`

function BoxOrderUser({Orders}){
    const {NameUser,Phone,Address,Paid,OrderState,Data} = Orders.DataOrder

    return(
        <DivOrder>
            <BoxItem>
                <H2 type="black"><Span type="titel">Data Order:</Span> {Data}</H2>
                <H2 type="black"><Span type="titel">Name User :</Span> {NameUser}</H2>
                <H2 type="black"><Span type="titel">Phone User :</Span> {Phone}</H2>
                <H2 type="black"><Span type="titel">Address User :</Span> {Address}</H2>
            </BoxItem>
            <div>
                <Button style={Paid === "Not Paid"? {backgroundColor:"red"}:{backgroundColor:"#84b74e"}}>{Paid}</Button>
            </div>
            <div>
                <Button  type={`${OrderState === "Processing" ? "Processing" : OrderState === "In preparation" ? "In preparation" :"Delivered" }`} >{OrderState}</Button>
            </div>
            <Module>
                <Module.OpenModuel NameOpen="Items-order">
                    <Button type="Producs">Show Products</Button>
                </Module.OpenModuel>
                <Module.WindowModule NameWindow="Items-order" Type="Order">
                    <div>
                        <H2>Quantity of products : ({Orders.Products.length})</H2>
                    </div>
                    <DivMin>
                        {Orders.Products.map((product,i) => <BoxProducts key={i} Product={product}/>)}
                    </DivMin>
                </Module.WindowModule>
            </Module>
        </DivOrder>
    )
}

export default BoxOrderUser