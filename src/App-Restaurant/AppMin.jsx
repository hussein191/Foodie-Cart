import styled from "styled-components"
import HeaderApp from "./Ui/Header"
import { Outlet } from "react-router-dom"

const DivPage = styled.div`
    width:95%;
    position: absolute;
    top:14%;
    left:0;
    padding:7px;
    padding-left:35px;
    padding-right:30px;
    
`

function MinApp(){
    return(
        <>
            <HeaderApp/>
            <DivPage>
                <Outlet />
            </DivPage>
        </>
    )
}

export default MinApp