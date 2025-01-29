import styled from "styled-components"

const Img = styled.img`
    width: 60%;
    height: auto;
    max-width:100%;
    position: absolute;
    top:0;
    right:0;
`

function BackPage(){
    return(
        <Img src="/dist/hero.svg" alt="BackTitel" />
    )
}

export default BackPage