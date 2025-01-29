import {useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import styled from "styled-components"

import { Button, Div, DivApp,Form, H2, P } from "../Style/Styley"
import UseLoginUser from "./UseLoginUser"
import BoxInput from "../Ui/BoxInput"


const DivInput = styled.div`
    width:100%;
`

function Login(){
    const {Login,isLoading} = UseLoginUser()
    const {handleSubmit,register,formState} = useForm()
    const {errors} = formState
    
    function OnSubmit(data){
        Login(data)
    }

    return(
        <DivApp>
            <Form type="Login" onSubmit={handleSubmit(OnSubmit)}>
                <Div>
                    <H2 type="Size35">Login</H2>
                </Div>
                <DivInput>
                    <BoxInput Name="Email" Type="email" register={register} errors={errors} />
                </DivInput>
                <DivInput>
                    <BoxInput Name="Password" Type="password" register={register} errors={errors} />
                </DivInput>
                <P>Do you not have an account?<Link to="/Singin">Singin</Link></P>
                <Div>
                    <Button disabled={isLoading} type="major">Singin</Button>
                </Div>
            </Form>
        </DivApp>
    )
}

export default Login