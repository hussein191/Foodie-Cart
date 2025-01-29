/* eslint-disable react/prop-types */
import styled from "styled-components"

const Div = styled.div`
    height:50vh;
    display:flex;
    justify-content: center;
    align-items: center;
    color:#666;
    font-size:35px;
    font-weight: bold;
`

function Spiner({children}){
    return(
        <Div>{children}</Div>
    )
}

export default Spiner