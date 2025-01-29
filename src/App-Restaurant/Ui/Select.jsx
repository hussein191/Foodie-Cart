/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom"
import styled from "styled-components"

const BoxSelect = styled.select`
    border:1px solid red;
    outline: none;
    border:1px solid rgba(102,102,102,0.3);
    padding:4px;
    border-radius: 4px;
    cursor: pointer;
`

function Select({Values,Name}){
    const [SearchParams,SetSearchParams] = useSearchParams()

    function handelValue(value){
        SearchParams.set(Name,value)
        SetSearchParams(SearchParams)
    }

    return(
        <BoxSelect value={SearchParams.get(Name)||""} onChange={(e) => handelValue(e.target.value)}>
            {Values.map((e,i) => <option key={i}>{e}</option>)}
        </BoxSelect>
    )
}

export default Select