/* eslint-disable react/prop-types */
import styled from "styled-components"

import { useSearchParams } from "react-router-dom"
import UseGetItems from "../Hoocs/UseGetItems"
import { H2, P } from "../Style/Styley"

const DivNavBar = styled.div`
    margin: 0px;
    margin-bottom: 6px;
    margin-top: 10px;
    padding-bottom:12px;
    border-bottom:1px solid rgba(102,102,102,0.4);
`

function BoxNavBarMenu({Name,Value,FnApi,Value2=""}){
    const {data,isLoading} = UseGetItems(FnApi,Name)
    const [SearchParams,SetSearchParams] = useSearchParams()
    if(isLoading) return  null

    function handelNavBar(value){
        SearchParams.set(Name,value)
        SetSearchParams(SearchParams)
    }
    
    return(
        <DivNavBar>
            <H2>{Name}</H2>
            {Value2 ?data.map((e,i) => <P key={i} onClick={() =>handelNavBar(e[Value2])}>{`${e[Value]}(${e[Value2]})`}</P>)
                : data.map((ele,i) => <P key={i} onClick={() =>handelNavBar(ele[Value])}>{ele[Value]}</P> )
            }
        </DivNavBar>
    )
}

export default BoxNavBarMenu