import styled from "styled-components"

import { useDispatch, useSelector } from "react-redux"
import BoxtemCart from "../Ui/BoxtemCart"
import InfoCart from "../Ui/InfoCart"
import Spiner from "../Ui/Spiner"
import TitelPAge from "../Ui/TitelPage"
import { ClearCart } from "../Redux/CartSlice"

const DivApp = styled.div`
    display:flex;
    column-gap:12px;
    margin-top: 10px;
`
const DivItems = styled.div`
    width:70%;
`


function ShoppinCart(){
    const Items = useSelector((state) => state.Cart.ShopingCart)
    const Dispatch = useDispatch()
    return(
        <>
            {!Items.length ? <Spiner>Not Found!</Spiner>:
                <> 
                    <TitelPAge Name="Favorites Item" onclick={() => Dispatch(ClearCart()) } />
                    <DivApp>
                        <DivItems>
                            {Items.map(e => <BoxtemCart key={e.id} Item={e}/>)}
                        </DivItems>
                        <InfoCart />
                    </DivApp>
                </>
            }
        </>
    )
}

export default ShoppinCart