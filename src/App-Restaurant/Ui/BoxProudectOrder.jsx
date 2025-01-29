/* eslint-disable react/prop-types */
import styled from "styled-components"
import { H2 } from "../Style/Styley"

const DivBox = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    border:1px solid rgba(102,102,102,0.3);
    border-radius: 3px;
    padding:7px;
`

function BoxProductOrder({Product}){
    const {Name,CountItem,Price,TotalPrice} = Product
    return(
        <DivBox>
            <div>
                <H2 type="Size20">{Name}</H2>
                <H2>Qty {CountItem}-${Price}</H2>
            </div>
            <H2 type="Size20">${TotalPrice}</H2>
        </DivBox>
    )
}

export default BoxProductOrder