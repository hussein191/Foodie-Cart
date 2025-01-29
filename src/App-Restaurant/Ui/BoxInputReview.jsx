import { useParams } from "react-router-dom"
import styled from "styled-components"
import { useState } from "react"


import UseAddReview from "../Hoocs/UseAddReview"
import UseGetUser from "../User/UseGetUser"
import { Button } from "../Style/Styley"



const DivApp = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`
const DivIcon = styled.div`
    display: flex;
    align-items: center;
    column-gap: 6px;
`
const InputReview = styled.textarea`
    height:75px;
    border:1px solid rgba(102,102,102,0.3);
    outline:none;
    padding:7px;
    border-radius: 3px;
    color:#666;
    margin-top: 15px;
    font-size:17px;
    font-weight: 450;
`
const DivBut = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`
const P = styled.p`
    color:#666;
    font-size:18px;
`

function BoxInputReview(){
    const Style = {width:"30px",height:"30px",cursor:"pointer"}
    const [Clarification,SetClarification] = useState("")
    const [CountReview,SetCountReview] = useState(1)
    const {AddReview,isLoading} = UseAddReview()
    const {IDProduct} = useParams()
    const {user} = UseGetUser()
    const {Name,imageUser} = user.user.user_metadata

    function OnSubmit(e){
        e.preventDefault()
        const NewReview = {
            id:Date.now(),
            CountReview:CountReview,
            Clarification:Clarification,
            IDProduct:IDProduct,
            ImageUser:imageUser,
            NameUser:Name,
            Data:new Date().getDate() +"/" + new Date().getMonth()+1 + "/" + new Date().getFullYear(),
        }
        AddReview(NewReview,{onSettled:() => {
                SetCountReview(1);
                SetClarification(" ");
        }})
    }

    return(
        <DivApp onSubmit={(e) => OnSubmit(e)}>
            <DivIcon>
                {Array.from({length:5},(_,i) => 
                    CountReview >= i+1 ? <svg onClick={() => SetCountReview(i+1)} style={Style} key={i}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="star"><path fill={"#fcc419"}d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68a1,1,0,0,0,.4,1,1,1,0,0,0,1.05.07L12,18.76l5.1,2.68a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.89l.72,4.19-3.76-2a1,1,0,0,0-.94,0l-3.76,2,.72-4.19a1,1,0,0,0-.29-.89l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"></path></svg> 
                    : <svg onClick={() => SetCountReview(i+1)} style={Style} key={i}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="star"><path fill={"#000"}d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68a1,1,0,0,0,.4,1,1,1,0,0,0,1.05.07L12,18.76l5.1,2.68a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.89l.72,4.19-3.76-2a1,1,0,0,0-.94,0l-3.76,2,.72-4.19a1,1,0,0,0-.29-.89l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"></path></svg>
                )}
                <P>{`(${CountReview})`}</P>
            </DivIcon>
            <InputReview value={Clarification} onChange={(e) => SetClarification(e.target.value)} placeholder="Enter your review..."/>
            <DivBut>
                <Button disabled={isLoading?true:false} type="major">Create Review</Button>
            </DivBut>
        </DivApp>
    )
}

export default BoxInputReview