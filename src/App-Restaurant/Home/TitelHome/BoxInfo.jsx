import { Link } from "react-router-dom"
import styled from "styled-components"

const DivInfo = styled.div`
    width:50%;
    padding: 15px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`
const Div = styled.div`
    width:110px;
    height:30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10rem;
    border:1px solid rgba(102,102,102,0.2);
    color:#666;
`
const Titel = styled.h2`
    width:87%;
    font-size: 45px;
    font-weight: bold;
    line-height: 68px;
    color:rgba(64,64,64,0.9);
`
const P = styled.p`
    color:#666;
`
const DivBtu = styled.div`
    display: flex;
    column-gap: 15px;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 12px;
`
const Button = styled.button`
    width:190px;
    height:50px;
    border:1px solid rgba(102,102,102,0.3);
    background: transparent;
    border-radius: 10rem;
    cursor: pointer;
    transition: 0.3s ease;
    &:hover{
        background-color: rgba(102,102,102,0.2);
    }
    ${(prop) => prop.type === "Firest" &&`
        background-color:#84b74e;
        border:none;
        &:hover{
            background-color: rgba(64,64,64,0.9);
        }
    `}
`
const LinkStyle = styled(Link)`
    text-decoration: none;
    color:#1d1d1d;
    font-size: 17px;
    font-weight: 450;
    ${(prop) => prop.type==="Firest" &&`
        color:white;
    `}
`

function BoxInfo(){
    return(
        <DivInfo>
            <Div>Hungry?</Div>
            <Titel>JUST COME TO FOODIE CART & ORDER</Titel>
            <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, dignissimos aliquam. Quidem iusto, exercitationem</P>
            <DivBtu>
                <Button type="Firest">
                    <LinkStyle type="Firest" to="/Menu">Order Now</LinkStyle>
                </Button>
                <Button>
                    <LinkStyle to="">Explore More</LinkStyle>
                </Button>
            </DivBtu>
        </DivInfo>
    )
}

export default BoxInfo