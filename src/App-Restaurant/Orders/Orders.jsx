/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components"

import UseGetOrders from "../Hoocs/UseGetOrders"
import BoxOrderUser from "../Ui/BoxOrderUser"
import UseGetUser from "../User/UseGetUser"
import BoxPages from "../Ui/BoxPages"
import { H2 } from "../Style/Styley"
import Select from "../Ui/Select"
import Spiner from "../Ui/Spiner"


const DivTitel = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin:7px;
`
const BoxFilter = styled.div`
    display: flex;
    justify-content: flex-end;
`
const DivFilter = styled.div`
    display:flex;
    align-items: center;
    column-gap: 7px;
`

function Orders(){
    const  {user,isLoading} = UseGetUser()
    if(isLoading) return null
    const userId = user.user.id || null;
    const {Orders,count,isLoading:LoaddingOrders} = UseGetOrders(userId)
    
    return(
        <>
            <BoxFilter>
                <DivFilter>
                    <Select Values={["Paid","Not Paid"]} Name="Paid" />
                    <Select Values={["Processing","In preparation","Delivered"]} Name="OrderStatus" />
                </DivFilter>
            </BoxFilter>
            {LoaddingOrders ? <Spiner>Lodding..</Spiner>:
                !Orders.length ? <Spiner>Not Found!</Spiner>:
                <>
                    <DivTitel>
                        <H2>My Orders ({count})</H2>
                    </DivTitel>
                    <div>
                        {Orders.map(e => <BoxOrderUser key={e.id} Order={e} />)}
                    </div>
                </>
            }
            <BoxPages count={count} />
        </>
    )
}

export default Orders