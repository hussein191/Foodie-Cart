import { HiArrowLeft } from "react-icons/hi2";
import { useSelector } from "react-redux"
import styled from "styled-components"
import BoxProductOrder from "../Ui/BoxProudectOrder"
import { H2, P } from "../Style/Styley"
import { useNavigate } from "react-router-dom";
import BoxInfoOrder from "../Ui/BoxInfoOrder";


const DivPage = styled.div`
    width:100%;
    height:100vh;
    position: absolute;
    top:0;
    left:0;
    display:flex;
    justify-content: center;
    align-items: center;
    column-gap: 7px;
`
const DivMin = styled.main`
    width:45%;
    padding:15px;
    border-radius: 5px;
    background-color: #FFFF;
    box-shadow: 0 35px 35px -15px rgba(0,0,0,0.3);
`
const DivTitelOrder = styled.div`
    margin-bottom: 22px;
    display: flex;
    column-gap: 5px;
`
const Button = styled.button`
    width:30px;
    height:30px;
    color:#666;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border:none;
`



function Order(){
    const Navigate = useNavigate()
    const Products = useSelector((state) => state.Cart.ShopingCart)
    const totlePrice = Products.reduce((a,b) => a + b.TotalPrice,0)
    return(
        <DivPage>
            <DivMin>
                <DivTitelOrder>
                    <Button>
                        <HiArrowLeft onClick={() => Navigate(-1)} size={"23px"} cursor={"pointer"} />
                    </Button>
                    <P>Food-app-store</P>
                </DivTitelOrder>
                <div>
                    <P>Pay-food-app-store</P>
                    <H2 type="Size35">${totlePrice}</H2>
                </div>
                {Products.map(e => <BoxProductOrder key={e.id} Product={e}/>)}
            </DivMin>
            <DivMin>
                <BoxInfoOrder />
            </DivMin>
        </DivPage>
    )
}

export default Order