/* eslint-disable react/prop-types */
import styled from "styled-components"

import { H2 } from "../Style/Styley"

const DivApp = styled.div`
    border:1px solid rgba(102,102,102,0.3);
    border-radius: 4px;
    padding:10px;
    margin-top: 12px;
`
const DivTitel = styled.div`
    display:flex;
    justify-content: space-between;
    margin-bottom:30px;
`
const DivCenter = styled.div`
    display: flex;
    align-items: center;
    column-gap:12px;
    ${(prop) => prop.type === "gap-3px" &&`
        column-gap:3px;
    `}
`
const Img = styled.img`
    width:40px;
    height:40px;
    border-radius: 50%;
`
const P = styled.p`
    color:#666;
    font-size: 18px;
    margin: 0px;
`

function BoxReview({Review}){
    const Style = {width:"15px",height:"15px"}
    const {ImageUser,NameUser,Data,CountReview,Clarification} = Review
    
    return(
        <DivApp>
            <DivTitel>
                <DivCenter>
                    <Img src={ImageUser} alt={NameUser}/>
                    <div>
                        <H2 type="black">{NameUser}</H2>
                        <P>{Data}</P>
                    </div>
                </DivCenter>
                <DivCenter type="gap-3px">
                    {
                        Array.from({length:5},(_,i) => 
                            CountReview >= i+1 ? <svg style={Style} key={i}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="star"><path fill={"#fcc419"}d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68a1,1,0,0,0,.4,1,1,1,0,0,0,1.05.07L12,18.76l5.1,2.68a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.89l.72,4.19-3.76-2a1,1,0,0,0-.94,0l-3.76,2,.72-4.19a1,1,0,0,0-.29-.89l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"></path></svg> 
                            : <svg style={Style} key={i}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="star"><path fill={"#000"}d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68a1,1,0,0,0,.4,1,1,1,0,0,0,1.05.07L12,18.76l5.1,2.68a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.89l.72,4.19-3.76-2a1,1,0,0,0-.94,0l-3.76,2,.72-4.19a1,1,0,0,0-.29-.89l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"></path></svg>
                        )
                    }
                    <P>{`(${CountReview})`}</P>
                </DivCenter>
            </DivTitel>
            <H2>{Clarification}</H2>
        </DivApp>
    )
}
export default BoxReview