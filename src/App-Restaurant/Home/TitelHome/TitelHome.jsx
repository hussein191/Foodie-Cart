import styled from "styled-components"
import BoxInfo from "./BoxInfo"
import BoxImg from "./BoxImg"

const DivTitel = styled.div`
    display:flex;
`

function TitelHome(){
    return(
        <DivTitel>
            <BoxInfo />
            <BoxImg />
        </DivTitel>
    )
}

export default TitelHome