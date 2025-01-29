/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { HiOutlineXMark } from "react-icons/hi2";
import styled from "styled-components"

import { But } from "../Style/Styley"
import { useSearchParams } from "react-router-dom";


const DivCloes = styled.div`
    width:20px;
    height:20px;
    position: absolute;
    top:-8px;
    right:-4px;
    border-radius: 50%;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(64,64,64,0.7);
    cursor: pointer;
    transition: 0.3s ease;
    &:hover{
        background-color: rgba(102,102,102,0.4);
    }
`

function BtuProductCategories({Name,Value}){
    const [SearchParams,SetSearchParams] = useSearchParams()
    
    function handelDelet(Value){
        SearchParams.set(Value,"")
        SetSearchParams(SearchParams)
    }

    return(
        <>
            {Value && 
                <But type={`${Name?Name:""}`}>
                    {Value}
                    <DivCloes ><HiOutlineXMark size={"20px"} onClick={() => handelDelet(Name)} /></DivCloes>
                </But>
            }
        </>
    )
}

export default BtuProductCategories