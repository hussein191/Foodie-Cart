import { useEffect, useState } from "react"
import styled from "styled-components"

import BackPage from "./BackPage"
import NavBar from "./NavBar"
import LogoApp from "./Logo"



const Header = styled.header`
    position: absolute;
    top:0;
    left:0;
    width:98%;
    padding-right:20px;
    padding-left:20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 999;
`

function HeaderApp(){
    const [bgColor, setBgColor] = useState({})
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setBgColor({backgroundColor:"#FFFF",boxShadow:" 0 35px 35px -15px rgba(0,0,0,0.3)"});
            } else {
                setBgColor(""); 
            }
        };

        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return(
        <>
        <Header style={bgColor?bgColor:{}}>
            <LogoApp/>
            <NavBar />
        </Header>
        <BackPage />
        </>
    )
}

export default HeaderApp