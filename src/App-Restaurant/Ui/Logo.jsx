import styled from "styled-components"

const Div = styled.div`
    display:flex;
    column-gap: 10px;
    align-items: center;
`
const Img = styled.img`
    width:35px;
    height:35px;
    border-radius: 6px;
`
const H2 = styled.h2`
    color: #84b74e;
    font-size:27px;
    font-weight: bold;
`
const Span = styled.span`
    color:#1d1d1d;
    font-weight: 550;
    font-size:27px;
`

function LogoApp(){
    return(
        <Div>
            <Img src="/public/unnamed.png" alt="LogoApp" />
            <H2>Foodie <Span>Cart</Span></H2>
        </Div>
    )
}

export default LogoApp