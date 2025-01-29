import styled  from "styled-components"

import NavBarMenu from "./NavBarMenu"
import Products from "./Products"


const DivMenu = styled.div`
    display: flex;
`

function Menu(){
    return(
        <DivMenu>
            <NavBarMenu />
            <Products />
        </DivMenu>
    )
}

export default Menu