/* eslint-disable react/prop-types */
import styled from "styled-components";

import { Button, H2 } from "../Style/Styley";

const DivSpaceBetween = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
`

function TitelPAge({Name,onclick}){
    return(
        <DivSpaceBetween>
            <H2 type="black">{Name}</H2>
            <Button type="majo" onClick={onclick}>Clear</Button>
        </DivSpaceBetween>
    )
}

export default TitelPAge