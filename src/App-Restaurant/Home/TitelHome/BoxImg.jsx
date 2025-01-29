import styled from "styled-components"

const DivImg = styled.div`
    width:50%;
    height:87vh;
`
const Imge = styled.img`
    width:100%;
    height:100%;
`

function BoxImg(){
    return(
        <DivImg>
            <Imge src="/public/Food (1).png" alt="ImageHome" /> 
        </DivImg>
    )
}

export default BoxImg