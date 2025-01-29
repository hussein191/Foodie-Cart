import toast from 'react-hot-toast';
import {useForm } from "react-hook-form"
import styled  from "styled-components"
import { Link } from "react-router-dom"

import { Button, DivApp, H2, P,Form, Div } from "../Style/Styley"
import UseSingUser from "./UseSingUser"
import BoxInput from "../Ui/BoxInput"
import BoxMap from '../Ui/BoxMap';
import { useState } from "react"


const DivBody = styled.div`
    display:flex;
    gap:5px 5px;
    flex-wrap: wrap;
`
const DivInput = styled.div`
    width:47%;
    padding:4px;
`
const DivLocation = styled.div`
    padding-top:5px;
    display:flex;
    flex-direction: column;
    row-gap:12px;
`

function Singin(){
    const [Location,SetLocation] = useState()
    const {Singin,isLoading} = UseSingUser()
    const {handleSubmit,register,formState} = useForm()
    const {errors} = formState
    

    function handelLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                (postion) => {
                    SetLocation([postion.coords.latitude,postion.coords.longitude])
                }
            )
        }
    }

    function OnSubmit(data){
        if(!Location){
            toast.error("Add Your Address!")
        }else{
            Singin({...data,Adress:Location})
        }
    }

    return(
        <DivApp>
            <Form onSubmit={handleSubmit(OnSubmit)}>
                <Div>
                    <H2 type="Size35">Singin</H2>
                </Div>
                <DivBody>
                    <DivInput>
                        <BoxInput Name="Name" Type="text" register={register} errors={errors}  />
                    </DivInput>
                    <DivInput>
                        <BoxInput Name="Email" Type="email" register={register} errors={errors}  />
                    </DivInput>
                    <DivInput>
                        <BoxInput Name="Phone" Type="tel" register={register} errors={errors}  />
                    </DivInput>
                    <DivInput>
                        <BoxInput Name="Password" Type="password" register={register} errors={errors}  />
                    </DivInput>
                </DivBody>
                <DivLocation>
                    <Button type="button"  onClick={() => handelLocation()} >Add Address</Button>
                    {Location && <BoxMap Location={Location}/>}
                </DivLocation>
                    <P>Do you have an account?<Link to="/Login">Login</Link></P>
                <Div>
                    <Button disabled={isLoading} type="major">Singin</Button>
                </Div>
            </Form>
        </DivApp>
    )
}

export default Singin