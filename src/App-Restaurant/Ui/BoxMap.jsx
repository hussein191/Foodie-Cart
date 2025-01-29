/* eslint-disable react/prop-types */
import styled from "styled-components"

import BoxModuleMap from "./BoxModuleMap"
import MyMap from "./Map"
import { DivBodyInfo, H2 } from "../Style/Styley"


const DivShow = styled.div`
    position: absolute;
    top:40px;
    right:0px;
    z-index: 999;
`

function BoxMap({Location}){
    return(
        <DivBodyInfo>
            <H2>Address User </H2>
            <MyMap Location={Location} />
            <DivShow>
                <BoxModuleMap Location={Location} />
            </DivShow>
        </DivBodyInfo>
    )
}

export default BoxMap