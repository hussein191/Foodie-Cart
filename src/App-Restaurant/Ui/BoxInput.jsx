/* eslint-disable react/prop-types */
import styled from "styled-components"

import { H2, Span } from "../Style/Styley"

const Input = styled.input`
    height:35px;
    border:1px solid rgba(102,102,102,0.3);
    outline:none;
    width:99%;
    margin-top: 10px;
`

function BoxInput({Name,Type,register,errors}){
    return(
        <>
            <H2>{Name} :</H2>
            {errors?.Name?.message && <Span>{errors?.Name?.message}</Span>}
            <Input type={Type} placeholder={`Enter your ${Name}`} {...register(Name,{required:"This file is imported"})} />
        </>
    )
}

export default BoxInput