import styled from "styled-components"
import LogoApp from "./Logo"
import NavBar from "./NavBar"
import BackPage from "./BackPage"
//box-shadow: 0 35px 35px -15px rgba(0,0,0,0.3);
const Header = styled.header`
    position: absolute;
    top:0;
    left:0;
    width:95%;
    padding-right:40px;
    padding-left:40px;
    padding-top:5px;
    padding-bottom: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 999;
`

function HeaderApp(){
    return(
        <>
        <Header>
            <LogoApp/>
            <NavBar />
        </Header>
        <BackPage />
        </>
    )
}

export default HeaderApp