/* eslint-disable react/prop-types */
import styled from "styled-components"


import { But } from "../Style/Styley"

const DivTypes = styled.div`
    display:flex ;
    flex-wrap: wrap;
    gap:5px 5px;
    align-items: center;
`

function BoxType({Categories,Size,Kitchens,Cuisines}){
    return(
        <DivTypes>
            {Categories && <But type="Categories">{Categories}</But>}
            {Size && <But type="Size">{Size}</But>}
            {Kitchens && <But>{Kitchens}</But>}
            {Cuisines && <But>{Cuisines}</But> }
        </DivTypes>
    )
}

export default BoxType