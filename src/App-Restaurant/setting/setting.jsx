import styled from "styled-components"

import BoxModuleUserDelet from "../Ui/BoxModuleUserDelet"
import UseGetUser from "../User/UseGetUser"
import BoxInfoUser from "../Ui/BoxInfoUser"
import BoxMap from "../Ui/BoxMap"
import Spiner from "../Ui/Spiner"

const DivPage = styled.div`
    height:80vh;
    display:flex;
    justify-content: center;
    align-items: center;
`
const Div = styled.div`
    width:40%;
    border-radius: 4px;
    background-color: #FFFF;
    box-shadow: 0 35px 35px -15px rgba(0,0,0,0.3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap:10px;
    padding:11px;
`
const Img = styled.img`
    width:70px;
    height:70px;
    border-radius: 50%;
    outline: 2px solid #84b74e;
    padding:3px;
`

function Setting(){
    const {user,isLoading} = UseGetUser()
    const {Name,email,imageUser,adress} = user? user.user.user_metadata :{}
    const {phone} = user ?  user.user : {}
    
    return(
        <>
            {
                isLoading? <Spiner>Lodding...</Spiner> :
                <DivPage>
                    <Div>
                        <Img src={imageUser} alt="ImageUser" />
                        <BoxInfoUser Name="Name" Value={Name} />
                        <BoxInfoUser Name="Email" Value={email} />
                        <BoxInfoUser Name="Phone" Value={phone} />
                        <BoxMap Location={adress}/>
                        <BoxModuleUserDelet />
                    </Div>
                </DivPage>
            }
        </>
    )
}

export default Setting