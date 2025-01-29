/* eslint-disable react/prop-types */
import { MdOpenInFull } from "react-icons/md";
import styled from "styled-components";

import ModuleMap from "./Module.map";
import MyMap from "./Map";

const Button = styled.button`
    border:none;
    background: transparent;
    transition: 0.3s ease;
    color:#1d1d1d;
    &:hover{
        color:#666
    }
`

function BoxModuleMap({Location}){
    return(
        <ModuleMap>
            <ModuleMap.OpenModule NameOpen="Open-map">
                <Button type="button">
                    <MdOpenInFull size="24px" cursor="pointer" />
                </Button>
            </ModuleMap.OpenModule>
            <ModuleMap.WindowModule NameWindow="Open-map">
                <MyMap Location={Location} />
            </ModuleMap.WindowModule>
        </ModuleMap>
    )
}

export default BoxModuleMap