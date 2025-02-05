import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import toast from 'react-hot-toast';
import { useState } from "react"

import { ClearCart } from "../Redux/CartSlice"
import UseAddOrder from "../Hoocs/UseAddOrder"
import UseGetUser from "../User/UseGetUser"
import { Button } from "../Style/Styley"
import BoxMap from "./BoxMap"
import UseAddOrderItem from "../Hoocs/UseAddOrderItem";

const DivINfo = styled.div`
    display: flex;
    flex-direction: column;
    row-gap:7px;
`
const InputInfo = styled.input`
    width:200px;
    height:35px;
    border:1px solid rgba(102,102,102,0.3);
    border-radius: 4px;
    outline: none;
    transition: 0.3s ease;
    padding-left:4px;
    &:hover{
        border:1px solid  #84b74e;
    }
`

function BoxInfoOrder(){
    const Products = useSelector((state) => state?.Cart?.ShopingCart || [])
    const {AddOrder,isLoading:LoaddingAdd} = UseAddOrder()
    const {AddOrderItem} = UseAddOrderItem()
    const [NameUser,SetName] = useState("")
    const [PhoneUser,SetPhone] = useState("")
    const {user,isLoading} = UseGetUser()
    const Dispatch = useDispatch()

    if(isLoading || !user?.user?.user_metadata) return null
    const {Name,Phone,adress} = user.user.user_metadata

    function handelAddOrder(){
        const NewOrder = {
            UserID : user.user.id,
            OrderState:"Processing",
            Paid:"Not Paid",
            NameUser:NameUser,
            Address:adress,
            Phone:PhoneUser,
            Data:new Date().getFullYear() + "-" + new Date().getMonth()+1 + "-" + new Date().getDate()
        }
        AddOrder(NewOrder,{onSettled:(orderID) => {
            Products.forEach(product => {
                AddOrderItem({
                    OrderID:orderID.id,
                    ProductID:product.id,
                    quantity:product.CountItem,
                })
            });
            toast.success("Order is done")
        }})
            Dispatch(ClearCart())
    }

    return(
        <DivINfo>
            <InputInfo defaultValue={Name} value={Name} onChange={(e) => SetName(e.target.value) } placeholder="Enter your Name..."/>
            <InputInfo defaultValue={Phone} value={Phone} onChange={(e) => SetPhone(e.target.value) } placeholder="Enter your Phone number.."/>
            <BoxMap Location={adress}/>
            <Button disabled={LoaddingAdd} onClick={handelAddOrder} type="Order">pay</Button>
        </DivINfo>
    )
}

export default BoxInfoOrder